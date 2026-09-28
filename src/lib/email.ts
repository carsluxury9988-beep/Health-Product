import nodemailer from "nodemailer";
import { formatPrice } from "@/lib/format";

type Message = {
  subject: string;
  text: string;
  replyTo?: string;
  to?: string;
};

export const orderNotificationEmail = "producth006@gmail.com";

export function formatOrderNotification(details: {
  reference: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  deliveryFee: number;
  total: number;
  notes: string;
}) {
  return [
    `Customer name: ${details.name}`,
    `Phone number: ${details.phone}`,
    `Email address: ${details.email || "Not provided"}`,
    `Full delivery address: ${details.address}`,
    `City: ${details.city}`,
    `State: ${details.state}`,
    "",
    `Product name: ${details.productName}`,
    `Quantity: ${details.quantity}`,
    `Unit price: ${formatPrice(details.unitPrice)}`,
    `Delivery: ${details.deliveryFee === 0 ? "FREE" : formatPrice(details.deliveryFee)}`,
    "Payment method: Cash on Delivery",
    `Total order amount: ${formatPrice(details.total)}`,
    `Customer notes: ${details.notes || "None"}`,
    "",
    `Order request reference: ${details.reference}`,
    "This order request has been received. Confirm product availability and delivery details with the customer before dispatch.",
  ].join("\n");
}

export class EmailNotConfiguredError extends Error {
  constructor() {
    super("Email notifications have not been configured.");
    this.name = "EmailNotConfiguredError";
  }
}

export async function sendNotification(message: Message) {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT);
  const user = process.env.EMAIL_USER;
  const password = process.env.EMAIL_PASSWORD;
  const from = process.env.EMAIL_FROM;
  const to = message.to ?? process.env.ORDER_NOTIFICATION_EMAIL;
  const secure = process.env.EMAIL_SECURE === "true";

  if (!host || !Number.isInteger(port) || port < 1 || !user || !password || !from || !to) {
    throw new EmailNotConfiguredError();
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass: password },
    disableFileAccess: true,
    disableUrlAccess: true,
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 30_000,
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: message.replyTo,
    subject: message.subject,
    text: message.text,
  });
}
