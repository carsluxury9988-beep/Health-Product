import { NextResponse } from "next/server";
import { EmailNotConfiguredError, formatOrderNotification, orderNotificationEmail, sendNotification } from "@/lib/email";
import { parseOrderInput } from "@/lib/forms";
import { readJson, RequestInputError } from "@/lib/request";
import { allowRequest, requestAddress, sameOrigin } from "@/lib/rate-limit";
import { store } from "@/config/store";
import { getMessages, type Locale } from "@/i18n";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let locale: Locale = request.headers.get("x-site-locale") === "ms" ? "ms" : "en";
  let body: unknown;

  if (!sameOrigin(request)) {
    const t = getMessages(locale).order.errors;
    return NextResponse.json({ error: t.origin }, { status: 403 });
  }

  const address = requestAddress(request);
  if (!allowRequest(`order:${address}`, 4, 10 * 60 * 1000)) {
    return NextResponse.json({ error: getMessages(locale).order.errors.rate }, { status: 429 });
  }

  try {
    body = await readJson(request);
    if (body && typeof body === "object" && "locale" in body && body.locale === "ms") locale = "ms";
  } catch (error) {
    if (error instanceof RequestInputError) {
      return NextResponse.json({ error: getMessages(locale).order.errors.read }, { status: error.status });
    }
    return NextResponse.json({ error: getMessages(locale).order.errors.read }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: getMessages(locale).order.errors.invalid }, { status: 400 });
  }
  if ("locale" in body && body.locale === "ms") locale = "ms";
  const t = getMessages(locale);
  const parsed = parseOrderInput(body, locale);
  if ("error" in parsed) return NextResponse.json({ error: parsed.error }, { status: 400 });

  const { product, quantity, name, phone, email, address: deliveryAddress, city, stateLabel, notes } = parsed.value;
  const total = product.price * quantity + store.deliveryFee;
  const reference = crypto.randomUUID().replace(/-/g, "").slice(0, 12).toUpperCase();
  const details = formatOrderNotification({
    reference,
    name,
    phone,
    email,
    address: deliveryAddress,
    city,
    state: stateLabel,
    productName: product.name,
    quantity,
    unitPrice: product.price,
    deliveryFee: store.deliveryFee,
    total,
    notes,
  });

  try {
    await sendNotification({
      to: orderNotificationEmail,
      subject: `${locale === "ms" ? "Permintaan pesanan baharu" : "New order request"} ${reference} — ${product.name}`,
      text: details,
      ...(email ? { replyTo: email } : {}),
    });
  } catch (error) {
    if (error instanceof EmailNotConfiguredError) {
      return NextResponse.json(
        { error: t.order.errors.notConfigured },
        { status: 503 },
      );
    }
    console.error("Order notification delivery failed.", error);
    return NextResponse.json(
      { error: t.order.errors.send },
      { status: 502 },
    );
  }

  return NextResponse.json({ reference, total, unitPrice: product.price, deliveryFee: store.deliveryFee, stateLabel }, { status: 201 });
}
