import type { Article } from "@/content/articles";

const S = {
  pharmacyMalMs: { label: "Program Perkhidmatan Farmasi KKM — Bagaimana mengenal pasti ubat-ubatan berdaftar?", url: "https://pharmacy.moh.gov.my/ms/soalan-lazim/bagaimana-mengenal-pasti-ubat-ubatan-berdaftar.html" },
  pharmacyMalEn: { label: "MOH Pharmaceutical Services Programme — How to identify registered drugs or pharmaceutical products?", url: "https://pharmacy.moh.gov.my/en/faq/how-identify-registered-drugs-or-pharmaceutical-products.html" },
  pharmacyCheckMs: { label: "Program Perkhidmatan Farmasi KKM — Bagaimana mengenal pasti ubat berdaftar dengan KKM?", url: "https://pharmacy.moh.gov.my/ms/soalan-lazim/bagaimana-mengenalpasti-sesuatu-ubat-itu-adalah-ubat-berdaftar-dengan-kkm.html" },
  quest: { label: "NPRA — QUEST3+ Product Search", url: "https://quest3plus.bpfk.gov.my/pmo2/index.php" },
  farmatag: { label: "Program Perkhidmatan Farmasi KKM — Label Keselamatan Hologram FarmaTag", url: "https://pharmacy.moh.gov.my/ms/entri/label-keselamatan-hologram-farmatagtm.html" },
  farmatagNew: { label: "KKM (17 Dis 2025) — Pemakluman label keselamatan hologram FarmaTag versi baharu", url: "https://pharmacy.moh.gov.my/en/news/17-dec-2025/pemakluman-penggunaan-label-keselamatan-hologram-baharu-kaedah-pengesahan-ketulenan-label-produk.html" },
  complaint: { label: "Program Perkhidmatan Farmasi KKM — Cara membuat aduan produk tidak berdaftar", url: "https://pharmacy.moh.gov.my/ms/soalan-lazim/bagaimana-membuat-aduan-sekiranya-saya-terjumpa-produk-tidak-berdaftar.html" },
  nanBao: { label: "NPRA (18 Mac 2019) — Kenyataan akhbar: produk tradisional dikesan mengandungi sildenafil dan tadalafil", url: "https://www.npra.gov.my/index.php/my/industry-news-announcements/more-recent-updates/412-english/press-release/press-release-2019/2066-kenyataan-akhbar-kpk-18-mac-2019-produk-tradisional-nan-bao-capsule-dikesan-mengandungi-racun-berjadual-sildenafil-dan-tadalafil.html" },
  rehman: { label: "Rehman SU et al. (2016). Review on a traditional herbal medicine, Eurycoma longifolia Jack (Tongkat Ali). Molecules 21(3):331", url: "https://doi.org/10.3390/molecules21030331" },
  meta: { label: "Leitão AE et al. (2022). Eurycoma longifolia (Jack) improves serum total testosterone in men: a systematic review and meta-analysis of clinical trials. Medicina 58(8):1047", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9415500/" },
  efsa: { label: "EFSA NDA Panel (2021). Safety of Eurycoma longifolia (Tongkat Ali) root extract as a novel food. EFSA Journal 19(12):6937", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8693240/" },
  mdg: { label: "Kementerian Kesihatan Malaysia / NCCFN — Malaysian Dietary Guidelines 2020", url: "https://hq.moh.gov.my/nutrition/wp-content/uploads/2024/03/latest-01.Buku-MDG-2020_12Mac2024.pdf" },
  nutritionMoh: { label: "Bahagian Pemakanan, Kementerian Kesihatan Malaysia", url: "https://hq.moh.gov.my/nutrition/" },
  whoDiet: { label: "World Health Organization — Healthy diet (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
  whoActivity: { label: "World Health Organization — Physical activity (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" },
  cdcSleep: { label: "US CDC — About sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
  nhsIron: { label: "NHS — Iron deficiency anaemia", url: "https://www.nhs.uk/conditions/iron-deficiency-anaemia/" },
};

export const checkKkm: Article = {
  key: "check-kkm",
  published: "2026-10-03",
  updated: "2026-10-03",
  image: { src: "/blog/semak-kkm.webp", width: 1200, height: 630 },
  ogImage: "/og/blog-semak-kkm.jpg",
  ms: {
    slug: "cara-semak-produk-lulus-kkm",
    title: "Cara semak produk lulus KKM: nombor MAL, FarmaTag dan QUEST3+",
    seoTitle: "Cara Semak Produk Lulus KKM & Nombor MAL",
    description: "Panduan langkah demi langkah untuk menyemak sama ada ubat, produk tradisional atau suplemen berdaftar dengan KKM: maksud nombor MAL, hologram FarmaTag, carian NPRA dan cara membuat aduan.",
    category: "Panduan pengguna",
    lead: "Sebelum membeli ubat, produk tradisional atau suplemen kesihatan — sama ada di kedai atau dalam talian — anda boleh menyemak sendiri status pendaftarannya dalam beberapa minit. Ini caranya, berdasarkan panduan rasmi Kementerian Kesihatan Malaysia (KKM).",
    imageAlt: "Ilustrasi nombor pendaftaran MAL dan kod kategori A, X, T dan N",
    readMinutes: 6,
    blocks: [
      { heading: "Kenapa pendaftaran penting", paragraphs: [
        "Di Malaysia, semua produk farmaseutikal — termasuk produk yang diimport, produk tradisional dan suplemen kesihatan — perlu didaftarkan dengan Pihak Berkuasa Kawalan Dadah (PBKD) sebelum dipasarkan. Bahagian Regulatori Farmasi Negara (NPRA) di bawah KKM menilai produk ini dari segi kualiti dan keselamatan, dan bagi ubat moden, keberkesanannya juga.",
        "Menurut KKM, produk berdaftar mempunyai dua ciri utama yang perlu dipaparkan pada pek jualan: nombor pendaftaran MAL dan label keselamatan hologram. Jika sesuatu produk tidak mempunyai kedua-dua ciri ini, produk itu dikhuatiri tidak berdaftar.",
      ] },
      { heading: "Langkah 1: Cari nombor MAL pada label", paragraphs: [
        "Nombor pendaftaran bermula dengan “MAL”, diikuti 8 angka dan diakhiri dengan huruf yang menunjukkan kategori produk. Contoh: MAL12345678T.",
      ], list: [
        "A — ubat terkawal (ubat preskripsi)",
        "X — ubat tanpa preskripsi / over-the-counter (OTC)",
        "T — produk semula jadi (ubat tradisional dan homeopati)",
        "N — suplemen kesihatan, contohnya vitamin atau mineral",
      ] },
      { heading: "Langkah 2: Semak nombor itu di laman NPRA", paragraphs: [
        "Buka QUEST3+ Product Search di laman NPRA (www.npra.gov.my → Product Search). Pilih kategori “Pharmaceutical”, kemudian cari menggunakan nombor pendaftaran. Jika nombor MAL tiada pada pek, anda boleh cuba mencari mengikut nama produk, nama pemegang pendaftaran, pengilang, pengimport atau bahan aktif.",
        "Pastikan butiran yang dipaparkan sepadan dengan produk di tangan anda: nama produk, bentuk (kapsul, tablet, cecair), pemegang pendaftaran dan status. Hasil carian hanya sah pada tarikh dan masa carian dibuat, kerana status pendaftaran boleh berubah.",
        "KKM juga menyediakan aplikasi “NPRA Product Status” untuk telefon pintar, yang turut menyenaraikan pendaftaran produk yang telah dibatalkan.",
      ] },
      { heading: "Langkah 3: Semak hologram keselamatan", paragraphs: [
        "Sejak 1 September 2019, KKM menggunakan hologram FarmaTag (menggantikan Meditag). Ciri yang boleh diperhatikan termasuk imej hologram, kod QR, perubahan warna biru ke ungu, nombor siri dan nombor pin. Ketulenan FarmaTag versi lama boleh disemak dengan aplikasi FarmaChecker.",
        "KKM memaklumkan bahawa label FarmaTag versi baharu digunakan berkuat kuasa 2 Oktober 2025, dan fungsi pengesahannya dimuatkan dalam aplikasi MyUBAT mulai 1 Januari 2026. Anda juga boleh meminta ahli farmasi di premis farmasi berlesen untuk menyemak hologram.",
      ] },
      { heading: "Tanda amaran yang perlu diberi perhatian", paragraphs: [
        "KKM pernah mengesan produk yang dipasarkan sebagai “tradisional” atau “herba” tetapi dicampur palsu dengan racun berjadual seperti sildenafil dan tadalafil. Bahan ini hanya boleh dibekalkan dengan preskripsi doktor; penggunaannya tanpa pengawasan boleh menyebabkan kesan advers serius, terutamanya bagi pesakit jantung yang mengambil ubat nitrat.",
      ], list: [
        "Tiada nombor MAL atau hologram pada pek.",
        "Nombor MAL tidak dijumpai di laman NPRA, atau butiran tidak sepadan dengan produk.",
        "Dakwaan seperti “kesan segera”, “100% selamat tanpa kesan sampingan” atau “menyembuhkan” penyakit.",
        "Label tanpa senarai ramuan, nama pengilang atau alamat pemegang pendaftaran.",
      ] },
      { heading: "Cara membuat aduan", paragraphs: [
        "Jika anda menjumpai produk yang disyaki tidak berdaftar, aduan boleh dibuat kepada Bahagian Penguatkuasaan Farmasi KKM melalui telefon, e-mel atau dalam talian di laman Program Perkhidmatan Farmasi, atau dengan menghubungi pejabat Cawangan Penguatkuasaan Farmasi negeri yang berdekatan.",
      ] },
      { heading: "Nota tentang kedai kami", paragraphs: [
        "Langkah di atas terpakai kepada mana-mana produk kesihatan yang anda beli, termasuk daripada kami. Semak label dan nombor pendaftaran sendiri sebelum menggunakan, dan rujuk doktor atau ahli farmasi jika anda mempunyai keraguan.",
      ] },
    ],
    sources: [S.pharmacyMalMs, S.pharmacyCheckMs, S.quest, S.farmatag, S.farmatagNew, S.nanBao, S.complaint],
    disclaimer: "Artikel ini ialah maklumat umum berdasarkan sumber rasmi KKM dan NPRA pada tarikh diterbitkan. Ia bukan nasihat perubatan atau undang-undang. Sentiasa rujuk laman rasmi NPRA untuk status terkini.",
  },
  en: {
    slug: "how-to-check-kkm-registration",
    title: "How to check if a product is KKM-registered: MAL number, FarmaTag and QUEST3+",
    seoTitle: "How to Check KKM Registration & MAL Numbers",
    description: "A step-by-step guide to checking whether a medicine, traditional product or supplement is registered with Malaysia's Ministry of Health: MAL numbers, FarmaTag holograms, NPRA search and how to report.",
    category: "Consumer guide",
    lead: "Before buying a medicine, traditional product or health supplement — in a shop or online — you can check its registration status yourself in a few minutes. Here is how, based on official Ministry of Health Malaysia (KKM/MOH) guidance.",
    imageAlt: "Illustration of a MAL registration number and the A, X, T and N category codes",
    readMinutes: 6,
    blocks: [
      { heading: "Why registration matters", paragraphs: [
        "In Malaysia, all pharmaceutical products — including imported products, traditional products and health supplements — must be registered with the Drug Control Authority (DCA) before they are marketed. The National Pharmaceutical Regulatory Agency (NPRA) under the MOH evaluates their quality and safety and, for modern medicines, their efficacy.",
        "According to the MOH, registered products carry two key features on the sales pack: a MAL registration number and a security hologram label. A product without both features may not be registered.",
      ] },
      { heading: "Step 1: Find the MAL number on the label", paragraphs: [
        "The registration number starts with “MAL”, followed by 8 digits and a letter that shows the product category. Example: MAL12345678T.",
      ], list: [
        "A — controlled medicines (prescription medicines)",
        "X — non-prescription / over-the-counter (OTC) medicines",
        "T — natural products (traditional and homeopathic medicines)",
        "N — health supplements, such as vitamins or minerals",
      ] },
      { heading: "Step 2: Check the number on the NPRA website", paragraphs: [
        "Open QUEST3+ Product Search on the NPRA website (www.npra.gov.my → Product Search). Choose the “Pharmaceutical” category, then search by registration number. If there is no MAL number on the pack, you can try searching by product name, registration holder, manufacturer, importer or active ingredient.",
        "Make sure the result matches the product in your hand: product name, dosage form (capsule, tablet, liquid), registration holder and status. Results are only valid at the date and time of the search, because registration status can change.",
        "The MOH also offers the “NPRA Product Status” mobile app, which also lists products whose registration has been cancelled.",
      ] },
      { heading: "Step 3: Check the security hologram", paragraphs: [
        "Since 1 September 2019 the MOH has used the FarmaTag hologram (replacing Meditag). Visible features include the hologram image, a QR code, a blue-to-purple colour shift, a serial number and a PIN. Older FarmaTag labels can be verified with the FarmaChecker app.",
        "The MOH announced a new FarmaTag version in use from 2 October 2025, with verification added to the MyUBAT app from 1 January 2026. You can also ask a pharmacist at a licensed pharmacy to check the hologram.",
      ] },
      { heading: "Warning signs", paragraphs: [
        "The MOH has found products marketed as “traditional” or “herbal” that were adulterated with scheduled poisons such as sildenafil and tadalafil. These may only be supplied with a doctor's prescription; using them without supervision can cause serious adverse effects, especially for heart patients taking nitrate medicines.",
      ], list: [
        "No MAL number or hologram on the pack.",
        "The MAL number cannot be found on the NPRA website, or the details do not match the product.",
        "Claims such as “instant results”, “100% safe with no side effects” or “cures” a disease.",
        "A label with no ingredient list, manufacturer name or registration holder address.",
      ] },
      { heading: "How to report", paragraphs: [
        "If you find a product you suspect is unregistered, you can report it to the MOH Pharmacy Enforcement Division by phone, email or online through the Pharmaceutical Services Programme website, or by contacting the nearest state Pharmacy Enforcement Branch.",
      ] },
      { heading: "A note about our store", paragraphs: [
        "The steps above apply to any health product you buy, including from us. Check the label and registration number yourself before use, and speak to a doctor or pharmacist if you have any doubt.",
      ] },
    ],
    sources: [S.pharmacyMalEn, S.pharmacyCheckMs, S.quest, S.farmatag, S.farmatagNew, S.nanBao, S.complaint],
    disclaimer: "This article is general information based on official MOH and NPRA sources at the time of publication. It is not medical or legal advice. Always check the official NPRA website for the latest status.",
  },
};

export const tongkatAli: Article = {
  key: "tongkat-ali",
  published: "2026-10-03",
  updated: "2026-10-03",
  image: { src: "/blog/tongkat-ali.webp", width: 1200, height: 630 },
  ogImage: "/og/blog-tongkat-ali.jpg",
  ms: {
    slug: "tongkat-ali-untuk-apa",
    title: "Tongkat ali untuk apa? Fakta, kajian dan keselamatan",
    seoTitle: "Tongkat Ali Untuk Apa? Fakta & Keselamatan",
    description: "Apa itu tongkat ali (Eurycoma longifolia), bagaimana ia digunakan secara tradisional, apa yang ditunjukkan oleh kajian setakat ini, dan perkara keselamatan yang perlu diketahui sebelum menggunakannya.",
    category: "Herba & fakta",
    lead: "Tongkat ali ialah antara herba paling dikenali di Malaysia. Artikel ini meringkaskan apa yang diketahui — dan apa yang belum diketahui — berdasarkan kajian saintifik dan sumber rasmi, tanpa janji atau dakwaan.",
    imageAlt: "Ilustrasi akar tongkat ali dengan nama saintifik Eurycoma longifolia",
    readMinutes: 6,
    blocks: [
      { heading: "Apa itu tongkat ali?", paragraphs: [
        "Tongkat ali (Eurycoma longifolia Jack) ialah pokok kecil yang tumbuh di hutan Asia Tenggara, termasuk Malaysia, Indonesia, Thailand dan Vietnam. Bahagian yang biasa digunakan ialah akarnya, yang terkenal dengan rasa sangat pahit. Di Indonesia ia juga dikenali sebagai pasak bumi.",
        "Akar tongkat ali mengandungi beberapa kumpulan sebatian yang dikaji oleh penyelidik, terutamanya quassinoid (seperti eurycomanone), alkaloid dan glikosaponin.",
      ] },
      { heading: "Penggunaan tradisional", paragraphs: [
        "Secara tradisional, rebusan akar tongkat ali digunakan dalam perubatan rakyat Asia Tenggara untuk pelbagai tujuan, antaranya untuk demam, malaria, sakit badan dan sebagai tonik am. Penggunaan tradisional ini direkodkan dalam kajian semula saintifik, tetapi penggunaan tradisional bukan bukti bahawa sesuatu herba berkesan atau selamat untuk semua orang.",
        "Sebahagian aktiviti yang dikaitkan dengan tongkat ali, seperti aktiviti terhadap parasit malaria, hanya ditunjukkan dalam ujian makmal — bukan dalam rawatan pesakit.",
      ] },
      { heading: "Apa kata kajian pada manusia?", paragraphs: [
        "Kebanyakan kajian klinikal tentang tongkat ali tertumpu pada hormon testosteron. Satu kajian semula sistematik dan meta-analisis pada 2022 menggabungkan lima ujian klinikal rawak dan mendapati paras testosteron total meningkat pada lelaki yang mengambil ekstrak tongkat ali, dengan kesan paling jelas pada lelaki yang parasnya rendah.",
        "Namun, penulis kajian itu sendiri menekankan beberapa had: bilangan peserta yang kecil, perbezaan besar antara kajian, kemungkinan bias penerbitan, dan kebanyakan kajian menggunakan ekstrak komersial yang sama. Mereka menyimpulkan lebih banyak penyelidikan diperlukan sebelum ia boleh digunakan dalam amalan klinikal.",
        "Dalam erti kata lain, bukti setakat ini terhad dan tidak boleh dianggap sebagai jaminan kesan untuk individu.",
      ] },
      { heading: "Perkara keselamatan", paragraphs: [
        "Dalam ujian klinikal yang diterbitkan, kesan sampingan yang dilaporkan kebanyakannya ringan, seperti gangguan perut dan gatal. Walau bagaimanapun, pada 2021 Pihak Berkuasa Keselamatan Makanan Eropah (EFSA) menilai satu ekstrak akar tongkat ali yang dicadangkan sebagai makanan baharu dan menyimpulkan bahawa keselamatannya belum dapat dipastikan, kerana keputusan ujian makmal dan haiwan menunjukkan potensi kerosakan DNA pada dos tinggi.",
        "Penilaian EFSA itu juga tidak meliputi wanita hamil dan menyusu. Kesan tongkat ali bersama ubat lain belum dikaji dengan baik.",
      ], list: [
        "Rujuk doktor atau ahli farmasi dahulu jika anda mempunyai penyakit jantung, tekanan darah, diabetes, masalah hati atau buah pinggang, atau sedang mengambil ubat.",
        "Ikut dos pada label dan jangan gabungkan beberapa produk yang mengandungi herba yang sama.",
        "Hentikan penggunaan dan dapatkan nasihat perubatan jika anda mengalami kesan yang tidak diingini.",
      ] },
      { heading: "Pilih produk berdaftar", paragraphs: [
        "KKM pernah mengesan produk yang dilabel sebagai tradisional atau herba tetapi dicampur palsu dengan ubat preskripsi seperti sildenafil dan tadalafil — bahan yang boleh berbahaya tanpa pengawasan doktor. Sebelum membeli mana-mana produk herba, semak nombor MAL dan hologram keselamatannya. Panduan langkah demi langkah ada dalam artikel kami tentang cara menyemak produk lulus KKM.",
      ] },
      { heading: "Ringkasan", paragraphs: [
        "Tongkat ali ialah herba tradisional Asia Tenggara yang sedang dikaji secara saintifik. Kajian awal pada manusia menarik minat penyelidik, tetapi buktinya masih terhad dan persoalan keselamatan belum selesai. Artikel ini tidak merujuk kepada mana-mana produk yang dijual di laman ini.",
      ] },
    ],
    sources: [S.rehman, S.meta, S.efsa, S.nanBao, S.pharmacyMalMs],
    disclaimer: "Artikel ini ialah maklumat umum dan bukan nasihat perubatan. Ia tidak bertujuan untuk mendiagnosis, merawat atau mencegah sebarang penyakit. Rujuk doktor atau ahli farmasi sebelum menggunakan produk herba.",
  },
  en: {
    slug: "what-is-tongkat-ali",
    title: "What is tongkat ali? Facts, research and safety",
    seoTitle: "What Is Tongkat Ali? Facts, Research & Safety",
    description: "What tongkat ali (Eurycoma longifolia) is, how it has been used traditionally, what research shows so far, and the safety points to know before using it.",
    category: "Herbs & facts",
    lead: "Tongkat ali is one of Malaysia's best-known herbs. This article summarises what is known — and what is not — based on scientific research and official sources, without promises or claims.",
    imageAlt: "Illustration of a tongkat ali root with the scientific name Eurycoma longifolia",
    readMinutes: 6,
    blocks: [
      { heading: "What is tongkat ali?", paragraphs: [
        "Tongkat ali (Eurycoma longifolia Jack) is a small tree that grows in the forests of Southeast Asia, including Malaysia, Indonesia, Thailand and Vietnam. The part usually used is the root, known for its very bitter taste. In Indonesia it is also called pasak bumi.",
        "The root contains several groups of compounds that researchers study, mainly quassinoids (such as eurycomanone), alkaloids and glycosaponins.",
      ] },
      { heading: "Traditional use", paragraphs: [
        "Traditionally, tongkat ali root decoctions have been used in Southeast Asian folk medicine for various purposes, including fever, malaria, body aches and as a general tonic. These uses are recorded in scientific reviews, but traditional use is not proof that a herb works or is safe for everyone.",
        "Some activities linked to tongkat ali, such as activity against malaria parasites, have only been shown in laboratory tests — not in treating patients.",
      ] },
      { heading: "What do human studies show?", paragraphs: [
        "Most clinical research on tongkat ali has focused on the hormone testosterone. A 2022 systematic review and meta-analysis pooled five randomised clinical trials and found that total testosterone levels rose in men taking tongkat ali extract, with the clearest effect in men whose levels were low.",
        "However, the authors themselves highlighted several limitations: small numbers of participants, large differences between studies, possible publication bias, and most studies used the same commercial extract. They concluded that more research is needed before it can be used in clinical practice.",
        "In other words, the evidence so far is limited and should not be read as a guaranteed effect for any individual.",
      ] },
      { heading: "Safety points", paragraphs: [
        "In published clinical trials, reported side effects were mostly mild, such as stomach upset and itching. However, in 2021 the European Food Safety Authority (EFSA) assessed a tongkat ali root extract proposed as a novel food and concluded that its safety had not been established, because laboratory and animal tests indicated potential DNA damage at high doses.",
        "The EFSA assessment also excluded pregnant and breastfeeding women. How tongkat ali interacts with other medicines has not been well studied.",
      ], list: [
        "Speak to a doctor or pharmacist first if you have heart disease, blood pressure problems, diabetes, liver or kidney problems, or take any medication.",
        "Follow the dose on the label and do not combine several products that contain the same herb.",
        "Stop using it and seek medical advice if you notice any unwanted effects.",
      ] },
      { heading: "Choose registered products", paragraphs: [
        "The MOH has found products labelled as traditional or herbal that were adulterated with prescription medicines such as sildenafil and tadalafil — substances that can be dangerous without a doctor's supervision. Before buying any herbal product, check its MAL number and security hologram. Our guide on checking KKM registration explains how, step by step.",
      ] },
      { heading: "Summary", paragraphs: [
        "Tongkat ali is a traditional Southeast Asian herb that is being studied scientifically. Early human studies interest researchers, but the evidence is still limited and safety questions remain open. This article does not refer to any product sold on this site.",
      ] },
    ],
    sources: [S.rehman, S.meta, S.efsa, S.nanBao, S.pharmacyMalEn],
    disclaimer: "This article is general information and not medical advice. It is not intended to diagnose, treat or prevent any disease. Speak to a doctor or pharmacist before using herbal products.",
  },
};

export const foodsForStamina: Article = {
  key: "foods-for-stamina",
  published: "2026-10-03",
  updated: "2026-10-03",
  image: { src: "/blog/makanan-stamina.webp", width: 1200, height: 630 },
  ogImage: "/og/blog-makanan-stamina.jpg",
  ms: {
    slug: "makanan-untuk-stamina-lelaki",
    title: "Makanan untuk stamina lelaki: panduan tenaga harian berdasarkan Pinggan Sihat Malaysia",
    seoTitle: "Makanan Untuk Stamina Lelaki: Panduan Harian",
    description: "Cara menyusun makanan harian untuk tenaga yang lebih stabil: konsep Pinggan Sihat Malaysia (suku-suku-separuh), sumber karbohidrat, protein, zat besi dan air, serta peranan tidur dan aktiviti fizikal.",
    category: "Pemakanan & gaya hidup",
    lead: "Rasa cepat penat di tempat kerja atau semasa bersukan? Tiada satu makanan ajaib untuk stamina — tetapi corak pemakanan harian, air, tidur dan aktiviti fizikal memainkan peranan besar. Panduan ini berdasarkan Garis Panduan Diet Malaysia 2020 dan sumber kesihatan antarabangsa.",
    imageAlt: "Ilustrasi Pinggan Sihat Malaysia: separuh sayur dan buah, suku bijirin, suku protein",
    readMinutes: 6,
    blocks: [
      { heading: "Mulakan dengan Pinggan Sihat Malaysia", paragraphs: [
        "KKM mengesyorkan konsep Pinggan Sihat Malaysia, atau “suku-suku-separuh”, untuk setiap hidangan utama:",
      ], list: [
        "Separuh pinggan: sayur-sayuran dan buah-buahan.",
        "Suku pinggan: bijirin dan ubi — utamakan bijirin penuh seperti beras perang, roti gandum penuh atau oat.",
        "Suku pinggan: protein — ikan, ayam, daging, telur, kekacang atau produk tenusu.",
        "Minum air kosong atau minuman tanpa gula.",
      ] },
      { heading: "Karbohidrat yang membekalkan tenaga lebih stabil", paragraphs: [
        "Karbohidrat ialah sumber tenaga utama badan. Bijirin penuh, ubi, kekacang dan buah-buahan mengandungi serat yang membantu tenaga dibebaskan dengan lebih perlahan berbanding gula dan minuman manis.",
        "Garis Panduan Diet Malaysia 2020 menasihatkan supaya pengambilan gula dihadkan. Minuman manis, kuih dan makanan bergula tinggi boleh memberi rasa bertenaga sementara diikuti rasa lesu.",
      ] },
      { heading: "Protein di setiap hidangan", paragraphs: [
        "Protein membantu membina dan membaiki otot, terutamanya jika anda aktif secara fizikal. Pilihan yang mudah didapati di Malaysia termasuk ikan (ikan kembung, sardin), ayam tanpa kulit, telur, tempe, tauhu, kacang dal dan susu rendah lemak.",
        "Garis panduan KKM menggalakkan pengambilan ikan, daging, ayam, telur dan kekacang secara sederhana, dan mengurangkan lemak tepu.",
      ] },
      { heading: "Zat besi dan rasa letih", paragraphs: [
        "Kekurangan zat besi boleh menyebabkan anemia, dengan tanda-tanda seperti letih dan kurang tenaga. Sumber zat besi termasuk daging merah, ayam, ikan, kekacang dan sayuran berdaun hijau gelap. Makan buah atau sayur yang kaya vitamin C bersama hidangan membantu penyerapan zat besi daripada sumber tumbuhan.",
        "Jika anda kerap letih tanpa sebab yang jelas, jangan teka sendiri — berjumpa doktor untuk pemeriksaan, kerana keletihan boleh disebabkan oleh pelbagai keadaan.",
      ] },
      { heading: "Air, kafein dan waktu makan", paragraphs: [
        "Garis Panduan Diet Malaysia 2020 menggalakkan minum air kosong secukupnya setiap hari. Kekurangan air boleh membuatkan anda rasa letih dan sukar fokus, terutamanya dalam cuaca panas.",
        "Kopi dan teh boleh menjadi sebahagian daripada diet seimbang, tetapi elakkan menambah banyak gula dan susu pekat, dan elakkan kafein lewat petang jika ia mengganggu tidur. Sarapan dan waktu makan yang teratur membantu mengelakkan rasa terlalu lapar dan makan berlebihan.",
      ] },
      { heading: "Tidur dan aktiviti fizikal", paragraphs: [
        "Pemakanan hanyalah sebahagian daripada cerita. Orang dewasa disarankan tidur sekurang-kurangnya 7 jam setiap malam. Pertubuhan Kesihatan Sedunia (WHO) pula mengesyorkan orang dewasa melakukan sekurang-kurangnya 150 hingga 300 minit aktiviti aerobik sederhana seminggu (contohnya berjalan pantas), ditambah latihan menguatkan otot sekurang-kurangnya dua hari seminggu.",
      ] },
      { heading: "Contoh hidangan sehari", paragraphs: [
        "Sekadar contoh — sesuaikan dengan keperluan, bajet dan selera anda:",
      ], list: [
        "Sarapan: oat dengan susu rendah lemak dan pisang, atau roti gandum penuh dengan telur.",
        "Makan tengah hari: nasi (lebih baik beras perang) suku pinggan, ikan bakar, sayur campur dan ulam.",
        "Snek: buah-buahan atau segenggam kacang tanpa garam.",
        "Makan malam: ayam atau tempe masak kurang minyak, sayur hijau dan sedikit ubi atau nasi.",
      ] },
      { heading: "Ringkasan", paragraphs: [
        "Tenaga harian yang lebih stabil biasanya datang daripada asas: pinggan yang seimbang, bijirin penuh, protein yang cukup, air, tidur dan pergerakan. Jika keletihan berterusan, dapatkan pemeriksaan doktor.",
      ] },
    ],
    sources: [S.mdg, S.nutritionMoh, S.whoDiet, S.whoActivity, S.cdcSleep, S.nhsIron],
    disclaimer: "Artikel ini ialah maklumat pemakanan umum dan bukan nasihat perubatan atau diet peribadi. Jika anda mempunyai penyakit kronik atau keperluan diet khas, rujuk doktor atau pegawai dietetik.",
  },
  en: {
    slug: "foods-for-mens-stamina",
    title: "Foods for men's stamina: an everyday energy guide based on Malaysia's Healthy Plate",
    seoTitle: "Foods for Men's Stamina: Everyday Energy Guide",
    description: "How to build everyday meals for steadier energy: the Malaysian Healthy Plate (quarter-quarter-half), carbohydrates, protein, iron and water, plus the role of sleep and physical activity.",
    category: "Nutrition & lifestyle",
    lead: "Feeling tired quickly at work or during sport? There is no single magic food for stamina — but your daily eating pattern, water, sleep and activity matter a lot. This guide is based on the Malaysian Dietary Guidelines 2020 and international health sources.",
    imageAlt: "Illustration of the Malaysian Healthy Plate: half vegetables and fruit, a quarter grains, a quarter protein",
    readMinutes: 6,
    blocks: [
      { heading: "Start with the Malaysian Healthy Plate", paragraphs: [
        "The Ministry of Health recommends the Malaysian Healthy Plate, or “quarter-quarter-half”, for each main meal:",
      ], list: [
        "Half the plate: vegetables and fruit.",
        "A quarter: grains and tubers — choose whole grains such as brown rice, wholemeal bread or oats where possible.",
        "A quarter: protein — fish, chicken, meat, eggs, legumes or dairy products.",
        "Drink plain water or unsweetened drinks.",
      ] },
      { heading: "Carbohydrates for steadier energy", paragraphs: [
        "Carbohydrates are the body's main energy source. Whole grains, tubers, legumes and fruit contain fibre that helps release energy more slowly than sugar and sweet drinks.",
        "The Malaysian Dietary Guidelines 2020 advise limiting sugar. Sweet drinks, kuih and high-sugar foods can give a short burst of energy followed by a slump.",
      ] },
      { heading: "Protein at every meal", paragraphs: [
        "Protein helps build and repair muscle, especially if you are physically active. Easy options in Malaysia include fish (mackerel, sardines), skinless chicken, eggs, tempeh, tofu, lentils and low-fat milk.",
        "MOH guidelines encourage moderate amounts of fish, meat, poultry, eggs and legumes, and reducing saturated fat.",
      ] },
      { heading: "Iron and tiredness", paragraphs: [
        "Iron deficiency can lead to anaemia, with symptoms such as tiredness and lack of energy. Sources of iron include red meat, chicken, fish, legumes and dark green leafy vegetables. Eating vitamin C-rich fruit or vegetables with a meal helps the body absorb iron from plant sources.",
        "If you are often tired without a clear reason, do not guess — see a doctor for a check-up, because tiredness can have many causes.",
      ] },
      { heading: "Water, caffeine and meal timing", paragraphs: [
        "The Malaysian Dietary Guidelines 2020 encourage drinking enough plain water every day. Not drinking enough can leave you tired and less focused, especially in hot weather.",
        "Coffee and tea can be part of a balanced diet, but avoid adding lots of sugar and condensed milk, and avoid caffeine late in the day if it affects your sleep. Breakfast and regular mealtimes help you avoid getting too hungry and overeating.",
      ] },
      { heading: "Sleep and physical activity", paragraphs: [
        "Food is only part of the picture. Adults are advised to sleep at least 7 hours a night. The World Health Organization (WHO) recommends that adults do at least 150 to 300 minutes of moderate aerobic activity a week (for example brisk walking), plus muscle-strengthening activities on at least two days a week.",
      ] },
      { heading: "A sample day", paragraphs: [
        "Just an example — adjust it to your needs, budget and taste:",
      ], list: [
        "Breakfast: oats with low-fat milk and a banana, or wholemeal toast with eggs.",
        "Lunch: a quarter plate of rice (brown rice if possible), grilled fish, mixed vegetables and ulam.",
        "Snack: fruit or a handful of unsalted nuts.",
        "Dinner: chicken or tempeh cooked with less oil, green vegetables and a little sweet potato or rice.",
      ] },
      { heading: "Summary", paragraphs: [
        "Steadier everyday energy usually comes from the basics: a balanced plate, whole grains, enough protein, water, sleep and movement. If tiredness continues, get checked by a doctor.",
      ] },
    ],
    sources: [S.mdg, S.nutritionMoh, S.whoDiet, S.whoActivity, S.cdcSleep, S.nhsIron],
    disclaimer: "This article is general nutrition information, not medical or personal dietary advice. If you have a chronic condition or special dietary needs, speak to a doctor or dietitian.",
  },
};
