import type { Article } from "@/content/articles";
import { qaArticle } from "@/content/qa/helpers";
import { src } from "@/content/qa/sources";

const sleep = qaArticle(
  "sleep-better",
  "mens-health",
  {
    slug: "cara-tidur-lena",
    title: "Bagaimana cara tidur lena pada waktu malam?",
    seoTitle: "Cara Tidur Lena & Berapa Jam Tidur Cukup",
    description: "Cara tidur lena secara semula jadi: waktu tidur yang tetap, bilik yang gelap dan sejuk, kurangkan kafein dan skrin, serta bila perlu berjumpa doktor tentang insomnia atau dengkur.",
    lead: "Kebanyakan orang dewasa memerlukan sekurang-kurangnya 7 jam tidur setiap malam. Untuk tidur lebih lena, tidur dan bangun pada waktu yang sama setiap hari, pastikan bilik gelap, senyap dan sejuk, elakkan kafein selepas tengah hari dan skrin sejam sebelum tidur, dan bergerak aktif pada siang hari. Jika susah tidur berterusan berminggu-minggu atau anda berdengkur kuat dan tercungap, jumpa doktor.",
    imageAlt: "Ilustrasi bulan sabit dan bintang untuk artikel cara tidur lena",
    blocks: [
      { heading: "Berapa jam tidur yang cukup untuk orang dewasa?", paragraphs: [
        "Pernyataan konsensus American Academy of Sleep Medicine dan Sleep Research Society mengesyorkan orang dewasa tidur 7 jam atau lebih setiap malam secara tetap. Tidur kurang daripada itu secara berterusan dikaitkan dengan risiko kesihatan seperti tekanan darah tinggi, kenaikan berat badan dan mood yang terganggu.",
        "Kualiti juga penting. Tidur 8 jam yang kerap terganggu boleh membuat anda tetap letih pada siang hari.",
      ] },
      { heading: "Apa tabiat harian yang membantu tidur lena?", paragraphs: [
        "Panduan NHS dan CDC menekankan rutin yang konsisten. Antara langkah yang paling berkesan:",
      ], list: [
        "Tidur dan bangun pada waktu yang sama, termasuk hujung minggu.",
        "Dapatkan cahaya matahari pagi dan bergerak aktif pada siang hari.",
        "Elakkan kopi, teh pekat dan minuman bertenaga selepas tengah hari.",
        "Jangan makan berat atau terlalu pedas 2–3 jam sebelum tidur.",
        "Hadkan tidur siang kepada 20–30 minit, dan bukan pada lewat petang.",
      ] },
      { heading: "Bagaimana menyediakan bilik tidur untuk tidur lena?", paragraphs: [
        "Bilik yang gelap, senyap dan sejuk memudahkan badan berehat. Gunakan langsir tebal, kipas atau penghawa dingin pada suhu selesa, dan keluarkan televisyen atau kerja dari bilik tidur jika boleh.",
        "Letakkan telefon jauh dari katil. Cahaya skrin dan notifikasi membuat otak terus berjaga. Jika telefon perlu ada untuk penggera, aktifkan mod “Jangan Ganggu”.",
      ] },
      { heading: "Apa perlu dibuat jika tidak boleh tidur selepas 20 minit?", paragraphs: [
        "Jangan berbaring sambil gelisah melihat jam. Bangun, pergi ke ruang lain yang malap dan lakukan sesuatu yang tenang — membaca buku, berzikir, atau pernafasan perlahan — sehingga rasa mengantuk, kemudian kembali ke katil. Ini membantu otak mengaitkan katil dengan tidur, bukan dengan risau.",
        "Jika fikiran sering melayang ke kerja atau masalah, tulis senarai perkara yang perlu dibuat esok sebelum masuk tidur. Panduan [cara kurangkan stres](/blog/cara-kurangkan-stres) juga boleh membantu.",
      ] },
      { heading: "Apa kesan kurang tidur pada badan?", paragraphs: [
        "Dalam jangka pendek, kurang tidur menyebabkan rasa mengantuk, sukar fokus, mudah marah dan masa tindak balas yang perlahan — berbahaya ketika memandu. Dalam jangka panjang, CDC mengaitkan kurang tidur yang kronik dengan diabetes jenis 2, penyakit jantung, obesiti dan kemurungan.",
        "Jika anda sentiasa letih walaupun tidur cukup, baca [kenapa selalu penat dan mengantuk](/blog/kenapa-selalu-penat).",
      ] },
    ],
    qa: [
      { q: "Berapa jam tidur yang sesuai untuk lelaki dewasa?", a: "Sekurang-kurangnya 7 jam setiap malam bagi kebanyakan orang dewasa, mengikut pernyataan konsensus pakar tidur. Keperluan sebenar berbeza sedikit antara individu; tanda tidur mencukupi ialah anda bangun segar dan tidak mengantuk pada siang hari." },
      { q: "Adakah tidur siang baik?", a: "Tidur siang yang singkat, sekitar 20–30 minit, boleh menyegarkan. Tidur siang yang lama atau pada lewat petang boleh menyukarkan tidur malam." },
      { q: "Adakah dengkur kuat berbahaya?", a: "Dengkur yang kuat, terutamanya jika disertai nafas terhenti, tercungap atau sangat mengantuk pada siang hari, boleh menjadi tanda apnea tidur. Keadaan ini perlu dinilai oleh doktor." },
      { q: "Bolehkah saya ambil pil tidur sendiri?", a: "Jangan mengambil ubat tidur tanpa nasihat doktor atau ahli farmasi. Sebahagiannya boleh menyebabkan ketagihan atau mengantuk keesokan hari, dan perlu disesuaikan dengan keadaan kesihatan anda." },
    ],
    sources: [src.aasmSleep, src.cdcSleep, src.nhsInsomnia, src.nhsSleepApnoea],
    doctorNote: "Jumpa doktor jika susah tidur berlarutan lebih daripada beberapa minggu, anda berdengkur kuat dengan nafas terhenti atau tercungap, sangat mengantuk sehingga sukar memandu dengan selamat, atau masalah tidur berkait dengan rasa sedih atau cemas yang berpanjangan.",
    disclaimer: "Artikel ini ialah maklumat kesihatan umum dan bukan nasihat perubatan. Rujuk doktor untuk diagnosis dan rawatan.",
  },
  {
    slug: "how-to-sleep-better",
    title: "How can you sleep better at night?",
    seoTitle: "How to Sleep Better & How Much Sleep You Need",
    description: "How to sleep better naturally: a fixed sleep schedule, a dark and cool bedroom, less caffeine and screen time, and when to see a doctor about insomnia or snoring.",
    lead: "Most adults need at least 7 hours of sleep a night. To sleep better, go to bed and wake up at the same time every day, keep your bedroom dark, quiet and cool, avoid caffeine after midday and screens for an hour before bed, and stay active during the day. If poor sleep goes on for weeks, or you snore loudly and gasp, see a doctor.",
    imageAlt: "Illustration of a crescent moon and stars for an article on sleeping better",
    blocks: [
      { heading: "How much sleep do adults need?", paragraphs: [
        "A consensus statement from the American Academy of Sleep Medicine and the Sleep Research Society recommends that adults sleep 7 or more hours a night on a regular basis. Regularly sleeping less is linked to health risks such as high blood pressure, weight gain and mood problems.",
        "Quality matters too. Eight hours of sleep that is frequently interrupted can still leave you tired during the day.",
      ] },
      { heading: "Which daily habits help you sleep better?", paragraphs: [
        "NHS and CDC guidance stresses a consistent routine. Some of the most effective steps:",
      ], list: [
        "Go to bed and get up at the same time, including at weekends.",
        "Get morning daylight and stay active during the day.",
        "Avoid coffee, strong tea and energy drinks after midday.",
        "Do not eat a heavy or very spicy meal 2–3 hours before bed.",
        "Limit naps to 20–30 minutes, and not late in the afternoon.",
      ] },
      { heading: "How should you set up your bedroom for better sleep?", paragraphs: [
        "A dark, quiet and cool room makes it easier for your body to rest. Use thick curtains, a fan or air conditioning at a comfortable temperature, and move the TV or work out of the bedroom if you can.",
        "Keep your phone away from the bed. Screen light and notifications keep the brain alert. If you need the phone as an alarm, turn on “Do Not Disturb”.",
      ] },
      { heading: "What should you do if you can't fall asleep after 20 minutes?", paragraphs: [
        "Do not lie there anxiously watching the clock. Get up, go to another dimly lit room and do something calm — read, pray or breathe slowly — until you feel sleepy, then go back to bed. This helps your brain link the bed with sleep, not worry.",
        "If your mind keeps drifting to work or problems, write tomorrow's to-do list before bed. The guide on [how to reduce stress](/en/blog/how-to-reduce-stress) can also help.",
      ] },
      { heading: "What does lack of sleep do to your body?", paragraphs: [
        "In the short term, too little sleep causes sleepiness, poor concentration, irritability and slower reactions — dangerous when driving. Over the long term, the CDC links chronic lack of sleep with type 2 diabetes, heart disease, obesity and depression.",
        "If you are always tired even when you sleep enough, read [why am I always tired](/en/blog/why-am-i-always-tired).",
      ] },
    ],
    qa: [
      { q: "How many hours of sleep does an adult man need?", a: "At least 7 hours a night for most adults, according to the sleep experts' consensus statement. Individual needs vary a little; a good sign is that you wake up refreshed and are not sleepy during the day." },
      { q: "Are naps good for you?", a: "A short nap of about 20–30 minutes can be refreshing. Long naps or naps late in the afternoon can make it harder to sleep at night." },
      { q: "Is loud snoring dangerous?", a: "Loud snoring, especially with pauses in breathing, gasping or heavy daytime sleepiness, can be a sign of sleep apnoea. It needs to be assessed by a doctor." },
      { q: "Can I take sleeping pills on my own?", a: "Do not take sleeping medicines without advice from a doctor or pharmacist. Some can be habit-forming or cause drowsiness the next day, and they need to suit your health condition." },
    ],
    sources: [src.aasmSleep, src.cdcSleep, src.nhsInsomnia, src.nhsSleepApnoea],
    doctorNote: "See a doctor if poor sleep lasts more than a few weeks, you snore loudly with pauses in breathing or gasping, you are so sleepy it is hard to drive safely, or your sleep problems come with lasting low mood or anxiety.",
    disclaimer: "This article is general health information, not medical advice. See a doctor for diagnosis and treatment.",
  },
);

const stress = qaArticle(
  "reduce-stress",
  "mens-health",
  {
    slug: "cara-kurangkan-stres",
    title: "Bagaimana cara mengurangkan stres kerja dan di rumah?",
    seoTitle: "Cara Kurangkan Stres Kerja & di Rumah",
    description: "Cara kurangkan stres secara praktikal: kenal tanda stres, rutin harian, senaman, pernafasan perlahan, bercakap dengan seseorang dan bila perlu bantuan seperti Talian HEAL 15555.",
    lead: "Stres boleh dikurangkan dengan langkah kecil yang konsisten: kenal pasti punca, kekalkan rutin tidur dan makan, bergerak aktif setiap hari, berlatih pernafasan perlahan, hadkan masa skrin dan berita, dan bercakap dengan orang yang dipercayai. Jika stres membuat anda sukar berfungsi selama beberapa minggu, dapatkan bantuan doktor atau hubungi Talian HEAL 15555.",
    imageAlt: "Ilustrasi gelombang tenang untuk artikel cara mengurangkan stres",
    blocks: [
      { heading: "Apa itu stres?", paragraphs: [
        "Pertubuhan Kesihatan Sedunia (WHO) menerangkan stres sebagai keadaan risau atau tegang mental akibat situasi yang sukar. Stres ialah tindak balas semula jadi manusia, dan sedikit stres boleh membantu kita bertindak. Masalah timbul apabila ia berterusan dan mula menjejaskan tidur, kerja dan hubungan.",
      ] },
      { heading: "Apakah tanda-tanda stres pada lelaki?", paragraphs: [
        "Lelaki kadang-kadang tidak menyedari mereka stres kerana tandanya muncul pada badan dan tingkah laku. Menurut NHS, tanda biasa termasuk:",
      ], list: [
        "Sakit kepala, otot tegang, sakit perut atau dada berdebar.",
        "Susah tidur atau tidur terlalu banyak.",
        "Mudah marah, tidak sabar dengan isteri atau anak.",
        "Sukar fokus dan membuat keputusan.",
        "Lebih banyak merokok, minum minuman manis atau makan berlebihan.",
      ] },
      { heading: "Bagaimana cara kurangkan stres kerja?", paragraphs: [
        "Mulakan dengan apa yang boleh dikawal. Senaraikan tugas, susun mengikut keutamaan dan bincang dengan penyelia jika beban kerja tidak realistik. Ambil rehat pendek setiap 60–90 minit, dan cuba hadkan membalas mesej kerja selepas waktu pejabat.",
        "Sebelum masuk rumah, beri diri 5 minit dalam kereta atau di luar pintu untuk bernafas dan “menukar mod”. Ini membantu supaya tekanan kerja tidak dibawa kepada keluarga.",
      ] },
      { heading: "Apa teknik cepat untuk tenangkan diri?", paragraphs: [
        "Pernafasan perlahan ialah cara mudah yang boleh dibuat di mana-mana: tarik nafas melalui hidung selama 4 saat, tahan sebentar, hembus perlahan melalui mulut selama 6 saat. Ulang 5–10 kali.",
        "Berjalan 10 minit di luar, solat atau zikir dengan tenang, dan meregangkan badan juga membantu sebahagian orang mengembalikan fokus.",
      ] },
      { heading: "Apa tabiat harian yang membantu mengurus stres?", paragraphs: [
        "WHO mengesyorkan mengekalkan rutin harian, tidur yang cukup, makan secara tetap, bergerak aktif dan berhubung dengan orang lain. Hadkan masa membaca berita dan media sosial jika ia menambah risau.",
        "Tidur dan stres saling mempengaruhi — lihat [cara tidur lena](/blog/cara-tidur-lena). Senaman sederhana yang konsisten juga membantu; panduan [cara meningkatkan stamina badan](/blog/cara-tingkatkan-stamina-badan) boleh menjadi permulaan.",
      ] },
      { heading: "Bagaimana stres mempengaruhi rumah tangga?", paragraphs: [
        "Stres yang tidak diurus mudah keluar sebagai marah kepada orang terdekat. Beritahu pasangan apabila anda sedang tertekan supaya dia tidak menyangka marah itu tentang dirinya. Panduan [cara berkomunikasi dengan pasangan](/blog/cara-berkomunikasi-dengan-pasangan) boleh membantu.",
      ] },
    ],
    qa: [
      { q: "Bagaimana cara kurangkan stres dengan cepat?", a: "Cuba pernafasan perlahan: tarik nafas 4 saat, hembus 6 saat, ulang 5–10 kali. Berjalan sekejap di luar, minum air dan berehat dari skrin juga membantu menenangkan badan dalam beberapa minit." },
      { q: "Adakah stres boleh menyebabkan penyakit?", a: "Stres yang berpanjangan boleh menjejaskan tidur, selera makan, tekanan darah dan mood, dan membuat tabiat tidak sihat seperti merokok lebih sukar dihentikan. Jika anda risau tentang kesihatan anda, jumpa doktor." },
      { q: "Di mana saya boleh dapatkan bantuan jika terlalu tertekan?", a: "Talian HEAL 15555 oleh Kementerian Kesihatan Malaysia menyediakan sokongan psikososial setiap hari dari 8 pagi hingga 12 tengah malam. Anda juga boleh berjumpa doktor di klinik kesihatan atau klinik swasta. Dalam kecemasan, hubungi 999." },
    ],
    sources: [src.whoStress, src.nhsStress, src.heal],
    doctorNote: "Dapatkan bantuan jika stres membuat anda sukar bekerja atau menjaga keluarga selama beberapa minggu, anda rasa sedih atau putus asa hampir setiap hari, atau anda mula menggunakan rokok, alkohol atau ubat untuk bertahan. Talian HEAL 15555 (KKM) beroperasi setiap hari 8 pagi hingga 12 tengah malam. Jika anda atau sesiapa berada dalam bahaya segera, hubungi 999.",
    disclaimer: "Artikel ini ialah maklumat kesihatan umum dan bukan nasihat perubatan atau psikologi.",
  },
  {
    slug: "how-to-reduce-stress",
    title: "How can you reduce stress at work and at home?",
    seoTitle: "How to Reduce Stress at Work and at Home",
    description: "Practical ways to reduce stress: recognise the signs, keep a daily routine, exercise, slow breathing, talk to someone and when to get professional help such as the HEAL 15555 line.",
    lead: "Stress can be reduced with small, consistent steps: identify the cause, keep regular sleep and meals, move every day, practise slow breathing, limit screen time and news, and talk to someone you trust. If stress makes it hard to function for several weeks, see a doctor or call the HEAL 15555 line.",
    imageAlt: "Illustration of calm waves for an article on reducing stress",
    blocks: [
      { heading: "What is stress?", paragraphs: [
        "The World Health Organization describes stress as a state of worry or mental tension caused by a difficult situation. It is a natural human response, and a little stress can help us act. The problem starts when it is constant and begins to affect sleep, work and relationships.",
      ] },
      { heading: "What are the signs of stress in men?", paragraphs: [
        "Men sometimes do not notice they are stressed because the signs show up in the body and behaviour. According to the NHS, common signs include:",
      ], list: [
        "Headaches, muscle tension, stomach upset or a racing heart.",
        "Trouble sleeping or sleeping too much.",
        "Irritability and impatience with your wife or children.",
        "Difficulty concentrating and making decisions.",
        "Smoking more, drinking more sugary drinks or overeating.",
      ] },
      { heading: "How can you reduce stress at work?", paragraphs: [
        "Start with what you can control. List your tasks, rank them by priority and talk to your manager if the workload is unrealistic. Take short breaks every 60–90 minutes, and try to limit replying to work messages after hours.",
        "Before you walk into the house, give yourself 5 minutes in the car or outside the door to breathe and “switch modes”. It helps keep work pressure from spilling onto your family.",
      ] },
      { heading: "What are quick techniques to calm down?", paragraphs: [
        "Slow breathing is easy to do anywhere: breathe in through your nose for 4 seconds, pause briefly, then breathe out slowly through your mouth for 6 seconds. Repeat 5–10 times.",
        "A 10-minute walk outside, calm prayer or dhikr, and stretching also help many people regain focus.",
      ] },
      { heading: "Which daily habits help manage stress?", paragraphs: [
        "The WHO recommends keeping a daily routine, getting enough sleep, eating regularly, staying active and staying connected with other people. Limit time on news and social media if it adds to your worries.",
        "Sleep and stress affect each other — see [how to sleep better](/en/blog/how-to-sleep-better). Regular moderate exercise helps too; the guide on [how to build stamina naturally](/en/blog/how-to-build-stamina-naturally) is a good place to start.",
      ] },
      { heading: "How does stress affect a marriage?", paragraphs: [
        "Unmanaged stress often comes out as anger at the people closest to you. Tell your spouse when you are under pressure so they do not assume your mood is about them. The guide on [how to communicate with your spouse](/en/blog/how-to-communicate-with-your-spouse) can help.",
      ] },
    ],
    qa: [
      { q: "How can you reduce stress quickly?", a: "Try slow breathing: breathe in for 4 seconds, out for 6 seconds, and repeat 5–10 times. A short walk outside, a glass of water and a break from screens can also calm your body within minutes." },
      { q: "Can stress make you ill?", a: "Long-term stress can affect sleep, appetite, blood pressure and mood, and makes unhealthy habits such as smoking harder to stop. If you are worried about your health, see a doctor." },
      { q: "Where can I get help if I feel overwhelmed?", a: "The Ministry of Health Malaysia's HEAL 15555 line offers psychosocial support every day from 8am to midnight. You can also see a doctor at a government health clinic or private clinic. In an emergency, call 999." },
    ],
    sources: [src.whoStress, src.nhsStress, src.heal],
    doctorNote: "Get help if stress makes it hard to work or care for your family for several weeks, you feel sad or hopeless almost every day, or you have started relying on cigarettes, alcohol or medicines to cope. The MOH's HEAL 15555 line runs daily from 8am to midnight. If you or someone else is in immediate danger, call 999.",
    disclaimer: "This article is general health information, not medical or psychological advice.",
  },
);

const tired = qaArticle(
  "always-tired",
  "mens-health",
  {
    slug: "kenapa-selalu-penat",
    title: "Kenapa selalu penat dan mengantuk walaupun cukup tidur?",
    seoTitle: "Kenapa Selalu Penat & Mengantuk? Punca Biasa",
    description: "Punca biasa rasa selalu penat dan mengantuk: kualiti tidur, stres, pemakanan, kafein, kurang bergerak dan keadaan perubatan seperti anemia, diabetes, tiroid atau apnea tidur.",
    lead: "Rasa selalu penat biasanya berpunca daripada gaya hidup — tidur yang kurang berkualiti, stres, pemakanan tidak seimbang, terlalu banyak kafein atau gula, dan kurang bergerak. Tetapi keletihan yang berpanjangan juga boleh menjadi tanda keadaan perubatan seperti anemia, diabetes, masalah tiroid, apnea tidur atau kemurungan. Jika letih berlarutan beberapa minggu walaupun gaya hidup sudah diperbaiki, jumpa doktor.",
    imageAlt: "Ilustrasi bateri lemah untuk artikel kenapa selalu penat",
    blocks: [
      { heading: "Apakah punca gaya hidup yang paling biasa?", paragraphs: [
        "Menurut NHS, kebanyakan kes keletihan berkait dengan gaya hidup dan boleh diperbaiki:",
      ], list: [
        "Tidur tidak cukup atau kerap terganggu, termasuk kerja syif.",
        "Stres dan beban fikiran yang berterusan.",
        "Makan tidak teratur, banyak makanan bergula atau melangkau sarapan.",
        "Terlalu banyak kafein, yang mengganggu tidur malam.",
        "Kurang bergerak — badan yang jarang aktif lebih cepat letih.",
        "Kurang minum air, terutamanya dalam cuaca panas.",
      ] },
      { heading: "Kenapa cukup tidur tetapi masih mengantuk?", paragraphs: [
        "Jumlah jam tidur bukan satu-satunya ukuran. Tidur yang kerap terganggu — kerana bunyi, telefon, anak kecil atau dengkur — membuat badan tidak mendapat tidur nyenyak yang cukup. Apnea tidur, iaitu nafas terhenti berulang kali semasa tidur, ialah punca yang sering terlepas pandang pada lelaki, terutamanya yang berlebihan berat badan.",
        "Lihat [cara tidur lena](/blog/cara-tidur-lena) untuk langkah memperbaiki kualiti tidur.",
      ] },
      { heading: "Apakah keadaan perubatan yang boleh menyebabkan letih?", paragraphs: [
        "Keletihan yang tidak hilang walaupun gaya hidup sudah diperbaiki perlu diperiksa. Antara keadaan yang boleh dikesan melalui pemeriksaan dan ujian darah:",
      ], list: [
        "Anemia (kurang darah), contohnya akibat kekurangan zat besi.",
        "Diabetes atau gula darah yang tidak terkawal.",
        "Tiroid kurang aktif.",
        "Apnea tidur.",
        "Kemurungan atau keresahan.",
        "Kesan sampingan ubat tertentu.",
      ] },
      { heading: "Apa yang boleh dibuat sendiri untuk kurangkan rasa penat?", paragraphs: [
        "Tetapkan waktu tidur yang tetap, makan tiga hidangan seimbang mengikut Pinggan Sihat Malaysia, kurangkan minuman manis, dan mula bergerak secara berperingkat walaupun rasa letih — berjalan 10–15 minit selepas makan ialah permulaan yang baik.",
        "Untuk idea makanan, baca [makanan untuk tenaga dan stamina lelaki](/blog/makanan-untuk-stamina-lelaki). Untuk kecergasan, lihat [cara meningkatkan stamina badan secara semula jadi](/blog/cara-tingkatkan-stamina-badan).",
      ] },
      { heading: "Adakah suplemen membantu rasa penat?", paragraphs: [
        "Suplemen tidak menggantikan tidur, makanan dan rawatan punca sebenar. Jika keletihan disebabkan anemia atau tiroid, ia perlu didiagnosis dan dirawat oleh doktor. Jika anda tetap memilih produk kesihatan, pastikan ia berdaftar — lihat [cara semak produk lulus KKM](/blog/cara-semak-produk-lulus-kkm) dan [cara memilih suplemen yang selamat](/blog/cara-pilih-suplemen-selamat).",
      ] },
    ],
    qa: [
      { q: "Kenapa badan selalu penat dan mengantuk?", a: "Punca paling biasa ialah tidur yang kurang atau terganggu, stres, pemakanan tidak seimbang, kafein berlebihan dan kurang bergerak. Jika rasa letih berterusan walaupun tabiat sudah diperbaiki, doktor boleh memeriksa punca lain seperti anemia, diabetes, tiroid atau apnea tidur." },
      { q: "Bila rasa penat perlu dirisaukan?", a: "Jumpa doktor jika rasa letih berlarutan lebih daripada beberapa minggu, atau disertai berat badan turun tanpa sebab, sesak nafas, sakit dada, kerap dahaga dan kencing, atau rasa sedih yang berpanjangan." },
      { q: "Adakah kopi membantu hilangkan penat?", a: "Kopi boleh membuat anda lebih berjaga untuk sementara, tetapi kafein pada lewat petang atau malam boleh mengganggu tidur dan membuat anda lebih letih keesokan harinya. Hadkan kafein kepada waktu pagi dan awal tengah hari." },
    ],
    sources: [src.nhsTired, src.nhsIron, src.nhsSleepApnoea, src.mdg],
    doctorNote: "Jumpa doktor jika rasa letih berlarutan lebih daripada beberapa minggu tanpa sebab yang jelas, atau disertai berat badan turun tanpa sebab, sesak nafas, sakit dada, kerap dahaga dan kencing, berdengkur kuat dengan nafas terhenti, atau rasa sedih yang berpanjangan. Doktor boleh membuat pemeriksaan dan ujian darah yang sesuai.",
    disclaimer: "Artikel ini ialah maklumat kesihatan umum dan bukan nasihat perubatan.",
  },
  {
    slug: "why-am-i-always-tired",
    title: "Why am I always tired, even after enough sleep?",
    seoTitle: "Why Am I Always Tired? Common Causes",
    description: "Common reasons you feel tired all the time: sleep quality, stress, diet, caffeine, inactivity and medical conditions such as anaemia, diabetes, thyroid problems or sleep apnoea.",
    lead: "Feeling tired all the time usually comes from lifestyle — poor-quality sleep, stress, an unbalanced diet, too much caffeine or sugar, and too little movement. But long-lasting tiredness can also be a sign of a medical condition such as anaemia, diabetes, thyroid problems, sleep apnoea or depression. If tiredness lasts several weeks even after you improve your habits, see a doctor.",
    imageAlt: "Illustration of a low battery for an article on always feeling tired",
    blocks: [
      { heading: "What are the most common lifestyle causes?", paragraphs: [
        "According to the NHS, most tiredness is linked to lifestyle and can be improved:",
      ], list: [
        "Not enough sleep, or frequently interrupted sleep, including shift work.",
        "Ongoing stress and worry.",
        "Irregular meals, lots of sugary food or skipping breakfast.",
        "Too much caffeine, which disturbs night-time sleep.",
        "Too little movement — a body that is rarely active tires more easily.",
        "Not drinking enough water, especially in hot weather.",
      ] },
      { heading: "Why am I sleepy even though I sleep enough?", paragraphs: [
        "Hours in bed are not the only measure. Sleep that is often interrupted — by noise, phones, young children or snoring — means your body does not get enough deep sleep. Sleep apnoea, where breathing stops repeatedly during sleep, is an often-missed cause in men, especially those who are overweight.",
        "See [how to sleep better](/en/blog/how-to-sleep-better) for steps to improve sleep quality.",
      ] },
      { heading: "Which medical conditions can cause tiredness?", paragraphs: [
        "Tiredness that does not improve after lifestyle changes should be checked. Conditions that can be picked up through an examination and blood tests include:",
      ], list: [
        "Anaemia, for example from iron deficiency.",
        "Diabetes or poorly controlled blood sugar.",
        "An underactive thyroid.",
        "Sleep apnoea.",
        "Depression or anxiety.",
        "Side effects of certain medicines.",
      ] },
      { heading: "What can you do yourself to feel less tired?", paragraphs: [
        "Keep a fixed sleep schedule, eat three balanced meals following the Malaysian Healthy Plate, cut down on sugary drinks, and start moving gradually even when you feel tired — a 10–15 minute walk after meals is a good start.",
        "For food ideas, read [foods for men's energy and stamina](/en/blog/foods-for-mens-stamina). For fitness, see [how to build stamina naturally](/en/blog/how-to-build-stamina-naturally).",
      ] },
      { heading: "Do supplements help with tiredness?", paragraphs: [
        "Supplements do not replace sleep, food or treatment of the real cause. If tiredness is caused by anaemia or a thyroid problem, it needs to be diagnosed and treated by a doctor. If you still choose a health product, make sure it is registered — see [how to check KKM registration](/en/blog/how-to-check-kkm-registration) and [how to choose a safe supplement](/en/blog/how-to-choose-a-safe-supplement).",
      ] },
    ],
    qa: [
      { q: "Why is my body always tired and sleepy?", a: "The most common causes are short or interrupted sleep, stress, an unbalanced diet, too much caffeine and too little movement. If tiredness continues after you improve these habits, a doctor can check for other causes such as anaemia, diabetes, thyroid problems or sleep apnoea." },
      { q: "When should tiredness worry me?", a: "See a doctor if tiredness lasts more than a few weeks, or comes with unexplained weight loss, breathlessness, chest pain, frequent thirst and urination, or lasting low mood." },
      { q: "Does coffee help with tiredness?", a: "Coffee can make you more alert for a while, but caffeine in the late afternoon or evening can disturb sleep and leave you more tired the next day. Keep caffeine to the morning and early afternoon." },
    ],
    sources: [src.nhsTired, src.nhsIron, src.nhsSleepApnoea, src.mdg],
    doctorNote: "See a doctor if tiredness lasts more than a few weeks without a clear reason, or comes with unexplained weight loss, breathlessness, chest pain, frequent thirst and urination, loud snoring with pauses in breathing, or lasting low mood. A doctor can arrange the right examination and blood tests.",
    disclaimer: "This article is general health information, not medical advice.",
  },
);

const stamina = qaArticle(
  "build-stamina",
  "mens-health",
  {
    slug: "cara-tingkatkan-stamina-badan",
    title: "Bagaimana cara meningkatkan stamina badan secara semula jadi?",
    seoTitle: "Cara Tingkatkan Stamina Badan Semula Jadi",
    description: "Cara meningkatkan stamina badan supaya tidak mudah lelah: senaman aerobik berperingkat, latihan kekuatan, tidur, pemakanan dan pelan 8 minggu yang boleh dibuat di rumah.",
    lead: "Stamina badan — keupayaan untuk bergerak lebih lama tanpa cepat lelah — meningkat melalui senaman yang konsisten dan bertambah secara berperingkat. WHO mengesyorkan orang dewasa melakukan 150–300 minit aktiviti aerobik sederhana seminggu (contohnya jalan laju) serta latihan kekuatan sekurang-kurangnya 2 hari seminggu, disokong oleh tidur yang cukup dan pemakanan seimbang. Kebanyakan orang mula merasa perbezaan dalam beberapa minggu.",
    imageAlt: "Ilustrasi kasut sukan dan laluan untuk artikel cara meningkatkan stamina",
    blocks: [
      { heading: "Apa maksud stamina badan?", paragraphs: [
        "Dalam konteks kecergasan, stamina atau daya tahan ialah keupayaan jantung, paru-paru dan otot untuk bekerja lebih lama — contohnya mendaki tangga tanpa tercungap, bermain dengan anak tanpa cepat letih, atau bekerja sepanjang hari dengan tenaga yang stabil.",
        "Stamina dibina, bukan dibeli. Tiada makanan atau produk yang boleh menggantikan latihan yang konsisten.",
      ] },
      { heading: "Berapa banyak senaman yang diperlukan?", paragraphs: [
        "Garis panduan aktiviti fizikal WHO untuk orang dewasa:",
      ], list: [
        "150–300 minit seminggu aktiviti aerobik intensiti sederhana (jalan laju, berbasikal santai, berenang), atau 75–150 minit intensiti tinggi (berlari, futsal, badminton yang laju).",
        "Latihan kekuatan otot sekurang-kurangnya 2 hari seminggu.",
        "Kurangkan masa duduk yang lama; sedikit pergerakan lebih baik daripada tiada langsung.",
      ] },
      { heading: "Bagaimana pelan mudah 8 minggu untuk bermula?", paragraphs: [
        "Pelan ini sesuai untuk orang dewasa sihat yang jarang bersenam. Gunakan “ujian bercakap”: intensiti sederhana bermaksud anda masih boleh bercakap tetapi tidak boleh menyanyi.",
      ], list: [
        "Minggu 1–2: jalan laju 20 minit, 4 hari seminggu.",
        "Minggu 3–4: jalan laju 30 minit, 5 hari seminggu; tambah 2 sesi kekuatan ringkas (tekan tubi di dinding, cangkung ke kerusi, angkat botol air).",
        "Minggu 5–6: selang-seli 2 minit jalan laju dengan 1 minit jogging perlahan selama 25–30 minit, 3 hari seminggu.",
        "Minggu 7–8: jogging perlahan berterusan 15–20 minit atau aktiviti sukan pilihan, dan teruskan latihan kekuatan 2 kali seminggu.",
      ] },
      { heading: "Bagaimana cara meningkatkan stamina di rumah tanpa alat?", paragraphs: [
        "Litar mudah 15–20 minit sudah memadai: naik turun tangga, cangkung, tekan tubi (di lutut atau dinding), plank, dan langkah ke hadapan (lunges). Buat setiap gerakan 30–40 saat, rehat 20 saat, ulang 3–4 pusingan.",
        "Aktiviti harian juga dikira — membasuh kereta, berkebun, berjalan ke surau atau kedai, dan bermain dengan anak.",
      ] },
      { heading: "Apa peranan tidur dan makanan?", paragraphs: [
        "Badan membina kecergasan semasa berehat. Tidur yang cukup — sekurang-kurangnya 7 jam — membantu pemulihan; lihat [cara tidur lena](/blog/cara-tidur-lena). Makan hidangan seimbang dengan karbohidrat kompleks, protein dan sayur, dan minum air secukupnya terutama dalam cuaca panas. Idea hidangan ada dalam [makanan untuk tenaga dan stamina lelaki](/blog/makanan-untuk-stamina-lelaki).",
      ] },
      { heading: "Kenapa stamina tidak meningkat walaupun sudah bersenam?", paragraphs: [
        "Punca biasa ialah tidak konsisten, menambah intensiti terlalu cepat sehingga cedera, kurang tidur, atau rehat yang tidak cukup. Jika anda cepat sesak nafas, sakit dada atau pening walaupun dengan aktiviti ringan, hentikan dan jumpa doktor — ini bukan masalah stamina biasa. Baca juga [kenapa selalu penat](/blog/kenapa-selalu-penat).",
      ] },
    ],
    qa: [
      { q: "Berapa lama untuk meningkatkan stamina?", a: "Ramai orang mula merasa lebih bertenaga selepas 4–8 minggu bersenam secara konsisten 3–5 kali seminggu. Kemajuan bergantung kepada tahap kecergasan permulaan, umur, tidur dan konsistensi." },
      { q: "Apa senaman terbaik untuk stamina?", a: "Senaman aerobik seperti jalan laju, jogging, berbasikal dan berenang membina daya tahan jantung dan paru-paru, manakala latihan kekuatan membantu otot kurang cepat letih. Gabungan kedua-duanya paling baik." },
      { q: "Adakah selamat bersenam jika saya ada darah tinggi atau penyakit jantung?", a: "Aktiviti fizikal biasanya bermanfaat, tetapi jika anda mempunyai penyakit jantung, darah tinggi yang tidak terkawal, diabetes atau sakit dada, berjumpa doktor dahulu untuk mendapatkan pelan yang selamat." },
    ],
    sources: [src.whoActivity, src.aasmSleep, src.mdg],
    doctorNote: "Jumpa doktor sebelum memulakan senaman yang lebih berat jika anda mempunyai penyakit jantung, darah tinggi yang tidak terkawal, diabetes, sakit sendi yang teruk atau pernah pengsan. Hentikan senaman dan dapatkan rawatan segera jika mengalami sakit dada, sesak nafas yang luar biasa atau pening.",
    disclaimer: "Artikel ini ialah maklumat kecergasan umum dan bukan nasihat perubatan.",
  },
  {
    slug: "how-to-build-stamina-naturally",
    title: "How can you build your stamina naturally?",
    seoTitle: "How to Build Stamina Naturally",
    description: "How to build stamina so you don't tire easily: gradual aerobic exercise, strength training, sleep, nutrition and an 8-week plan you can start at home.",
    lead: "Physical stamina — being able to keep moving for longer without tiring quickly — improves with consistent exercise that increases gradually. The WHO recommends that adults do 150–300 minutes of moderate aerobic activity a week (such as brisk walking) plus strength training on at least 2 days, supported by enough sleep and balanced meals. Most people notice a difference within a few weeks.",
    imageAlt: "Illustration of running shoes and a path for an article on building stamina",
    blocks: [
      { heading: "What does stamina mean?", paragraphs: [
        "In fitness terms, stamina or endurance is the ability of your heart, lungs and muscles to keep working for longer — climbing stairs without gasping, playing with your children without tiring quickly, or getting through the day with steady energy.",
        "Stamina is built, not bought. No food or product can replace consistent training.",
      ] },
      { heading: "How much exercise do you need?", paragraphs: [
        "The WHO physical activity guidelines for adults:",
      ], list: [
        "150–300 minutes a week of moderate-intensity aerobic activity (brisk walking, easy cycling, swimming), or 75–150 minutes of vigorous activity (running, futsal, fast badminton).",
        "Muscle-strengthening activity on at least 2 days a week.",
        "Cut down on long periods of sitting; some movement is better than none.",
      ] },
      { heading: "What is a simple 8-week plan to get started?", paragraphs: [
        "This plan suits healthy adults who rarely exercise. Use the “talk test”: moderate intensity means you can still talk but cannot sing.",
      ], list: [
        "Weeks 1–2: brisk walk for 20 minutes, 4 days a week.",
        "Weeks 3–4: brisk walk for 30 minutes, 5 days a week; add 2 short strength sessions (wall push-ups, sit-to-stand from a chair, lifting water bottles).",
        "Weeks 5–6: alternate 2 minutes of brisk walking with 1 minute of easy jogging for 25–30 minutes, 3 days a week.",
        "Weeks 7–8: continuous easy jogging for 15–20 minutes or a sport you enjoy, and keep strength training twice a week.",
      ] },
      { heading: "How can you build stamina at home without equipment?", paragraphs: [
        "A simple 15–20 minute circuit is enough: stair climbs, squats, push-ups (on your knees or against a wall), planks and lunges. Do each move for 30–40 seconds, rest 20 seconds and repeat 3–4 rounds.",
        "Everyday activity counts too — washing the car, gardening, walking to the mosque or shop, and playing with your children.",
      ] },
      { heading: "What role do sleep and food play?", paragraphs: [
        "Your body builds fitness while it rests. Enough sleep — at least 7 hours — helps recovery; see [how to sleep better](/en/blog/how-to-sleep-better). Eat balanced meals with complex carbohydrates, protein and vegetables, and drink enough water, especially in hot weather. Meal ideas are in [foods for men's energy and stamina](/en/blog/foods-for-mens-stamina).",
      ] },
      { heading: "Why isn't my stamina improving even though I exercise?", paragraphs: [
        "Common reasons are inconsistency, increasing intensity too fast and getting injured, poor sleep or not enough rest. If you get breathless, have chest pain or feel dizzy even with light activity, stop and see a doctor — that is not an ordinary stamina problem. Also read [why am I always tired](/en/blog/why-am-i-always-tired).",
      ] },
    ],
    qa: [
      { q: "How long does it take to build stamina?", a: "Many people start to feel more energetic after 4–8 weeks of consistent exercise 3–5 times a week. Progress depends on your starting fitness, age, sleep and consistency." },
      { q: "What is the best exercise for stamina?", a: "Aerobic exercise such as brisk walking, jogging, cycling and swimming builds heart and lung endurance, while strength training helps your muscles tire less quickly. A combination of both works best." },
      { q: "Is it safe to exercise if I have high blood pressure or heart disease?", a: "Physical activity is usually beneficial, but if you have heart disease, uncontrolled high blood pressure, diabetes or chest pain, see a doctor first for a safe plan." },
    ],
    sources: [src.whoActivity, src.aasmSleep, src.mdg],
    doctorNote: "See a doctor before starting harder exercise if you have heart disease, uncontrolled high blood pressure, diabetes, severe joint pain or have ever fainted. Stop exercising and get urgent care if you have chest pain, unusual breathlessness or dizziness.",
    disclaimer: "This article is general fitness information, not medical advice.",
  },
);

const belly = qaArticle(
  "belly-fat-men",
  "mens-health",
  {
    slug: "cara-hilangkan-perut-buncit-lelaki",
    title: "Bagaimana cara hilangkan perut buncit bagi lelaki?",
    seoTitle: "Cara Hilangkan Perut Buncit Lelaki (Sihat)",
    description: "Punca perut buncit lelaki dan cara mengurangkannya secara sihat: ukur lilitan pinggang, kurangkan minuman manis, ikut Pinggan Sihat Malaysia, bersenam dan tidur cukup.",
    lead: "Perut buncit pada lelaki biasanya disebabkan lemak di sekeliling organ dalaman (lemak viseral) yang terkumpul akibat lebihan kalori, minuman manis, kurang bergerak, kurang tidur dan stres. Cara paling berkesan ialah menurunkan berat badan secara perlahan melalui pemakanan seimbang dan senaman konsisten — bukan senaman perut sahaja. Lilitan pinggang 90 cm atau lebih bagi lelaki Malaysia ialah tanda perlu bertindak.",
    imageAlt: "Ilustrasi pita ukur untuk artikel cara hilangkan perut buncit lelaki",
    blocks: [
      { heading: "Kenapa perut buncit pada lelaki perlu diberi perhatian?", paragraphs: [
        "Lemak perut, terutamanya lemak viseral di sekeliling organ, berkait rapat dengan risiko diabetes jenis 2, tekanan darah tinggi, kolesterol tinggi dan penyakit jantung. Garis Panduan Amalan Klinikal Malaysia tentang pengurusan obesiti (2023) menggunakan lilitan pinggang 90 cm atau lebih bagi lelaki sebagai tanda obesiti abdomen.",
        "Cara mengukur: berdiri tegak, letakkan pita ukur di pertengahan antara tulang rusuk terbawah dan bahagian atas tulang pinggul, hembus nafas perlahan dan baca ukuran tanpa menarik perut.",
      ] },
      { heading: "Apakah punca perut buncit lelaki?", paragraphs: [
        "Punca biasanya gabungan beberapa tabiat:",
      ], list: [
        "Minuman manis setiap hari — teh tarik, kopi 3-dalam-1, minuman berkarbonat dan jus bergula.",
        "Hidangan besar pada waktu malam dan makan lewat.",
        "Kerja duduk lama dan kurang bergerak.",
        "Kurang tidur dan stres berpanjangan.",
        "Merokok dan pengambilan alkohol.",
        "Faktor umur — jisim otot cenderung berkurang jika tidak dilatih.",
      ] },
      { heading: "Bolehkah senaman perut sahaja menghilangkan perut buncit?", paragraphs: [
        "Tidak. Senaman setempat seperti sit-up menguatkan otot perut tetapi tidak membakar lemak di kawasan itu sahaja. Lemak perut berkurang apabila jumlah lemak badan berkurang melalui gabungan pemakanan, aktiviti aerobik dan latihan kekuatan.",
      ] },
      { heading: "Apa perubahan pemakanan yang paling membantu?", paragraphs: [
        "Gunakan konsep Pinggan Sihat Malaysia daripada Garis Panduan Diet Malaysia: separuh pinggan sayur dan buah, suku protein (ikan, ayam, kekacang, telur) dan suku karbohidrat, sebaik-baiknya bijirin penuh.",
      ], list: [
        "Tukar minuman manis kepada air kosong, teh atau kopi tanpa gula — ini antara perubahan paling mudah dan berkesan.",
        "Kurangkan nasi berganda, gorengan dan kuih pada waktu malam.",
        "Makan lebih perlahan dan berhenti apabila rasa cukup kenyang.",
        "Rancang makanan di tempat kerja supaya tidak bergantung pada makanan segera.",
      ] },
      { heading: "Berapa cepat berat badan patut turun?", paragraphs: [
        "Penurunan yang perlahan dan berterusan lebih mudah dikekalkan. Penurunan 5–10% daripada berat badan sudah boleh memperbaiki tekanan darah, gula darah dan kolesterol bagi orang yang berlebihan berat badan. Elakkan diet ekstrem atau pil kurus yang tidak berdaftar — sebahagiannya pernah dikesan mengandungi bahan berbahaya.",
        "Gabungkan dengan senaman: lihat [pelan 8 minggu meningkatkan stamina badan](/blog/cara-tingkatkan-stamina-badan) dan [cara tidur lena](/blog/cara-tidur-lena).",
      ] },
    ],
    qa: [
      { q: "Berapa ukuran pinggang yang sihat untuk lelaki?", a: "Bagi lelaki Malaysia, garis panduan klinikal obesiti 2023 menggunakan lilitan pinggang 90 cm atau lebih sebagai tanda obesiti abdomen. Ukuran di bawah itu lebih baik, tetapi doktor juga akan melihat berat badan, tekanan darah dan ujian darah." },
      { q: "Bolehkah hilangkan perut buncit tanpa senaman?", a: "Mengurangkan kalori dan minuman manis boleh menurunkan berat badan, termasuk lemak perut. Namun gabungan pemakanan dan senaman lebih berkesan dan membantu mengekalkan otot serta kesihatan jantung." },
      { q: "Adakah pil kurus selamat untuk hilangkan perut buncit?", a: "Jangan ambil pil kurus tanpa nasihat doktor. Produk yang tidak berdaftar boleh mengandungi bahan terlarang. Semak nombor MAL di laman NPRA dan bincang dengan doktor jika anda memerlukan bantuan menurunkan berat badan." },
    ],
    sources: [src.cpgObesity, src.whoObesity, src.mdg, src.whoActivity],
    doctorNote: "Jumpa doktor jika lilitan pinggang anda 90 cm atau lebih, anda mempunyai sejarah keluarga diabetes atau penyakit jantung, atau berat badan naik dengan cepat tanpa sebab. Klinik kesihatan boleh memeriksa tekanan darah, gula darah dan kolesterol. Lihat juga [pemeriksaan kesihatan untuk lelaki](/blog/pemeriksaan-kesihatan-lelaki).",
    disclaimer: "Artikel ini ialah maklumat kesihatan umum dan bukan nasihat perubatan atau diet peribadi.",
  },
  {
    slug: "how-men-can-lose-belly-fat",
    title: "How can men lose belly fat safely?",
    seoTitle: "How Men Can Lose Belly Fat Safely",
    description: "Why men gain belly fat and how to reduce it safely: measure your waist, cut sugary drinks, follow the Malaysian Healthy Plate, exercise, sleep enough and stop smoking.",
    lead: "Belly fat in men is usually fat around the internal organs (visceral fat) that builds up from extra calories, sugary drinks, inactivity, poor sleep and stress. The most effective approach is gradual weight loss through balanced eating and consistent exercise — not ab exercises alone. A waist of 90 cm or more in Malaysian men is a sign to take action.",
    imageAlt: "Illustration of a measuring tape for an article on men losing belly fat",
    blocks: [
      { heading: "Why does belly fat in men matter?", paragraphs: [
        "Belly fat, especially visceral fat around the organs, is closely linked to type 2 diabetes, high blood pressure, high cholesterol and heart disease. The Malaysian Clinical Practice Guidelines on managing obesity (2023) use a waist circumference of 90 cm or more in men as a sign of abdominal obesity.",
        "How to measure: stand straight, place the tape midway between your lowest rib and the top of your hip bone, breathe out gently and read the measurement without pulling your stomach in.",
      ] },
      { heading: "What causes belly fat in men?", paragraphs: [
        "It is usually a combination of habits:",
      ], list: [
        "Daily sugary drinks — teh tarik, 3-in-1 coffee, fizzy drinks and sweetened juices.",
        "Large meals late at night.",
        "Long hours of sitting and little movement.",
        "Poor sleep and ongoing stress.",
        "Smoking and alcohol.",
        "Age — muscle mass tends to fall if it is not trained.",
      ] },
      { heading: "Can ab exercises alone get rid of belly fat?", paragraphs: [
        "No. Targeted exercises such as sit-ups strengthen the abdominal muscles but do not burn fat in that area alone. Belly fat goes down when overall body fat goes down through a combination of diet, aerobic activity and strength training.",
      ] },
      { heading: "Which diet changes help the most?", paragraphs: [
        "Use the Malaysian Healthy Plate from the Malaysian Dietary Guidelines: half the plate vegetables and fruit, a quarter protein (fish, chicken, legumes, eggs) and a quarter carbohydrates, preferably wholegrain.",
      ], list: [
        "Switch sugary drinks to plain water or unsweetened tea or coffee — one of the easiest, most effective changes.",
        "Cut down on second helpings of rice, fried food and kuih at night.",
        "Eat more slowly and stop when you feel comfortably full.",
        "Plan meals at work so you do not rely on fast food.",
      ] },
      { heading: "How fast should you lose weight?", paragraphs: [
        "Slow, steady weight loss is easier to keep up. Losing 5–10% of your body weight can already improve blood pressure, blood sugar and cholesterol in people who are overweight. Avoid extreme diets or unregistered slimming pills — some have been found to contain harmful substances.",
        "Combine it with exercise: see the [8-week plan to build stamina](/en/blog/how-to-build-stamina-naturally) and [how to sleep better](/en/blog/how-to-sleep-better).",
      ] },
    ],
    qa: [
      { q: "What is a healthy waist size for men?", a: "For Malaysian men, the 2023 clinical obesity guidelines use a waist of 90 cm or more as a sign of abdominal obesity. Below that is better, but a doctor will also look at weight, blood pressure and blood tests." },
      { q: "Can you lose belly fat without exercise?", a: "Cutting calories and sugary drinks can reduce weight, including belly fat. But combining diet and exercise works better and helps protect your muscles and heart health." },
      { q: "Are slimming pills safe for losing belly fat?", a: "Do not take slimming pills without a doctor's advice. Unregistered products may contain banned substances. Check the MAL number on the NPRA website and talk to a doctor if you need help losing weight." },
    ],
    sources: [src.cpgObesity, src.whoObesity, src.mdg, src.whoActivity],
    doctorNote: "See a doctor if your waist is 90 cm or more, you have a family history of diabetes or heart disease, or you are gaining weight quickly without a reason. A government health clinic can check your blood pressure, blood sugar and cholesterol. See also [health screening for men](/en/blog/health-screening-for-men).",
    disclaimer: "This article is general health information, not medical or personal dietary advice.",
  },
);

const smoking = qaArticle(
  "quit-smoking",
  "mens-health",
  {
    slug: "cara-berhenti-merokok",
    title: "Bagaimana cara berhenti merokok dengan bantuan KKM?",
    seoTitle: "Cara Berhenti Merokok & Vape dengan mQuit KKM",
    description: "Cara berhenti merokok dan vape di Malaysia: tetapkan tarikh, kenal pencetus, gunakan perkhidmatan mQuit KKM, terapi gantian nikotin dan cara menghadapi keinginan merokok.",
    lead: "Cara paling berkesan untuk berhenti merokok ialah merancang dengan bantuan profesional. Di Malaysia, perkhidmatan mQuit Kementerian Kesihatan menyediakan kaunseling dan ubat bantuan berhenti merokok di klinik kesihatan, hospital dan farmasi terpilih — cari pusat terdekat di laman JomQuit. Tetapkan tarikh berhenti, kenal pasti pencetus, dan sediakan cara menghadapi keinginan merokok.",
    imageAlt: "Ilustrasi rokok yang dipatahkan untuk artikel cara berhenti merokok",
    blocks: [
      { heading: "Kenapa berhenti merokok sangat penting?", paragraphs: [
        "Menurut WHO, tembakau membunuh sehingga separuh daripada penggunanya yang tidak berhenti, dan merokok ialah faktor risiko utama penyakit jantung, strok, kanser dan penyakit paru-paru. Asap rokok juga memudaratkan isteri dan anak-anak di rumah.",
        "Berita baiknya, faedah berhenti merokok bermula dalam masa singkat dan bertambah dari tahun ke tahun. Tidak pernah terlambat untuk berhenti.",
      ] },
      { heading: "Apa itu perkhidmatan mQuit?", paragraphs: [
        "mQuit ialah perkhidmatan bersepadu berhenti merokok di bawah KKM yang merangkumi kemudahan awam dan swasta. Pegawai terlatih akan menilai tahap ketagihan, memberi kaunseling dan, jika sesuai, mencadangkan ubat atau terapi gantian nikotin. Senarai klinik berhenti merokok juga boleh didapati di laman Info Sihat KKM.",
        "Mendapatkan sokongan profesional meningkatkan peluang berjaya berbanding mencuba bersendirian.",
      ] },
      { heading: "Bagaimana membuat pelan berhenti merokok?", paragraphs: [
        "Langkah yang biasa disarankan:",
      ], list: [
        "Tetapkan tarikh berhenti dalam masa dua minggu dan beritahu isteri, keluarga dan rakan.",
        "Kenal pasti pencetus — selepas makan, minum kopi, memandu, stres kerja — dan rancang gantian.",
        "Buang rokok, pemetik api dan bekas abu dari rumah dan kereta.",
        "Bincang dengan pegawai mQuit atau ahli farmasi tentang terapi gantian nikotin.",
        "Elakkan tempat dan situasi yang membuat anda mudah merokok pada minggu-minggu awal.",
      ] },
      { heading: "Bagaimana menghadapi keinginan merokok?", paragraphs: [
        "Keinginan merokok biasanya memuncak dan reda dalam beberapa minit. Tangguhkan, tarik nafas perlahan, minum air, kunyah gula-gula getah tanpa gula atau berjalan sekejap. Ingat sebab anda berhenti — kesihatan, keluarga, wang.",
        "Rasa mudah marah, susah tidur dan lapar pada minggu awal ialah tanda badan sedang menyesuaikan diri. Panduan [cara kurangkan stres](/blog/cara-kurangkan-stres) dan [cara tidur lena](/blog/cara-tidur-lena) boleh membantu.",
      ] },
      { heading: "Adakah vape pilihan yang selamat untuk berhenti merokok?", paragraphs: [
        "Vape masih membekalkan nikotin, yang sangat menagihkan, dan kesan jangka panjangnya belum diketahui sepenuhnya. Banyak orang akhirnya menggunakan rokok dan vape serentak. Jika anda menggunakan vape, bincang dengan pegawai mQuit tentang cara berhenti kedua-duanya.",
      ] },
      { heading: "Bagaimana jika saya merokok semula?", paragraphs: [
        "Ramai perokok memerlukan beberapa cubaan sebelum berjaya berhenti sepenuhnya. Jangan anggap terlanjur sebagai gagal. Kenal pasti apa yang mencetuskannya, ubah pelan, dan cuba semula — dengan sokongan mQuit jika boleh.",
      ] },
    ],
    qa: [
      { q: "Di mana boleh dapatkan bantuan berhenti merokok di Malaysia?", a: "Perkhidmatan mQuit KKM tersedia di klinik kesihatan, hospital, farmasi terpilih dan sebahagian fasiliti swasta. Cari pusat terdekat melalui laman JomQuit atau senarai klinik berhenti merokok di laman Info Sihat KKM." },
      { q: "Apa cara berhenti merokok yang paling berkesan?", a: "Gabungan sokongan kaunseling dan, jika sesuai, ubat atau terapi gantian nikotin yang dicadangkan oleh profesional kesihatan memberi peluang terbaik. Pelan yang jelas dengan tarikh berhenti dan cara menghadapi pencetus juga penting." },
      { q: "Berapa lama keinginan merokok akan hilang?", a: "Keinginan yang kuat biasanya paling teruk pada minggu-minggu awal dan berkurang secara beransur-ansur. Setiap gelombang keinginan biasanya reda dalam beberapa minit jika anda menangguhkannya." },
    ],
    sources: [src.mquit, src.quitClinics, src.whoTobacco],
    doctorNote: "Bercakap dengan doktor atau pegawai mQuit sebelum menggunakan ubat bantuan berhenti merokok, terutamanya jika anda mempunyai penyakit jantung, darah tinggi atau sedang mengambil ubat lain. Dapatkan rawatan segera jika anda mengalami sakit dada, batuk berdarah atau sesak nafas.",
    disclaimer: "Artikel ini ialah maklumat kesihatan umum dan bukan nasihat perubatan.",
  },
  {
    slug: "how-to-quit-smoking-in-malaysia",
    title: "How do you quit smoking in Malaysia with MOH support?",
    seoTitle: "How to Quit Smoking & Vaping in Malaysia",
    description: "How to quit smoking and vaping in Malaysia: set a date, know your triggers, use the MOH mQuit service, nicotine replacement therapy and how to handle cravings.",
    lead: "The most effective way to quit smoking is to plan with professional support. In Malaysia, the Ministry of Health's mQuit service offers counselling and stop-smoking medicines at government health clinics, hospitals and selected pharmacies — find the nearest centre on the JomQuit website. Set a quit date, identify your triggers and prepare ways to handle cravings.",
    imageAlt: "Illustration of a broken cigarette for an article on quitting smoking",
    blocks: [
      { heading: "Why does quitting smoking matter so much?", paragraphs: [
        "According to the WHO, tobacco kills up to half of its users who do not quit, and smoking is a major risk factor for heart disease, stroke, cancer and lung disease. Second-hand smoke also harms your wife and children at home.",
        "The good news is that the benefits of quitting start quickly and grow year after year. It is never too late to stop.",
      ] },
      { heading: "What is the mQuit service?", paragraphs: [
        "mQuit is an integrated MOH stop-smoking service covering public and private facilities. Trained staff assess your level of dependence, provide counselling and, where suitable, recommend medicines or nicotine replacement therapy. A list of quit-smoking clinics is also on the MOH Info Sihat website.",
        "Getting professional support improves your chances compared with trying alone.",
      ] },
      { heading: "How do you make a quit plan?", paragraphs: [
        "Commonly recommended steps:",
      ], list: [
        "Set a quit date within the next two weeks and tell your wife, family and friends.",
        "Identify your triggers — after meals, with coffee, while driving, work stress — and plan replacements.",
        "Remove cigarettes, lighters and ashtrays from your home and car.",
        "Talk to an mQuit officer or pharmacist about nicotine replacement therapy.",
        "Avoid places and situations where you usually smoke during the first weeks.",
      ] },
      { heading: "How do you handle cravings?", paragraphs: [
        "Cravings usually peak and fade within a few minutes. Delay, breathe slowly, drink water, chew sugar-free gum or go for a short walk. Remember why you are quitting — health, family, money.",
        "Irritability, poor sleep and hunger in the first weeks are signs your body is adjusting. The guides on [how to reduce stress](/en/blog/how-to-reduce-stress) and [how to sleep better](/en/blog/how-to-sleep-better) can help.",
      ] },
      { heading: "Is vaping a safe way to quit smoking?", paragraphs: [
        "Vapes still deliver nicotine, which is highly addictive, and their long-term effects are not fully known. Many people end up using cigarettes and vapes together. If you vape, talk to an mQuit officer about stopping both.",
      ] },
      { heading: "What if I start smoking again?", paragraphs: [
        "Many smokers need several attempts before they stop for good. Do not treat a slip as failure. Work out what triggered it, adjust your plan and try again — with mQuit support if you can.",
      ] },
    ],
    qa: [
      { q: "Where can I get help to quit smoking in Malaysia?", a: "The MOH mQuit service is available at government health clinics, hospitals, selected pharmacies and some private facilities. Find the nearest centre through the JomQuit website or the list of quit-smoking clinics on the MOH Info Sihat website." },
      { q: "What is the most effective way to quit smoking?", a: "Combining counselling support with, where suitable, medicines or nicotine replacement therapy recommended by a health professional gives the best chance. A clear plan with a quit date and ways to handle triggers also matters." },
      { q: "How long do cigarette cravings last?", a: "Strong cravings are usually worst in the first weeks and ease gradually. Each wave of craving typically passes within a few minutes if you delay it." },
    ],
    sources: [src.mquit, src.quitClinics, src.whoTobacco],
    doctorNote: "Talk to a doctor or mQuit officer before using stop-smoking medicines, especially if you have heart disease or high blood pressure, or take other medicines. Get urgent care if you have chest pain, cough up blood or are short of breath.",
    disclaimer: "This article is general health information, not medical advice.",
  },
);

const screening = qaArticle(
  "health-screening",
  "mens-health",
  {
    slug: "pemeriksaan-kesihatan-lelaki",
    title: "Pemeriksaan kesihatan apa yang lelaki perlu buat?",
    seoTitle: "Pemeriksaan Kesihatan Lelaki Mengikut Umur",
    description: "Pemeriksaan kesihatan asas untuk lelaki dewasa di Malaysia: tekanan darah, gula darah, kolesterol, berat badan dan lilitan pinggang, saringan mengikut umur dan di mana mendapatkannya.",
    lead: "Lelaki dewasa disarankan membuat pemeriksaan kesihatan berkala untuk tekanan darah, gula darah, kolesterol, berat badan dan lilitan pinggang, kerana penyakit seperti darah tinggi dan diabetes sering tiada gejala pada peringkat awal. Bermula sekitar umur 40 tahun, dan lebih awal jika ada sejarah keluarga, bincang dengan doktor tentang kekerapan dan saringan tambahan. Pemeriksaan boleh dibuat di klinik kesihatan kerajaan, klinik swasta atau melalui program saringan PERKESO bagi pencarum yang layak.",
    imageAlt: "Ilustrasi stetoskop dan senarai semak untuk artikel pemeriksaan kesihatan lelaki",
    blocks: [
      { heading: "Kenapa lelaki perlu buat pemeriksaan kesihatan walaupun rasa sihat?", paragraphs: [
        "Darah tinggi, diabetes dan kolesterol tinggi selalunya tidak menunjukkan gejala sehingga komplikasi berlaku. Pemeriksaan berkala membantu mengesan risiko lebih awal, apabila perubahan gaya hidup dan rawatan paling berkesan.",
        "Ramai lelaki menangguhkan berjumpa doktor kerana sibuk atau rasa tidak perlu. Menjaga kesihatan ialah sebahagian daripada tanggungjawab kepada keluarga.",
      ] },
      { heading: "Apakah pemeriksaan asas untuk setiap lelaki dewasa?", paragraphs: [
        "Pemeriksaan yang biasa dibuat di klinik:",
      ], list: [
        "Tekanan darah.",
        "Berat badan, indeks jisim badan (BMI) dan lilitan pinggang.",
        "Gula darah (contohnya gula darah puasa atau HbA1c).",
        "Profil lipid (kolesterol).",
        "Soalan tentang merokok, aktiviti fizikal, tidur, mood dan sejarah kesihatan keluarga.",
      ] },
      { heading: "Apa saringan tambahan mengikut umur?", paragraphs: [
        "Doktor akan menyesuaikan saringan mengikut umur, sejarah keluarga dan gaya hidup anda. Secara umum:",
      ], list: [
        "Umur 18–39: pemeriksaan asas berkala, lebih kerap jika berlebihan berat badan, merokok atau ada sejarah keluarga.",
        "Umur 40 ke atas: pemeriksaan asas lebih kerap; bincang tentang risiko penyakit jantung dan diabetes.",
        "Umur sekitar 50 ke atas: tanya doktor tentang saringan kanser kolorektal (contohnya ujian najis untuk darah tersembunyi) dan bincang kebaikan serta had ujian prostat.",
        "Semua umur: pemeriksaan mata dan gigi berkala.",
      ] },
      { heading: "Di mana boleh buat pemeriksaan kesihatan?", paragraphs: [
        "Klinik kesihatan kerajaan menyediakan saringan risiko penyakit tidak berjangkit. Klinik swasta dan hospital juga menawarkan pakej pemeriksaan. PERKESO melalui program SEHATi menawarkan saringan kesihatan percuma kepada pencarum yang memenuhi syarat umur dan caruman — semak kelayakan terkini dalam aplikasi atau laman SEHATi.",
        "Bawa senarai ubat dan suplemen yang anda ambil, serta sejarah penyakit keluarga, semasa pemeriksaan.",
      ] },
      { heading: "Apa yang perlu dibuat selepas mendapat keputusan?", paragraphs: [
        "Minta doktor terangkan setiap keputusan dan apa langkah seterusnya. Jika ada bacaan yang tinggi, perubahan gaya hidup — pemakanan, aktiviti, tidur, berhenti merokok — biasanya langkah pertama. Lihat panduan [cara hilangkan perut buncit](/blog/cara-hilangkan-perut-buncit-lelaki), [cara meningkatkan stamina badan](/blog/cara-tingkatkan-stamina-badan) dan [cara berhenti merokok](/blog/cara-berhenti-merokok).",
        "Jika anda ingin mengambil suplemen, beritahu doktor terlebih dahulu kerana sebahagiannya boleh berinteraksi dengan ubat. Baca [cara memilih suplemen yang selamat](/blog/cara-pilih-suplemen-selamat).",
      ] },
    ],
    qa: [
      { q: "Berapa kerap lelaki perlu buat pemeriksaan kesihatan?", a: "Ia bergantung kepada umur, keputusan sebelum ini dan faktor risiko. Ramai doktor mencadangkan pemeriksaan asas sekurang-kurangnya setahun sekali bagi lelaki berumur 40 tahun ke atas, dan lebih kerap jika ada darah tinggi, diabetes atau sejarah keluarga. Tanya doktor anda tentang jadual yang sesuai." },
      { q: "Adakah pemeriksaan kesihatan percuma untuk pencarum PERKESO?", a: "PERKESO menawarkan saringan kesihatan percuma melalui program SEHATi kepada pencarum yang memenuhi syarat umur dan caruman. Syarat boleh berubah, jadi semak kelayakan terkini dalam aplikasi atau laman SEHATi." },
      { q: "Perlukah berpuasa sebelum ujian darah?", a: "Sesetengah ujian, seperti gula darah puasa dan profil lipid tertentu, mungkin memerlukan anda berpuasa beberapa jam. Ikut arahan klinik atau makmal semasa membuat temujanji." },
    ],
    sources: [src.sehati, src.cpgObesity, src.whoObesity],
    doctorNote: "Jangan tunggu pemeriksaan berkala jika anda mengalami sakit dada, sesak nafas, kelemahan sebelah badan, darah dalam air kencing atau najis, berat badan turun tanpa sebab, atau perubahan kesihatan yang membimbangkan. Jumpa doktor segera atau hubungi 999 dalam kecemasan.",
    disclaimer: "Artikel ini ialah maklumat kesihatan umum dan bukan nasihat perubatan. Saringan yang sesuai ditentukan oleh doktor anda.",
  },
  {
    slug: "health-screening-for-men",
    title: "Which health checks do men need?",
    seoTitle: "Men's Health Screening in Malaysia by Age",
    description: "Basic health checks for adult men in Malaysia — blood pressure, blood sugar, cholesterol, weight and waist size — plus age-based screening and where to get it.",
    lead: "Adult men are advised to have regular checks of blood pressure, blood sugar, cholesterol, weight and waist size, because conditions such as high blood pressure and diabetes often have no symptoms early on. From around age 40, or earlier if you have a family history, ask your doctor how often to be checked and what extra screening you need. Checks are available at government health clinics, private clinics, or through PERKESO's screening programme for eligible contributors.",
    imageAlt: "Illustration of a stethoscope and checklist for an article on men's health screening",
    blocks: [
      { heading: "Why should men get checked even if they feel well?", paragraphs: [
        "High blood pressure, diabetes and high cholesterol often cause no symptoms until complications appear. Regular checks help pick up risks early, when lifestyle changes and treatment work best.",
        "Many men put off seeing a doctor because they are busy or feel there is no need. Looking after your health is part of looking after your family.",
      ] },
      { heading: "What basic checks does every adult man need?", paragraphs: [
        "Checks commonly done at a clinic:",
      ], list: [
        "Blood pressure.",
        "Weight, body mass index (BMI) and waist circumference.",
        "Blood sugar (for example fasting glucose or HbA1c).",
        "Lipid profile (cholesterol).",
        "Questions about smoking, physical activity, sleep, mood and family medical history.",
      ] },
      { heading: "What extra screening is recommended by age?", paragraphs: [
        "Your doctor will tailor screening to your age, family history and lifestyle. In general:",
      ], list: [
        "Ages 18–39: regular basic checks, more often if you are overweight, smoke or have a family history.",
        "Age 40 and over: more frequent basic checks; discuss your risk of heart disease and diabetes.",
        "Around age 50 and over: ask about colorectal cancer screening (for example a stool test for hidden blood) and discuss the benefits and limits of prostate testing.",
        "All ages: regular eye and dental checks.",
      ] },
      { heading: "Where can you get a health check?", paragraphs: [
        "Government health clinics offer screening for non-communicable disease risks. Private clinics and hospitals also offer check-up packages. PERKESO's SEHATi programme offers free health screening to contributors who meet its age and contribution criteria — check the latest eligibility in the SEHATi app or website.",
        "Bring a list of the medicines and supplements you take, and your family medical history, to the appointment.",
      ] },
      { heading: "What should you do after you get your results?", paragraphs: [
        "Ask the doctor to explain each result and what happens next. If a reading is high, lifestyle changes — diet, activity, sleep, quitting smoking — are usually the first step. See the guides on [how men can lose belly fat](/en/blog/how-men-can-lose-belly-fat), [how to build stamina](/en/blog/how-to-build-stamina-naturally) and [how to quit smoking](/en/blog/how-to-quit-smoking-in-malaysia).",
        "If you want to take a supplement, tell your doctor first because some interact with medicines. Read [how to choose a safe supplement](/en/blog/how-to-choose-a-safe-supplement).",
      ] },
    ],
    qa: [
      { q: "How often should men get a health check?", a: "It depends on your age, previous results and risk factors. Many doctors suggest basic checks at least once a year for men aged 40 and over, and more often if you have high blood pressure, diabetes or a family history. Ask your doctor about the right schedule for you." },
      { q: "Is health screening free for PERKESO contributors?", a: "PERKESO offers free health screening through its SEHATi programme to contributors who meet its age and contribution criteria. The criteria can change, so check the latest eligibility in the SEHATi app or website." },
      { q: "Do I need to fast before a blood test?", a: "Some tests, such as fasting blood sugar and certain lipid profiles, may require you to fast for several hours. Follow the instructions from the clinic or laboratory when you book." },
    ],
    sources: [src.sehati, src.cpgObesity, src.whoObesity],
    doctorNote: "Do not wait for a routine check if you have chest pain, breathlessness, weakness on one side of the body, blood in your urine or stool, unexplained weight loss or any worrying change in your health. See a doctor promptly or call 999 in an emergency.",
    disclaimer: "This article is general health information, not medical advice. The right screening is decided by your doctor.",
  },
);

export const mensHealthArticles: readonly Article[] = [sleep, stress, tired, stamina, belly, smoking, screening];
