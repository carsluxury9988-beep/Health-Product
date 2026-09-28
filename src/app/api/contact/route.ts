import { NextResponse } from "next/server";
import { products } from "@/config/products";
import { getMessages, type Locale } from "@/i18n";
import { EmailNotConfiguredError, sendNotification } from "@/lib/email";
import { parseContactInput } from "@/lib/forms";
import { readJson, RequestInputError } from "@/lib/request";
import { allowRequest, requestAddress, sameOrigin } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let locale: Locale = request.headers.get("x-site-locale") === "ms" ? "ms" : "en";
  let body: unknown;
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: getMessages(locale).contact.errors.origin }, { status: 403 });
  }

  const address = requestAddress(request);
  if (!allowRequest(`contact:${address}`, 6, 10 * 60 * 1000)) {
    return NextResponse.json({ error: getMessages(locale).contact.errors.rate }, { status: 429 });
  }

  try {
    body = await readJson(request);
    if (body && typeof body === "object" && "locale" in body && body.locale === "ms") locale = "ms";
  } catch (error) {
    if (error instanceof RequestInputError) {
      return NextResponse.json({ error: getMessages(locale).contact.errors.read }, { status: error.status });
    }
    return NextResponse.json({ error: getMessages(locale).contact.errors.read }, { status: 400 });
  }

  const t = getMessages(locale);
  const parsed = parseContactInput(body, locale);
  if ("error" in parsed) return NextResponse.json({ error: parsed.error }, { status: 400 });

  const { name, email, phone, product, message } = parsed.value;
  const productName = products.find((item) => item.slug === product)?.name ?? "Not specified";
  const details = [
    locale === "ms" ? "Mesej baharu daripada laman web" : "New website contact message",
    `${t.contact.name}: ${name}`,
    `${t.contact.email}: ${email}`,
    `${t.contact.phone}: ${phone || (locale === "ms" ? "Tidak diberikan" : "Not provided")}`,
    `${t.contact.product}: ${productName}`,
    "",
    `${t.contact.message}:`,
    message,
  ].join("\n");

  try {
    await sendNotification({
      subject: `${locale === "ms" ? "Pertanyaan laman web" : "Website enquiry"} — ${name}`,
      text: details,
      replyTo: email,
    });
  } catch (error) {
    if (error instanceof EmailNotConfiguredError) {
      return NextResponse.json(
        { error: t.contact.errors.notConfigured },
        { status: 503 },
      );
    }
    console.error("Contact notification delivery failed.", error);
    return NextResponse.json(
      { error: t.contact.errors.fallback },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: t.contact.sentTitle }, { status: 201 });
}
