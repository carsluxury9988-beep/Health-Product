export async function readJson(request: Request, maxBytes = 12_000): Promise<unknown> {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    throw new RequestInputError(415, "Send this form as JSON.");
  }

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > maxBytes) throw new RequestInputError(413, "This form is too large.");

  const reader = request.body?.getReader();
  if (!reader) throw new RequestInputError(400, "The form data could not be read.");

  const chunks: Uint8Array[] = [];
  let bytesRead = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytesRead += value.byteLength;
      if (bytesRead > maxBytes) {
        await reader.cancel();
        throw new RequestInputError(413, "This form is too large.");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(bytesRead);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  const text = new TextDecoder().decode(bytes);

  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new RequestInputError(400, "The form data could not be read.");
  }
}

export class RequestInputError extends Error {
  constructor(readonly status: number, message: string) {
    super(message);
    this.name = "RequestInputError";
  }
}
