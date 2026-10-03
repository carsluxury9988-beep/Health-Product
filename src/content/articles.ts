import { checkKkm, foodsForStamina, tongkatAli } from "@/content/guides";
import { relationshipFaq } from "@/content/relationship-faq";
import type { Locale } from "@/i18n";

export type ArticleBlock = { heading: string; paragraphs: string[]; list?: string[] };
export type ArticleSource = { label: string; url: string };
export type ArticleQa = { q: string; a: string };

export type ArticleContent = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  lead: string;
  imageAlt: string;
  blocks: ArticleBlock[];
  qa?: ArticleQa[];
  sources?: ArticleSource[];
  disclaimer: string;
  readMinutes: number;
};

export type Article = {
  key: string;
  published: string;
  updated: string;
  image: { src: string; width: number; height: number };
  /** 1200×630 share image; defaults to the site OG image. */
  ogImage?: string;
  ms: ArticleContent;
  en: ArticleContent;
};

const happyMarriage: Article = {
  key: "happy-marriage",
  published: "2026-10-01",
  updated: "2026-10-03",
  image: { src: "/blog/couple-home.webp", width: 1440, height: 1080 },
  ms: {
    slug: "hubungan-bahagia",
    title: "Perkahwinan bahagia bermula dengan kehadiran, bukan janji iklan",
    seoTitle: "Perkahwinan Bahagia: Komunikasi & Jaga Diri",
    description: "Bacaan untuk suami isteri di Malaysia tentang komunikasi, keyakinan dan penjagaan diri dalam perkahwinan. Maklumat gaya hidup, bukan nasihat perubatan.",
    category: "Hubungan & gaya hidup",
    lead: "Bacaan untuk suami dan isteri di Malaysia yang mahu rumah tangga yang lebih tenang. Ini maklumat gaya hidup, bukan nasihat perubatan.",
    imageAlt: "Pasangan suami isteri duduk bersama",
    readMinutes: 5,
    blocks: [
      { heading: "Kenapa artikel ini ditulis", paragraphs: [
        "Kebanyakan pasangan tidak mahu syarahan. Mereka mahu rumah yang lebih lembut selepas hari yang panjang. Artikel ini untuk harapan yang senyap itu: suami yang mahu hadir, isteri yang mahu dirasai, dan perkahwinan yang masih ada ruang untuk bernafas.",
        "Kami menulis tentang kehidupan berumahtangga kerana itulah dunia pelanggan kami. Ini bukan klinik, dan tiada produk yang boleh menggantikan usaha dua orang dalam sebuah hubungan.",
      ] },
      { heading: "Hubungan bahagia dibina daripada rutin kecil", paragraphs: [
        "Perkahwinan yang tenang dibina daripada rutin kecil. Makan malam tanpa telefon. Tanya khabar selepas kerja. Jangan jadikan setiap perbualan sebagai ujian.",
        "Jika anda sentiasa penat, sukar tidur atau badan terasa berat untuk tempoh yang lama, itu isyarat untuk berehat dan berjumpa doktor — bukan untuk mempercayai janji dalam iklan.",
      ] },
      { heading: "Keyakinan lelaki dan rasa selamat isteri", paragraphs: [
        "Keyakinan yang sihat kelihatan seperti lelaki yang tidak perlu membuktikan diri. Isteri biasanya lebih tenang apabila suami menjaga diri: kebersihan, pakaian kemas, janji yang ditepati dan nada suara yang tidak kasar.",
        "Yang penting ialah tidak membawa rasa malu ke atas pasangan. Bercakap dengan lembut. Jika kedua-dua pihak tidak selesa, jangan paksa. Hubungan yang panjang hidup daripada rasa selamat, bukan tekanan.",
      ] },
      { heading: "Penjagaan diri asas", paragraphs: [
        "Lelaki yang menjaga asas kesihatan — makan seimbang, tidur cukup, bergerak setiap hari dan membuat pemeriksaan kesihatan berkala — biasanya lebih mudah hadir sepenuhnya dalam perkahwinan.",
        "Jika anda memilih untuk menggunakan mana-mana produk kesihatan, baca label, ikut arahan dan rujuk doktor atau ahli farmasi jika anda mempunyai masalah kesihatan atau sedang mengambil ubat.",
      ] },
      { heading: "Apabila badan memberi isyarat", paragraphs: [
        "Sakit yang berulang atau perubahan tiba-tiba pada badan ialah topik untuk klinik, bukan untuk laman kedai. Jangan gunakan artikel gaya hidup sebagai diagnosis.",
      ] },
    ],
    disclaimer: "Artikel ini untuk maklumat umum dan bukan nasihat perubatan.",
  },
  en: {
    slug: "happy-marriage",
    title: "A calmer marriage starts with presence, not a slogan",
    seoTitle: "A Happy Marriage: Communication & Self-Care",
    description: "Reading for couples in Malaysia about communication, confidence and self-care in marriage. Lifestyle information, not medical advice.",
    category: "Relationships & lifestyle",
    lead: "Written for couples in Malaysia who want a calmer home. Lifestyle reading only — not medical advice.",
    imageAlt: "A married couple sitting close together",
    readMinutes: 5,
    blocks: [
      { heading: "Why this article exists", paragraphs: [
        "Most couples are not looking for a lecture. They want a home that feels kinder at the end of a long day. This article is for that quieter hope: a husband who wants to show up, a wife who wants to feel met, and a marriage that still has room to breathe.",
        "We write about married life because that is the world our customers live in. This is not a clinic, and no product can replace the effort of two people in a relationship.",
      ] },
      { heading: "A happy marriage is built from small routines", paragraphs: [
        "Most lasting marriages are not dramatic. They are built from ordinary evenings: a meal without phones, asking how the day went, keeping a promise, lowering your voice.",
        "If you are tired all the time, sleep badly or feel heavy for a long period, that is a signal to rest and see a doctor — not to believe a promise in an advert.",
      ] },
      { heading: "A man's confidence and a wife's sense of safety", paragraphs: [
        "Healthy confidence looks like a man who does not need to prove himself. Wives are usually calmer when husbands look after themselves: hygiene, tidy clothes, promises kept and a gentle tone.",
        "What matters is not putting shame on your partner. Speak gently. If either of you is uncomfortable, do not push. Long relationships live on feeling safe, not on pressure.",
      ] },
      { heading: "Basic self-care", paragraphs: [
        "Men who look after the basics — balanced meals, enough sleep, daily movement and regular health check-ups — usually find it easier to be fully present in their marriage.",
        "If you choose to use any health product, read the label, follow the directions and speak to a doctor or pharmacist if you have a health condition or take medication.",
      ] },
      { heading: "When your body sends a signal", paragraphs: [
        "Recurring pain or sudden changes in your body are a topic for a clinic, not a shop page. Do not use a lifestyle article as a diagnosis.",
      ] },
    ],
    disclaimer: "This article is general information and not medical advice.",
  },
};

const relationshipQuestions: Article = {
  key: "relationship-questions",
  published: "2026-10-01",
  updated: "2026-10-03",
  image: { src: "/blog/couple-sunset.webp", width: 1168, height: 784 },
  ms: {
    slug: "20-soalan-hubungan",
    title: "20 soalan tentang hubungan suami isteri yang lebih tenang",
    seoTitle: "20 Soalan Hubungan Suami Isteri & Jawapannya",
    description: "Dua puluh soalan tentang hubungan sihat, kedekatan, komunikasi, tekanan kerja dan nilai keluarga — dengan jawapan ringkas. Bukan nasihat perubatan.",
    category: "Soal jawab rumah tangga",
    lead: "Tekan soalan untuk membaca jawapan. Bacaan gaya hidup untuk suami dan isteri di Malaysia, bukan nasihat doktor.",
    imageAlt: "Pasangan suami isteri duduk di pantai waktu senja",
    readMinutes: 8,
    blocks: [],
    qa: relationshipFaq.map((item) => ({ q: item.question, a: item.answer })),
    disclaimer: "Jawapan ini untuk maklumat umum dan bukan nasihat perubatan atau kaunseling.",
  },
  en: {
    slug: "20-relationship-questions",
    title: "20 questions about a calmer marriage",
    seoTitle: "20 Relationship Questions for Married Couples",
    description: "Twenty questions about healthy relationships, closeness, communication, work stress and family values — with short answers. Not medical advice.",
    category: "Marriage Q&A",
    lead: "Tap a question to read the answer. Lifestyle reading for couples in Malaysia, not a doctor's advice.",
    imageAlt: "A married couple sitting on a beach at sunset",
    readMinutes: 8,
    blocks: [],
    qa: relationshipFaq.map((item) => ({ q: item.questionEn, a: item.answerEn })),
    disclaimer: "These answers are general information, not medical or counselling advice.",
  },
};

export const articles: readonly Article[] = [checkKkm, tongkatAli, foodsForStamina, happyMarriage, relationshipQuestions];

export function articlePath(article: Article, locale: Locale) {
  return locale === "en" ? `/en/blog/${article.en.slug}` : `/blog/${article.ms.slug}`;
}

export function getArticle(slug: string, locale: Locale) {
  return articles.find((article) => article[locale].slug === slug);
}

export function sortedArticles() {
  // Newest first; same-day articles keep their registry order.
  return [...articles].sort((a, b) => b.published.localeCompare(a.published));
}
