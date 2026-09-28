export function formatPrice(amount: number) {
  return `RM${amount.toFixed(0)}`;
}

export function safeText(value: unknown) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
