import type { Locale } from "@/i18n";

export type TopicKey = "relationships" | "mens-health" | "ingredients" | "buying";

type TopicCopy = { slug: string; label: string; title: string; seoTitle: string; description: string; lead: string; /** Longer explanatory text shown below the article list. */ intro?: string[] };

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
      intro: ["Artikel dalam kategori ini menjawab soalan harian dalam rumah tangga: cara berkomunikasi dengan pasangan, menunjukkan penghargaan, memujuk selepas bergaduh dan mengurus konflik tanpa merosakkan hubungan. Setiap jawapan bermula dengan jawapan ringkas, diikuti langkah praktikal yang boleh dicuba.", "Jika masalah berlarutan, rujukan profesional disenaraikan dalam artikel, termasuk perkhidmatan kaunseling perkahwinan dan keluarga LPPKN serta Talian HEAL 15555 (KKM) untuk sokongan emosi. Kandungan ini ialah bacaan umum dan bukan pengganti kaunseling."],
    },
    en: {
      slug: "relationships",
      label: "Relationships",
      title: "Relationships & marriage",
      seoTitle: "Marriage & Relationship Questions Answered",
      description: "Practical answers on making your wife happy, communication, romantic ideas, making up after an argument and handling conflict in marriage.",
      lead: "Questions husbands and wives often ask — about communication, affection and conflict — with practical answers that respect family values.",
      intro: ["Articles in this category answer everyday questions in a marriage: how to communicate with your spouse, show appreciation, make up after an argument and handle conflict without damaging the relationship. Each starts with a short answer, followed by practical steps you can try.", "If problems persist, the articles list professional help, including LPPKN marriage and family counselling and the MOH HEAL 15555 line for emotional support. This content is general reading and not a substitute for counselling."],
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
      intro: ["Kategori ini merangkumi tabiat harian yang mempengaruhi tenaga dan kesejahteraan: tidur, stres, senaman, berat badan, merokok dan pemeriksaan kesihatan berkala. Jawapan merujuk sumber rasmi seperti Kementerian Kesihatan Malaysia (KKM), WHO dan NHS, dan sumber disenaraikan di hujung setiap artikel.", "Setiap artikel mempunyai bahagian bila perlu berjumpa doktor. Jika anda mempunyai simptom yang berterusan atau penyakit kronik, dapatkan nasihat di klinik kesihatan atau klinik swasta."],
    },
    en: {
      slug: "mens-health",
      label: "Men's Health",
      title: "Men's health & energy",
      seoTitle: "Men's Health Questions Answered",
      description: "Sleep, stress, tiredness, exercise, weight, quitting smoking and health screening — answers based on MOH Malaysia, WHO and NHS sources.",
      lead: "Answers about sleep, stress, tiredness, fitness and health checks for men in Malaysia, with sources. Not a substitute for a doctor's advice.",
      intro: ["This category covers daily habits that affect energy and wellbeing: sleep, stress, exercise, weight, smoking and regular health screening. Answers draw on official sources such as the Ministry of Health Malaysia (MOH), WHO and the NHS, listed at the end of each article.", "Every article has a section on when to see a doctor. If you have ongoing symptoms or a chronic condition, get advice at a government or private clinic."],
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
      intro: ["Artikel di sini menerangkan bahan yang sering ditemui dalam makanan dan produk tradisional di Malaysia, seperti tongkat ali, ginseng, maca, madu, kurma dan habbatus sauda: apa bahan itu, cara ia biasa digunakan dan perkara keselamatan yang perlu diketahui. Kami tidak membuat dakwaan perubatan tentang mana-mana bahan.", "Jika anda membeli bahan ini dalam bentuk kapsul, minyak atau serbuk, semak nombor MAL di carian produk NPRA (QUEST3+) dan label hologram FarmaTag. Rujuk doktor atau ahli farmasi jika anda mengambil ubat lain, hamil atau mempunyai penyakit kronik."],
    },
    en: {
      slug: "natural-ingredients",
      label: "Natural Ingredients",
      title: "Natural ingredients",
      seoTitle: "Tongkat Ali, Ginseng, Honey & Dates: Facts",
      description: "What research says about tongkat ali, ginseng, maca, honey, dates and black seed — studied benefits, limits of the evidence and safety points.",
      lead: "Ingredients common in Malaysian kitchens and supplement shelves, explained from the research — including what is not proven and who should be careful.",
      intro: ["Articles here explain ingredients often found in food and traditional products in Malaysia, such as tongkat ali, ginseng, maca, honey, dates and black seed: what they are, how they are commonly used and the safety points to know. We make no medical claims about any ingredient.", "If you buy these as capsules, oil or powder, check the MAL number in NPRA's product search (QUEST3+) and the FarmaTag hologram label. Talk to a doctor or pharmacist if you take other medicines, are pregnant or have a chronic condition."],
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
      intro: ["Panduan dalam kategori ini membantu anda membeli produk kesihatan dengan lebih yakin: cara menyemak pendaftaran KKM, membeli dalam talian dengan selamat, memahami bayaran semasa penghantaran (COD) dan mengenal pasti tanda-tanda penipuan.", "Langkah utama yang diulang dalam panduan ini ialah semak nombor MAL di carian produk NPRA, periksa label FarmaTag, dan buat aduan kepada Bahagian Penguatkuasaan Farmasi KKM jika anda menjumpai produk yang disyaki tidak berdaftar."],
    },
    en: {
      slug: "buying-guides",
      label: "Buying Guides",
      title: "Buying guides",
      seoTitle: "Guides to Buying Health Products",
      description: "How to check KKM MAL numbers, choose a supplement safely, buy online with privacy and understand cash on delivery (COD).",
      lead: "What to know before buying a health product: KKM registration, labels, privacy, cash on delivery (COD) and the signs of a scam.",
      intro: ["Guides in this category help you buy health products with more confidence: how to check KKM registration, shop online safely, understand cash on delivery (COD) and spot signs of a scam.", "The key steps repeated across these guides are to check the MAL number in NPRA's product search, inspect the FarmaTag label, and complain to the MOH Pharmacy Enforcement Division if you find a product you suspect is unregistered."],
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
