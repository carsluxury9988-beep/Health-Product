import type { Article } from "@/content/articles";
import { qaArticle } from "@/content/qa/helpers";
import { src } from "@/content/qa/sources";

const herbDoctorMs = "Bincang dengan doktor atau ahli farmasi sebelum mengambil suplemen herba jika anda mempunyai penyakit kronik (contohnya darah tinggi, diabetes, penyakit jantung, buah pinggang atau hati), sedang mengambil ubat, akan menjalani pembedahan, atau mengandung dan menyusu. Hentikan penggunaan dan dapatkan rawatan jika mengalami ruam, sesak nafas atau gejala luar biasa.";
const herbDoctorEn = "Talk to a doctor or pharmacist before taking a herbal supplement if you have a long-term condition (for example high blood pressure, diabetes, heart, kidney or liver disease), take any medicine, are due for surgery, or are pregnant or breastfeeding. Stop and get medical help if you develop a rash, breathlessness or unusual symptoms.";

const ginseng = qaArticle(
  "ginseng",
  "ingredients",
  {
    slug: "kebaikan-ginseng",
    title: "Apa kebaikan ginseng, dan adakah ia selamat?",
    seoTitle: "Kebaikan Ginseng: Kajian & Keselamatan",
    description: "Kebaikan ginseng menurut kajian, beza ginseng Asia, Amerika dan ginseng jawa, perbandingan dengan tongkat ali, kesan sampingan dan siapa perlu berhati-hati.",
    lead: "Ginseng Asia (Panax ginseng) ialah herba yang paling banyak dikaji untuk rasa letih. Tinjauan kajian 2023 mendapati ginseng mungkin memberi kesan kecil terhadap keletihan umum, tetapi hasilnya tidak konsisten dan ia bukan rawatan untuk penyakit. Penggunaan jangka pendek (sehingga 6 bulan) pada dos yang disyorkan nampaknya selamat bagi kebanyakan orang dewasa; kesan sampingan paling biasa ialah susah tidur, dan ia boleh berinteraksi dengan ubat.",
    imageAlt: "Ilustrasi akar ginseng untuk artikel kebaikan ginseng",
    blocks: [
      { heading: "Apa itu ginseng?", paragraphs: [
        "Nama “ginseng” digunakan untuk beberapa tumbuhan. Yang paling banyak dikaji ialah ginseng Asia atau Korea (Panax ginseng) dan ginseng Amerika (Panax quinquefolius). Akar ini digunakan dalam perubatan tradisional Asia Timur sejak lama dahulu dan kini dijual dalam bentuk kapsul, teh, ekstrak dan minuman.",
        "“Ginseng jawa” yang biasa ditanam di Malaysia (Talinum paniculatum) ialah tumbuhan yang berbeza dan bukan daripada genus Panax. Kajian tentang ginseng Asia tidak boleh dianggap terpakai kepadanya.",
      ] },
      { heading: "Apa kata kajian tentang kebaikan ginseng?", paragraphs: [
        "Menurut NCCIH (Institut Kesihatan Nasional Amerika Syarikat), tinjauan 2023 terhadap 19 kajian (2,413 peserta) mencadangkan ginseng Asia mungkin memberi kesan bermanfaat yang kecil terhadap keletihan umum. Namun bukan semua kajian bersetuju, dan saiz kesannya kecil.",
        "Ginseng juga dikaji untuk fungsi kognitif, gula darah dan imuniti, tetapi bukti untuk kegunaan ini masih terhad atau bercampur. Tiada bukti kukuh bahawa ginseng merawat mana-mana penyakit.",
      ] },
      { heading: "Apakah kebaikan ginseng untuk lelaki?", paragraphs: [
        "Ramai lelaki mencari ginseng untuk “tenaga”. Bukti terbaik setakat ini hanyalah kesan kecil terhadap rasa letih umum. Jika anda sering penat, punca seperti kurang tidur, stres, anemia atau diabetes lebih penting untuk ditangani — lihat [kenapa selalu penat dan mengantuk](/blog/kenapa-selalu-penat).",
      ] },
      { heading: "Apa beza ginseng dengan tongkat ali?", paragraphs: [
        "Kedua-duanya herba yang berbeza sama sekali. Ginseng (Panax) berasal dari Asia Timur dan Amerika Utara, manakala tongkat ali (Eurycoma longifolia) ialah tumbuhan asli hutan Asia Tenggara termasuk Malaysia. Kajian kedua-duanya mengukur perkara yang berbeza, dan bukti untuk kedua-duanya masih terhad.",
        "Untuk fakta tentang tongkat ali, baca [tongkat ali untuk apa: fakta dan kajian](/blog/tongkat-ali-untuk-apa). Banyak minuman “kopi tongkat ali ginseng” 3-dalam-1 juga mengandungi gula yang tinggi — semak label nutrisi.",
      ] },
      { heading: "Apa kesan sampingan ginseng dan siapa perlu elak?", paragraphs: [
        "NCCIH menyatakan kesan sampingan paling biasa ialah susah tidur. Kesan yang jarang dilaporkan termasuk ruam teruk, kerosakan hati dan alahan teruk. Ginseng mungkin memburukkan penyakit autoimun, mengganggu pembekuan darah dan merendahkan gula darah.",
      ], list: [
        "Sesetengah pakar tidak mengesyorkannya untuk bayi, kanak-kanak, serta wanita mengandung atau menyusu.",
        "Berhati-hati jika anda mengambil ubat pencair darah, ubat diabetes atau ubat lain — bincang dengan doktor atau ahli farmasi.",
        "Pilih produk berdaftar dengan nombor MAL — lihat [cara semak produk lulus KKM](/blog/cara-semak-produk-lulus-kkm).",
      ] },
    ],
    qa: [
      { q: "Bolehkah ginseng diambil setiap hari?", a: "Menurut NCCIH, penggunaan ginseng Asia secara oral sehingga 6 bulan pada dos yang disyorkan nampaknya selamat bagi kebanyakan orang, tetapi keselamatan jangka panjang belum jelas. Ikut arahan pada label produk berdaftar dan bincang dengan doktor jika anda mengambil ubat." },
      { q: "Bilakah waktu terbaik mengambil ginseng?", a: "Kerana kesan sampingan paling biasa ialah susah tidur, ramai memilih untuk mengambilnya pada waktu pagi atau awal tengah hari. Ikut arahan pada label." },
      { q: "Adakah ginseng jawa sama dengan ginseng Korea?", a: "Tidak. Ginseng jawa (Talinum paniculatum) ialah tumbuhan yang berbeza daripada ginseng Korea atau Asia (Panax ginseng), dan kajian tentang Panax ginseng tidak terpakai kepadanya." },
      { q: "Bolehkah ginseng dan tongkat ali diambil bersama?", a: "Gabungan herba belum banyak dikaji untuk keselamatan dan kesan. Jika anda mempertimbangkannya, terutamanya jika anda mempunyai penyakit atau mengambil ubat, bincang dengan doktor atau ahli farmasi dahulu." },
    ],
    sources: [src.nccihGinseng, src.ginsengFatigue],
    doctorNote: herbDoctorMs,
    disclaimer: "Artikel ini ialah maklumat umum berdasarkan kajian yang diterbitkan dan bukan nasihat perubatan. Ia bukan dakwaan tentang mana-mana produk.",
  },
  {
    slug: "ginseng-benefits",
    title: "What are the benefits of ginseng, and is it safe?",
    seoTitle: "Ginseng Benefits: What Research Says & Safety",
    description: "Ginseng benefits according to research, Asian vs American vs Javanese ginseng, how it compares with tongkat ali, side effects and who should be careful.",
    lead: "Asian ginseng (Panax ginseng) is the most studied herb for tiredness. A 2023 review found it may have a small effect on general fatigue, but results are inconsistent and it is not a treatment for disease. Short-term use (up to 6 months) in recommended amounts appears safe for most adults; the most common side effect is trouble sleeping, and it can interact with medicines.",
    imageAlt: "Illustration of a ginseng root for an article on ginseng benefits",
    blocks: [
      { heading: "What is ginseng?", paragraphs: [
        "The name “ginseng” is used for several plants. The most studied are Asian or Korean ginseng (Panax ginseng) and American ginseng (Panax quinquefolius). The root has long been used in East Asian traditional medicine and is now sold as capsules, teas, extracts and drinks.",
        "“Javanese ginseng” (ginseng jawa), commonly grown in Malaysia (Talinum paniculatum), is a different plant and not part of the Panax genus. Research on Asian ginseng cannot be assumed to apply to it.",
      ] },
      { heading: "What does research say about ginseng's benefits?", paragraphs: [
        "According to NCCIH (the US National Institutes of Health), a 2023 review of 19 studies (2,413 participants) suggested Asian ginseng may have a small beneficial effect on general fatigue. Not all research agrees, and the effect size is small.",
        "Ginseng has also been studied for thinking skills, blood sugar and immunity, but the evidence for these uses is still limited or mixed. There is no strong evidence that ginseng treats any disease.",
      ] },
      { heading: "What are the benefits of ginseng for men?", paragraphs: [
        "Many men look for ginseng for “energy”. The best evidence so far shows only a small effect on general tiredness. If you are often tired, causes such as poor sleep, stress, anaemia or diabetes matter more — see [why am I always tired](/en/blog/why-am-i-always-tired).",
      ] },
      { heading: "How is ginseng different from tongkat ali?", paragraphs: [
        "They are completely different herbs. Ginseng (Panax) comes from East Asia and North America, while tongkat ali (Eurycoma longifolia) is native to the forests of Southeast Asia, including Malaysia. Studies on each measure different things, and the evidence for both is still limited.",
        "For facts about tongkat ali, read [what is tongkat ali: facts and research](/en/blog/what-is-tongkat-ali). Many 3-in-1 “tongkat ali ginseng coffee” drinks are also high in sugar — check the nutrition label.",
      ] },
      { heading: "What are ginseng's side effects, and who should avoid it?", paragraphs: [
        "NCCIH says the most common side effect is trouble sleeping. Uncommon reported effects include severe rash, liver damage and severe allergic reactions. Ginseng may worsen autoimmune conditions, interfere with blood clotting and lower blood sugar.",
      ], list: [
        "Some experts advise against it for infants, children, and women who are pregnant or breastfeeding.",
        "Be careful if you take blood thinners, diabetes medicines or other medicines — talk to a doctor or pharmacist.",
        "Choose a registered product with a MAL number — see [how to check KKM registration](/en/blog/how-to-check-kkm-registration).",
      ] },
    ],
    qa: [
      { q: "Can you take ginseng every day?", a: "According to NCCIH, taking Asian ginseng by mouth for up to 6 months in recommended amounts appears safe for most people, but long-term safety is unclear. Follow the directions on a registered product's label and talk to a doctor if you take medicines." },
      { q: "When is the best time to take ginseng?", a: "Because the most common side effect is trouble sleeping, many people take it in the morning or early afternoon. Follow the label directions." },
      { q: "Is Javanese ginseng the same as Korean ginseng?", a: "No. Javanese ginseng (Talinum paniculatum) is a different plant from Korean or Asian ginseng (Panax ginseng), and research on Panax ginseng does not apply to it." },
      { q: "Can ginseng and tongkat ali be taken together?", a: "Herbal combinations have not been well studied for safety or effect. If you are considering it, especially if you have a health condition or take medicines, talk to a doctor or pharmacist first." },
    ],
    sources: [src.nccihGinseng, src.ginsengFatigue],
    doctorNote: herbDoctorEn,
    disclaimer: "This article is general information based on published research, not medical advice. It makes no claim about any product.",
  },
);

const maca = qaArticle(
  "maca",
  "ingredients",
  {
    slug: "kebaikan-maca",
    title: "Apa itu maca, dan apa kata kajian tentang kebaikannya?",
    seoTitle: "Kebaikan Maca: Fakta, Kajian & Keselamatan",
    description: "Maca (Lepidium meyenii) ialah akar dari Peru yang dijual sebagai serbuk dan kapsul. Ketahui apa yang dikaji, had bukti, kesan sampingan dan siapa perlu berhati-hati.",
    lead: "Maca (Lepidium meyenii) ialah tumbuhan keluarga kubis dari pergunungan Andes, Peru, yang dimakan sebagai makanan di sana dan kini dijual sebagai serbuk atau kapsul. Ia sering dipromosikan untuk tenaga, mood dan keinginan, tetapi kajian pada manusia sedikit dan kecil, dan tinjauan sistematik menyimpulkan buktinya terhad. Maklumat keselamatan juga masih kurang, jadi berhati-hati jika anda mengandung, menyusu atau mempunyai keadaan sensitif hormon.",
    imageAlt: "Ilustrasi akar maca untuk artikel kebaikan maca",
    blocks: [
      { heading: "Apa itu maca?", paragraphs: [
        "Maca ialah akar berbentuk ubi yang tumbuh di kawasan tanah tinggi Andes yang beriklim keras. Di Peru ia dimakan sebagai makanan berkhasiat. Ada beberapa jenis mengikut warna — kuning, merah dan hitam — dan produk komersial dijual sebagai serbuk, kapsul atau tablet.",
      ] },
      { heading: "Apa kata kajian tentang kebaikan maca?", paragraphs: [
        "Menurut Memorial Sloan Kettering Cancer Center, hanya beberapa kajian kecil telah dibuat pada manusia. Kebanyakannya melihat keinginan seksual, mood dan simptom menopaus. Tinjauan sistematik 2010 terhadap empat ujian klinikal mendapati bukti keberkesanan maca untuk fungsi seksual adalah terhad kerana jumlah kajian, saiz sampel dan kualitinya terlalu kecil untuk membuat kesimpulan.",
        "Kajian haiwan mencadangkan pelbagai kesan, tetapi keputusan haiwan tidak semestinya berlaku pada manusia. Satu tinjauan juga mendapati maca bukan agen anti-penuaan yang berkesan.",
      ] },
      { heading: "Adakah maca meningkatkan tenaga?", paragraphs: [
        "Maca sering dipasarkan untuk tenaga, tetapi kajian klinikal yang baik tentang tenaga atau rasa letih masih kurang. Jika anda sering penat, mulakan dengan asas yang terbukti — tidur, pemakanan dan senaman. Lihat [cara meningkatkan stamina badan secara semula jadi](/blog/cara-tingkatkan-stamina-badan).",
      ] },
      { heading: "Apa kesan sampingan maca dan siapa perlu berhati-hati?", paragraphs: [
        "Kesan sampingan tidak banyak dilaporkan dalam kajian, tetapi ini juga bermakna data keselamatan masih terhad. Laporan subjektif termasuk perubahan kitaran haid, perubahan mood, kekejangan, gastritis dan susah tidur.",
      ], list: [
        "Maca boleh mengganggu ujian makmal yang mengukur paras testosteron — beritahu doktor jika anda mengambilnya sebelum ujian darah.",
        "Bincang dengan doktor jika anda mempunyai kanser atau keadaan yang sensitif hormon.",
        "Keselamatan semasa mengandung dan menyusu belum dikaji dengan baik — dapatkan nasihat doktor dahulu.",
      ] },
      { heading: "Bagaimana memilih produk maca?", paragraphs: [
        "Jika anda memilih produk maca dalam bentuk kapsul atau tablet, pastikan ia berdaftar dengan KKM dan semak nombor MAL di laman NPRA. Elakkan produk yang mendakwa kesan “segera” atau “menyembuhkan”. Panduan lengkap ada dalam [cara memilih suplemen yang selamat](/blog/cara-pilih-suplemen-selamat).",
      ] },
    ],
    qa: [
      { q: "Maca untuk apa?", a: "Maca dimakan sebagai makanan di Peru dan dipromosikan sebagai suplemen untuk tenaga, mood dan keinginan. Kajian pada manusia masih sedikit dan kecil, jadi buktinya terhad." },
      { q: "Adakah maca selamat?", a: "Kesan sampingan jarang dilaporkan, tetapi data keselamatan masih terhad. Maca boleh mengganggu ujian testosteron dan mereka yang mengandung, menyusu atau mempunyai keadaan sensitif hormon perlu mendapatkan nasihat doktor dahulu." },
      { q: "Adakah maca sama dengan kacang macadamia?", a: "Tidak. Maca ialah akar dari Peru (Lepidium meyenii), manakala macadamia ialah kacang daripada pokok yang berbeza. Kedua-duanya tidak berkaitan." },
    ],
    sources: [src.mskMaca, src.macaReview],
    doctorNote: herbDoctorMs,
    disclaimer: "Artikel ini ialah maklumat umum berdasarkan kajian yang diterbitkan dan bukan nasihat perubatan. Ia bukan dakwaan tentang mana-mana produk.",
  },
  {
    slug: "maca-root-benefits",
    title: "What is maca, and what does research say about its benefits?",
    seoTitle: "Maca Root Benefits: Facts, Research & Safety",
    description: "Maca (Lepidium meyenii) is a Peruvian root sold as powder and capsules. Learn what has been studied, the limits of the evidence, side effects and who should be careful.",
    lead: "Maca (Lepidium meyenii) is a plant from the cabbage family that grows in the Andes of Peru, where it is eaten as food; it is now sold as powder or capsules. It is often promoted for energy, mood and desire, but human studies are few and small, and systematic reviews conclude the evidence is limited. Safety information is also thin, so take care if you are pregnant, breastfeeding or have a hormone-sensitive condition.",
    imageAlt: "Illustration of a maca root for an article on maca benefits",
    blocks: [
      { heading: "What is maca?", paragraphs: [
        "Maca is a tuber-like root that grows in the harsh climate of the high Andes. In Peru it is eaten as a nutritious food. There are several types by colour — yellow, red and black — and commercial products are sold as powder, capsules or tablets.",
      ] },
      { heading: "What does research say about maca's benefits?", paragraphs: [
        "According to Memorial Sloan Kettering Cancer Center, only a few small studies have been done in humans. Most looked at sexual desire, mood and menopausal symptoms. A 2010 systematic review of four clinical trials found limited evidence for maca's effect on sexual function because the number of trials, sample sizes and quality were too small to draw conclusions.",
        "Animal studies suggest various effects, but results in animals do not necessarily apply to people. One review also found maca is not an effective anti-ageing agent.",
      ] },
      { heading: "Does maca boost energy?", paragraphs: [
        "Maca is often marketed for energy, but good clinical studies on energy or tiredness are lacking. If you are often tired, start with the proven basics — sleep, food and exercise. See [how to build stamina naturally](/en/blog/how-to-build-stamina-naturally).",
      ] },
      { heading: "What are maca's side effects, and who should be careful?", paragraphs: [
        "Few side effects have been reported in studies, but that also means safety data are limited. Subjective reports include altered menstrual cycles, moodiness, cramps, gastritis and trouble sleeping.",
      ], list: [
        "Maca can interfere with lab tests that measure testosterone — tell your doctor if you took it before a blood test.",
        "Talk to your doctor if you have a hormone-sensitive cancer or condition.",
        "Safety during pregnancy and breastfeeding has not been well studied — get a doctor's advice first.",
      ] },
      { heading: "How do you choose a maca product?", paragraphs: [
        "If you choose a maca capsule or tablet, make sure it is registered with the KKM and check its MAL number on the NPRA website. Avoid products claiming “instant” effects or “cures”. There is a full guide in [how to choose a safe supplement](/en/blog/how-to-choose-a-safe-supplement).",
      ] },
    ],
    qa: [
      { q: "What is maca used for?", a: "Maca is eaten as food in Peru and promoted as a supplement for energy, mood and desire. Human studies are still few and small, so the evidence is limited." },
      { q: "Is maca safe?", a: "Side effects are rarely reported, but safety data are limited. Maca can interfere with testosterone tests and people who are pregnant, breastfeeding or have a hormone-sensitive condition should get a doctor's advice first." },
      { q: "Is maca the same as macadamia?", a: "No. Maca is a root from Peru (Lepidium meyenii), while macadamia is a nut from a different tree. They are not related." },
    ],
    sources: [src.mskMaca, src.macaReview],
    doctorNote: herbDoctorEn,
    disclaimer: "This article is general information based on published research, not medical advice. It makes no claim about any product.",
  },
);

const honey = qaArticle(
  "honey",
  "ingredients",
  {
    slug: "kebaikan-madu",
    title: "Apa kebaikan madu, dan berapa banyak yang wajar diambil?",
    seoTitle: "Kebaikan Madu: Kelulut, Tualang & Had Gula",
    description: "Kebaikan madu menurut kajian, beza madu kelulut, tualang dan gelam, kenapa madu masih dikira gula, berapa banyak yang wajar, dan kenapa bayi bawah setahun tidak boleh diberi madu.",
    lead: "Madu ialah makanan semula jadi yang kaya gula (terutamanya fruktosa dan glukosa) serta mengandungi sedikit sebatian antioksidan. Kajian Cochrane mendapati madu mungkin membantu melegakan batuk pada kanak-kanak berumur setahun ke atas, tetapi WHO tetap mengira madu sebagai “gula bebas”, jadi ambil dalam jumlah kecil. Jangan sekali-kali beri madu kepada bayi bawah 12 bulan.",
    imageAlt: "Ilustrasi balang madu dan sarang lebah untuk artikel kebaikan madu",
    blocks: [
      { heading: "Apa kandungan madu?", paragraphs: [
        "Sebahagian besar madu ialah gula semula jadi — terutamanya fruktosa dan glukosa — dan air. Selebihnya ialah sejumlah kecil asid organik, mineral, enzim dan sebatian fenolik yang bertindak sebagai antioksidan dalam ujian makmal. Kandungan sebenar berbeza mengikut jenis lebah, bunga dan cara penyimpanan.",
      ] },
      { heading: "Apa kebaikan madu yang disokong kajian?", paragraphs: [
        "Bukti paling jelas ialah untuk batuk akut pada kanak-kanak. Tinjauan Cochrane 2018 (enam ujian, 899 kanak-kanak berumur 12 bulan hingga 18 tahun) mendapati madu mungkin mengurangkan kekerapan batuk lebih baik daripada tiada rawatan atau plasebo.",
        "Banyak kajian lain tentang madu — termasuk madu tempatan seperti tualang, gelam dan kelulut — dilakukan dalam makmal atau pada haiwan. Keputusan ini menarik tetapi belum membuktikan kesan yang sama pada manusia.",
      ] },
      { heading: "Apa beza madu kelulut, tualang dan gelam?", paragraphs: [
        "Madu tualang dihasilkan oleh lebah liar yang bersarang di pokok tualang yang tinggi, manakala madu gelam berasal daripada bunga pokok gelam. Madu kelulut dihasilkan oleh lebah kelulut yang tidak bersengat.",
        "Madu kelulut biasanya lebih cair, lebih masam dan lebih tinggi kandungan airnya. Malaysia mempunyai piawaian khas untuk madu kelulut (MS 2683:2017). Kajian 2020 dalam Scientific Reports mendapati gula utama dalam madu lebah tidak bersengat dari Malaysia dan Australia ialah trehalulose, iaitu gula yang mempunyai indeks glisemik lebih rendah — namun ia tetap gula dan kesannya pada kesihatan manusia masih dikaji.",
      ] },
      { heading: "Adakah madu baik untuk lelaki?", paragraphs: [
        "Madu ialah sumber tenaga cepat kerana kandungan gulanya, sama seperti makanan bergula lain. Tiada bukti kukuh bahawa madu memberi kesan khas untuk lelaki. Untuk tenaga yang berpanjangan, pemakanan seimbang lebih penting — lihat [makanan untuk stamina lelaki](/blog/makanan-untuk-stamina-lelaki).",
      ] },
      { heading: "Berapa banyak madu sehari yang wajar?", paragraphs: [
        "Garis panduan WHO mengira gula dalam madu sebagai gula bebas dan mengesyorkan pengambilan gula bebas kurang daripada 10% tenaga harian, dan sebaiknya di bawah 5%. Ini bermakna madu perlu dikira bersama gula dalam teh, kuih dan minuman manis, bukan ditambah di atasnya.",
        "Bagi kebanyakan orang dewasa, satu atau dua sudu teh sebagai pengganti gula lain adalah lebih munasabah daripada beberapa sudu besar sehari.",
      ] },
      { heading: "Siapa yang perlu berhati-hati dengan madu?", paragraphs: [
        "Jangan beri madu kepada bayi bawah setahun. Menurut NHS, madu kadangkala mengandungi bakteria yang boleh menghasilkan toksin dalam usus bayi dan menyebabkan botulisme bayi, penyakit yang sangat serius.",
      ], list: [
        "Penghidap diabetes: madu tetap menaikkan gula darah. Bincang dengan doktor atau pegawai dietetik.",
        "Mereka yang mengawal berat badan: madu tinggi kalori.",
        "Beli daripada sumber yang dipercayai, kerana madu boleh dicampur sirap gula.",
      ] },
    ],
    qa: [
      { q: "Adakah madu lebih sihat daripada gula?", a: "Madu mengandungi sedikit sebatian lain yang tiada dalam gula putih, tetapi WHO tetap mengira gula dalam madu sebagai gula bebas. Kedua-duanya perlu dihadkan." },
      { q: "Bolehkah penghidap diabetes makan madu?", a: "Madu tetap menaikkan gula darah. Jika anda menghidap diabetes, bincang dengan doktor atau pegawai dietetik tentang jumlah yang sesuai dan kira madu sebagai sebahagian daripada pengambilan karbohidrat." },
      { q: "Bolehkah bayi diberi madu?", a: "Tidak. Bayi bawah 12 bulan tidak boleh diberi madu kerana risiko botulisme bayi, penyakit yang sangat serius." },
      { q: "Bilakah waktu terbaik minum madu?", a: "Tiada waktu yang terbukti lebih baik. Yang lebih penting ialah jumlahnya kecil dan ia menggantikan gula lain, bukan menambahnya." },
    ],
    sources: [src.honeyCough, src.whoSugars, src.nhsBabyFoods, src.honeyReview, src.trehalulose],
    doctorNote: "Jumpa doktor jika batuk berlarutan lebih daripada tiga minggu, disertai demam tinggi, sesak nafas atau darah, dan sebelum menggunakan madu sebagai “rawatan” untuk sebarang penyakit. Penghidap diabetes perlu berbincang dengan doktor tentang pengambilan madu.",
    disclaimer: "Artikel ini ialah maklumat umum berdasarkan kajian yang diterbitkan dan bukan nasihat perubatan.",
  },
  {
    slug: "honey-benefits",
    title: "What are the benefits of honey, and how much is reasonable?",
    seoTitle: "Honey Benefits: Kelulut, Tualang & Sugar",
    description: "Honey benefits according to research, kelulut vs tualang vs gelam honey, why honey still counts as sugar, how much is reasonable, and why babies under one must not have it.",
    lead: "Honey is a natural food rich in sugars (mainly fructose and glucose) with small amounts of antioxidant compounds. A Cochrane review found honey may help relieve cough in children aged one year and over, but the WHO still counts honey as a “free sugar”, so keep portions small. Never give honey to a baby under 12 months.",
    imageAlt: "Illustration of a honey jar and honeycomb for an article on honey benefits",
    blocks: [
      { heading: "What is in honey?", paragraphs: [
        "Most of honey is natural sugar — mainly fructose and glucose — and water. The rest is small amounts of organic acids, minerals, enzymes and phenolic compounds that act as antioxidants in lab tests. The exact content varies with the type of bee, the flowers and how it is stored.",
      ] },
      { heading: "Which benefits of honey are backed by research?", paragraphs: [
        "The clearest evidence is for acute cough in children. A 2018 Cochrane review (six trials, 899 children aged 12 months to 18 years) found honey probably reduces cough frequency better than no treatment or placebo.",
        "Much of the other research on honey — including local honeys such as tualang, gelam and kelulut — was done in the lab or in animals. These results are interesting but do not yet prove the same effects in people.",
      ] },
      { heading: "What is the difference between kelulut, tualang and gelam honey?", paragraphs: [
        "Tualang honey is made by wild bees that nest in tall tualang trees, while gelam honey comes from the flowers of the gelam tree. Kelulut honey is made by stingless bees.",
        "Kelulut honey is usually runnier, more sour and higher in moisture. Malaysia has a specific standard for kelulut honey (MS 2683:2017). A 2020 study in Scientific Reports found the main sugar in stingless bee honey from Malaysia and Australia is trehalulose, a sugar with a lower glycaemic index — but it is still sugar, and its effects on human health are still being studied.",
      ] },
      { heading: "Is honey good for men?", paragraphs: [
        "Honey is a quick source of energy because of its sugar, like other sweet foods. There is no strong evidence that honey has any special effect for men. For lasting energy, a balanced diet matters more — see [foods for men's stamina](/en/blog/foods-for-mens-stamina).",
      ] },
      { heading: "How much honey a day is reasonable?", paragraphs: [
        "WHO guidance counts the sugars in honey as free sugars and recommends keeping free sugars below 10% of daily energy, and ideally below 5%. That means honey should be counted together with the sugar in your tea, kuih and sweet drinks, not added on top.",
        "For most adults, one or two teaspoons in place of other sugar is more reasonable than several tablespoons a day.",
      ] },
      { heading: "Who should be careful with honey?", paragraphs: [
        "Do not give honey to babies under one year. According to the NHS, honey occasionally contains bacteria that can produce toxins in a baby's gut and cause infant botulism, a very serious illness.",
      ], list: [
        "People with diabetes: honey still raises blood sugar. Talk to a doctor or dietitian.",
        "People managing their weight: honey is high in calories.",
        "Buy from trusted sources, as honey can be mixed with sugar syrup.",
      ] },
    ],
    qa: [
      { q: "Is honey healthier than sugar?", a: "Honey contains small amounts of compounds that white sugar does not, but the WHO still counts the sugars in honey as free sugars. Both should be limited." },
      { q: "Can people with diabetes eat honey?", a: "Honey still raises blood sugar. If you have diabetes, talk to a doctor or dietitian about a suitable amount and count honey as part of your carbohydrate intake." },
      { q: "Can babies have honey?", a: "No. Babies under 12 months must not be given honey because of the risk of infant botulism, a very serious illness." },
      { q: "When is the best time to take honey?", a: "No time of day has been shown to be better. What matters more is keeping the amount small and using it in place of other sugar, not in addition to it." },
    ],
    sources: [src.honeyCough, src.whoSugars, src.nhsBabyFoods, src.honeyReview, src.trehalulose],
    doctorNote: "See a doctor if a cough lasts more than three weeks or comes with high fever, breathlessness or blood, and before using honey as a “treatment” for any illness. People with diabetes should discuss honey with their doctor.",
    disclaimer: "This article is general information based on published research, not medical advice.",
  },
);

const dates = qaArticle(
  "dates",
  "ingredients",
  {
    slug: "kebaikan-kurma",
    title: "Apa kebaikan kurma, dan berapa biji sehari yang sesuai?",
    seoTitle: "Kebaikan Kurma: Khasiat, Gula & Kurma Ajwa",
    description: "Kebaikan kurma: sumber tenaga dan serat, kajian indeks glisemik, sunnah berbuka dengan kurma, tentang kurma ajwa, dan berapa banyak yang sesuai termasuk bagi penghidap diabetes.",
    lead: "Kurma ialah buah yang manis secara semula jadi, memberi tenaga cepat dan mengandungi serat. Satu kajian mendapati lima jenis kurma mempunyai indeks glisemik rendah hingga sederhana (kira-kira 44–55), tetapi kurma tetap tinggi gula dan kalori. Makan beberapa biji sebagai sebahagian daripada hidangan buah adalah pilihan yang baik; penghidap diabetes perlu mengira kurma dalam pengambilan karbohidrat mereka.",
    imageAlt: "Ilustrasi kurma di dalam mangkuk untuk artikel kebaikan kurma",
    blocks: [
      { heading: "Apa kandungan khasiat kurma?", paragraphs: [
        "Kurma kering (peringkat tamar) kebanyakannya terdiri daripada gula semula jadi, iaitu glukosa dan fruktosa, serta serat. Ia juga mengandungi mineral seperti kalium. Kerana kandungan airnya rendah, kurma lebih padat kalori berbanding buah segar seperti tembikai atau betik.",
      ] },
      { heading: "Kenapa berbuka puasa dengan kurma?", paragraphs: [
        "Berbuka dengan kurma ialah sunnah Rasulullah SAW. Hadis riwayat Abu Dawud dan at-Tirmizi menyebut baginda berbuka dengan ruthab (kurma basah) sebelum solat; jika tiada, dengan tamar (kurma kering); dan jika tiada, dengan beberapa teguk air.",
        "Dari sudut pemakanan, kurma memberi gula yang cepat diserap selepas berpuasa seharian, diikuti makanan utama yang seimbang.",
      ] },
      { heading: "Adakah kurma sesuai untuk penghidap diabetes?", paragraphs: [
        "Kajian Alkaabi et al. (2011) dalam Nutrition Journal mengukur indeks glisemik lima jenis kurma pada orang sihat dan penghidap diabetes jenis 2 yang terkawal. Nilainya antara 43.8 hingga 55.1 — dalam julat rendah hingga sederhana — dan tidak berbeza dengan ketara antara kedua-dua kumpulan.",
        "Ini tidak bermakna kurma boleh dimakan tanpa had. Jumlah yang dimakan tetap menentukan kenaikan gula darah. Penghidap diabetes perlu berbincang dengan doktor atau pegawai dietetik tentang jumlah yang sesuai.",
      ] },
      { heading: "Adakah kurma baik untuk lelaki?", paragraphs: [
        "Kurma ialah snek bertenaga yang baik untuk sesiapa sahaja, termasuk sebelum bersenam. Tiada bukti kukuh tentang kesan khas kurma untuk lelaki. Untuk tenaga harian, gabungkan kurma dengan pemakanan seimbang — baca [makanan untuk stamina lelaki](/blog/makanan-untuk-stamina-lelaki).",
      ] },
      { heading: "Apa istimewanya kurma ajwa?", paragraphs: [
        "Ajwa ialah sejenis kurma dari Madinah yang berwarna gelap dan disebut dalam hadis, sebab itu ia sangat dihargai oleh umat Islam. Dari segi pemakanan, kandungannya serupa dengan kurma lain, dan kajian klinikal tentang kesan perubatan khusus kurma ajwa pada manusia masih terhad. Hargai ia sebagai makanan sunnah, tetapi jangan gunakannya sebagai pengganti rawatan doktor.",
      ] },
      { heading: "Berapa biji kurma sehari yang sesuai?", paragraphs: [
        "Tiada jumlah rasmi untuk kurma. Pendekatan yang munasabah ialah beberapa biji, dikira sebagai sebahagian daripada hidangan buah harian dan gula anda. Panduan Diet Malaysia 2020 menggalakkan pelbagai jenis buah dan sayur setiap hari, bukan satu jenis sahaja.",
      ] },
    ],
    qa: [
      { q: "Berapa biji kurma sehari yang sesuai?", a: "Tiada jumlah rasmi. Beberapa biji sehari sebagai sebahagian daripada hidangan buah adalah munasabah bagi kebanyakan orang dewasa. Penghidap diabetes perlu mengira kurma dalam pengambilan karbohidrat dan berbincang dengan doktor atau pegawai dietetik." },
      { q: "Adakah kurma menaikkan gula darah?", a: "Ya, kurma mengandungi gula semula jadi. Satu kajian mendapati indeks glisemik lima jenis kurma adalah rendah hingga sederhana, tetapi jumlah yang dimakan tetap menentukan kenaikan gula darah." },
      { q: "Apa sunnah berbuka puasa dengan kurma?", a: "Menurut hadis riwayat Abu Dawud dan at-Tirmizi, Rasulullah SAW berbuka dengan kurma basah, jika tiada dengan kurma kering, dan jika tiada dengan beberapa teguk air." },
    ],
    sources: [src.datesGi, src.mdg],
    doctorNote: "Jika anda menghidap diabetes, penyakit buah pinggang atau perlu mengawal kalium, bincang dengan doktor atau pegawai dietetik tentang jumlah kurma yang sesuai, terutamanya pada bulan Ramadan.",
    disclaimer: "Artikel ini ialah maklumat pemakanan umum dan bukan nasihat perubatan.",
  },
  {
    slug: "benefits-of-dates",
    title: "What are the benefits of dates, and how many a day is right?",
    seoTitle: "Benefits of Dates: Nutrition, Sugar & Ajwa",
    description: "Benefits of dates: energy and fibre, glycaemic index research, the Sunnah of breaking the fast with dates, Ajwa dates, and how many is reasonable, including with diabetes.",
    lead: "Dates are a naturally sweet fruit that gives quick energy and contains fibre. One study found five varieties of dates had a low-to-medium glycaemic index (about 44–55), but dates are still high in sugar and calories. A few dates as part of your fruit intake is a good choice; people with diabetes should count dates as part of their carbohydrate intake.",
    imageAlt: "Illustration of dates in a bowl for an article on the benefits of dates",
    blocks: [
      { heading: "What nutrients do dates contain?", paragraphs: [
        "Dried dates (the tamar stage) are mostly natural sugars — glucose and fructose — plus fibre. They also contain minerals such as potassium. Because they are low in water, dates are more calorie-dense than fresh fruit such as watermelon or papaya.",
      ] },
      { heading: "Why break the fast with dates?", paragraphs: [
        "Breaking the fast with dates is a Sunnah of the Prophet Muhammad (peace be upon him). A hadith reported by Abu Dawud and at-Tirmidhi says he broke his fast with fresh dates (rutab) before praying; if there were none, with dried dates (tamr); and if there were none, with a few sips of water.",
        "Nutritionally, dates provide quickly absorbed sugar after a day of fasting, followed by a balanced main meal.",
      ] },
      { heading: "Are dates suitable for people with diabetes?", paragraphs: [
        "A study by Alkaabi et al. (2011) in Nutrition Journal measured the glycaemic index of five varieties of dates in healthy people and people with well-controlled type 2 diabetes. The values ranged from 43.8 to 55.1 — in the low-to-medium range — and did not differ significantly between the two groups.",
        "That does not mean dates can be eaten without limit. The amount eaten still decides how much blood sugar rises. People with diabetes should talk to a doctor or dietitian about a suitable amount.",
      ] },
      { heading: "Are dates good for men?", paragraphs: [
        "Dates are a good energy snack for anyone, including before exercise. There is no strong evidence of any special effect of dates for men. For everyday energy, combine dates with a balanced diet — read [foods for men's stamina](/en/blog/foods-for-mens-stamina).",
      ] },
      { heading: "What is special about Ajwa dates?", paragraphs: [
        "Ajwa is a dark variety of date from Madinah that is mentioned in hadith, which is why Muslims value it highly. Nutritionally, it is similar to other dates, and clinical research on specific medical effects of Ajwa dates in people is still limited. Value it as a Sunnah food, but do not use it in place of a doctor's treatment.",
      ] },
      { heading: "How many dates a day is right?", paragraphs: [
        "There is no official number for dates. A reasonable approach is a few dates, counted as part of your daily fruit and sugar intake. The Malaysian Dietary Guidelines 2020 encourage a variety of fruit and vegetables every day, not just one kind.",
      ] },
    ],
    qa: [
      { q: "How many dates a day is right?", a: "There is no official number. A few dates a day as part of your fruit intake is reasonable for most adults. People with diabetes should count dates in their carbohydrate intake and talk to a doctor or dietitian." },
      { q: "Do dates raise blood sugar?", a: "Yes, dates contain natural sugar. One study found five varieties of dates had a low-to-medium glycaemic index, but the amount eaten still decides how much blood sugar rises." },
      { q: "What is the Sunnah of breaking the fast with dates?", a: "According to a hadith reported by Abu Dawud and at-Tirmidhi, the Prophet (peace be upon him) broke his fast with fresh dates, if none then dried dates, and if none then a few sips of water." },
    ],
    sources: [src.datesGi, src.mdg],
    doctorNote: "If you have diabetes or kidney disease, or need to limit potassium, talk to a doctor or dietitian about a suitable amount of dates, especially during Ramadan.",
    disclaimer: "This article is general nutrition information, not medical advice.",
  },
);

const blackSeed = qaArticle(
  "black-seed",
  "ingredients",
  {
    slug: "kebaikan-habbatus-sauda",
    title: "Apa kebaikan habbatus sauda menurut kajian?",
    seoTitle: "Kebaikan Habbatus Sauda: Fakta & Kajian",
    description: "Habbatus sauda untuk apa? Ringkasan kajian tentang kolesterol dan tekanan darah, kedudukannya dalam hadis, kesan sampingan, interaksi ubat dan cara mengambilnya dengan selamat.",
    lead: "Habbatus sauda atau jintan hitam (Nigella sativa) ialah biji yang disebut dalam hadis dan banyak dikaji. Analisis meta mendapati suplemen habbatus sauda dikaitkan dengan penurunan sederhana kolesterol, LDL dan trigliserida, serta penurunan kecil tekanan darah (kira-kira 3 mmHg). Kesan ini kecil dan bukan pengganti ubat; minyaknya boleh menyebabkan alahan kulit dan ia mungkin berinteraksi dengan sesetengah ubat.",
    imageAlt: "Ilustrasi biji habbatus sauda dan bunga Nigella untuk artikel kebaikan habbatus sauda",
    blocks: [
      { heading: "Apa itu habbatus sauda?", paragraphs: [
        "Habbatus sauda ialah biji kecil berwarna hitam daripada tumbuhan Nigella sativa. Dalam bahasa Inggeris ia dikenali sebagai black seed atau black cumin. Ia digunakan sebagai rempah, dan dijual dalam bentuk biji, minyak dan kapsul.",
        "Dalam hadis riwayat al-Bukhari, Rasulullah SAW bersabda bahawa habbatus sauda adalah penawar bagi segala penyakit kecuali maut. Ramai ulama menjelaskan bahawa hadis ini menggalakkan kita mengambil manfaatnya, tetapi tidak bermaksud kita meninggalkan rawatan perubatan.",
      ] },
      { heading: "Habbatus sauda untuk apa menurut kajian?", paragraphs: [
        "Dua analisis meta oleh Sahebkar et al. (2016) memberikan gambaran terbaik setakat ini:",
      ], list: [
        "Lipid darah: suplemen Nigella sativa dikaitkan dengan penurunan sederhana kolesterol total, kolesterol LDL dan trigliserida.",
        "Tekanan darah: dalam ujian rawak, tekanan darah sistolik turun purata kira-kira 3.3 mmHg dan diastolik kira-kira 2.8 mmHg berbanding kumpulan kawalan.",
        "Kajian kecil lain melihat gula darah, asma dan keradangan, tetapi buktinya belum kukuh.",
      ] },
      { heading: "Bolehkah habbatus sauda menggantikan ubat darah tinggi atau kolesterol?", paragraphs: [
        "Tidak. Kesan yang dilaporkan adalah kecil berbanding ubat yang ditetapkan doktor, dan kajiannya berbeza dari segi dos dan tempoh. Jangan hentikan atau kurangkan ubat darah tinggi, kolesterol atau diabetes tanpa berbincang dengan doktor. Untuk mengesan masalah ini lebih awal, lihat [pemeriksaan kesihatan untuk lelaki](/blog/pemeriksaan-kesihatan-lelaki).",
      ] },
      { heading: "Apa kesan sampingan habbatus sauda?", paragraphs: [
        "Menurut Memorial Sloan Kettering Cancer Center, penggunaan minyak habbatus sauda tulen pada kulit pernah menyebabkan alahan (dermatitis sentuhan). Dos tinggi menyebabkan kerosakan hati dan buah pinggang pada tikus, tetapi data pada manusia masih kurang.",
      ], list: [
        "Ia mungkin menjejaskan ubat yang diproses oleh enzim hati CYP450, dan bahan aktifnya (timokuinon) didapati menjejaskan aktiviti warfarin dalam kajian.",
        "Jika anda mengambil ubat pencair darah, ubat diabetes atau ubat darah tinggi, bincang dengan doktor atau ahli farmasi dahulu.",
        "Cuba sedikit minyak pada kawasan kecil kulit sebelum menggunakannya lebih luas.",
      ] },
      { heading: "Bagaimana cara mengambil habbatus sauda dengan selamat?", paragraphs: [
        "Sebagai rempah dalam masakan, jumlah yang digunakan biasanya kecil. Jika anda memilih kapsul atau minyak sebagai suplemen, pilih produk berdaftar KKM dengan nombor MAL dan ikut dos pada label. Panduan [cara memilih suplemen yang selamat](/blog/cara-pilih-suplemen-selamat) menerangkan apa yang perlu disemak.",
      ] },
    ],
    qa: [
      { q: "Habbatus sauda untuk apa?", a: "Ia digunakan sebagai rempah dan suplemen. Analisis meta mendapati ia dikaitkan dengan penurunan sederhana kolesterol dan trigliserida, serta penurunan kecil tekanan darah. Kesannya kecil dan bukan pengganti ubat." },
      { q: "Adakah habbatus sauda selamat diambil setiap hari?", a: "Sebagai rempah dalam makanan, ia biasanya selamat. Sebagai suplemen, ikut dos pada label produk berdaftar dan bincang dengan doktor jika anda mengambil ubat, kerana ia mungkin berinteraksi dengan sesetengah ubat termasuk warfarin." },
      { q: "Bolehkah saya berhenti ubat darah tinggi jika mengambil habbatus sauda?", a: "Tidak. Jangan hentikan atau kurangkan ubat tanpa nasihat doktor. Penurunan tekanan darah yang dilaporkan dalam kajian adalah kecil." },
    ],
    sources: [src.nigellaLipids, src.nigellaBp, src.mskBlackCumin],
    doctorNote: herbDoctorMs,
    disclaimer: "Artikel ini ialah maklumat umum berdasarkan kajian yang diterbitkan dan bukan nasihat perubatan. Ia bukan dakwaan tentang mana-mana produk.",
  },
  {
    slug: "black-seed-benefits",
    title: "What are the benefits of black seed according to research?",
    seoTitle: "Black Seed (Habbatus Sauda) Benefits: Facts",
    description: "What is black seed (Nigella sativa) used for? A summary of research on cholesterol and blood pressure, its place in hadith, side effects, drug interactions and how to take it safely.",
    lead: "Black seed, known in Malaysia as habbatus sauda (Nigella sativa), is mentioned in hadith and widely studied. Meta-analyses found black seed supplements were linked to modest falls in total cholesterol, LDL and triglycerides, and a small fall in blood pressure (about 3 mmHg). These effects are small and no substitute for medicine; the oil can cause skin allergy, and it may interact with some medicines.",
    imageAlt: "Illustration of black seeds and a Nigella flower for an article on black seed benefits",
    blocks: [
      { heading: "What is black seed?", paragraphs: [
        "Black seed is the small black seed of the Nigella sativa plant, also called black cumin, and known in Malay as habbatus sauda or jintan hitam. It is used as a spice and sold as seeds, oil and capsules.",
        "In a hadith reported by al-Bukhari, the Prophet (peace be upon him) said that black seed is a cure for every disease except death. Many scholars explain that this encourages us to benefit from it, but does not mean abandoning medical treatment.",
      ] },
      { heading: "What is black seed used for, according to research?", paragraphs: [
        "Two meta-analyses by Sahebkar et al. (2016) give the best picture so far:",
      ], list: [
        "Blood lipids: Nigella sativa supplements were linked to modest falls in total cholesterol, LDL cholesterol and triglycerides.",
        "Blood pressure: in randomised trials, systolic pressure fell by about 3.3 mmHg and diastolic by about 2.8 mmHg on average compared with control groups.",
        "Other small studies looked at blood sugar, asthma and inflammation, but the evidence is not yet strong.",
      ] },
      { heading: "Can black seed replace blood pressure or cholesterol medicine?", paragraphs: [
        "No. The reported effects are small compared with medicines prescribed by a doctor, and the studies varied in dose and length. Do not stop or reduce blood pressure, cholesterol or diabetes medicine without talking to your doctor. To catch these problems early, see [health screening for men](/en/blog/health-screening-for-men).",
      ] },
      { heading: "What are the side effects of black seed?", paragraphs: [
        "According to Memorial Sloan Kettering Cancer Center, applying pure black seed oil to the skin has caused allergic reactions (contact dermatitis). High doses caused liver and kidney damage in rats, but human data are lacking.",
      ], list: [
        "It may affect medicines processed by the liver's CYP450 enzymes, and its active compound (thymoquinone) was shown to affect warfarin activity in studies.",
        "If you take blood thinners, diabetes medicine or blood pressure medicine, talk to a doctor or pharmacist first.",
        "Test a little oil on a small patch of skin before using it more widely.",
      ] },
      { heading: "How can you take black seed safely?", paragraphs: [
        "As a spice in cooking, the amounts used are usually small. If you choose capsules or oil as a supplement, pick a KKM-registered product with a MAL number and follow the dose on the label. The guide [how to choose a safe supplement](/en/blog/how-to-choose-a-safe-supplement) explains what to check.",
      ] },
    ],
    qa: [
      { q: "What is black seed used for?", a: "It is used as a spice and a supplement. Meta-analyses found it was linked to modest falls in cholesterol and triglycerides and a small fall in blood pressure. The effects are small and no substitute for medicine." },
      { q: "Is it safe to take black seed every day?", a: "As a spice in food it is usually safe. As a supplement, follow the dose on a registered product's label and talk to a doctor if you take medicines, because it may interact with some, including warfarin." },
      { q: "Can I stop my blood pressure medicine if I take black seed?", a: "No. Do not stop or reduce any medicine without your doctor's advice. The fall in blood pressure reported in studies is small." },
    ],
    sources: [src.nigellaLipids, src.nigellaBp, src.mskBlackCumin],
    doctorNote: herbDoctorEn,
    disclaimer: "This article is general information based on published research, not medical advice. It makes no claim about any product.",
  },
);


const tongkatAliColours = qaArticle(
  "tongkat-ali-colours",
  "ingredients",
  {
    slug: "beza-tongkat-ali-kuning-merah-hitam",
    title: "Apa beza tongkat ali kuning, merah dan hitam?",
    seoTitle: "Beza Tongkat Ali Kuning, Merah, Hitam",
    description: "Beza nama tongkat ali kuning, merah dan hitam: tumbuhan yang berbeza, bukan gred kekuatan, serta apa yang kajian makmal dan rekod rasmi sebut.",
    lead: "Kuning, merah dan hitam bukan tiga gred kekuatan untuk akar yang sama. Dalam penyelidikan di Malaysia, nama warna itu dipakai untuk tumbuhan yang berbeza. Kebanyakan kajian pada manusia tentang tongkat ali dibuat pada Eurycoma longifolia, dan had bukti itu diringkas dalam artikel tongkat ali yang sedia ada. Warna pada nama jualan tidak membuktikan kesan, dan artikel ini tidak mengatakan mana-mana produk di laman ini mengandungi tongkat ali.",
    imageAlt: "Ikon tiga daun kuning, merah dan hitam untuk artikel beza tongkat ali",
    blocks: [
      { heading: "Adakah kuning, merah dan hitam pokok yang sama?", paragraphs: [
        "Tidak. Kajian makmal 2023 dalam Tropical Journal of Natural Product Research membandingkan tiga tumbuhan yang orang tempatan panggil tongkat ali: Eurycoma longifolia, Polyalthia bullata dan Stema tuberosa. Penulis berkata nama tempatan mengikut warna kulit akar semula jadi: kuning pudar atau hampir putih untuk E. longifolia (mereka catat nama Tongkat Ali Putih), hitam untuk P. bullata, dan merah untuk S. tuberosa.",
        "Nama di pasar tidak selalu disusun sebegitu kemas. FRIM, dalam Herba Xpress, merekod Eurycoma longifolia sebagai tongkat ali dan menerangkan akarnya berwarna kuning pudar. Jadi “kuning” dan “putih” kedua-duanya pernah dilekatkan pada spesies yang sama dalam sumber yang berbeza. Itu sebab nama warna sahaja tidak cukup untuk mengenal pasti pokok.",
      ] },
      { heading: "Pokok manakah yang biasanya disebut tongkat ali kuning?", paragraphs: [
        "Eurycoma longifolia. FRIM menyenaraikan nama tempatan tongkat ali, pasak bumi, tongkat baginda, petala bumi, penawar pahit, lempedu pahit dan setunjang bumi untuk spesies ini, dan menyatakan akarnya kuning pudar.",
        "Kajian pada manusia yang paling sering dipetik ialah tentang spesies ini, bukan tentang dua tumbuhan yang lain. Apa yang kajian itu ada, apa yang belum pasti, dan had keselamatan, diringkas dalam [tongkat ali untuk apa](/blog/tongkat-ali-untuk-apa). Artikel ini tidak mengulang angka kajian itu dan tidak menambah dakwaan baharu.",
      ] },
      { heading: "Apa itu tongkat ali hitam dan tongkat ali merah?", paragraphs: [
        "MyBIS, pangkalan data biodiversiti Malaysia, merekod Polyalthia bullata dengan nama vernakular Tongkat Ali Hitam.",
        "Dalam kertas TJNPR 2023, tongkat ali merah ialah Stema tuberosa, dinamakan begitu kerana warna kulit akar. Ejaan nama itu diikut seperti dalam kertas tersebut. Kertas yang sama mendapati sebatian eurycomanone dalam ekstrak E. longifolia yang mereka uji, tetapi tidak dalam ekstrak P. bullata atau S. tuberosa pada ujian HPLC itu. Itu perbezaan kimia dalam satu kajian makmal, bukan bukti bahawa satu daripadanya berkesan pada manusia.",
      ] },
      { heading: "Adakah warna pada nama itu bukti ia lebih kuat?", paragraphs: [
        "Tidak. Warna dalam nama jualan bukan ukuran kekuatan dan bukan gred akar yang sama. Kajian 2023 itu membandingkan tiga spesies, dan penulis sendiri menyatakan E. longifolia jauh lebih banyak dikaji daripada dua yang lain. Tiada sumber yang digunakan di sini menunjukkan bahawa nama hitam atau merah bermaksud kesan yang lebih besar.",
        "Jangan gunakan warna pada kad atau iklan sebagai alasan untuk menjangkakan sebarang hasil pada badan.",
      ] },
      { heading: "Apa yang patut dibaca sebelum mempercayai nama warna?", paragraphs: [
        "Baca nama saintifik pada label jika ada, dan jangan anggap perkataan kuning, merah atau hitam sebagai bahan yang sama. Jika label tidak menyatakan spesies, anda tidak boleh tahu pokok mana yang dimaksudkan.",
        "Artikel ini tidak merujuk kepada mana-mana produk yang dijual di laman Lebih Yakin. Ia tidak mengatakan mana-mana produk itu mengandungi tongkat ali. Untuk had bukti Eurycoma longifolia, baca [tongkat ali untuk apa: fakta, kajian dan keselamatan](/blog/tongkat-ali-untuk-apa).",
      ] },
    ],
    qa: [
      { q: "Adakah tongkat ali putih sama dengan tongkat ali kuning?", a: "Dalam dua sumber yang dipetik di sini, Eurycoma longifolia disebut Tongkat Ali Putih dalam kertas TJNPR 2023, dengan kulit akar kuning pudar atau hampir putih, dan FRIM menggambarkan akarnya sebagai kuning pudar. Nama pasar masih boleh bercampur. Semak nama saintifik, bukan warna sahaja." },
      { q: "Adakah tongkat ali hitam spesies yang sama dengan Eurycoma longifolia?", a: "Tidak, menurut MyBIS dan kertas TJNPR 2023. Tongkat Ali Hitam dalam sumber itu ialah Polyalthia bullata." },
      { q: "Bolehkah warna disusun mengikut kekuatan?", a: "Tidak ada asas dalam sumber artikel ini untuk menyusun kuning, merah dan hitam mengikut kekuatan. Ia tumbuhan berbeza, dan warna bukan bukti kesan." },
      { q: "Adakah produk di laman ini mengandungi tongkat ali?", a: "Artikel ini tidak mengatakan begitu. Ia bukan senarai ramuan kedai. Ramuan, jika ada, hanya boleh dibaca pada label bungkusan." },
    ],
    sources: [src.tjnprTongkat, src.mybisBullata, src.frimTongkat],
    doctorNote: herbDoctorMs,
    disclaimer: "Artikel ini ialah maklumat umum berdasarkan rekod dan kajian makmal yang dipetik. Ia bukan nasihat perubatan dan bukan dakwaan tentang mana-mana produk.",
  },
  {
    slug: "tongkat-ali-yellow-red-and-black",
    title: "What is the difference between yellow, red and black tongkat ali?",
    seoTitle: "Yellow, Red and Black Tongkat Ali",
    description: "Yellow, red and black tongkat ali are different plants in the research, not a strength scale. What official records and a 2023 lab study actually say.",
    lead: "Yellow, red and black are not three strength grades of the same root. In Malaysian research, those colour names are used for different plants. Most human studies of tongkat ali are on Eurycoma longifolia, and the limits of that evidence are summarised in the existing tongkat ali article. A colour in a sales name does not prove an effect, and this article does not say that any product on this site contains tongkat ali.",
    imageAlt: "Icon of yellow, red and black leaves for an article on tongkat ali colours",
    blocks: [
      { heading: "Are yellow, red and black the same plant?", paragraphs: [
        "No. A 2023 laboratory study in the Tropical Journal of Natural Product Research compared three plants that local people call tongkat ali: Eurycoma longifolia, Polyalthia bullata and Stema tuberosa. The authors said the local names follow the natural colour of the root bark: pale yellow or almost white for E. longifolia (they recorded the name Tongkat Ali Putih), black for P. bullata, and red for S. tuberosa.",
        "Market names are not always that tidy. FRIM, in Herba Xpress, records Eurycoma longifolia as tongkat ali and describes its root as pale yellow. So both “yellow” and “white” have been attached to the same species in different sources. That is why a colour name alone is not enough to identify the plant.",
      ] },
      { heading: "Which plant is usually called yellow tongkat ali?", paragraphs: [
        "Eurycoma longifolia. FRIM lists the local names tongkat ali, pasak bumi, tongkat baginda, petala bumi, penawar pahit, lempedu pahit and setunjang bumi for this species, and says the root is pale yellow.",
        "The human studies most often cited are about this species, not the other two plants. What those studies show, what is still uncertain, and the safety limits are summarised in [what is tongkat ali](/en/blog/what-is-tongkat-ali). This article does not repeat those study figures and does not add a new claim.",
      ] },
      { heading: "What are black tongkat ali and red tongkat ali?", paragraphs: [
        "MyBIS, Malaysia's biodiversity database, records Polyalthia bullata under the vernacular name Tongkat Ali Hitam.",
        "In the 2023 TJNPR paper, red tongkat ali is Stema tuberosa, named for the colour of its root bark. The spelling follows that paper. The same paper found the compound eurycomanone in the E. longifolia extract they tested, but not in the P. bullata or S. tuberosa extracts in that HPLC test. That is a chemical difference in one laboratory study, not proof that one of them works in people.",
      ] },
      { heading: "Does the colour in the name prove it is stronger?", paragraphs: [
        "No. A colour in a sales name is not a measure of strength and not a grade of the same root. The 2023 study compared three species, and the authors themselves said E. longifolia has been studied far more than the other two. None of the sources used here shows that the name black or red means a larger effect.",
        "Do not use a colour on a card or an advert as a reason to expect any result in the body.",
      ] },
      { heading: "What should you read before trusting a colour name?", paragraphs: [
        "Read the scientific name on the label if there is one, and do not treat the words yellow, red or black as the same ingredient. If the label does not name the species, you cannot tell which plant is meant.",
        "This article does not refer to any product sold on the Lebih Yakin site. It does not say that any of those products contain tongkat ali. For the limits of the evidence on Eurycoma longifolia, read [what is tongkat ali: facts, research and safety](/en/blog/what-is-tongkat-ali).",
      ] },
    ],
    qa: [
      { q: "Is white tongkat ali the same as yellow tongkat ali?", a: "In the two sources cited here, Eurycoma longifolia is called Tongkat Ali Putih in the 2023 TJNPR paper, with root bark that is pale yellow or almost white, and FRIM describes the root as pale yellow. Market names can still be mixed. Check the scientific name, not the colour alone." },
      { q: "Is black tongkat ali the same species as Eurycoma longifolia?", a: "No, according to MyBIS and the 2023 TJNPR paper. Tongkat Ali Hitam in those sources is Polyalthia bullata." },
      { q: "Can the colours be ranked by strength?", a: "The sources in this article give no basis for ranking yellow, red and black by strength. They are different plants, and colour is not proof of an effect." },
      { q: "Do products on this site contain tongkat ali?", a: "This article does not say that. It is not the shop's ingredient list. Ingredients, if any, can be read only on the pack label." },
    ],
    sources: [src.tjnprTongkat, src.mybisBullata, src.frimTongkat],
    doctorNote: herbDoctorEn,
    disclaimer: "This article is general information based on the records and laboratory research it cites. It is not medical advice and makes no claim about any product.",
  },
  { published: "2026-10-09", updated: "2026-10-09" },
);

export const ingredientArticles: Article[] = [ginseng, maca, honey, dates, blackSeed, tongkatAliColours];
