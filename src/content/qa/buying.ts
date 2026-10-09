import type { Article } from "@/content/articles";
import { qaArticle } from "@/content/qa/helpers";
import { src } from "@/content/qa/sources";

const cod = qaArticle(
  "cod",
  "buying",
  {
    slug: "apa-itu-cod",
    title: "Apa itu COD, dan bagaimana mengelak penipuan bungkusan COD?",
    seoTitle: "Apa Itu COD? Maksud & Cara Elak Penipuan COD",
    description: "Maksud COD (cash on delivery), cara bayaran tunai semasa terima berfungsi di Malaysia, kelebihan dan hadnya, serta cara mengenal pasti dan menolak bungkusan COD yang tidak dipesan.",
    lead: "COD (cash on delivery) bermaksud bayar tunai semasa terima: anda membayar kurier apabila bungkusan sampai, bukan semasa membuat pesanan. Ia mengurangkan risiko membayar untuk barang yang tidak pernah dihantar, tetapi penipu juga menggunakan COD dengan menghantar bungkusan yang tidak dipesan. Bayar hanya untuk bungkusan yang anda sendiri pesan dan yang butirannya sepadan dengan pengesahan penjual.",
    imageAlt: "Ilustrasi bungkusan dan wang tunai untuk artikel apa itu COD",
    blocks: [
      { heading: "Apa maksud COD dalam pembelian dalam talian?", paragraphs: [
        "COD ialah singkatan cash on delivery, atau dalam bahasa Melayu “bayar tunai semasa terima”. Penjual menghantar barang melalui syarikat kurier, kurier mengutip bayaran daripada anda di pintu, dan wang itu kemudiannya diserahkan kepada penjual.",
        "Sesetengah kurier membenarkan bayaran COD melalui e-dompet atau QR, tetapi ini bergantung pada kurier dan kawasan.",
      ] },
      { heading: "Bagaimana proses COD berfungsi?", paragraphs: [], list: [
        "Anda membuat pesanan dengan penjual dan memberi nama, nombor telefon serta alamat.",
        "Penjual mengesahkan pesanan dan jumlah yang perlu dibayar.",
        "Bungkusan dihantar; kurier mungkin menghubungi anda sebelum sampai.",
        "Anda menyemak butiran pada label, kemudian membayar jumlah yang tepat kepada kurier.",
      ], after: [
        "Bagi pesanan di Lebih Yakin, langkah-langkahnya diterangkan dalam [cara pesan](/cara-pesan), dan maklumat COD untuk kedai kami ada di halaman [penghantaran & COD](/penghantaran).",
      ] },
      { heading: "Apa kelebihan dan kekurangan COD?", paragraphs: [
        "Kelebihan utama ialah anda tidak perlu memberi butiran kad atau membuat pindahan wang sebelum barang sampai. Ini sesuai bagi mereka yang belum biasa membeli dalam talian.",
        "Kekurangannya, anda perlu ada di rumah atau mewakilkan seseorang untuk menerima dan membayar, menyediakan wang tunai, dan COD mungkin tidak tersedia di semua kawasan. Kebanyakan kurier juga tidak membenarkan bungkusan dibuka sebelum dibayar.",
      ] },
      { heading: "Bagaimana penipuan bungkusan COD berlaku?", paragraphs: [
        "Ninja Van memberi amaran tentang bungkusan COD yang dihantar kepada orang yang tidak membelinya, atau yang isinya jauh berbeza daripada yang dijangka. Malay Mail (Jun 2025) melaporkan bahawa penipu menggunakan butiran peribadi mangsa untuk menghantar bungkusan yang tidak pernah dipesan, dengan harapan seseorang di rumah akan membayar.",
      ] },
      { heading: "Bagaimana mengelak penipuan COD?", paragraphs: [], list: [
        "Bayar hanya untuk bungkusan yang anda sendiri pesan. Jika tidak pasti, tanya ahli keluarga sebelum membayar.",
        "Semak nama penjual dan jumlah pada label dengan mesej pengesahan pesanan anda.",
        "Tolak bungkusan yang mencurigakan dan jangan buat bayaran — ini nasihat Ninja Van sendiri.",
        "Jangan klik pautan atau beri maklumat peribadi melalui SMS atau panggilan “kurier” yang tidak dikenali.",
        "Jika anda telah ditipu, hubungi Pusat Respons Scam Kebangsaan (NSRC) di 997 dan buat laporan polis.",
      ]},
    ],
    qa: [
      { q: "Apa maksud COD?", a: "COD bermaksud cash on delivery atau bayar tunai semasa terima. Anda membayar kurier apabila bungkusan sampai, bukan semasa membuat pesanan." },
      { q: "Bolehkah saya buka bungkusan COD sebelum bayar?", a: "Biasanya tidak. Kebanyakan kurier memerlukan bayaran dibuat sebelum bungkusan dibuka. Semak butiran pada label dengan pengesahan pesanan anda sebelum membayar." },
      { q: "Apa perlu dibuat jika menerima bungkusan COD yang tidak dipesan?", a: "Tolak bungkusan itu dan jangan bayar. Jika anda telah ditipu, hubungi NSRC di 997 dan buat laporan polis." },
      { q: "Adakah COD lebih selamat daripada bayar dalam talian?", a: "COD mengurangkan risiko membayar untuk barang yang tidak dihantar, tetapi ia tidak menjamin kualiti barang. Beli daripada penjual yang boleh dihubungi dan semak produk kesihatan dengan nombor MAL." },
    ],
    sources: [src.ninjaScam, src.malayMailCod],
    disclaimer: "Artikel ini ialah panduan umum pengguna. Syarat COD berbeza mengikut penjual dan kurier.",
  },
  {
    slug: "what-is-cash-on-delivery",
    title: "What is COD, and how do you avoid COD parcel scams?",
    seoTitle: "What Is Cash on Delivery & How to Avoid Scams",
    description: "What COD (cash on delivery) means, how paying on delivery works in Malaysia, its pros and limits, and how to spot and refuse COD parcels you never ordered.",
    lead: "COD (cash on delivery) means you pay the courier when the parcel arrives, not when you order. It reduces the risk of paying for goods that never arrive, but scammers also use COD by sending parcels nobody ordered. Only pay for parcels you ordered yourself and whose details match the seller's confirmation.",
    imageAlt: "Illustration of a parcel and cash for an article on what COD means",
    blocks: [
      { heading: "What does COD mean in online shopping?", paragraphs: [
        "COD stands for cash on delivery — in Malay, “bayar tunai semasa terima”. The seller ships the goods through a courier, the courier collects payment from you at the door, and the money is then passed to the seller.",
        "Some couriers accept COD payment by e-wallet or QR code, but this depends on the courier and area.",
      ] },
      { heading: "How does the COD process work?", paragraphs: [], list: [
        "You place an order with the seller and give your name, phone number and address.",
        "The seller confirms the order and the amount to pay.",
        "The parcel is shipped; the courier may call you before arriving.",
        "You check the details on the label, then pay the exact amount to the courier.",
      ], after: [
        "For Lebih Yakin orders, the steps are explained in [how to order](/en/how-to-order), and COD details for our store are on the [shipping & COD](/en/shipping) page.",
      ] },
      { heading: "What are the pros and cons of COD?", paragraphs: [
        "The main advantage is that you do not have to share card details or transfer money before the goods arrive. This suits people who are new to shopping online.",
        "The downsides are that you, or someone you trust, must be home to receive and pay, you need cash ready, and COD may not be available in every area. Most couriers also do not let you open the parcel before paying.",
      ] },
      { heading: "How do COD parcel scams happen?", paragraphs: [
        "Ninja Van warns about COD parcels sent to people who never bought them, or whose contents are far from what was expected. Malay Mail (June 2025) reported that scammers use victims' personal details to send parcels that were never ordered, hoping someone at home will pay.",
      ] },
      { heading: "How can you avoid COD scams?", paragraphs: [], list: [
        "Only pay for parcels you ordered yourself. If unsure, ask your family before paying.",
        "Check the seller's name and the amount on the label against your order confirmation.",
        "Refuse suspicious parcels and do not pay — this is Ninja Van's own advice.",
        "Do not click links or give personal details through unknown “courier” texts or calls.",
        "If you have been scammed, call the National Scam Response Centre (NSRC) on 997 and make a police report.",
      ]},
    ],
    qa: [
      { q: "What does COD mean?", a: "COD means cash on delivery. You pay the courier when the parcel arrives, not when you place the order." },
      { q: "Can I open a COD parcel before paying?", a: "Usually not. Most couriers require payment before the parcel is opened. Check the details on the label against your order confirmation before paying." },
      { q: "What should I do if I receive a COD parcel I did not order?", a: "Refuse the parcel and do not pay. If you have been scammed, call the NSRC on 997 and make a police report." },
      { q: "Is COD safer than paying online?", a: "COD reduces the risk of paying for goods that never arrive, but it does not guarantee quality. Buy from sellers you can contact, and check health products for a MAL number." },
    ],
    sources: [src.ninjaScam, src.malayMailCod],
    disclaimer: "This article is a general consumer guide. COD terms vary by seller and courier.",
  },
);

const chooseSupplement = qaArticle(
  "choose-supplement",
  "buying",
  {
    slug: "cara-pilih-suplemen-selamat",
    title: "Bagaimana memilih suplemen atau produk herba yang selamat?",
    seoTitle: "Cara Pilih Suplemen & Produk Herba Selamat",
    description: "Senarai semak memilih suplemen selamat di Malaysia: nombor MAL dan hologram, dakwaan yang patut dielakkan, membaca label, interaksi ubat dan bila perlu bertanya ahli farmasi.",
    lead: "Pilih suplemen atau produk herba yang berdaftar dengan KKM (ada nombor MAL dan hologram yang boleh disemak di laman NPRA), mempunyai label lengkap, dan tidak membuat dakwaan “menyembuhkan” atau “kesan segera”. “Semula jadi” tidak semestinya selamat, jadi bincang dengan doktor atau ahli farmasi jika anda mempunyai penyakit, mengambil ubat atau mengandung.",
    imageAlt: "Ilustrasi senarai semak dan botol suplemen untuk artikel cara memilih suplemen selamat",
    blocks: [
      { heading: "Adakah saya benar-benar memerlukan suplemen?", paragraphs: [
        "Bagi kebanyakan orang, pemakanan seimbang, tidur yang cukup dan aktiviti fizikal memberi kesan yang lebih besar daripada mana-mana suplemen. NIH Office of Dietary Supplements menyatakan suplemen bukan ubat dan tidak bertujuan untuk merawat, mendiagnosis atau menyembuhkan penyakit.",
        "Jika anda memilih suplemen kerana rasa letih atau kurang tenaga, semak dahulu punca yang biasa — lihat [kenapa selalu penat dan mengantuk](/blog/kenapa-selalu-penat).",
      ] },
      { heading: "Bagaimana menyemak nombor MAL dan hologram?", paragraphs: [
        "Di Malaysia, ubat, produk tradisional dan suplemen kesihatan perlu didaftarkan dengan Pihak Berkuasa Kawalan Dadah (PBKD) di bawah KKM. Produk berdaftar mempunyai nombor MAL dan hologram keselamatan pada label.",
        "Semak nombor MAL di carian produk NPRA (QUEST3+) dan pastikan nama produk, pengilang dan bentuk dos sepadan dengan bungkusan. Langkah lengkap ada dalam [cara semak produk lulus KKM](/blog/cara-semak-produk-lulus-kkm).",
      ] },
      { heading: "Dakwaan apa yang patut membuat anda curiga?", paragraphs: [
        "NCCIH mengingatkan bahawa produk yang dipasarkan sebagai suplemen — terutamanya untuk menurunkan berat badan, prestasi seksual dan bina badan — kadangkala dicemari ubat preskripsi yang tidak diisytiharkan. Di Malaysia, NPRA pernah mengumumkan produk tradisional yang dikesan mengandungi racun berjadual seperti sildenafil dan tadalafil.",
      ], list: [
        "Janji “menyembuhkan”, “kesan segera” atau “100% tanpa kesan sampingan”.",
        "Dakwaan merawat penyakit seperti diabetes, darah tinggi atau kanser.",
        "Tiada nombor MAL, atau nombor yang tidak sepadan dengan produk di laman NPRA.",
        "Harga yang terlalu murah, atau penjual yang tidak boleh dihubungi.",
      ] },
      { heading: "Apa yang perlu dibaca pada label?", paragraphs: [], list: [
        "Nombor MAL dan hologram.",
        "Senarai ramuan dan kandungan setiap dos.",
        "Cara penggunaan, dos maksimum dan amaran.",
        "Nama dan alamat pengilang atau pemegang pendaftaran.",
        "Tarikh luput dan nombor kelompok (batch).",
      ], after: [
        "Jika anda membeli dalam talian, minta gambar label penuh sebelum membeli. Di Lebih Yakin, anda boleh meminta gambar label dan nombor pendaftaran melalui WhatsApp sebelum membuat pesanan — lihat [cara pesan](/cara-pesan).",
      ] },
      { heading: "Bila perlu bertanya doktor atau ahli farmasi dahulu?", paragraphs: [
        "NIH mengingatkan bahawa suplemen boleh berinteraksi dengan ubat, menjejaskan pembedahan, dan banyak yang tidak diuji pada wanita mengandung, ibu menyusu atau kanak-kanak. Bawa botol atau gambar label semasa berjumpa doktor atau ahli farmasi supaya mereka boleh menyemak ramuannya.",
      ] },
    ],
    qa: [
      { q: "Adakah produk semula jadi sentiasa selamat?", a: "Tidak. Menurut NIH, “semula jadi” tidak semestinya bermaksud selamat. Sesetengah produk botani boleh menjejaskan hati atau berinteraksi dengan ubat." },
      { q: "Adakah nombor MAL bermaksud produk itu berkesan?", a: "Nombor MAL menunjukkan produk telah didaftarkan dengan KKM berdasarkan penilaian kualiti dan keselamatan mengikut kategorinya. Ia tidak bermaksud produk itu menyembuhkan penyakit, dan ia tidak menggantikan nasihat doktor." },
      { q: "Bolehkah saya mengambil beberapa suplemen serentak?", a: "Mengambil banyak suplemen serentak meningkatkan risiko dos berlebihan dan interaksi. Senaraikan semua suplemen dan ubat anda dan semak dengan doktor atau ahli farmasi." },
      { q: "Di mana saya boleh menyemak nombor MAL?", a: "Di carian produk NPRA (QUEST3+). Masukkan nombor MAL atau nama produk dan pastikan butirannya sepadan dengan bungkusan." },
    ],
    sources: [src.pharmacyMal, src.quest, src.odsSupplements, src.nccihWisely, src.nanBao],
    doctorNote: "Bincang dengan doktor atau ahli farmasi sebelum mengambil sebarang suplemen jika anda mempunyai penyakit kronik, mengambil ubat (terutamanya ubat jantung, darah tinggi, diabetes atau pencair darah), akan menjalani pembedahan, atau mengandung dan menyusu. Hentikan penggunaan dan dapatkan rawatan jika mengalami kesan yang tidak dijangka.",
    disclaimer: "Artikel ini ialah panduan pengguna umum dan bukan nasihat perubatan.",
  },
  {
    slug: "how-to-choose-a-safe-supplement",
    title: "How do you choose a safe supplement or herbal product?",
    seoTitle: "How to Choose a Safe Supplement",
    description: "A checklist for choosing a safe supplement in Malaysia: MAL numbers and holograms, claims to avoid, reading the label, drug interactions, and when to ask a doctor or pharmacist.",
    lead: "Choose a supplement or herbal product that is registered with the KKM (it has a MAL number and hologram you can check on the NPRA website), has a complete label, and makes no “cure” or “instant results” claims. “Natural” does not always mean safe, so talk to a doctor or pharmacist if you have a health condition, take medicines or are pregnant.",
    imageAlt: "Illustration of a checklist and supplement bottle for an article on choosing a safe supplement",
    blocks: [
      { heading: "Do I really need a supplement?", paragraphs: [
        "For most people, a balanced diet, enough sleep and physical activity make a bigger difference than any supplement. The NIH Office of Dietary Supplements says supplements are not medicines and are not intended to treat, diagnose or cure disease.",
        "If you are thinking of a supplement because you feel tired or low on energy, check the common causes first — see [why am I always tired](/en/blog/why-am-i-always-tired).",
      ] },
      { heading: "How do you check a MAL number and hologram?", paragraphs: [
        "In Malaysia, medicines, traditional products and health supplements must be registered with the Drug Control Authority (DCA) under the KKM. Registered products carry a MAL number and a security hologram on the label.",
        "Check the MAL number in the NPRA product search (QUEST3+) and make sure the product name, manufacturer and dosage form match the pack. Full steps are in [how to check KKM registration](/en/blog/how-to-check-kkm-registration).",
      ] },
      { heading: "Which claims should make you suspicious?", paragraphs: [
        "NCCIH warns that products marketed as supplements — especially for weight loss, sexual performance and bodybuilding — are sometimes contaminated with undeclared prescription drugs. In Malaysia, NPRA has announced traditional products found to contain scheduled poisons such as sildenafil and tadalafil.",
      ], list: [
        "Promises to “cure”, give “instant results” or have “100% no side effects”.",
        "Claims to treat diseases such as diabetes, high blood pressure or cancer.",
        "No MAL number, or a number that does not match the product on the NPRA website.",
        "Prices that seem too good to be true, or sellers you cannot contact.",
      ] },
      { heading: "What should you read on the label?", paragraphs: [], list: [
        "The MAL number and hologram.",
        "The ingredient list and amount per dose.",
        "Directions, maximum dose and warnings.",
        "The name and address of the manufacturer or registration holder.",
        "The expiry date and batch number.",
      ], after: [
        "If you buy online, ask for a photo of the full label before buying. At Lebih Yakin, you can ask for label photos and the registration number on WhatsApp before you order — see [how to order](/en/how-to-order).",
      ] },
      { heading: "When should you ask a doctor or pharmacist first?", paragraphs: [
        "The NIH notes that supplements can interact with medicines, affect surgery, and many have not been tested in pregnant women, nursing mothers or children. Bring the bottle or a photo of the label when you see a doctor or pharmacist so they can check the ingredients.",
      ] },
    ],
    qa: [
      { q: "Are natural products always safe?", a: "No. According to the NIH, “natural” does not always mean safe. Some botanical products can harm the liver or interact with medicines." },
      { q: "Does a MAL number mean a product works?", a: "A MAL number shows the product has been registered with the KKM based on an assessment of quality and safety for its category. It does not mean the product cures disease, and it does not replace a doctor's advice." },
      { q: "Can I take several supplements at once?", a: "Taking many supplements at once raises the risk of too high a dose and of interactions. List all your supplements and medicines and check them with a doctor or pharmacist." },
      { q: "Where can I check a MAL number?", a: "In the NPRA product search (QUEST3+). Enter the MAL number or product name and make sure the details match the pack." },
    ],
    sources: [src.pharmacyMal, src.quest, src.odsSupplements, src.nccihWisely, src.nanBao],
    doctorNote: "Talk to a doctor or pharmacist before taking any supplement if you have a long-term condition, take medicines (especially for the heart, blood pressure, diabetes or blood thinning), are due for surgery, or are pregnant or breastfeeding. Stop and get medical help if you have unexpected effects.",
    disclaimer: "This article is a general consumer guide, not medical advice.",
  },
);

const buyOnline = qaArticle(
  "buy-online",
  "buying",
  {
    slug: "beli-produk-kesihatan-dalam-talian",
    title: "Bagaimana membeli produk kesihatan dalam talian dengan selamat dan menjaga privasi?",
    seoTitle: "Beli Produk Kesihatan Online Dengan Selamat",
    description: "Panduan membeli produk kesihatan dalam talian di Malaysia: menyemak penjual, soalan sebelum memesan, bungkusan dan privasi, data peribadi, dan apa perlu dibuat semasa menerima.",
    lead: "Beli daripada penjual yang boleh dihubungi dan bersedia menjawab soalan, semak nombor MAL produk, dan baca polisi penghantaran, pemulangan dan privasi sebelum memesan. Jika privasi penting bagi anda, tanya penjual terlebih dahulu bagaimana bungkusan dilabel dan maklumat apa yang dikongsi dengan kurier — jangan hanya bergantung pada andaian.",
    imageAlt: "Ilustrasi telefon dan perisai untuk artikel membeli produk kesihatan dalam talian dengan selamat",
    blocks: [
      { heading: "Bagaimana mengetahui penjual itu boleh dipercayai?", paragraphs: [], list: [
        "Ada cara untuk menghubungi penjual (WhatsApp, e-mel) dan mereka menjawab soalan dengan jelas.",
        "Harga, kos penghantaran dan cara bayaran dinyatakan dengan jelas sebelum anda memesan.",
        "Ada polisi penghantaran, pemulangan dan privasi yang boleh dibaca.",
        "Penjual tidak membuat dakwaan perubatan yang melampau tentang produk.",
      ], after: [
        "Jika penjual enggan memberi gambar label atau nombor MAL, itu tanda untuk berhenti.",
      ] },
      { heading: "Apa yang perlu ditanya sebelum memesan?", paragraphs: [], list: [
        "Nombor MAL produk, supaya anda boleh menyemaknya sendiri di laman NPRA.",
        "Gambar label penuh: ramuan, cara guna, amaran dan tarikh luput.",
        "Jumlah yang perlu dibayar, cara bayaran dan sama ada COD tersedia untuk alamat anda.",
        "Cara bungkusan dihantar dan dilabel, jika privasi penting bagi anda.",
        "Apa yang berlaku jika barang rosak atau salah.",
      ], after: [
        "Di Lebih Yakin, semua soalan ini boleh ditanya melalui WhatsApp sebelum anda membuat keputusan. Langkah memesan ada dalam [cara pesan](/cara-pesan), dan semua produk serta harga ada di halaman [produk](/produk).",
      ] },
      { heading: "Adakah bungkusan produk kesihatan dihantar secara diskret?", paragraphs: [
        "Ia bergantung pada penjual. Ada penjual yang menggunakan kotak atau sampul biasa tanpa nama produk di luar, dan ada yang tidak. Label penghantaran biasanya mengandungi nama, nombor telefon dan alamat penerima, kerana kurier memerlukannya.",
        "Jangan anggap bungkusan akan dihantar secara diskret — tanya penjual secara jelas sebelum memesan, dan minta mereka terangkan apa yang tertulis di luar bungkusan.",
      ] },
      { heading: "Bagaimana maklumat peribadi saya dilindungi?", paragraphs: [
        "Di Malaysia, Akta Perlindungan Data Peribadi 2010 (PDPA) mengawal cara peniaga menggunakan data peribadi dalam urusan komersial. Penjual perlu memberitahu anda tujuan maklumat dikumpul dan dengan siapa ia dikongsi.",
        "Baca polisi privasi penjual. Polisi kami di [polisi privasi](/polisi-privasi) menerangkan bahawa nama, telefon dan alamat dikongsi dengan kurier untuk penghantaran, dan kami tidak menjual maklumat peribadi.",
      ] },
      { heading: "Apa perlu dibuat semasa dan selepas menerima bungkusan?", paragraphs: [], list: [
        "Semak nama penjual dan jumlah COD sebelum membayar. Jangan bayar untuk bungkusan yang anda tidak pesan — lihat [apa itu COD](/blog/apa-itu-cod).",
        "Semak produk, kuantiti, hologram dan tarikh luput sebaik sahaja dibuka.",
        "Jika rosak atau salah, ambil gambar dan hubungi penjual dengan segera. Polisi kami ada di [polisi pemulangan](/polisi-pemulangan).",
        "Baca label dan ikut cara guna; rujuk doktor atau ahli farmasi jika anda mempunyai masalah kesihatan.",
      ]},
    ],
    qa: [
      { q: "Adakah selamat membeli produk kesihatan dalam talian?", a: "Ia boleh selamat jika anda membeli daripada penjual yang boleh dihubungi, menyemak nombor MAL produk di laman NPRA, dan membaca polisi penghantaran, pemulangan dan privasi sebelum memesan." },
      { q: "Adakah nama produk akan tertulis di luar bungkusan?", a: "Ia bergantung pada penjual. Tanya penjual secara jelas sebelum memesan apa yang tertulis di luar bungkusan. Label penghantaran biasanya mengandungi nama, telefon dan alamat penerima." },
      { q: "Maklumat apa yang diperlukan untuk membuat pesanan?", a: "Biasanya nama, nombor telefon dan alamat penghantaran. Penjual perlu menerangkan tujuan maklumat ini dan dengan siapa ia dikongsi, seperti syarikat kurier." },
      { q: "Bolehkah saya membatalkan pesanan COD?", a: "Ia bergantung pada polisi penjual. Di Lebih Yakin, beritahu kami di WhatsApp sebelum bungkusan dihantar; tiada bayaran dikenakan kerana bayaran dibuat semasa terima." },
    ],
    sources: [src.pdpa, src.pharmacyMal, src.quest, src.ninjaScam],
    disclaimer: "Artikel ini ialah panduan pengguna umum. Polisi berbeza mengikut penjual; rujuk halaman polisi kami untuk butiran Lebih Yakin.",
  },
  {
    slug: "buying-health-products-online",
    title: "How do you buy health products online safely and privately?",
    seoTitle: "Buy Health Products Online Safely & Privately",
    description: "Buying health products online in Malaysia: checking the seller, what to ask before ordering, packaging and privacy, your personal data, and what to do when the parcel arrives.",
    lead: "Buy from a seller you can contact and who is willing to answer questions, check the product's MAL number, and read the shipping, returns and privacy policies before ordering. If privacy matters to you, ask the seller first how the parcel is labelled and what information is shared with the courier — do not rely on assumptions.",
    imageAlt: "Illustration of a phone and shield for an article on buying health products online safely",
    blocks: [
      { heading: "How do you know a seller is trustworthy?", paragraphs: [], list: [
        "There is a way to contact the seller (WhatsApp, email) and they answer questions clearly.",
        "The price, delivery cost and payment method are clear before you order.",
        "There are shipping, returns and privacy policies you can read.",
        "The seller does not make exaggerated medical claims about products.",
      ], after: [
        "If a seller refuses to share label photos or a MAL number, that is a sign to stop.",
      ] },
      { heading: "What should you ask before ordering?", paragraphs: [], list: [
        "The product's MAL number, so you can check it yourself on the NPRA website.",
        "A photo of the full label: ingredients, directions, warnings and expiry date.",
        "The amount to pay, how to pay, and whether COD is available for your address.",
        "How the parcel is packed and labelled, if privacy matters to you.",
        "What happens if an item arrives damaged or wrong.",
      ], after: [
        "At Lebih Yakin, you can ask all of these on WhatsApp before you decide. The ordering steps are in [how to order](/en/how-to-order), and all products and prices are on the [products](/en/products) page.",
      ] },
      { heading: "Are health products shipped in discreet packaging?", paragraphs: [
        "It depends on the seller. Some use plain boxes or envelopes with no product name on the outside, and some do not. The shipping label usually shows the recipient's name, phone number and address, because the courier needs them.",
        "Do not assume a parcel will be discreet — ask the seller clearly before ordering, and ask them to explain what is written on the outside of the parcel.",
      ] },
      { heading: "How is my personal information protected?", paragraphs: [
        "In Malaysia, the Personal Data Protection Act 2010 (PDPA) governs how businesses use personal data in commercial transactions. Sellers should tell you why they collect your information and who they share it with.",
        "Read the seller's privacy policy. Ours, in the [privacy policy](/en/privacy-policy), explains that your name, phone and address are shared with the courier for delivery, and that we do not sell personal information.",
      ] },
      { heading: "What should you do when the parcel arrives?", paragraphs: [], list: [
        "Check the seller's name and the COD amount before paying. Do not pay for a parcel you did not order — see [what is cash on delivery](/en/blog/what-is-cash-on-delivery).",
        "Check the product, quantity, hologram and expiry date as soon as you open it.",
        "If anything is damaged or wrong, take photos and contact the seller straight away. Our policy is in the [refund policy](/en/refund-policy).",
        "Read the label and follow the directions; ask a doctor or pharmacist if you have a health condition.",
      ]},
    ],
    qa: [
      { q: "Is it safe to buy health products online?", a: "It can be, if you buy from a seller you can contact, check the product's MAL number on the NPRA website, and read the shipping, returns and privacy policies before ordering." },
      { q: "Will the product name be written on the outside of the parcel?", a: "It depends on the seller. Ask the seller clearly before ordering what is written on the outside of the parcel. The shipping label usually shows the recipient's name, phone and address." },
      { q: "What information do I need to give to order?", a: "Usually your name, phone number and delivery address. The seller should explain why they need this information and who they share it with, such as the courier." },
      { q: "Can I cancel a COD order?", a: "It depends on the seller's policy. At Lebih Yakin, tell us on WhatsApp before the parcel is shipped; there is no charge because you pay on delivery." },
    ],
    sources: [src.pdpa, src.pharmacyMal, src.quest, src.ninjaScam],
    disclaimer: "This article is a general consumer guide. Policies vary by seller; see our policy pages for Lebih Yakin details.",
  },
);


const unregisteredHerbalCoffee = qaArticle(
  "unregistered-herbal-coffee",
  "buying",
  {
    slug: "kenapa-kopi-herba-dilarang",
    title: "Kenapa ada pembeli hampir bayar kopi herba yang sudah dilarang?",
    seoTitle: "Hampir Bayar Kopi Herba Dilarang",
    description: "Cerita pembeli yang hampir bayar kopi herba terlarang, apa kata NPRA dan KKM tentang Nan Bao serta Kopi Pejuang, dan cara semak label sebelum hulur duit.",
    lead: "Kurier sudah telefon dari pagar. Pembeli hampir hulur duit, sebab chat semalam berkata kopi ini bukan yang dilarang, ini yang lain. Berhenti sekejap. Nama yang sedap dan ayat “yang ini lain” tidak membuktikan pek itu selamat. Sesetengah kopi dan produk herba memang dilarang, kerana ujian kerajaan menemui ubat preskripsi yang tidak dibenarkan, atau label tidak cukup maklumat. Jangan cari penjual lain untuk produk yang sudah dilarang.",
    imageAlt: "Ikon cawan kopi dan biji kopi untuk artikel semakan kopi herba",
    blocks: [
      { heading: "Kenapa orang hampir terpedaya dengan kopi herba?", paragraphs: [
        "Sebab jualannya cepat dan mesranya rapat. Penjual bisik yang jenama dilarang itu orang lain, yang di tangan anda kopi herba biasa. Pembeli yang penat selepas kerja tidak sempat baca label kecil. Duit COD pun baru keluar bila bungkusan sampai, jadi rasa macam belum rugi.",
        "Pihak berkuasa di Malaysia pernah umumkan dua sebab yang berbeza. Pertama, produk yang dilabel tradisional atau herba kadang-kadang mengandungi ubat preskripsi yang tidak dibenarkan dalam formulasi itu. Kedua, sesetengah produk kopi gagal peraturan pelabelan makanan, jadi ia tidak boleh diiklankan atau dijual. Larangan itu tentang produk yang dinamakan, bukan senarai semua kopi, dan bukan jemputan untuk mencari ganti yang serupa.",
      ] },
      { heading: "Apa yang NPRA tarik pada 18 Mac 2019?", paragraphs: [
        "Pada 18 Mac 2019, Bahagian Regulatori Farmasi Negara (NPRA) meminta orang awam supaya tidak membeli dan tidak menggunakan produk tradisional Nan Bao Capsule. NPRA berkata produk itu dikesan mengandungi sildenafil dan tadalafil. Pendaftarannya dibatalkan oleh Pihak Berkuasa Kawalan Dadah pada mesyuarat ke-332 kerana kedua-dua bahan itu tidak dibenarkan dalam formulasi produk tradisional.",
        "NPRA menyatakan sildenafil dan tadalafil ialah ubat preskripsi. Ubat yang mengandunginya hanya boleh dibekalkan oleh doktor atau diperoleh di farmasi dengan preskripsi. NPRA memberi amaran bahawa penggunaan tanpa pengawasan doktor boleh menyebabkan kesan serius, termasuk pengurangan atau kehilangan penglihatan dan pendengaran, penurunan tekanan darah yang mendadak, serta strok dan serangan jantung. Risiko ini lebih tinggi bagi pesakit jantung seperti angina yang mengambil ubat nitrat.",
        "NPRA juga berkata penjualan dan pengedaran produk itu melanggar Akta Jualan Dadah 1952 dan Peraturan-Peraturan Kawalan Dadah dan Kosmetik 1984. Bagi kesalahan pertama, individu boleh didenda tidak melebihi RM25,000 atau dipenjara tidak melebihi 3 tahun, atau kedua-duanya. Kesalahan seterusnya: denda tidak melebihi RM50,000 atau penjara tidak melebihi 5 tahun, atau kedua-duanya. Syarikat: denda sehingga RM50,000 untuk kesalahan pertama dan sehingga RM100,000 untuk kesalahan seterusnya. Orang yang sedang menggunakan produk itu dinasihatkan berhenti serta-merta dan mendapatkan nasihat profesional kesihatan jika ada ketidakselesaan.",
      ] },
      { heading: "Apa yang berlaku pada Kopi Pejuang pada Ogos 2024?", paragraphs: [
        "Pada 22 Ogos 2024, Utusan melaporkan kenyataan Kementerian Kesihatan Malaysia melalui Program Keselamatan dan Kualiti Makanan. KKM mengesahkan produk Kopi Pejuang dikesan mengandungi tadalafil. Semua peniaga, termasuk peniaga dalam talian, yang masih ada stok diarahkan menghentikan penjualan serta-merta. Iklan di platform e-dagang dan media sosial juga hendaklah dihentikan. Kalau ada chat yang kata stok lama masih boleh, itu bukan kebenaran.",
        "Utusan melaporkan label produk itu tidak mematuhi Peraturan-Peraturan Makanan 1985 kerana tiada nama dan alamat pengilang, pembungkus, pengedar, empunya hak untuk mengilang, atau pengimport. Kerana itu, KKM berkata produk itu tidak boleh diiklankan untuk jualan dan tidak boleh dijual di bawah Peraturan 9. Jangan cari penjual lain untuk Kopi Pejuang.",
        "Utusan juga melaporkan bahawa dari tahun 2021 hingga Julai 2024, 500 sampel kopi pelbagai jenama dianalisis dan 7 sampel mengandungi racun berjadual yang tidak dibenarkan di bawah Peraturan-Peraturan Makanan 1985. Utusan memetik KKM: jika disabitkan kesalahan, denda tidak melebihi RM100,000 atau penjara tidak melebihi 10 tahun, atau kedua-duanya.",
      ] },
      { heading: "Apa satu soalan yang patut ditanya sebelum hulur duit?", paragraphs: [
        "Tanya: boleh saya lihat gambar label penuh sekarang, sebelum kurier sampai? Jika jawapannya berpusing, itu sudah cukup untuk tidak bayar.",
      ], list: [
        "Minta gambar label penuh: nama produk, ramuan, nama dan alamat pengeluar atau pengedar, cara guna dan amaran.",
        "Cari nombor MAL jika produk itu ubat, produk tradisional atau suplemen, kemudian semak di QUEST3+.",
        "Untuk langkah nombor MAL, hologram FarmaTag dan aduan, ikut panduan [cara semak produk lulus KKM](/blog/cara-semak-produk-lulus-kkm).",
        "Jika label tiada nama pengeluar, atau penjual enggan menunjukkan label, jangan beli.",
      ], after: [
        "Nama jualan seperti kopi jantan tidak memberitahu anda sama ada sesuatu pek itu berdaftar. Semak pek yang ada di tangan anda, bukan nama yang digunakan dalam iklan.",
      ] },
      { heading: "Kalau bukan kopi itu, apa yang ada dalam katalog Lebih Yakin?", paragraphs: [
        "Artikel ini bukan cadangan untuk menggantikan kopi yang dilarang. Dalam katalog laman ini, [Magnum Pump](/produk/magnum-pump), [Ultrahot](/produk/ultrahot) dan [Horsemen](/produk/horsemen) masing-masing berharga RM159 seunit, dengan penghantaran percuma ke seluruh Malaysia dan bayaran tunai semasa terima (COD). Ramuan, cara guna dan amaran ada pada label bungkusan, bukan dalam artikel ini.",
        "Minta gambar label penuh melalui WhatsApp sebelum memesan, kemudian buat semakan sendiri. Laman ini tidak menyatakan nombor MAL bagi produk itu. Artikel ini juga tidak mengatakan produk itu kopi, dan tidak mengatakan ia mengandungi mana-mana herba.",
      ] },
    ],
    qa: [
      { q: "Perlukah saya membeli kopi yang sudah dilarang daripada penjual lain?", a: "Tidak. Jika pihak berkuasa mengarahkan penjualan dihentikan, jangan mencari penjual lain, walaupun chat kata stok ini lain. Hentikan penggunaan jika anda sudah memilikinya, dan dapatkan nasihat doktor jika anda rasa tidak sihat." },
      { q: "Adakah setiap kopi herba mengandungi ubat preskripsi?", a: "Tidak. Kenyataan di atas tentang produk yang dinamakan, dan tentang 7 daripada 500 sampel kopi yang dianalisis antara 2021 dan Julai 2024. Angka itu bukan bermaksud setiap kopi. Tetap semak label pek yang anda ingin beli." },
      { q: "Di mana nombor MAL boleh disemak?", a: "Di carian produk NPRA yang dipanggil QUEST3+. Langkah demi langkah ada dalam artikel cara semak produk lulus KKM di blog ini." },
      { q: "Adakah Magnum Pump, Ultrahot atau Horsemen sejenis kopi?", a: "Tidak dinyatakan begitu. Halaman setiap produk hanya menyatakan harga RM159, penghantaran percuma dan bayaran semasa terima. Ramuan ada pada label. Minta gambar label jika anda mahu menyemaknya sebelum membeli." },
    ],
    sources: [src.nanBao, src.utusanKopiPejuang, src.pharmacyMal, src.quest],
    disclaimer: "Artikel ini maklumat pengguna berdasarkan kenyataan NPRA pada 18 Mac 2019 dan laporan Utusan pada 22 Ogos 2024. Adegan pembeli di pagar ialah contoh, bukan laporan kes sebenar. Ia bukan nasihat perubatan dan bukan dakwaan tentang sebarang produk.",
  },
  {
    slug: "why-some-herbal-coffees-are-banned",
    title: "Why do buyers nearly pay for a herbal coffee that is already banned?",
    seoTitle: "Nearly Paid for a Banned Coffee",
    description: "A buyer nearly pays for a banned herbal coffee, what NPRA and the ministry said about Nan Bao and Kopi Pejuang, and how to check the label before handing over cash.",
    lead: "The courier is already at the gate. The buyer nearly hands over the cash, because last night's chat said this coffee is not the banned one, this one is different. Pause. A pleasant name and the line “this one is different” do not prove the pack is safe. Some coffees and herbal products really are banned, because government tests found prescription medicines that are not allowed, or the label does not carry enough information. Do not look for another seller of a product that has already been banned.",
    imageAlt: "Icon of a coffee cup and coffee beans for an article on checking herbal coffee",
    blocks: [
      { heading: "Why do people nearly fall for a herbal coffee?", paragraphs: [
        "Because the sale is quick and the pitch is friendly. The seller whispers that the banned brand is someone else's, and the pack in your hand is an ordinary herbal coffee. A buyer who is tired after work does not stop to read the small label. With cash on delivery, the money only leaves your hand when the parcel arrives, so it feels as if you have not lost anything yet.",
        "Malaysian authorities have announced two different reasons. First, a product labelled as traditional or herbal sometimes contains a prescription medicine that is not allowed in that formula. Second, some coffee products fail food labelling rules, so they cannot be advertised or sold. A ban is about the products named in the statement. It is not a list of every coffee, and it is not an invitation to look for a similar replacement.",
      ] },
      { heading: "What did the NPRA pull on 18 March 2019?", paragraphs: [
        "On 18 March 2019, the National Pharmaceutical Regulatory Agency (NPRA) asked the public not to buy or use the traditional product Nan Bao Capsule. The NPRA said the product was found to contain sildenafil and tadalafil. Its registration was cancelled by the Drug Control Authority at its 332nd meeting because neither substance is allowed in a traditional-product formula.",
        "The NPRA said sildenafil and tadalafil are prescription medicines. Medicines that contain them may be supplied only by a doctor, or by a pharmacy with a doctor's prescription. The NPRA warned that use without a doctor's supervision can cause serious effects, including reduced or lost sight and hearing, a sudden drop in blood pressure, stroke and heart attack. The risk is higher for heart patients, such as people with angina who take nitrate medicines.",
        "The NPRA also said selling and distributing that product breaks the Sale of Drugs Act 1952 and the Control of Drugs and Cosmetics Regulations 1984. For a first offence, a person may be fined not more than RM25,000 or jailed for not more than 3 years, or both. A later offence: a fine of not more than RM50,000 or jail of not more than 5 years, or both. A company: a fine of up to RM50,000 for a first offence and up to RM100,000 for a later offence. People already using the product were advised to stop at once and to get health advice if they feel unwell.",
      ] },
      { heading: "What happened to Kopi Pejuang in August 2024?", paragraphs: [
        "On 22 August 2024, Utusan reported a statement from the Ministry of Health Malaysia through the Food Safety and Quality Programme. The ministry confirmed that the product Kopi Pejuang was found to contain tadalafil. Every seller, including online sellers, still holding stock was told to stop sales immediately. Advertising on e-commerce platforms and social media was also to stop. If a chat says the old stock is still fine, that is not permission.",
        "Utusan reported that the label did not comply with the Food Regulations 1985 because it had no name and address of the manufacturer, packer, distributor, owner of the right to manufacture, or importer. Because of that, the ministry said the product could not be advertised for sale and could not be sold under Regulation 9. Do not look for another seller of Kopi Pejuang.",
        "Utusan also reported that from 2021 through July 2024, 500 coffee samples of various brands were analysed and 7 samples contained scheduled poisons that are not allowed under the Food Regulations 1985. Utusan quoted the ministry: if convicted, a fine of not more than RM100,000 or jail of not more than 10 years, or both.",
      ] },
      { heading: "What is the one question to ask before you hand over cash?", paragraphs: [
        "Ask this: can I see a photo of the full label now, before the courier arrives? If the answer wanders, that is already enough reason not to pay.",
      ], list: [
        "Ask for a photo of the full label: product name, ingredients, the producer or distributor's name and address, directions and warnings.",
        "Look for a MAL number if the product is a medicine, traditional product or supplement, then check it on QUEST3+.",
        "For the MAL number, the FarmaTag hologram and how to complain, follow [how to check KKM registration](/en/blog/how-to-check-kkm-registration).",
        "If the label has no producer name, or the seller will not show the label, do not buy.",
      ], after: [
        "A sales name such as kopi jantan does not tell you whether that pack is registered. Check the pack in front of you, not the name used in an advert.",
      ] },
      { heading: "If it is not that coffee, what is in the Lebih Yakin catalogue?", paragraphs: [
        "This article is not a suggestion to replace a banned coffee. In this site's catalogue, [Magnum Pump](/en/products/magnum-pump), [Ultrahot](/en/products/ultrahot) and [Horsemen](/en/products/horsemen) are each RM159, with free delivery across Malaysia and cash on delivery (COD). Ingredients, directions and warnings are on the pack label, not in this article.",
        "Ask on WhatsApp for a photo of the full label before you order, then check it yourself. This site does not state a MAL number for those products. This article also does not say those products are coffee, and it does not say they contain any herb.",
      ] },
    ],
    qa: [
      { q: "Should I buy a banned coffee from another seller?", a: "No. If the authorities have ordered sales to stop, do not look for another seller, even if a chat says this stock is different. Stop using it if you already have it, and get a doctor's advice if you feel unwell." },
      { q: "Does every herbal coffee contain a prescription medicine?", a: "No. The statements above are about the named products, and about 7 of 500 coffee samples analysed from 2021 through July 2024. That figure does not mean every coffee. Still check the label of the pack you want to buy." },
      { q: "Where can a MAL number be checked?", a: "On the NPRA product search called QUEST3+. The step-by-step guide is the article on how to check KKM registration, on this blog." },
      { q: "Are Magnum Pump, Ultrahot or Horsemen a coffee?", a: "They are not described that way. Each product page states only the RM159 price, free delivery and payment on delivery. Ingredients are on the label. Ask for a label photo if you want to check before you buy." },
    ],
    sources: [src.nanBao, src.utusanKopiPejuang, src.pharmacyMal, src.quest],
    disclaimer: "This article is consumer information based on the NPRA statement of 18 March 2019 and Utusan's report of 22 August 2024. The buyer at the gate is an example, not a report of a real case. It is not medical advice and makes no claim about any product.",
  },
  { published: "2026-10-09", updated: "2026-10-09" },
);


const codSabahSarawak = qaArticle(
  "cod-sabah-sarawak",
  "buying",
  {
    slug: "cod-sabah-sarawak-berapa-hari",
    title: "Duduk di Sabah atau Sarawak, berapa hari bungkusan COD sampai?",
    seoTitle: "COD ke Sabah & Sarawak: Berapa Hari?",
    description: "Pesan dari Kota Kinabalu atau Kuching dan tertanya bila kurier datang? Tempoh penghantaran Lebih Yakin, angka rasmi Pos Malaysia untuk Malaysia Timur, dan cara COD berfungsi.",
    lead: "Di Kota Kinabalu, seorang pembeli tekan hantar pada mesej WhatsApp, kemudian mula kira hari. Ramai kedai online senyap-senyap tulis “kecuali Sabah dan Sarawak”. Di Lebih Yakin, penghantaran percuma ke seluruh Malaysia termasuk Sabah dan Sarawak. Kami biasanya serahkan bungkusan kepada kurier dalam 1–3 hari selepas pesanan disahkan, dan kurier biasanya ambil 2–7 hari. Secara keseluruhan, biasanya 3–10 hari dari pengesahan pesanan, bergantung pada lokasi.",
    imageAlt: "Ikon kotak bungkusan untuk artikel penghantaran COD ke Sabah dan Sarawak",
    blocks: [
      { heading: "Kenapa orang Sabah dan Sarawak selalu tanya soalan ini dulu?", paragraphs: [
        "Sebab mereka sudah biasa kecewa. Iklan kata penghantaran percuma, tetapi di bawah ada tulisan kecil yang mengecualikan Malaysia Timur, atau ada caj tambahan selepas pesanan dibuat. Jadi soalan pertama bukan pasal produk. Soalan pertama ialah: sampai tak ke sini, dan berapa lama?",
        "Di laman ini jawapannya tertulis di halaman [penghantaran](/penghantaran): kami menghantar ke Semenanjung Malaysia, Sabah dan Sarawak, dan tiada caj penghantaran ditambah pada harga produk.",
      ] },
      { heading: "Berapa hari biasanya, mengikut polisi kedai ini?", paragraphs: [
        "Selepas pesanan disahkan di WhatsApp, kami biasanya serahkan bungkusan kepada kurier dalam 1–3 hari. Penghantaran oleh kurier biasanya 2–7 hari bergantung pada lokasi. Secara keseluruhan, pesanan biasanya sampai dalam 3–10 hari dari pengesahan pesanan.",
        "Kami sahkan tempoh untuk alamat anda semasa pengesahan pesanan. Kelewatan boleh berlaku semasa musim perayaan, cuaca buruk atau di kawasan pedalaman. Kami tidak menjanjikan tarikh yang lebih cepat daripada polisi ini.",
      ] },
      { heading: "Apa kata angka rasmi kurier tentang Malaysia Timur?", paragraphs: [
        "Sebagai gambaran, halaman perniagaan Pos Malaysia menyenaraikan penghantaran bungkusan domestik standard 1–3 hari untuk Semenanjung Malaysia dan 3–7 hari untuk Malaysia Timur. Itu angka Pos Malaysia untuk perkhidmatan mereka, bukan janji kedai ini, dan artikel ini tidak menyatakan kurier mana yang akan membawa bungkusan anda.",
        "Pengajarannya mudah: bila kedai berkata Semenanjung lebih cepat, itu bukan alasan. Angka kurier sendiri memang membezakan Semenanjung dan Malaysia Timur.",
      ] },
      { heading: "Bagaimana COD berfungsi bila bungkusan sampai?", paragraphs: [
        "Anda bayar tunai kepada kurier apabila bungkusan sampai. Jumlah yang perlu dibayar dimaklumkan semasa kami mengesahkan pesanan. Ketersediaan COD boleh berbeza mengikut kawasan dan kurier, jadi kami sahkan sama ada COD tersedia untuk alamat anda sebelum menghantar.",
        "Sebelum bayar, semak nama penjual dan jumlah COD sama dengan yang disahkan di WhatsApp. Jangan bayar untuk bungkusan yang anda tidak pesan. Panduan penuh ada dalam [apa itu COD](/blog/apa-itu-cod).",
      ] },
      { heading: "Apa yang berlaku jika barang salah, atau anda ubah fikiran?", paragraphs: [
        "Jika barang rosak, salah atau tidak lengkap, hubungi kami di WhatsApp secepat mungkin dengan gambar barang dan nama pada pesanan. Anda juga boleh memulangkan barang dalam 7 hari dari tarikh penghantaran jika barang itu belum dibuka dan belum digunakan. Butiran ada dalam [polisi pemulangan](/polisi-pemulangan).",
        "Jika bungkusan COD ditolak atau tidak dapat dihantar selepas pesanan disahkan, kami mungkin tidak dapat menerima pesanan COD lagi daripada nombor yang sama. Jadi pesan bila anda memang bersedia menerima.",
      ] },
      { heading: "Apa yang ada dalam katalog untuk dipesan dari Malaysia Timur?", paragraphs: [
        "Katalog ini ringkas. [Magnum Pump](/produk/magnum-pump), [Ultrahot](/produk/ultrahot) dan [Horsemen](/produk/horsemen) masing-masing RM159 seunit, penghantaran percuma termasuk ke Sabah dan Sarawak, dan bayaran tunai semasa terima. Ramuan, cara guna dan amaran ada pada label bungkusan.",
        "Minta gambar label penuh melalui WhatsApp sebelum memesan jika anda mahu menyemaknya dahulu. Langkah memesan ada dalam [cara pesan](/cara-pesan).",
      ] },
    ],
    qa: [
      { q: "Adakah penghantaran ke Sabah dan Sarawak dikenakan caj?", a: "Tidak. Penghantaran percuma ke seluruh Malaysia, termasuk Sabah dan Sarawak. Tiada caj penghantaran ditambah pada harga produk." },
      { q: "Berapa lama pesanan sampai ke Sabah atau Sarawak?", a: "Biasanya 3–10 hari dari pengesahan pesanan: 1–3 hari untuk kami serahkan kepada kurier dan 2–7 hari untuk penghantaran, bergantung pada lokasi. Kami sahkan tempoh untuk alamat anda semasa pengesahan pesanan." },
      { q: "Adakah COD tersedia di kawasan pedalaman?", a: "Ia bergantung pada kawasan dan kurier. Kami sahkan sama ada COD tersedia untuk alamat anda sebelum bungkusan dihantar." },
      { q: "Bolehkah saya pulangkan barang dari Sabah atau Sarawak?", a: "Boleh, dalam 7 hari dari tarikh penghantaran jika barang belum dibuka dan belum digunakan. Hubungi kami di WhatsApp atau e-mel dalam tempoh itu untuk langkah seterusnya." },
    ],
    sources: [src.lyShipping, src.lyReturns, src.posBusiness, src.ninjaScam],
    disclaimer: "Artikel ini menerangkan polisi Lebih Yakin dan angka umum Pos Malaysia. Pembeli di Kota Kinabalu ialah contoh, bukan kes sebenar. Tempoh sebenar disahkan semasa pengesahan pesanan.",
  },
  {
    slug: "cod-delivery-time-sabah-sarawak",
    title: "Living in Sabah or Sarawak, how many days does a COD parcel take?",
    seoTitle: "COD to Sabah & Sarawak: How Many Days?",
    description: "Ordering from Kota Kinabalu or Kuching and wondering when the courier comes? Lebih Yakin's delivery times, Pos Malaysia's official East Malaysia figures, and how COD works.",
    lead: "In Kota Kinabalu, a buyer taps send on a WhatsApp message, then starts counting days. Plenty of online shops quietly write “except Sabah and Sarawak”. At Lebih Yakin, delivery is free across Malaysia, including Sabah and Sarawak. We usually hand the parcel to the courier within 1–3 days after the order is confirmed, and the courier usually takes 2–7 days. Overall, it usually takes 3–10 days from order confirmation, depending on location.",
    imageAlt: "Parcel box icon for an article on COD delivery to Sabah and Sarawak",
    blocks: [
      { heading: "Why do people in Sabah and Sarawak ask this first?", paragraphs: [
        "Because they are used to being let down. An advert says free delivery, but the small print excludes East Malaysia, or an extra charge appears after the order. So the first question is not about the product. The first question is: will it reach me, and how long will it take?",
        "On this site the answer is written on the [delivery](/en/shipping) page: we deliver to Peninsular Malaysia, Sabah and Sarawak, and no delivery charge is added to the product price.",
      ] },
      { heading: "How many days does it usually take under this shop's policy?", paragraphs: [
        "After your order is confirmed on WhatsApp, we usually hand the parcel to the courier within 1–3 days. Courier delivery usually takes 2–7 days depending on location. Overall, orders usually arrive within 3–10 days of order confirmation.",
        "We confirm the timing for your address when we confirm your order. Delays can happen during festive seasons, bad weather or in remote areas. We do not promise a faster date than this policy.",
      ] },
      { heading: "What do official courier figures say about East Malaysia?", paragraphs: [
        "For a picture of the gap, Pos Malaysia's business page lists standard domestic parcel delivery as 1–3 days for Peninsular Malaysia and 3–7 days for East Malaysia. Those are Pos Malaysia's figures for its own service, not this shop's promise, and this article does not say which courier will carry your parcel.",
        "The lesson is simple: when a shop says the Peninsula is faster, that is not an excuse. The courier's own figures separate the Peninsula from East Malaysia.",
      ] },
      { heading: "How does COD work when the parcel arrives?", paragraphs: [
        "You pay the courier in cash when the parcel arrives. The amount due is confirmed when we confirm your order. COD availability can vary by area and courier, so we confirm whether COD is available for your address before shipping.",
        "Before paying, check that the seller's name and the COD amount match what was confirmed on WhatsApp. Do not pay for a parcel you did not order. The full guide is in [what is cash on delivery](/en/blog/what-is-cash-on-delivery).",
      ] },
      { heading: "What happens if the item is wrong, or you change your mind?", paragraphs: [
        "If an item is damaged, wrong or incomplete, contact us on WhatsApp as soon as possible with photos and the name on the order. You can also return an item within 7 days of delivery if it is unopened and unused. Details are in the [refund policy](/en/refund-policy).",
        "If a COD parcel is refused or cannot be delivered after the order was confirmed, we may not be able to accept further COD orders from the same number. So order when you are ready to receive it.",
      ] },
      { heading: "What is in the catalogue to order from East Malaysia?", paragraphs: [
        "The catalogue is short. [Magnum Pump](/en/products/magnum-pump), [Ultrahot](/en/products/ultrahot) and [Horsemen](/en/products/horsemen) are each RM159, with free delivery including to Sabah and Sarawak, and cash on delivery. Ingredients, directions and warnings are on the pack label.",
        "Ask on WhatsApp for a photo of the full label before ordering if you want to check it first. The ordering steps are in [how to order](/en/how-to-order).",
      ] },
    ],
    qa: [
      { q: "Is there a charge for delivery to Sabah and Sarawak?", a: "No. Delivery is free across Malaysia, including Sabah and Sarawak. No delivery charge is added to the product price." },
      { q: "How long does an order take to reach Sabah or Sarawak?", a: "Usually 3–10 days from order confirmation: 1–3 days for us to hand it to the courier and 2–7 days for delivery, depending on location. We confirm the timing for your address when we confirm the order." },
      { q: "Is COD available in remote areas?", a: "It depends on the area and courier. We confirm whether COD is available for your address before the parcel is shipped." },
      { q: "Can I return an item from Sabah or Sarawak?", a: "Yes, within 7 days of delivery if the item is unopened and unused. Contact us on WhatsApp or by email within that time for the next steps." },
    ],
    sources: [src.lyShipping, src.lyReturns, src.posBusiness, src.ninjaScam],
    disclaimer: "This article explains Lebih Yakin's policy and Pos Malaysia's general figures. The buyer in Kota Kinabalu is an example, not a real case. The actual timing is confirmed when your order is confirmed.",
  },
  { published: "2026-10-09", updated: "2026-10-09" },
);

export const buyingArticles: Article[] = [cod, chooseSupplement, buyOnline, unregisteredHerbalCoffee, codSabahSarawak];
