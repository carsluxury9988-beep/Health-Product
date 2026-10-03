import type { Locale } from "@/i18n";

export type TopicKey = "relationships" | "mens-health" | "ingredients" | "buying";

type TopicCopy = { slug: string; label: string; title: string; seoTitle: string; description: string; lead: string };

export type Topic = { key: TopicKey; ogImage: string; ms: TopicCopy; en: TopicCopy };

/** Blog categories. Order here is the order on the blog hub. */
export const topics: readonly Topic[] = [
  {
    key: "relationships",
    ogImage: "/og/topic-relationships.jpg",
    ms: {
      slug: "hubungan",
      label: "Hubungan",
      title: "Hubungan & rumah tangga",
      seoTitle: "Soal Jawab Hubungan Suami Isteri",
      description: "Jawapan praktikal tentang cara membahagiakan isteri, komunikasi, idea romantik, memujuk pasangan dan mengurus konflik dalam rumah tangga.",
      lead: "Soalan yang sering ditanya oleh suami dan isteri — tentang komunikasi, kasih sayang dan konflik — dengan jawapan yang praktikal dan menghormati nilai keluarga.",
    },
    en: {
      slug: "relationships",
      label: "Relationships",
      title: "Relationships & marriage",
      seoTitle: "Marriage & Relationship Questions Answered",
      description: "Practical answers on making your wife happy, communication, romantic ideas, making up after an argument and handling conflict in marriage.",
      lead: "Questions husbands and wives often ask — about communication, affection and conflict — with practical answers that respect family values.",
    },
  },
  {
    key: "mens-health",
    ogImage: "/og/topic-mens-health.jpg",
    ms: {
      slug: "kesihatan-lelaki",
      label: "Kesihatan Lelaki",
      title: "Kesihatan & tenaga lelaki",
      seoTitle: "Soal Jawab Kesihatan Lelaki",
      description: "Tidur, stres, rasa penat, senaman, berat badan, berhenti merokok dan pemeriksaan kesihatan — jawapan berdasarkan sumber KKM, WHO dan NHS.",
      lead: "Jawapan tentang tidur, stres, rasa penat, kecergasan dan pemeriksaan kesihatan untuk lelaki di Malaysia, dengan sumber rujukan. Bukan pengganti nasihat doktor.",
    },
    en: {
      slug: "mens-health",
      label: "Men's Health",
      title: "Men's health & energy",
      seoTitle: "Men's Health Questions Answered",
      description: "Sleep, stress, tiredness, exercise, weight, quitting smoking and health screening — answers based on MOH Malaysia, WHO and NHS sources.",
      lead: "Answers about sleep, stress, tiredness, fitness and health checks for men in Malaysia, with sources. Not a substitute for a doctor's advice.",
    },
  },
  {
    key: "ingredients",
    ogImage: "/og/topic-ingredients.jpg",
    ms: {
      slug: "bahan-semula-jadi",
      label: "Bahan Semula Jadi",
      title: "Bahan semula jadi",
      seoTitle: "Tongkat Ali, Ginseng, Madu & Kurma: Fakta",
      description: "Apa kata kajian tentang tongkat ali, ginseng, maca, madu, kurma dan habbatus sauda — kebaikan yang dikaji, had bukti dan langkah keselamatan.",
      lead: "Bahan yang biasa ditemui di dapur dan rak suplemen Malaysia, diterangkan berdasarkan kajian — termasuk apa yang belum terbukti dan siapa yang perlu berhati-hati.",
    },
    en: {
      slug: "natural-ingredients",
      label: "Natural Ingredients",
      title: "Natural ingredients",
      seoTitle: "Tongkat Ali, Ginseng, Honey & Dates: Facts",
      description: "What research says about tongkat ali, ginseng, maca, honey, dates and black seed — studied benefits, limits of the evidence and safety points.",
      lead: "Ingredients common in Malaysian kitchens and supplement shelves, explained from the research — including what is not proven and who should be careful.",
    },
  },
  {
    key: "buying",
    ogImage: "/og/topic-buying.jpg",
    ms: {
      slug: "panduan-membeli",
      label: "Panduan Membeli",
      title: "Panduan membeli",
      seoTitle: "Panduan Membeli Produk Kesihatan",
      description: "Cara semak nombor MAL KKM, memilih suplemen dengan selamat, membeli dalam talian dengan privasi dan memahami bayaran COD.",
      lead: "Perkara yang patut anda tahu sebelum membeli produk kesihatan: pendaftaran KKM, label, privasi, bayaran tunai semasa terima (COD) dan tanda penipuan.",
    },
    en: {
      slug: "buying-guides",
      label: "Buying Guides",
      title: "Buying guides",
      seoTitle: "Guides to Buying Health Products",
      description: "How to check KKM MAL numbers, choose a supplement safely, buy online with privacy and understand cash on delivery (COD).",
      lead: "What to know before buying a health product: KKM registration, labels, privacy, cash on delivery (COD) and the signs of a scam.",
    },
  },
];

export function getTopic(key: TopicKey) {
  const topic = topics.find((item) => item.key === key);
  if (!topic) throw new Error(`Unknown topic ${key}`);
  return topic;
}

export function topicBySlug(slug: string, locale: Locale) {
  return topics.find((item) => item[locale].slug === slug);
}

export function topicPath(topic: Topic, locale: Locale) {
  return locale === "en" ? `/en/blog/category/${topic.en.slug}` : `/blog/kategori/${topic.ms.slug}`;
}

export const questionIndexPaths = { ms: "/blog/indeks-soalan", en: "/en/blog/question-index" } as const;

export const blogUi = {
  ms: {
    hubTitle: "Blog & soal jawab",
    hubLead: "Jawapan ringkas kepada soalan sebenar tentang rumah tangga, kesihatan lelaki, bahan semula jadi dan cara membeli dengan selamat. Setiap artikel bermula dengan jawapan terus dan disertakan sumber rujukan.",
    browse: "Pilih topik",
    seeAll: "Lihat semua",
    articlesCount: (n: number) => `${n} artikel`,
    indexTitle: "Indeks soalan",
    indexSeoTitle: "Indeks Soalan: Semua Soal Jawab Blog",
    indexDescription: "Semua soalan yang dijawab di blog Lebih Yakin, disusun mengikut topik: hubungan, kesihatan lelaki, bahan semula jadi dan panduan membeli.",
    indexLead: "Cari soalan anda di bawah. Setiap pautan membawa anda terus ke jawapan dalam artikel berkaitan.",
    indexCta: "Lihat semua soalan dalam indeks",
    quickAnswer: "Jawapan ringkas",
    faqHeading: "Soalan lazim",
    relatedHeading: "Bacaan berkaitan",
    lastUpdated: "Dikemas kini",
    category: "Kategori",
    seeDoctor: "Bila perlu jumpa doktor",
  },
  en: {
    hubTitle: "Blog & answers",
    hubLead: "Short answers to real questions about marriage, men's health, natural ingredients and buying safely. Every article starts with a direct answer and lists its sources.",
    browse: "Browse topics",
    seeAll: "See all",
    articlesCount: (n: number) => `${n} article${n === 1 ? "" : "s"}`,
    indexTitle: "Question index",
    indexSeoTitle: "Question Index: Every Blog Answer",
    indexDescription: "Every question answered on the Lebih Yakin blog, grouped by topic: relationships, men's health, natural ingredients and buying guides.",
    indexLead: "Find your question below. Each link takes you straight to the answer in the related article.",
    indexCta: "See every question in the index",
    quickAnswer: "Short answer",
    faqHeading: "Frequently asked questions",
    relatedHeading: "Related reading",
    lastUpdated: "Updated",
    category: "Category",
    seeDoctor: "When to see a doctor",
  },
} as const;
