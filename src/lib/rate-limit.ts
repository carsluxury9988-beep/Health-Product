type Entry = { count: number; resetsAt: number };

const buckets = new Map<string, Entry>();
const maxBuckets = 5000;

export function allowRequest(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetsAt <= now) {
    if (buckets.size >= maxBuckets) {
      for (const [bucketKey, entry] of buckets) {
        if (entry.resetsAt <= now) buckets.delete(bucketKey);
      }
      if (buckets.size >= maxBuckets) return false;
    }
    buckets.set(key, { count: 1, resetsAt: now + windowMs });
    return true;
  }
  if (current.count >= limit) return false;

  current.count += 1;
  if (buckets.size > 1000) {
    for (const [bucketKey, entry] of buckets) {
      if (entry.resetsAt <= now) buckets.delete(bucketKey);
    }
  }
  return true;
}

export function requestAddress(request: Request) {
  return request.headers.get("x-real-ip")?.trim()
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "unknown";
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}
