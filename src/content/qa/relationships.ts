import type { Article } from "@/content/articles";
import { qaArticle } from "@/content/qa/helpers";
import { src } from "@/content/qa/sources";

const counsellingMs = "Jika pertengkaran melibatkan kekerasan, ugutan atau rasa takut, keselamatan didahulukan: hubungi 999. Untuk kaunseling rumah tangga, anda boleh mendapatkan khidmat kaunselor LPPKN atau pejabat agama Islam negeri. Jika tekanan emosi terasa terlalu berat, Talian HEAL 15555 (KKM) menyediakan sokongan psikososial.";
const counsellingEn = "If arguments involve violence, threats or fear, safety comes first: call 999. For marriage counselling you can use LPPKN counsellors or your state Islamic religious office. If the emotional strain feels too heavy, the MOH's HEAL 15555 line offers psychosocial support.";

const wifeHappy = qaArticle(
  "make-wife-happy",
  "relationships",
  {
    slug: "cara-bahagiakan-isteri",
    title: "Bagaimana cara membahagiakan isteri setiap hari?",
    seoTitle: "Cara Bahagiakan Isteri Setiap Hari",
    description: "Cara membahagiakan isteri tanpa belanja besar: dengar dengan sepenuh perhatian, bantu kerja rumah, beri masa berdua dan hargai usahanya — dengan contoh harian.",
    lead: "Isteri biasanya paling bahagia apabila dia rasa didengar, dihargai dan tidak memikul rumah tangga seorang diri. Caranya ialah perkara kecil yang dibuat setiap hari: dengar tanpa memotong, bantu kerja rumah tanpa diminta, luangkan masa berdua tanpa telefon dan ucapkan terima kasih atas usahanya. Hadiah membantu, tetapi perhatian yang konsisten lebih bermakna.",
    imageAlt: "Ilustrasi hati dan rumah untuk artikel cara membahagiakan isteri",
    blocks: [
      { heading: "Apa yang sebenarnya isteri perlukan daripada suami?", paragraphs: [
        "Kebanyakan isteri tidak meminta perkara yang besar. Mereka mahu rasa selamat, dihormati dan menjadi keutamaan. Dalam rumah tangga yang sibuk, keperluan ini mudah terlepas pandang — bukan kerana suami tidak sayang, tetapi kerana rutin kerja, anak dan telefon mengambil tempat.",
        "Cara paling mudah untuk tahu ialah bertanya: “Apa satu perkara yang boleh abang buat minggu ini supaya awak rasa lebih ringan?” Jawapannya selalunya lebih praktikal daripada yang kita sangka.",
      ] },
      { heading: "Bagaimana menjadi pendengar yang baik untuk isteri?", paragraphs: [
        "Apabila isteri bercerita, dia tidak semestinya mahu penyelesaian. Selalunya dia mahu difahami. Letakkan telefon, pandang wajahnya dan ulang semula apa yang anda dengar: “Jadi hari ini awak penat sebab kerja bertimbun dan anak tak sihat.”",
        "Elakkan terus memberi nasihat, membandingkan atau mengecilkan perasaannya. Kalau anda tidak pasti, tanya: “Awak nak abang dengar saja, atau nak abang tolong fikirkan jalan?”",
      ] },
      { heading: "Kenapa membantu kerja rumah membuat isteri bahagia?", paragraphs: [
        "Beban kerja rumah dan menjaga anak yang tidak seimbang ialah antara punca rasa penat dan terkilan yang paling biasa. Membantu tanpa diminta menunjukkan anda nampak usahanya.",
        "Dalam tradisi Islam, Saidatina Aisyah RA menceritakan bahawa Rasulullah SAW membantu urusan keluarga di rumah (riwayat al-Bukhari). Contoh ini mengingatkan bahawa kerja rumah ialah tanggungjawab bersama, bukan “tolong isteri”.",
      ], list: [
        "Ambil alih satu tugas tetap, contohnya basuh pinggan selepas makan malam atau mandikan anak.",
        "Uruskan anak selama sejam pada hujung minggu supaya isteri boleh berehat atau keluar sendiri.",
        "Perasan apa yang perlu dibuat — sampah, kain, barang dapur — tanpa menunggu senarai.",
      ] },
      { heading: "Bagaimana cara menghargai isteri dengan kata-kata?", paragraphs: [
        "Pujian yang khusus lebih bermakna daripada pujian umum. “Terima kasih masak sup tadi, abang tahu awak penat” lebih menyentuh daripada “sedap”.",
        "Ucapkan terima kasih untuk perkara yang dianggap biasa: menguruskan jadual anak, mengingatkan bil, menjaga ibu bapa. Perkara yang tidak pernah dihargai lama-kelamaan terasa seperti beban.",
      ] },
      { heading: "Perlukah hadiah mahal untuk membahagiakan isteri?", paragraphs: [
        "Tidak. Hadiah kecil yang menunjukkan anda ingat kesukaannya — kuih kegemaran, bunga, buku yang dia sebut — selalunya lebih diingati daripada hadiah mahal yang dibeli tergesa-gesa. Untuk idea yang lebih lengkap, baca [idea romantik untuk isteri di rumah](/blog/idea-romantik-untuk-isteri).",
        "Wang dan hadiah tidak dapat menggantikan masa. Jika anda sibuk, jadualkan masa berdua seperti anda menjadualkan mesyuarat penting.",
      ] },
      { heading: "Bagaimana menjaga diri sendiri juga membantu rumah tangga?", paragraphs: [
        "Suami yang cukup tidur, aktif dan mengurus stres biasanya lebih sabar di rumah. Menjaga kebersihan diri dan kesihatan ialah satu bentuk menghormati pasangan. Lihat panduan [cara tidur lena](/blog/cara-tidur-lena) dan [cara kurangkan stres](/blog/cara-kurangkan-stres) jika anda sering pulang dalam keadaan letih.",
        "Untuk asas rumah tangga yang tenang secara umum, baca juga [perkahwinan bahagia bermula dengan kehadiran](/blog/hubungan-bahagia).",
      ] },
    ],
    qa: [
      { q: "Bagaimana cara membahagiakan isteri menurut Islam?", a: "Islam menekankan layanan yang baik terhadap isteri: bercakap dengan lembut, menunaikan tanggungjawab nafkah, membantu urusan rumah dan bersabar dengan kekurangan pasangan. Rasulullah SAW bersabda bahawa sebaik-baik kamu ialah yang paling baik terhadap ahli keluarganya (riwayat at-Tirmizi). Untuk soalan hukum yang khusus, rujuk ustaz atau pejabat agama yang bertauliah." },
      { q: "Apa tanda isteri tidak bahagia?", a: "Antara tanda yang biasa ialah isteri semakin jarang bercerita, mudah marah atau menangis, nampak sangat letih, atau berkata dia rasa keseorangan. Tanda ini bukan tuduhan — ia isyarat untuk duduk berbincang dengan tenang dan bertanya apa yang boleh berubah." },
      { q: "Bagaimana membahagiakan isteri tanpa banyak duit?", a: "Dengar ceritanya tanpa telefon, bantu kerja rumah tanpa diminta, ucap terima kasih dengan khusus, jaga anak supaya dia dapat berehat dan luangkan masa berjalan atau minum petang berdua. Perhatian yang konsisten lebih bernilai daripada harga hadiah." },
      { q: "Bagaimana jika isteri tetap tidak gembira walaupun saya sudah berusaha?", a: "Kadang-kadang rasa sedih yang berpanjangan berkait dengan keletihan, kesihatan atau tekanan emosi, termasuk selepas bersalin. Galakkan dia berjumpa doktor jika perlu, dan pertimbangkan kaunseling perkahwinan bersama, contohnya melalui LPPKN." },
    ],
    sources: [src.lppknCounselling, src.gottmanStartup],
    doctorNote: counsellingMs,
    disclaimer: "Artikel ini ialah bacaan gaya hidup umum dan bukan nasihat kaunseling, agama atau perubatan.",
  },
  {
    slug: "how-to-make-your-wife-happy",
    title: "How can you make your wife happy every day?",
    seoTitle: "How to Make Your Wife Happy Every Day",
    description: "How to make your wife happy without spending much: listen with full attention, share the housework, make time together and appreciate her effort — with everyday examples.",
    lead: "Most wives are happiest when they feel heard, appreciated and not left to carry the household alone. That comes from small things done every day: listening without interrupting, helping at home without being asked, spending time together without phones and thanking her for her effort. Gifts help, but consistent attention matters more.",
    imageAlt: "Illustration of a heart and a home for an article on making your wife happy",
    blocks: [
      { heading: "What does a wife really need from her husband?", paragraphs: [
        "Most wives are not asking for something big. They want to feel safe, respected and a priority. In a busy household those needs are easy to miss — not because the husband does not care, but because work, children and phones crowd them out.",
        "The simplest way to find out is to ask: “What is one thing I could do this week that would make things feel lighter for you?” The answer is usually more practical than you expect.",
      ] },
      { heading: "How do you become a better listener for your wife?", paragraphs: [
        "When your wife talks about her day, she does not always want a solution. Often she wants to be understood. Put the phone down, look at her and reflect back what you heard: “So today was exhausting because work piled up and the baby was unwell.”",
        "Avoid jumping to advice, comparing or playing down her feelings. If you are not sure, ask: “Do you want me to just listen, or help think it through?”",
      ] },
      { heading: "Why does sharing housework make a wife happier?", paragraphs: [
        "An unequal load of housework and childcare is one of the most common sources of exhaustion and resentment. Helping without being asked shows that you see her effort.",
        "In Islamic tradition, Aisha (may Allah be pleased with her) described the Prophet Muhammad (peace be upon him) helping with household tasks (narrated by al-Bukhari). It is a reminder that housework is a shared responsibility, not “helping the wife”.",
      ], list: [
        "Take over one fixed task, such as washing up after dinner or bathing the children.",
        "Look after the children for an hour at the weekend so she can rest or go out on her own.",
        "Notice what needs doing — rubbish, laundry, groceries — without waiting for a list.",
      ] },
      { heading: "How do you show appreciation with words?", paragraphs: [
        "Specific praise means more than general praise. “Thank you for making the soup, I know you were tired” lands better than “nice”.",
        "Say thank you for things that are taken for granted: managing the children's schedule, remembering the bills, caring for parents. Work that is never noticed slowly starts to feel like a burden.",
      ] },
      { heading: "Do you need expensive gifts to make your wife happy?", paragraphs: [
        "No. Small gifts that show you remember what she likes — her favourite snack, flowers, a book she mentioned — are often remembered longer than an expensive gift bought in a hurry. For more ideas, read [romantic ideas for your wife at home](/en/blog/romantic-ideas-for-your-wife).",
        "Money and gifts cannot replace time. If you are busy, schedule time together the way you would schedule an important meeting.",
      ] },
      { heading: "How does looking after yourself help your marriage?", paragraphs: [
        "Husbands who sleep enough, stay active and manage stress are usually more patient at home. Personal hygiene and health are a form of respect for your partner. See [how to sleep better](/en/blog/how-to-sleep-better) and [how to reduce stress](/en/blog/how-to-reduce-stress) if you often come home drained.",
        "For the basics of a calmer marriage in general, also read [a calmer marriage starts with presence](/en/blog/happy-marriage).",
      ] },
    ],
    qa: [
      { q: "How do you make your wife happy according to Islam?", a: "Islam emphasises treating your wife well: speaking gently, fulfilling your responsibility to provide, helping at home and being patient with each other's shortcomings. The Prophet (peace be upon him) said the best of you are those who are best to their families (narrated by at-Tirmidhi). For specific religious rulings, ask a qualified religious teacher or office." },
      { q: "What are the signs that a wife is unhappy?", a: "Common signs include talking less, getting irritated or tearful easily, seeming constantly exhausted, or saying she feels alone. These are not accusations — they are a signal to sit down calmly and ask what could change." },
      { q: "How can you make your wife happy without spending much money?", a: "Listen to her without your phone, help at home without being asked, say thank you specifically, take the children so she can rest, and go for a walk or an afternoon drink together. Consistent attention is worth more than the price of a gift." },
      { q: "What if my wife is still unhappy even though I am trying?", a: "Sometimes lasting sadness is linked to exhaustion, health or emotional strain, including after giving birth. Encourage her to see a doctor if needed, and consider marriage counselling together, for example through LPPKN." },
    ],
    sources: [src.lppknCounselling, src.gottmanStartup],
    doctorNote: counsellingEn,
    disclaimer: "This article is general lifestyle reading, not counselling, religious or medical advice.",
  },
);

const communication = qaArticle(
  "spouse-communication",
  "relationships",
  {
    slug: "cara-berkomunikasi-dengan-pasangan",
    title: "Bagaimana cara berkomunikasi dengan pasangan tanpa bergaduh?",
    seoTitle: "Cara Berkomunikasi dengan Pasangan",
    description: "Cara berkomunikasi dengan suami atau isteri tanpa bergaduh: mula perbualan dengan lembut, dengar untuk faham, pilih masa yang sesuai dan berhenti sebelum marah memuncak.",
    lead: "Komunikasi suami isteri jadi lebih tenang apabila anda memulakan perbualan dengan lembut, bercakap tentang perasaan dan keperluan sendiri (bukan menyalahkan), mendengar untuk faham, dan memilih masa yang sesuai. Jika suasana mula panas, berhenti seketika dan sambung semula apabila kedua-duanya tenang.",
    imageAlt: "Ilustrasi dua belon perbualan untuk artikel komunikasi suami isteri",
    blocks: [
      { heading: "Kenapa cara kita memulakan perbualan sangat penting?", paragraphs: [
        "Kajian pasangan oleh penyelidik hubungan John Gottman mendapati perbincangan yang dimulakan dengan kritikan atau sindiran biasanya berakhir dengan nada yang sama. Sebaliknya, “permulaan yang lembut” — menyatakan perasaan dan keperluan tanpa menuduh — memberi peluang perbualan berakhir dengan baik.",
        "Bandingkan: “Awak tak pernah tolong!” dengan “Saya rasa penat malam ini. Boleh awak tolong tidurkan anak?” Isi sama, kesan berbeza.",
      ] },
      { heading: "Bagaimana bercakap tanpa menyalahkan pasangan?", paragraphs: [
        "Gunakan ayat “saya” dan sebut perkara yang khusus: apa yang berlaku, apa yang anda rasa, dan apa yang anda harapkan. Elakkan perkataan “selalu” dan “tak pernah” kerana ia membuat pasangan bertahan, bukan mendengar.",
      ], list: [
        "Apa yang berlaku: “Bila kita janji keluar pukul 8 dan lewat sejam…”",
        "Apa yang saya rasa: “…saya rasa tak dihargai.”",
        "Apa yang saya harap: “Lain kali, boleh beritahu awal kalau lambat?”",
      ] },
      { heading: "Bagaimana mendengar supaya pasangan rasa difahami?", paragraphs: [
        "Mendengar bukan menunggu giliran bercakap. Ulang semula maksud pasangan dengan perkataan anda sendiri dan tanya sama ada betul. Ini memperlahankan perbualan dan mengurangkan salah faham.",
        "Anda tidak perlu bersetuju untuk memahami. “Saya faham kenapa awak rasa begitu” bukan bermaksud anda mengaku salah.",
      ] },
      { heading: "Bila masa yang sesuai untuk berbincang hal serius?", paragraphs: [
        "Elakkan topik berat ketika lapar, penat, sedang memandu atau di depan anak-anak. Tanya dahulu: “Ada masa 15 minit malam ini? Saya nak bincang pasal belanja rumah.” Memberi notis membuat pasangan lebih bersedia.",
        "Sesetengah pasangan menetapkan masa mingguan yang ringkas untuk berbincang hal rumah — jadual, kewangan, anak — supaya isu kecil tidak terkumpul.",
      ] },
      { heading: "Apa yang perlu dibuat bila perbualan mula panas?", paragraphs: [
        "Apabila nada suara naik atau anda rasa jantung berdebar, minta rehat: “Saya nak tenangkan diri 20 minit, lepas tu kita sambung.” Kemudian betul-betul kembali. Rehat yang tidak disambung terasa seperti mengelak.",
        "Jika pertengkaran berulang dengan isu yang sama, baca [kenapa suami isteri selalu bergaduh](/blog/suami-isteri-selalu-bergaduh). Jika pasangan sudah terasa hati, panduan [cara memujuk isteri yang merajuk](/blog/cara-pujuk-isteri-merajuk) mungkin membantu.",
      ] },
      { heading: "Bagaimana berkomunikasi di WhatsApp tanpa salah faham?", paragraphs: [
        "Mesej teks tidak membawa nada suara, jadi ayat pendek mudah disalah tafsir. Simpan topik sensitif untuk bersemuka atau panggilan suara. Gunakan WhatsApp untuk perkara praktikal dan kata-kata yang baik — “Dah sampai?”, “Terima kasih untuk hari ini.”",
      ] },
    ],
    qa: [
      { q: "Bagaimana memulakan perbualan sukar dengan pasangan?", a: "Pilih masa yang tenang, beritahu anda mahu berbincang, dan mulakan dengan perasaan serta keperluan anda tanpa menuduh. Contohnya: “Saya risau tentang belanja bulan ini. Boleh kita duduk sekejap dan susun bersama?”" },
      { q: "Bagaimana jika pasangan tidak mahu bercakap?", a: "Jangan paksa ketika itu. Beritahu anda bersedia bila dia bersedia, dan cadangkan masa lain. Jika keengganan bercakap berlarutan berminggu-minggu, pertimbangkan kaunseling perkahwinan." },
      { q: "Adakah normal suami isteri berbeza cara berkomunikasi?", a: "Ya. Ada yang suka berbincang segera, ada yang perlu masa berfikir. Yang penting ialah bersetuju tentang cara — contohnya rehat 20 minit kemudian sambung — supaya kedua-duanya rasa dihormati." },
    ],
    sources: [src.gottmanStartup, src.gottmanRepair, src.lppknCounselling],
    doctorNote: counsellingMs,
    disclaimer: "Artikel ini ialah bacaan gaya hidup umum dan bukan nasihat kaunseling profesional.",
  },
  {
    slug: "how-to-communicate-with-your-spouse",
    title: "How do you communicate with your spouse without fighting?",
    seoTitle: "How to Communicate With Your Spouse",
    description: "How to talk with your husband or wife without fighting: start gently, listen to understand, choose the right moment and pause before anger peaks.",
    lead: "Communication between spouses gets calmer when you start conversations gently, talk about your own feelings and needs (rather than blaming), listen to understand and pick the right moment. If things start to heat up, pause and come back when you are both calm.",
    imageAlt: "Illustration of two speech bubbles for an article on communication in marriage",
    blocks: [
      { heading: "Why does the way you start a conversation matter so much?", paragraphs: [
        "Couples research by relationship researcher John Gottman found that discussions that begin with criticism or sarcasm usually end the same way. A “soft start-up” — stating feelings and needs without accusing — gives the conversation a chance to end well.",
        "Compare “You never help!” with “I'm exhausted tonight. Could you put the kids to bed?” Same content, different result.",
      ] },
      { heading: "How do you speak without blaming your partner?", paragraphs: [
        "Use “I” statements and be specific: what happened, how you felt and what you hope for. Avoid “always” and “never”, which make your partner defend rather than listen.",
      ], list: [
        "What happened: “When we planned to leave at 8 and it was an hour late…”",
        "How I felt: “…I felt like it didn't matter.”",
        "What I hope for: “Next time, could you tell me early if you're running late?”",
      ] },
      { heading: "How do you listen so your partner feels understood?", paragraphs: [
        "Listening is not waiting for your turn to talk. Put your partner's point into your own words and ask if you got it right. It slows the conversation down and reduces misunderstandings.",
        "You do not have to agree to understand. “I can see why you feel that way” is not the same as admitting you were wrong.",
      ] },
      { heading: "When is the right time to discuss something serious?", paragraphs: [
        "Avoid heavy topics when either of you is hungry, tired, driving or in front of the children. Ask first: “Do you have 15 minutes tonight? I'd like to talk about the household budget.” A little notice helps your partner feel prepared.",
        "Some couples set a short weekly check-in for household matters — schedules, money, children — so small issues do not pile up.",
      ] },
      { heading: "What should you do when a conversation gets heated?", paragraphs: [
        "When voices rise or your heart is racing, ask for a break: “I need 20 minutes to calm down, then let's continue.” Then really come back. A break that never ends feels like avoidance.",
        "If you keep fighting about the same issue, read [why married couples keep fighting](/en/blog/why-married-couples-keep-fighting). If your wife is already hurt, the guide on [how to make up with your wife](/en/blog/how-to-make-up-with-your-wife) may help.",
      ] },
      { heading: "How do you avoid misunderstandings on WhatsApp?", paragraphs: [
        "Text messages carry no tone of voice, so short replies are easy to misread. Keep sensitive topics for face-to-face talks or voice calls. Use WhatsApp for practical things and kind words — “Home safe?”, “Thanks for today.”",
      ] },
    ],
    qa: [
      { q: "How do you start a difficult conversation with your spouse?", a: "Choose a calm moment, say you would like to talk, and open with your feelings and needs without accusing. For example: “I'm worried about this month's spending. Can we sit down for a bit and plan it together?”" },
      { q: "What if my spouse refuses to talk?", a: "Do not force it in the moment. Say you are ready whenever they are and suggest another time. If the silence goes on for weeks, consider marriage counselling." },
      { q: "Is it normal for spouses to communicate differently?", a: "Yes. Some people like to talk things through straight away; others need time to think. What matters is agreeing on a method — for example a 20-minute break and then continuing — so both of you feel respected." },
    ],
    sources: [src.gottmanStartup, src.gottmanRepair, src.lppknCounselling],
    doctorNote: counsellingEn,
    disclaimer: "This article is general lifestyle reading, not professional counselling advice.",
  },
);

const romance = qaArticle(
  "romantic-ideas",
  "relationships",
  {
    slug: "idea-romantik-untuk-isteri",
    title: "Apa idea romantik untuk isteri yang tidak perlu mahal?",
    seoTitle: "Idea Romantik untuk Isteri di Rumah",
    description: "Idea romantik untuk isteri di rumah dan luar rumah yang mudah dan murah: nota ringkas, makan malam tanpa telefon, jalan petang, hadiah kecil yang bermakna dan cara jadi suami romantik.",
    lead: "Romantik dalam rumah tangga tidak semestinya mahal. Isteri biasanya paling tersentuh dengan perhatian yang dirancang: makan malam berdua tanpa telefon, nota ringkas, jalan petang, sarapan yang disediakan suami atau hadiah kecil yang menunjukkan anda ingat kesukaannya. Kuncinya ialah konsisten, bukan sekali-sekala yang besar.",
    imageAlt: "Ilustrasi cawan dan bunga untuk artikel idea romantik untuk isteri",
    blocks: [
      { heading: "Apa maksud romantik dalam perkahwinan?", paragraphs: [
        "Romantik ialah cara menunjukkan bahawa pasangan masih istimewa selepas bertahun-tahun bersama. Ia boleh berupa kata-kata, masa, sentuhan yang lembut, bantuan atau hadiah kecil. Setiap orang menghargai cara yang berbeza, jadi perhatikan apa yang paling membuat isteri anda tersenyum.",
        "Teladan dalam sirah juga menunjukkan kemesraan yang sederhana: Rasulullah SAW pernah berlumba lari dengan Saidatina Aisyah RA (riwayat Abu Dawud). Kemesraan tidak memerlukan kemewahan.",
      ] },
      { heading: "Apa idea romantik di rumah untuk isteri?", paragraphs: [
        "Idea ini mudah dibuat walaupun anak masih kecil dan bajet terhad:",
      ], list: [
        "Makan malam berdua selepas anak tidur — lampu malap, telefon di bilik lain.",
        "Siapkan sarapan atau bancuh air kegemarannya pada pagi hujung minggu.",
        "Tulis nota ringkas dan letak di beg atau cermin: satu sebab anda bersyukur memilikinya.",
        "Tonton filem atau drama pilihannya tanpa komen tentang jalan cerita.",
        "Ambil alih semua urusan anak dan rumah untuk satu petang supaya dia boleh berehat.",
        "Selak semula gambar kahwin atau gambar awal perkahwinan bersama.",
      ] },
      { heading: "Apa idea romantik di luar rumah yang murah?", paragraphs: [
        "Keluar berdua tidak perlu ke restoran mahal. Yang penting ialah masa tanpa gangguan.",
      ], list: [
        "Jalan petang di taman atau tepi pantai berhampiran.",
        "Minum petang di kedai kegemaran semasa awal perkahwinan.",
        "Memandu santai pada waktu malam dengan lagu kegemarannya.",
        "Balik kampung bersama dan luangkan masa berdua, bukan hanya dengan keluarga besar.",
      ] },
      { heading: "Hadiah apa yang sesuai untuk isteri?", paragraphs: [
        "Hadiah terbaik ialah yang menunjukkan anda mendengar. Simpan nota di telefon setiap kali isteri menyebut sesuatu yang dia suka atau perlukan — buku, pinggan, minyak wangi, kursus — dan gunakan senarai itu untuk hari jadi atau ulang tahun perkahwinan.",
        "Selepas bersalin atau ketika isteri sangat penat, hadiah paling bermakna mungkin ialah masa rehat, bantuan di rumah atau makanan yang dihantar supaya dia tidak perlu memasak.",
      ] },
      { heading: "Bagaimana menjadi suami yang lebih romantik jika bukan sifat semula jadi?", paragraphs: [
        "Ramai lelaki rasa kekok untuk berkata manis. Mulakan dengan perkara yang anda selesa: pegang tangan semasa berjalan, mesej ringkas ketika rehat tengah hari, atau ucapan terima kasih yang khusus. Romantik ialah kemahiran yang boleh dilatih.",
        "Jadualkan dalam kalendar jika perlu — satu idea kecil setiap minggu. Perbuatan yang dirancang tetap ikhlas kerana anda memilih untuk meluangkan masa.",
      ] },
      { heading: "Bagaimana jika kami terlalu sibuk atau sedang tidak sefahaman?", paragraphs: [
        "Jika hubungan sedang tegang, idea romantik boleh terasa seperti mengelak isu. Selesaikan dahulu dengan perbualan yang jujur — panduan [cara berkomunikasi dengan pasangan](/blog/cara-berkomunikasi-dengan-pasangan) boleh membantu — kemudian bina semula kemesraan langkah demi langkah.",
        "Lihat juga [cara membahagiakan isteri setiap hari](/blog/cara-bahagiakan-isteri) untuk asas yang membuat usaha romantik lebih bermakna.",
      ] },
    ],
    qa: [
      { q: "Bagaimana cara romantik dengan isteri setiap hari?", a: "Ucap selamat pagi dan selamat malam dengan mesra, mesej ringkas ketika berjauhan, pegang tangan ketika berjalan, ucap terima kasih untuk perkara kecil dan luangkan beberapa minit berbual tanpa telefon sebelum tidur." },
      { q: "Apa hadiah untuk isteri yang merajuk?", a: "Hadiah boleh membantu, tetapi selesaikan dahulu punca dia terasa hati. Minta maaf dengan ikhlas, dengar penjelasannya, kemudian hadiah kecil seperti makanan kegemarannya boleh menjadi tanda penghargaan, bukan pengganti perbincangan." },
      { q: "Apa idea sambutan ulang tahun perkahwinan yang murah?", a: "Masak bersama menu malam pertama kenangan anda, tulis surat tentang tahun yang sudah dilalui, atau pergi semula ke tempat anda selalu keluar ketika awal berkahwin. Kenangan yang dikongsi lebih bermakna daripada harga." },
    ],
    sources: [src.gottmanRepair, src.lppknCounselling],
    disclaimer: "Artikel ini ialah bacaan gaya hidup umum untuk pasangan suami isteri.",
  },
  {
    slug: "romantic-ideas-for-your-wife",
    title: "What are romantic ideas for your wife that don't cost much?",
    seoTitle: "Romantic Ideas for Your Wife at Home",
    description: "Easy, low-cost romantic ideas for your wife at home and outside: short notes, phone-free dinners, evening walks, small meaningful gifts and how to become a more romantic husband.",
    lead: "Romance in a marriage does not have to be expensive. Wives are usually most touched by planned attention: a dinner for two without phones, a short note, an evening walk, a breakfast made by her husband or a small gift that shows you remember what she likes. Consistency matters more than an occasional grand gesture.",
    imageAlt: "Illustration of a cup and a flower for an article on romantic ideas for your wife",
    blocks: [
      { heading: "What does romance mean in a marriage?", paragraphs: [
        "Romance is how you show that your partner is still special after years together. It can be words, time, gentle affection, practical help or small gifts. Everyone appreciates different things, so notice what makes your wife smile the most.",
        "The Prophet's life also shows simple affection: he once raced Aisha (may Allah be pleased with her) on foot (narrated by Abu Dawud). Warmth does not need luxury.",
      ] },
      { heading: "What are romantic ideas for your wife at home?", paragraphs: [
        "These are easy even with young children and a tight budget:",
      ], list: [
        "Dinner for two after the children are asleep — soft lights, phones in another room.",
        "Make breakfast or her favourite drink on a weekend morning.",
        "Leave a short note in her bag or on the mirror: one reason you are grateful for her.",
        "Watch the film or drama she chooses, without commenting on the plot.",
        "Take over the children and the house for an afternoon so she can rest.",
        "Look through your wedding photos or early pictures together.",
      ] },
      { heading: "What are low-cost romantic ideas outside the home?", paragraphs: [
        "A date does not need an expensive restaurant. What matters is uninterrupted time.",
      ], list: [
        "An evening walk in a nearby park or by the beach.",
        "Tea at the café you used to visit when you were newly married.",
        "A relaxed night drive with her favourite songs.",
        "Going back to the kampung together and making time for just the two of you.",
      ] },
      { heading: "What gifts suit a wife?", paragraphs: [
        "The best gifts show that you listened. Keep a note on your phone whenever she mentions something she likes or needs — a book, a dish, a perfume, a course — and use it for birthdays and anniversaries.",
        "After childbirth or when she is very tired, the most meaningful gift may be rest, help at home or food delivered so she does not have to cook.",
      ] },
      { heading: "How do you become more romantic if it doesn't come naturally?", paragraphs: [
        "Many men feel awkward saying sweet things. Start with what feels comfortable: hold her hand when you walk, send a short message at lunch, or give a specific thank-you. Romance is a skill you can practise.",
        "Put it in your calendar if you need to — one small idea each week. A planned gesture is still sincere, because you chose to make the time.",
      ] },
      { heading: "What if we are too busy or not getting along?", paragraphs: [
        "If things are tense, romantic gestures can feel like avoiding the issue. Talk it through honestly first — the guide on [how to communicate with your spouse](/en/blog/how-to-communicate-with-your-spouse) can help — then rebuild closeness step by step.",
        "See also [how to make your wife happy every day](/en/blog/how-to-make-your-wife-happy) for the basics that make romantic effort meaningful.",
      ] },
    ],
    qa: [
      { q: "How can I be romantic with my wife every day?", a: "Say good morning and good night warmly, send a short message when you are apart, hold hands when you walk, thank her for small things and spend a few phone-free minutes talking before sleep." },
      { q: "What gift should I give my wife when she is upset with me?", a: "A gift can help, but deal with the reason she is hurt first. Apologise sincerely and listen to her side; then a small gift such as her favourite food can be a sign of appreciation, not a replacement for the conversation." },
      { q: "What is a low-cost way to celebrate a wedding anniversary?", a: "Cook a meal together that reminds you of your early days, write a letter about the year you have shared, or revisit a place you used to go when you were newly married. Shared memories mean more than the price." },
    ],
    sources: [src.gottmanRepair, src.lppknCounselling],
    disclaimer: "This article is general lifestyle reading for married couples.",
  },
);

const makeUp = qaArticle(
  "make-up-after-argument",
  "relationships",
  {
    slug: "cara-pujuk-isteri-merajuk",
    title: "Bagaimana cara memujuk isteri yang merajuk?",
    seoTitle: "Cara Pujuk Isteri Merajuk dengan Ikhlas",
    description: "Cara memujuk isteri yang merajuk atau terasa hati: beri ruang seketika, akui perasaannya, minta maaf dengan khusus dan tunjukkan perubahan — bukan sekadar hadiah.",
    lead: "Isteri yang merajuk biasanya mahu tahu bahawa perasaannya penting. Cara memujuk yang berkesan ialah beri ruang seketika jika dia perlukannya, kemudian dekati dengan tenang, akui apa yang membuatnya terasa, minta maaf dengan khusus dan tunjukkan perubahan. Hadiah boleh menyusul, tetapi tidak menggantikan permohonan maaf yang ikhlas.",
    imageAlt: "Ilustrasi dua tangan dan hati untuk artikel cara memujuk isteri",
    blocks: [
      { heading: "Kenapa isteri merajuk?", paragraphs: [
        "Merajuk selalunya tanda isteri terasa hati tetapi sukar menyatakannya secara terus — mungkin kerana penat, rasa tidak didengar, atau kecewa dengan sesuatu yang berulang. Kadang-kadang punca sebenar bukan peristiwa hari itu, tetapi perkara kecil yang sudah lama terkumpul.",
        "Melihat merajuk sebagai isyarat, bukan serangan, membantu anda bertindak dengan tenang.",
      ] },
      { heading: "Perlukah beri ruang atau terus pujuk?", paragraphs: [
        "Bergantung kepada pasangan anda. Ada isteri yang perlukan masa bertenang dahulu; ada yang lebih terluka jika dibiarkan. Jika tidak pasti, katakan: “Abang nampak awak terasa. Abang nak betulkan. Bila awak dah sedia, kita cakap ya.” Ini memberi ruang tanpa meninggalkannya.",
        "Elakkan membiarkan merajuk berlarutan berhari-hari tanpa usaha. Diam yang terlalu lama menambah jarak.",
      ] },
      { heading: "Bagaimana cara minta maaf kepada isteri dengan ikhlas?", paragraphs: [
        "Permohonan maaf yang berkesan mempunyai tiga bahagian: menyebut kesilapan secara khusus, mengakui kesannya pada isteri, dan menyatakan apa yang akan anda buat berbeza.",
      ], list: [
        "Khusus: “Abang minta maaf sebab cakap kasar depan anak-anak tadi.”",
        "Akui kesan: “Abang faham awak rasa malu dan tak dihormati.”",
        "Perubahan: “Lain kali kalau abang marah, abang akan keluar sekejap dulu.”",
        "Elakkan “tapi”: “Abang minta maaf, tapi awak pun…” membatalkan permohonan maaf.",
      ] },
      { heading: "Apa yang tidak patut dibuat ketika isteri merajuk?", paragraphs: [
        "Jangan mempersendakan perasaannya, membandingkan dengan isteri orang lain, membuka cerita lama atau membalas dengan merajuk juga. Jangan libatkan media sosial atau ahli keluarga lain dalam isu peribadi.",
        "Jika anda sendiri sedang marah, tenangkan diri dahulu. Panduan Rasulullah SAW apabila marah ialah mengubah keadaan — jika berdiri, duduk; jika masih marah, berbaring (riwayat Abu Dawud).",
      ] },
      { heading: "Bagaimana memastikan isu sama tidak berulang?", paragraphs: [
        "Selepas suasana reda, bincangkan punca sebenar dengan tenang. Apa yang boleh diubah dalam rutin, pembahagian kerja atau cara bercakap? Tunaikan janji kecil yang dibuat — itulah yang membina semula kepercayaan.",
        "Jika rajuk dan pertengkaran sering berulang, baca [kenapa suami isteri selalu bergaduh](/blog/suami-isteri-selalu-bergaduh) dan [cara berkomunikasi dengan pasangan](/blog/cara-berkomunikasi-dengan-pasangan). Soalan pendek tentang [apa yang perlu dibuat selepas bergaduh](/blog/20-soalan-hubungan) juga dijawab dalam 20 soalan hubungan kami.",
      ] },
    ],
    qa: [
      { q: "Bagaimana cara Rasulullah memujuk isteri?", a: "Sirah menggambarkan Rasulullah SAW sebagai suami yang lembut, bergurau dengan isteri, memanggil dengan nama yang disukai dan bersabar ketika isteri marah. Untuk rujukan hadis yang tepat dan huraian, rujuk ustaz atau pejabat agama yang bertauliah." },
      { q: "Isteri merajuk lama, apa patut saya buat?", a: "Teruskan menunjukkan kesediaan untuk berbincang tanpa mendesak, tunaikan perubahan yang dijanjikan dan cari masa yang tenang untuk bertanya apa yang dia perlukan. Jika berlarutan berminggu-minggu, pertimbangkan kaunseling rumah tangga." },
      { q: "Adakah hadiah cukup untuk memujuk isteri?", a: "Biasanya tidak. Hadiah tanpa permohonan maaf dan perubahan boleh terasa seperti mahu menutup isu. Mulakan dengan maaf yang khusus dan ikhlas; hadiah kecil boleh menyusul sebagai tanda kasih." },
      { q: "Bagaimana jika isteri balik rumah ibu bapanya selepas bergaduh?", a: "Hormati keperluannya untuk bertenang dan pastikan dia selamat. Hubungi dengan tenang, nyatakan anda mahu memperbaiki keadaan, dan elakkan menekan melalui ahli keluarga. Jika perlu, dapatkan bantuan kaunselor atau pejabat agama sebagai orang tengah." },
    ],
    sources: [src.gottmanRepair, src.lppknCounselling],
    doctorNote: counsellingMs,
    disclaimer: "Artikel ini ialah bacaan gaya hidup umum dan bukan nasihat kaunseling atau agama.",
  },
  {
    slug: "how-to-make-up-with-your-wife",
    title: "How do you make up with your wife when she is upset?",
    seoTitle: "How to Apologise to Your Wife Sincerely",
    description: "How to make up with your wife when she is hurt or sulking: give her a little space, acknowledge her feelings, apologise specifically and show change — not just gifts.",
    lead: "A wife who is upset usually wants to know that her feelings matter. The way to make up is to give her a little space if she needs it, then approach calmly, acknowledge what hurt her, apologise specifically and show that something will change. A gift can follow, but it does not replace a sincere apology.",
    imageAlt: "Illustration of two hands and a heart for an article on making up with your wife",
    blocks: [
      { heading: "Why is my wife upset with me?", paragraphs: [
        "Sulking or going quiet is often a sign that your wife is hurt but finds it hard to say so directly — perhaps because she is tired, feels unheard or is disappointed by something that keeps happening. Sometimes the real cause is not today's event but small things that have built up.",
        "Seeing it as a signal rather than an attack helps you respond calmly.",
      ] },
      { heading: "Should you give her space or try to make up straight away?", paragraphs: [
        "It depends on your partner. Some wives need time to calm down first; others feel more hurt if left alone. If you are unsure, say: “I can see you're hurt. I want to make it right. Whenever you're ready, let's talk.” That gives space without abandoning her.",
        "Avoid letting it drag on for days without any effort. Long silences widen the gap.",
      ] },
      { heading: "How do you apologise to your wife sincerely?", paragraphs: [
        "An effective apology has three parts: naming the mistake specifically, acknowledging its effect on her and saying what you will do differently.",
      ], list: [
        "Specific: “I'm sorry I spoke harshly in front of the children.”",
        "Acknowledge the effect: “I understand you felt embarrassed and disrespected.”",
        "Change: “Next time I'm angry, I'll step outside for a moment first.”",
        "Avoid “but”: “I'm sorry, but you also…” cancels the apology.",
      ] },
      { heading: "What should you not do when your wife is upset?", paragraphs: [
        "Do not mock her feelings, compare her with other wives, bring up old arguments or sulk back. Keep private issues off social media and away from other relatives.",
        "If you are angry yourself, calm down first. The Prophet's guidance on anger was to change your position — if standing, sit; if still angry, lie down (narrated by Abu Dawud).",
      ] },
      { heading: "How do you stop the same issue from happening again?", paragraphs: [
        "Once things have settled, talk about the real cause calmly. What can change in your routine, the division of chores or the way you speak? Keep the small promises you make — that is what rebuilds trust.",
        "If hurt feelings and arguments keep coming back, read [why married couples keep fighting](/en/blog/why-married-couples-keep-fighting) and [how to communicate with your spouse](/en/blog/how-to-communicate-with-your-spouse). A short answer on [what to do after an argument](/en/blog/20-relationship-questions) is also in our 20 relationship questions.",
      ] },
    ],
    qa: [
      { q: "How did the Prophet make up with his wives?", a: "The Prophet's biography describes him as a gentle husband who joked with his wives, called them by names they liked and was patient when they were upset. For precise hadith references and explanation, ask a qualified religious teacher or office." },
      { q: "My wife has been upset for a long time. What should I do?", a: "Keep showing you are willing to talk without pressuring her, follow through on the changes you promised and find a calm moment to ask what she needs. If it lasts for weeks, consider marriage counselling." },
      { q: "Is a gift enough to make up with my wife?", a: "Usually not. A gift without an apology and change can feel like covering up the issue. Start with a specific, sincere apology; a small gift can follow as a sign of affection." },
      { q: "What if my wife goes to her parents' house after a fight?", a: "Respect her need to calm down and make sure she is safe. Contact her calmly, say you want to put things right and avoid pressuring her through relatives. If needed, ask a counsellor or religious office to mediate." },
    ],
    sources: [src.gottmanRepair, src.lppknCounselling],
    doctorNote: counsellingEn,
    disclaimer: "This article is general lifestyle reading, not counselling or religious advice.",
  },
);

const conflict = qaArticle(
  "recurring-conflict",
  "relationships",
  {
    slug: "suami-isteri-selalu-bergaduh",
    title: "Kenapa suami isteri selalu bergaduh, dan bagaimana menghentikannya?",
    seoTitle: "Suami Isteri Selalu Bergaduh: Punca & Cara",
    description: "Kenapa suami isteri selalu bergaduh tentang perkara yang sama, apa kesannya kepada anak, dan langkah praktikal untuk memutuskan kitaran pertengkaran dalam rumah tangga.",
    lead: "Suami isteri yang selalu bergaduh biasanya terperangkap dalam kitaran yang sama: isu asas (kewangan, kerja rumah, keluarga, masa) tidak pernah selesai, dan setiap perbincangan bermula dengan kritikan. Kitaran ini boleh diputuskan dengan mengenal pasti isu sebenar, bersetuju tentang cara bergaduh yang adil, berehat apabila marah memuncak dan membaiki hubungan selepas itu.",
    imageAlt: "Ilustrasi anak panah berpusing untuk artikel suami isteri selalu bergaduh",
    blocks: [
      { heading: "Apakah punca biasa suami isteri selalu bergaduh?", paragraphs: [
        "Pertengkaran berulang jarang tentang perkara kecil yang sedang dibincangkan. Biasanya ia berpunca daripada isu asas yang belum selesai:",
      ], list: [
        "Kewangan: perbelanjaan, hutang, bantuan kepada keluarga besar.",
        "Pembahagian kerja rumah dan menjaga anak.",
        "Masa: kerja lebih masa, telefon, hobi, masa dengan kawan.",
        "Hubungan dengan mentua dan ipar.",
        "Keletihan dan stres yang dibawa pulang dari kerja.",
      ] },
      { heading: "Kenapa pertengkaran yang sama berulang-ulang?", paragraphs: [
        "Penyelidik hubungan mendapati sebahagian konflik pasangan memang berpanjangan kerana berpunca daripada perbezaan sifat atau nilai. Matlamatnya bukan menghapuskan semua perbezaan, tetapi belajar membincangkannya tanpa menyakiti satu sama lain.",
        "Kitaran menjadi lebih teruk apabila setiap perbualan bermula dengan tuduhan, dibalas dengan pertahanan, dan berakhir dengan diam. Mengubah cara memulakan perbualan — lihat [cara berkomunikasi dengan pasangan](/blog/cara-berkomunikasi-dengan-pasangan) — ialah langkah pertama.",
      ] },
      { heading: "Bagaimana bergaduh dengan cara yang adil?", paragraphs: [
        "Pasangan boleh bersetuju tentang “peraturan” ketika tidak bergaduh:",
      ], list: [
        "Satu isu pada satu masa — jangan buka cerita lama.",
        "Tiada makian, sindiran atau ugutan untuk berpisah ketika marah.",
        "Sesiapa boleh minta rehat 20–30 minit, dan wajib kembali berbincang.",
        "Tidak bergaduh di depan anak-anak atau di media sosial.",
        "Akhiri dengan satu langkah konkrit, walaupun kecil.",
      ] },
      { heading: "Apa kesan pertengkaran di depan anak?", paragraphs: [
        "Anak-anak peka terhadap suasana rumah. Pertengkaran yang kasar dan berulang di depan mereka boleh membuat mereka rasa takut atau bersalah. Jika anak terdengar pertengkaran, mereka juga perlu melihat ibu bapa berbaik semula — itu mengajar bahawa konflik boleh diselesaikan dengan hormat.",
      ] },
      { heading: "Bagaimana membaiki hubungan selepas bergaduh?", paragraphs: [
        "Kajian Gottman menyebut “percubaan membaiki” — gurauan kecil, sentuhan, permohonan maaf atau ayat seperti “Kita dua-dua penat, jom rehat dulu” — sebagai antara faktor yang membezakan pasangan yang kekal bahagia. Pasangan yang menerima percubaan ini lebih cepat pulih.",
        "Jika anda yang bersalah, [minta maaf dengan khusus dan ikhlas](/blog/cara-pujuk-isteri-merajuk). Jika pasangan cuba berbaik, terima walaupun anda masih sedikit terasa.",
      ] },
      { heading: "Bila perlu berjumpa kaunselor perkahwinan?", paragraphs: [
        "Pertimbangkan kaunseling jika pertengkaran berlaku hampir setiap hari, anda rasa tiada lagi perbualan yang tenang, isu yang sama tidak pernah selesai, atau salah seorang mula berfikir untuk berpisah. Kaunseling bukan tanda gagal; ia ruang selamat dengan orang tengah yang terlatih.",
        "LPPKN dan pejabat agama Islam negeri menyediakan khidmat kaunseling keluarga. Untuk asas rumah tangga yang tenang, baca juga [perkahwinan bahagia bermula dengan kehadiran](/blog/hubungan-bahagia).",
      ] },
    ],
    qa: [
      { q: "Adakah normal suami isteri bergaduh?", a: "Ya, perselisihan faham adalah normal dalam mana-mana perkahwinan. Yang membezakan ialah cara pasangan berbincang dan berbaik semula. Pertengkaran yang melibatkan kekerasan, ugutan atau rasa takut bukan perkara normal dan memerlukan bantuan segera." },
      { q: "Bagaimana menghentikan pertengkaran yang sedang berlaku?", a: "Minta rehat dengan tenang, contohnya “Saya nak tenangkan diri 20 minit, lepas tu kita sambung.” Keluar dari bilik, tarik nafas perlahan, dan kembali apabila kedua-duanya lebih tenang." },
      { q: "Apa hukum suami isteri bergaduh dan tidak bercakap lebih tiga hari?", a: "Soalan hukum seperti ini sebaiknya dirujuk kepada ustaz, mufti atau pejabat agama yang bertauliah. Dari segi hubungan, diam yang berpanjangan biasanya menambah jarak, jadi usahakan untuk berbincang semula secepat mungkin dengan tenang." },
    ],
    sources: [src.gottmanStartup, src.gottmanRepair, src.lppknCounselling, src.heal],
    doctorNote: counsellingMs,
    disclaimer: "Artikel ini ialah bacaan gaya hidup umum dan bukan nasihat kaunseling, agama atau undang-undang.",
  },
  {
    slug: "why-married-couples-keep-fighting",
    title: "Why do married couples keep fighting, and how do you stop?",
    seoTitle: "Why Married Couples Keep Fighting",
    description: "Why husbands and wives keep fighting about the same things, how it affects children, and practical steps to break the cycle of arguments in a marriage.",
    lead: "Couples who keep fighting are usually stuck in the same loop: an underlying issue (money, housework, family, time) is never resolved, and every discussion starts with criticism. The cycle can be broken by naming the real issue, agreeing on fair ways to argue, pausing when anger peaks and repairing afterwards.",
    imageAlt: "Illustration of circular arrows for an article on couples who keep fighting",
    blocks: [
      { heading: "What do married couples usually fight about?", paragraphs: [
        "Repeated arguments are rarely about the small thing being discussed. They usually come from underlying issues that are still open:",
      ], list: [
        "Money: spending, debt, supporting extended family.",
        "The division of housework and childcare.",
        "Time: overtime, phones, hobbies, time with friends.",
        "Relationships with in-laws.",
        "Tiredness and stress brought home from work.",
      ] },
      { heading: "Why does the same argument keep coming back?", paragraphs: [
        "Relationship researchers have found that some couple conflicts are long-running because they come from differences in personality or values. The goal is not to remove every difference, but to learn to discuss it without hurting each other.",
        "The cycle gets worse when each conversation starts with blame, is met with defensiveness and ends in silence. Changing how you start the conversation — see [how to communicate with your spouse](/en/blog/how-to-communicate-with-your-spouse) — is the first step.",
      ] },
      { heading: "How do you argue fairly?", paragraphs: [
        "Couples can agree on “rules” while they are not fighting:",
      ], list: [
        "One issue at a time — no bringing up the past.",
        "No insults, sarcasm or threats to leave when angry.",
        "Either of you can call a 20–30 minute break, and you both come back to talk.",
        "No fighting in front of the children or on social media.",
        "End with one concrete step, however small.",
      ] },
      { heading: "How does fighting in front of children affect them?", paragraphs: [
        "Children are sensitive to the mood at home. Harsh, repeated arguments in front of them can make them feel afraid or guilty. If children hear an argument, they also need to see their parents make up — it teaches them that conflict can be resolved with respect.",
      ] },
      { heading: "How do you repair the relationship after a fight?", paragraphs: [
        "Gottman's research describes “repair attempts” — a small joke, a touch, an apology or a line like “We're both tired, let's take a break” — as one of the factors that separate couples who stay happy. Couples who accept these attempts recover faster.",
        "If you were in the wrong, [apologise specifically and sincerely](/en/blog/how-to-make-up-with-your-wife). If your partner tries to make up, accept it even if you are still a little hurt.",
      ] },
      { heading: "When should you see a marriage counsellor?", paragraphs: [
        "Consider counselling if you argue almost every day, calm conversations no longer seem possible, the same issue is never resolved, or one of you has started thinking about separating. Counselling is not failure; it is a safe space with a trained third party.",
        "LPPKN and state Islamic religious offices offer family counselling. For the basics of a calmer home, also read [a calmer marriage starts with presence](/en/blog/happy-marriage).",
      ] },
    ],
    qa: [
      { q: "Is it normal for married couples to fight?", a: "Yes, disagreements are normal in any marriage. What makes the difference is how couples discuss them and make up. Arguments that involve violence, threats or fear are not normal and need help straight away." },
      { q: "How do you stop an argument that is happening right now?", a: "Ask calmly for a break, for example “I need 20 minutes to calm down, then let's continue.” Leave the room, breathe slowly and come back when you are both calmer." },
      { q: "What is the Islamic ruling on spouses not speaking for more than three days after a fight?", a: "Questions of religious ruling are best taken to a qualified religious teacher, mufti or religious office. In relationship terms, long silences usually widen the distance, so try to talk again calmly as soon as you can." },
    ],
    sources: [src.gottmanStartup, src.gottmanRepair, src.lppknCounselling, src.heal],
    doctorNote: counsellingEn,
    disclaimer: "This article is general lifestyle reading, not counselling, religious or legal advice.",
  },
);

export const relationshipArticles: readonly Article[] = [wifeHappy, communication, romance, makeUp, conflict];
