import type { Article, ArticleBlock, ArticleSource } from "@/content/articles";

/** Date the sources below were re-opened and checked against the text. */
export const EXPANSION_CHECKED = "2026-10-07";
const c = EXPANSION_CHECKED;

const S = {
  lppkn: { label: "MyGOV — Kaunseling keluarga (LPPKN)", url: "https://www.malaysia.gov.my/my/categories/institusi-keluarga/mengurus-keluarga/kaunseling-keluarga", checked: c },
  heal: { label: "Majlis Keselamatan Negara — Talian bantuan krisis kesihatan mental HEAL 15555 (KKM)", url: "https://www.mkn.gov.my/web/ms/2024/02/25/talian-bantuan-krisis-kesihatan-mental/", checked: c },
  mquit: { label: "JomQuit (KKM) — Perkhidmatan mQuit", url: "https://jomquit.my/perkhidmatan-mquit", checked: c },
  conserf: { label: "NPRA — Consumer Side Effect Reporting Form (ConSERF)", url: "https://npra.gov.my/index.php/en/consumers/reporting/reporting-side-effects-to-medicines-conserf-or-vaccines-aefi-2.html", checked: c },
  quest: { label: "NPRA — QUEST3+ Product Search", url: "https://quest3plus.bpfk.gov.my/pmo2/index.php", checked: c },
  farmatagNew: { label: "KKM (17 Dis 2025) — Pemakluman label keselamatan hologram FarmaTag versi baharu", url: "https://pharmacy.moh.gov.my/en/news/17-dec-2025/pemakluman-penggunaan-label-keselamatan-hologram-baharu-kaedah-pengesahan-ketulenan-label-produk.html", checked: c },
  complaint: { label: "Program Perkhidmatan Farmasi KKM — Cara membuat aduan produk tidak berdaftar", url: "https://pharmacy.moh.gov.my/ms/soalan-lazim/bagaimana-membuat-aduan-sekiranya-saya-terjumpa-produk-tidak-berdaftar.html", checked: c },
  mdg: { label: "Kementerian Kesihatan Malaysia / NCCFN — Malaysian Dietary Guidelines 2020", url: "https://hq.moh.gov.my/nutrition/wp-content/uploads/2024/03/latest-01.Buku-MDG-2020_12Mac2024.pdf", checked: c },
} satisfies Record<string, ArticleSource>;

type Expansion = { ms: ArticleBlock; en: ArticleBlock; sources: ArticleSource[] };

const expansions: Record<string, Expansion> = {
  "happy-marriage": {
    sources: [S.lppkn, S.heal],
    ms: {
      heading: "Bila perlu mendapatkan bantuan kaunselor perkahwinan?",
      paragraphs: ["Jika perbualan sering berakhir dengan pertengkaran yang sama, atau salah seorang mula menjauhkan diri, berjumpa kaunselor bukan tanda kegagalan. Ia cara untuk mendapat panduan daripada pihak yang berkecuali. LPPKN menawarkan dua jenis perkhidmatan yang berkaitan:"],
      list: [
        "Kaunseling perkahwinan — membantu suami isteri menangani isu seperti komunikasi, kewangan, konflik peranan dan kesetiaan.",
        "Kaunseling keluarga — menyokong hubungan antara ibu bapa dan anak, atau antara adik-beradik.",
      ],
      after: ["Jika tekanan emosi terasa terlalu berat, Talian HEAL 15555 (KKM) beroperasi setiap hari termasuk cuti umum, dari 8 pagi hingga 12 tengah malam. Dalam kecemasan, hubungi 999."],
    },
    en: {
      heading: "When should you get help from a marriage counsellor?",
      paragraphs: ["If conversations keep ending in the same argument, or one of you starts pulling away, seeing a counsellor is not a sign of failure. It is a way to get guidance from a neutral person. LPPKN offers two relevant services:"],
      list: [
        "Marriage counselling — helps husbands and wives deal with issues such as communication, finances, role conflict and fidelity.",
        "Family counselling — supports relationships between parents and children, or between siblings.",
      ],
      after: ["If emotional stress feels too heavy, the MOH HEAL 15555 line runs every day including public holidays, from 8am to midnight. In an emergency, call 999."],
    },
  },
  "always-tired": {
    sources: [S.conserf],
    ms: {
      heading: "Apa yang perlu dicatat sebelum berjumpa doktor tentang rasa penat?",
      paragraphs: ["Catatan ringkas selama seminggu membantu doktor memahami keadaan anda dengan lebih cepat:"],
      list: [
        "Sudah berapa lama rasa penat berlarutan, dan sama ada ia semakin teruk.",
        "Waktu tidur dan bangun setiap hari, termasuk kerja syif.",
        "Jumlah kopi, teh atau minuman bertenaga sehari.",
        "Semua ubat, produk tradisional dan suplemen yang diambil, termasuk yang baru dimulakan.",
        "Perubahan lain yang anda perasan, seperti berat badan, selera makan atau mood.",
      ],
      after: ["Jika rasa penat bermula selepas memulakan ubat, produk tradisional atau suplemen, beritahu doktor atau ahli farmasi. Kesan sampingan yang disyaki juga boleh dilaporkan kepada NPRA melalui borang ConSERF, sama ada dalam talian atau melalui e-mel atau pos."],
    },
    en: {
      heading: "What should you note down before seeing a doctor about tiredness?",
      paragraphs: ["A short one-week record helps a doctor understand your situation faster:"],
      list: [
        "How long the tiredness has lasted, and whether it is getting worse.",
        "Your sleep and wake times each day, including shift work.",
        "How much coffee, tea or energy drinks you have a day.",
        "Every medicine, traditional product and supplement you take, including any you have just started.",
        "Other changes you have noticed, such as weight, appetite or mood.",
      ],
      after: ["If the tiredness began after starting a medicine, traditional product or supplement, tell a doctor or pharmacist. Suspected side effects can also be reported to NPRA using the ConSERF form, online or by email or post."],
    },
  },
  maca: {
    sources: [S.conserf, S.quest],
    ms: {
      heading: "Apa perlu dibuat jika mengalami kesan sampingan selepas mengambil maca?",
      paragraphs: [
        "Hentikan penggunaan dan dapatkan nasihat doktor atau ahli farmasi, terutamanya jika simptom teruk. Simpan bungkusan produk supaya nama, nombor MAL dan nombor kelompok boleh disemak, termasuk di carian produk NPRA (QUEST3+).",
        "Pengguna boleh melaporkan kesan sampingan yang disyaki kepada NPRA melalui borang ConSERF (Consumer Side Effect Reporting Form). Borang ini meliputi ubat, produk tradisional dan suplemen kesihatan, dan boleh dihantar dalam talian atau melalui e-mel atau pos. Menurut NPRA, butiran pelapor dirahsiakan.",
      ],
    },
    en: {
      heading: "What should you do if you get side effects after taking maca?",
      paragraphs: [
        "Stop using it and get advice from a doctor or pharmacist, especially if symptoms are severe. Keep the packaging so the product name, MAL number and batch number can be checked, including on NPRA's product search (QUEST3+).",
        "Consumers can report suspected side effects to NPRA using the ConSERF form (Consumer Side Effect Reporting Form). It covers medicines, traditional products and health supplements, and can be sent online or by email or post. According to NPRA, the reporter's details are kept confidential.",
      ],
    },
  },
  dates: {
    sources: [S.mdg],
    ms: {
      heading: "Bagaimana memasukkan kurma dalam Pinggan Sihat Malaysia?",
      paragraphs: [
        "Garis Panduan Diet Malaysia (KKM) menggunakan konsep Pinggan Sihat Malaysia, “suku-suku-separuh”: separuh pinggan sayur-sayuran dan buah-buahan, suku pinggan bijirin atau ubi, dan suku pinggan protein seperti ikan, ayam, daging atau kekacang.",
        "Kurma boleh dikira sebagai sebahagian daripada bahagian buah, bukan tambahan di atas pinggan yang sudah penuh. Ketika berbuka puasa, contohnya, beberapa biji kurma dengan air kosong, diikuti hidangan utama mengikut konsep ini, lebih seimbang daripada kurma bersama kuih manis dan minuman bergula.",
      ],
    },
    en: {
      heading: "How do you fit dates into the Malaysian Healthy Plate?",
      paragraphs: [
        "The Malaysian Dietary Guidelines (MOH) use the Malaysian Healthy Plate, “quarter-quarter-half”: half the plate vegetables and fruit, a quarter grains or tubers, and a quarter protein such as fish, chicken, meat or legumes.",
        "Dates can count as part of the fruit portion rather than an extra on top of a full plate. When breaking a fast, for example, a few dates with plain water, followed by a main meal built on this plate, is more balanced than dates with sweet kuih and sugary drinks.",
      ],
    },
  },
  "quit-smoking": {
    sources: [S.mquit],
    ms: {
      heading: "Bagaimana keluarga boleh membantu seseorang berhenti merokok?",
      paragraphs: ["Sokongan di rumah sering sama penting dengan rawatan. Beberapa langkah praktikal:"],
      list: [
        "Tanya bagaimana anda boleh membantu, bukannya berleter.",
        "Jadikan rumah dan kereta kawasan bebas asap rokok dan vape.",
        "Bantu dia mencari perkhidmatan mQuit melalui laman JomQuit (KKM). Perkhidmatan ini termasuk pelan berhenti merokok, sesi konsultasi dan bimbingan, sesi susulan dan terapi penggantian nikotin, di fasiliti kesihatan kerajaan dan swasta.",
        "Jika dia tergelincir, galakkan dia mencuba semula dan berbincang dengan pegawai mQuit.",
      ],
    },
    en: {
      heading: "How can family help someone quit smoking?",
      paragraphs: ["Support at home often matters as much as treatment. A few practical steps:"],
      list: [
        "Ask how you can help instead of nagging.",
        "Make the home and car smoke-free and vape-free.",
        "Help them find an mQuit service through the JomQuit site (MOH). Services include a quit plan, consultation and guidance sessions, follow-up sessions and nicotine replacement therapy, at public and private health facilities.",
        "If they slip, encourage them to try again and talk to the mQuit team.",
      ],
    },
  },
  "black-seed": {
    sources: [S.quest, S.farmatagNew],
    ms: {
      heading: "Bagaimana mengesahkan kapsul atau minyak habbatus sauda berdaftar?",
      paragraphs: [
        "Bagi kapsul atau minyak habbatus sauda yang dijual sebagai produk tradisional atau suplemen kesihatan, semak nombor MAL pada label di carian produk NPRA (QUEST3+), dan pastikan nama produk serta nama syarikat sepadan dengan label.",
        "Produk berdaftar juga membawa label keselamatan hologram FarmaTag. KKM memaklumkan bahawa FarmaTag versi baharu mula digunakan pada 2 Oktober 2025, dan ketulenannya boleh disahkan melalui aplikasi MyUBAT mulai 1 Januari 2026. Ahli farmasi di premis farmasi juga boleh membantu menyemak.",
      ],
    },
    en: {
      heading: "How do you verify registered black seed capsules or oil?",
      paragraphs: [
        "For black seed capsules or oil sold as a traditional product or health supplement, check the MAL number on the label in NPRA's product search (QUEST3+), and make sure the product and company names match the label.",
        "Registered products also carry the FarmaTag hologram security label. MOH announced that the new FarmaTag version came into use on 2 October 2025, and its authenticity can be verified with the MyUBAT app from 1 January 2026. A pharmacist can also help you check.",
      ],
    },
  },
  cod: {
    sources: [S.quest, S.farmatagNew, S.complaint],
    ms: {
      heading: "Apa yang perlu disemak sebelum membayar COD untuk produk kesihatan?",
      paragraphs: ["COD membolehkan anda melihat bungkusan sebelum membayar. Untuk produk kesihatan, gunakan peluang itu:"],
      list: [
        "Pastikan nama penerima, produk dan jumlah sepadan dengan pengesahan pesanan.",
        "Minta nombor MAL sebelum memesan dan semak di carian produk NPRA (QUEST3+). Lihat [cara semak produk lulus KKM](/blog/cara-semak-produk-lulus-kkm).",
        "Periksa label hologram FarmaTag; versi baharu boleh disahkan dengan aplikasi MyUBAT mulai 1 Januari 2026.",
        "Jika produk disyaki tidak berdaftar, aduan boleh dibuat kepada Bahagian Penguatkuasaan Farmasi KKM.",
      ],
    },
    en: {
      heading: "What should you check before paying COD for a health product?",
      paragraphs: ["COD lets you see the parcel before paying. For health products, use that chance:"],
      list: [
        "Make sure the recipient name, product and amount match the order confirmation.",
        "Ask for the MAL number before ordering and check it in NPRA's product search (QUEST3+). See [how to check KKM registration](/en/blog/how-to-check-kkm-registration).",
        "Check the FarmaTag hologram label; the new version can be verified with the MyUBAT app from 1 January 2026.",
        "If a product looks unregistered, you can complain to the MOH Pharmacy Enforcement Division.",
      ],
    },
  },
  "reduce-stress": {
    sources: [S.heal],
    ms: {
      heading: "Bagaimana membantu rakan atau ahli keluarga yang tertekan?",
      paragraphs: ["Anda tidak perlu menjadi pakar untuk membantu. Langkah asas:"],
      list: [
        "Dengar tanpa menghakimi dan tanpa terus memberi nasihat.",
        "Tanya secara terus apa yang boleh anda bantu, contohnya urusan harian.",
        "Galakkan dia berjumpa doktor di klinik kesihatan atau klinik swasta.",
        "Kongsikan Talian HEAL 15555 (KKM), yang beroperasi setiap hari termasuk cuti umum, 8 pagi hingga 12 tengah malam.",
        "Jika dia berada dalam bahaya segera, hubungi 999.",
      ],
    },
    en: {
      heading: "How can you help a stressed friend or family member?",
      paragraphs: ["You do not need to be an expert to help. Basic steps:"],
      list: [
        "Listen without judging and without jumping to advice.",
        "Ask directly what you can help with, such as daily errands.",
        "Encourage them to see a doctor at a government or private clinic.",
        "Share the MOH HEAL 15555 line, which runs every day including public holidays, 8am to midnight.",
        "If they are in immediate danger, call 999.",
      ],
    },
  },
  "spouse-communication": {
    sources: [S.lppkn],
    ms: {
      heading: "Bagaimana berbincang tentang wang tanpa bergaduh?",
      paragraphs: ["Kewangan ialah antara isu yang disenaraikan LPPKN dalam perkhidmatan kaunseling perkahwinannya, bersama komunikasi dan konflik peranan. Beberapa cara untuk memulakan:"],
      list: [
        "Pilih masa tetap, contohnya sekali sebulan selepas gaji, bukan ketika baru menerima bil.",
        "Senaraikan pendapatan, komitmen tetap dan simpanan bersama-sama.",
        "Setuju tentang had perbelanjaan yang perlu dibincangkan dahulu.",
        "Fokus pada matlamat bersama, bukan siapa yang salah.",
      ],
      after: ["Jika perbincangan tentang wang sentiasa berakhir dengan pertengkaran, kaunseling perkahwinan LPPKN boleh membantu."],
    },
    en: {
      heading: "How do you talk about money without fighting?",
      paragraphs: ["Finances are among the issues LPPKN lists for its marriage counselling, alongside communication and role conflict. Some ways to start:"],
      list: [
        "Pick a regular time, such as once a month after payday, not right after a bill arrives.",
        "List income, fixed commitments and savings together.",
        "Agree on a spending limit above which you discuss first.",
        "Focus on shared goals, not on who is to blame.",
      ],
      after: ["If money talks always end in an argument, LPPKN marriage counselling can help."],
    },
  },
  "choose-supplement": {
    sources: [S.complaint, S.conserf],
    ms: {
      heading: "Bagaimana membuat aduan tentang produk yang disyaki tidak berdaftar?",
      paragraphs: [
        "Jika anda menjumpai produk kesihatan tanpa nombor MAL, atau nombornya tidak sepadan di carian NPRA, aduan boleh dibuat kepada Bahagian Penguatkuasaan Farmasi KKM. Cara menghubungi mereka disenaraikan di laman Program Perkhidmatan Farmasi KKM.",
        "Jika anda mengalami kesan sampingan selepas mengambil sesuatu produk, dapatkan rawatan dahulu, kemudian laporkan kepada NPRA melalui borang ConSERF.",
      ],
    },
    en: {
      heading: "How do you report a product you suspect is unregistered?",
      paragraphs: [
        "If you find a health product with no MAL number, or a number that does not match in NPRA's search, you can complain to the MOH Pharmacy Enforcement Division. How to contact them is listed on the MOH Pharmacy Services Programme site.",
        "If you get side effects after taking a product, get treatment first, then report it to NPRA using the ConSERF form.",
      ],
    },
  },
};

function addSources(existing: ArticleSource[] | undefined, extra: ArticleSource[]) {
  const list = [...(existing ?? [])];
  for (const source of extra) {
    const i = list.findIndex((s) => s.url === source.url);
    if (i >= 0) list[i] = { ...list[i], checked: c };
    else list.push(source);
  }
  return list;
}

/** Appends the 2026-10-07 expansion block (before nothing else is changed) and marks sources as re-checked. */
export function withExpansion(article: Article): Article {
  const e = expansions[article.key];
  if (!e) return article;
  return {
    ...article,
    updated: EXPANSION_CHECKED,
    ms: { ...article.ms, blocks: [...article.ms.blocks, e.ms], sources: addSources(article.ms.sources, e.sources), readMinutes: article.ms.readMinutes + 1 },
    en: { ...article.en, blocks: [...article.en.blocks, e.en], sources: addSources(article.en.sources, e.sources), readMinutes: article.en.readMinutes + 1 },
  };
}

export const expandedKeys = Object.keys(expansions);
