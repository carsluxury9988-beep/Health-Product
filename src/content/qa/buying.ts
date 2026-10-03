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

export const buyingArticles: Article[] = [cod, chooseSupplement, buyOnline];
