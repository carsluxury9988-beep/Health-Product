import type { Article, ArticleContent } from "@/content/articles";
import { src } from "@/content/qa/sources";

/**
 * "Kisah Pasangan" / "Couple Stories": short fiction. Rules (enforced in stories.test.ts):
 * labelled "Kisah rekaan" / "Fiction", no product links, no intimate description,
 * the story ends before anything private, and a sourced tips section closes every story.
 */

function minutes(content: Omit<ArticleContent, "readMinutes">) {
  const text = [content.lead, ...content.blocks.flatMap((b) => [b.heading, ...b.paragraphs, ...(b.list ?? []), ...(b.after ?? [])])].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
}

function story(content: Omit<ArticleContent, "readMinutes">): ArticleContent {
  return { ...content, readMinutes: minutes(content) };
}

const malamPertamaMs = story({
  slug: "kisah-malam-pertama-selepas-nikah",
  title: "Kisah malam pertama selepas nikah: secawan teh, doa berdua dan pintu yang ditutup perlahan",
  seoTitle: "Kisah Malam Pertama Selepas Nikah",
  description: "Kisah rekaan malam pertama selepas nikah: pengantin baru yang penat dan gementar, perbualan jujur, secawan teh dan doa berdua. Disertakan tips malam pertama yang tenang.",
  category: "Kisah rekaan",
  lead: "Kisah rekaan. Selepas kenduri yang panjang, sepasang pengantin baru akhirnya tinggal berdua: penat, gementar dan tidak tahu hendak bercakap apa. Inilah kisah malam pertama selepas nikah yang berakhir dengan secawan teh, doa berdua dan pintu yang ditutup perlahan.",
  imageAlt: "Ilustrasi: pasangan pengantin baru berbaju nikah duduk bersama dan tersenyum di bilik pengantin",
  blocks: [
    {
      heading: "Selepas kenduri: pelamin sudah kosong, inai masih merah",
      paragraphs: [
        "Jam sudah hampir sebelas malam apabila khemah kenduri di halaman rumah Mak Teh akhirnya senyap. Kerusi plastik bertindih di tepi pagar, periuk besar nasi minyak sudah dicuci, dan pelamin hijau zamrud di ruang tamu tinggal kosong bersama bunga telur yang tidak sempat diagihkan.",
        "Nurul duduk di birai katil, masih memakai baju nikah putih yang sejak pagi terasa makin berat. Inai di hujung jarinya merah gelap. Dia memandang jari itu lama-lama, seolah-olah itulah satu-satunya perkara yang dia faham hari ini.",
        "Di luar tingkap, Proton Saga kelabu milik Aiman masih terletak di bawah pokok mempelam, dengan reben putih yang separuh tercabut di cermin sisi. Esok pagi, entah siapa akan bertanya kenapa reben itu belum dibuang.",
      ],
    },
    {
      heading: "Mak cik bertanya, dan perbualan paling janggal di dunia",
      paragraphs: [
        "Pintu bilik diketuk perlahan. Aiman masuk membawa dua botol air mineral, songkok di tangan, rambutnya berserabut. Dia berdiri di tepi pintu, tidak pasti hendak duduk di mana dalam bilik yang sejak petang tadi sudah menjadi bilik mereka berdua.",
        "“Mak Long kirim salam,” katanya. “Dia tanya… bila nak balik kampung dia di Muar.”",
        "Nurul mengangkat kening. “Itu saja dia tanya?”",
        "Aiman menggaru kepala. “Ada lagi. Tapi saya tak berani ulang.”",
        "Mereka diam. Kipas siling berbunyi tik-tik-tik. Dari ruang tamu kedengaran sepupu Nurul ketawa sambil mengemas pinggan, dan suara Pak Su bertanya siapa yang ambil pengecas telefonnya.",
        "“Ramai betul tetamu tadi,” kata Nurul akhirnya.",
        "“Ramai,” jawab Aiman. “Saya bersalam dengan lebih kurang tiga ratus orang. Lima orang tanya saya kerja di mana. Tiga orang tanya umur saya. Seorang tanya saya sokong pasukan bola mana.”",
        "“Abang jawab apa?”",
        "“Saya jawab Harimau Malaya. Dia terus tak bercakap dengan saya.”",
        "Nurul tersenyum sedikit. Sedikit sahaja. Kemudian dia kembali memandang inai di jarinya.",
      ],
    },
    {
      heading: "Gementar malam pertama: bila suami perasan isteri penat",
      paragraphs: [
        "Aiman perasan. Dia tidak tahu banyak tentang malam pertama selepas nikah, tetapi dia kenal wajah orang yang sudah tidak larat. Mata Nurul merah, bahunya jatuh, dan sejak tadi jarinya tidak berhenti memintal hujung selendang.",
        "Dia duduk di kerusi meja solek, bukan di katil. Sengaja dia memberi jarak.",
        "“Nurul,” katanya perlahan. “Awak penat?”",
        "Nurul mahu menjawab tidak. Itulah jawapan yang diajar oleh seluruh majlis hari ini: senyum, angguk, bergambar lagi. Tetapi suaranya keluar lain.",
        "“Penat sangat. Dan… saya takut. Bukan takut abang. Saya takut sebab semua orang buat malam ni macam peperiksaan. Mak cik-mak cik tu sejak pagi berbisik, senyum-senyum. Saya rasa macam semua orang sedang menunggu sesuatu.”",
        "Bilik itu sunyi. Aiman menarik nafas panjang.",
        "“Saya pun takut,” katanya. “Masa akad tadi, tangan saya berpeluh sampai tok kadi kena tunggu saya lap tangan dulu. Awak nampak tak?”",
        "“Nampak,” Nurul ketawa kecil. “Satu dewan nampak.”",
        "“Jadi kita sama-sama takut. Baguslah. Tak ada siapa perlu berlakon.”",
      ],
    },
    {
      heading: "Ketawa pertama, secawan teh dan doa berdua",
      paragraphs: [
        "Aiman bangun. “Awak dah makan? Betul-betul makan, bukan suap depan kamera?”",
        "Nurul menggeleng. Sepanjang hari dia hanya sempat dua suap nasi minyak di pelamin dan sepotong kek yang dipotong untuk gambar.",
        "“Tunggu kejap.”",
        "Dia keluar. Lima minit kemudian dia kembali dengan dulang: dua cawan teh panas, sepiring kuih seri muka yang berbaki, dan sebiji pisang. Dia meletakkan dulang di atas meja dengan sangat berhati-hati, seperti membawa barang kemas.",
        "“Mak Teh nampak saya bancuh teh,” katanya. “Dia cakap, ‘Amboi, baru kahwin dah pandai masuk dapur.’ Saya cakap saya memang pandai. Dia tak percaya.”",
        "Kali ini Nurul ketawa betul-betul, sampai terpaksa menutup mulut supaya orang di luar tidak dengar. Ketawa itu melepaskan sesuatu yang tersangkut di dadanya sejak pagi.",
        "Mereka minum teh sambil bercerita tentang perkara remeh: pak cik yang tersalah sebut nama Aiman semasa ucapan, budak kecil yang menangis kerana mahu duduk di pelamin, jurugambar yang asyik menyuruh mereka “pandang satu sama lain macam dalam drama”. Perlahan-lahan, perbualan yang janggal tadi menjadi perbualan dua orang kawan.",
        "Selepas cawan kosong, Aiman memandang jam. “Kita belum solat Isyak, kan?”",
        "Mereka mengambil wuduk bergilir-gilir. Aiman membentang dua sejadah, satu di depan dan satu di belakang. Itulah kali pertama Nurul berdiri di belakang suaminya sebagai makmum. Suara Aiman sedikit bergetar pada takbir pertama, kemudian tenang.",
        "Selepas salam, mereka berdoa dalam diam. Nurul tidak ingat semua yang dia minta. Dia cuma ingat satu: semoga rumah ini sentiasa ada orang yang perasan bila dia penat.",
      ],
    },
    {
      heading: "Pintu ditutup, lampu dipadam",
      paragraphs: [
        "Aiman melipat sejadah, kemudian duduk di sebelah Nurul di hujung katil. Dia menghulurkan tangan, tapak tangan ke atas, dan menunggu.",
        "“Malam ni kita rehat dulu,” katanya. “Tak ada peperiksaan. Tak ada sesiapa yang perlu tahu apa-apa. Esok kita bangun lambat sikit, dan kalau Mak Long tanya, kita cakap kita sibuk kira duit sampul.”",
        "Nurul memandang tangan itu. Inai di jarinya kelihatan lebih terang di bawah lampu kuning. Dia meletakkan tangannya di atas tangan Aiman. Hangat. Biasa. Selamat.",
        "“Terima kasih sebab perasan,” bisiknya.",
        "“Terima kasih sebab berterus terang,” jawab Aiman.",
        "Di luar, suara sepupu sudah hilang. Proton di bawah pokok mempelam diam dengan reben yang separuh tercabut. Seseorang di ruang tamu memadam lampu terakhir.",
        "Aiman bangun, menutup pintu bilik perlahan-lahan, dan menekan suis.",
        "Gelap. Yang tinggal hanya bunyi kipas, dan dua orang yang baru belajar menjadi satu rumah.",
      ],
    },
    {
      heading: "Tips untuk malam pertama yang tenang",
      paragraphs: [
        "Kisah di atas rekaan, tetapi rasa gementar pada malam pertama selepas kahwin memang biasa bagi ramai pengantin baru. Beberapa perkara yang boleh membantu:",
      ],
      list: [
        "Bercakap dengan jujur. Beritahu pasangan jika anda penat atau risau, kerana pasangan tidak boleh membaca fikiran.",
        "Rehat dahulu. Hari nikah dan kenduri sangat memenatkan. Makan, minum dan tidur ialah keperluan, bukan kelemahan.",
        "Tiada tekanan dan tiada jadual. Tiada apa yang perlu dibuktikan kepada sesiapa pada malam itu, termasuk kepada saudara-mara yang suka bertanya.",
        "Bersabar dan hormati keselesaan masing-masing. Kemesraan dibina sedikit demi sedikit, dengan persetujuan kedua-dua pihak.",
        "Jika ada kerisauan yang berlarutan, bincang berdua dahulu, kemudian dapatkan bantuan kaunselor. LPPKN menyediakan perkhidmatan kaunseling keluarga, dan talian HEAL 15555 (KKM) menyediakan sokongan kesihatan mental.",
      ],
      after: ["Untuk panduan seterusnya, baca [cara berkomunikasi dengan pasangan](/blog/cara-berkomunikasi-dengan-pasangan)."],
    },
  ],
  sources: [src.lppknCounselling, src.heal],
  disclaimer: "Kisah rekaan. Watak dan peristiwa tidak berdasarkan orang sebenar. Bahagian tips ialah maklumat umum, bukan nasihat perubatan atau kaunseling profesional.",
});

const malamPertamaEn = story({
  slug: "wedding-night-couple-story",
  title: "A wedding night story: a cup of tea, a prayer together and a door that closes softly",
  seoTitle: "Wedding Night Story: A Couple's First Night",
  description: "Fiction: a Malaysian couple's first night after the nikah. Tired, nervous newlyweds, an honest talk, a cup of tea and a prayer together, plus tips for a calm wedding night.",
  category: "Fiction",
  lead: "Fiction (Kisah rekaan). After a long kenduri, two newlyweds are finally alone: exhausted, nervous and with no idea what to say. This is a story of the first night after the nikah that ends with a cup of tea, a prayer together and a door closing softly.",
  imageAlt: "Illustration: newlywed couple in wedding attire sitting together and smiling in the bridal room",
  blocks: [
    {
      heading: "After the kenduri: an empty pelamin and fresh inai",
      paragraphs: [
        "It was almost eleven at night when the wedding tent in Mak Teh's front yard finally went quiet. Plastic chairs were stacked by the fence, the giant pots of nasi minyak had been scrubbed, and the emerald-green pelamin in the living room stood empty beside a box of bunga telur nobody had managed to hand out.",
        "Nurul sat on the edge of the bed, still in the white baju nikah that had felt heavier every hour since morning. The inai on her fingertips had darkened to a deep red. She stared at her fingers for a long time, as if they were the only thing that made sense today.",
        "Outside the window, Aiman's grey Proton Saga was still parked under the mango tree, a white ribbon half torn off the side mirror. Tomorrow morning someone would surely ask why it hadn't been taken down yet.",
      ],
    },
    {
      heading: "The aunties' questions and the world's most awkward small talk",
      paragraphs: [
        "There was a soft knock. Aiman came in carrying two bottles of mineral water, his songkok in one hand, his hair a mess. He stood by the door, unsure where to sit in a room that, since this afternoon, belonged to both of them.",
        "“Mak Long says hello,” he said. “She asked… when we're going to visit her kampung in Muar.”",
        "Nurul raised an eyebrow. “That's all she asked?”",
        "Aiman scratched his head. “There was more. I'm not brave enough to repeat it.”",
        "Silence. The ceiling fan ticked. From the living room came the sound of Nurul's cousins laughing as they stacked plates, and Pak Su asking who had taken his phone charger.",
        "“So many guests today,” Nurul said at last.",
        "“So many,” Aiman agreed. “I shook about three hundred hands. Five people asked where I work. Three asked how old I am. One asked which football team I support.”",
        "“What did you say?”",
        "“Harimau Malaya. He stopped talking to me.”",
        "Nurul smiled a little. Only a little. Then she went back to looking at the inai on her fingers.",
      ],
    },
    {
      heading: "Wedding night nerves: when he noticed she was exhausted",
      paragraphs: [
        "Aiman noticed. He didn't know much about the first night after the nikah, but he knew what someone who had nothing left looked like. Nurul's eyes were red, her shoulders had dropped, and her fingers hadn't stopped twisting the end of her shawl.",
        "He sat on the dressing-table stool, not on the bed. He kept the distance on purpose.",
        "“Nurul,” he said quietly. “Are you tired?”",
        "She wanted to say no. That was the answer the whole day had trained into her: smile, nod, one more photo. But her voice came out differently.",
        "“So tired. And… I'm scared. Not of you. Scared because everyone treats tonight like an exam. The aunties were whispering and smiling all day. It feels like everyone is waiting for something.”",
        "The room went still. Aiman took a long breath.",
        "“I'm scared too,” he said. “During the akad my hands were so sweaty the tok kadi had to wait for me to wipe them. Did you see?”",
        "“I saw,” Nurul laughed softly. “The whole hall saw.”",
        "“So we're both scared. Good. Nobody has to pretend.”",
      ],
    },
    {
      heading: "A first laugh, a cup of tea and praying together",
      paragraphs: [
        "Aiman stood up. “Have you eaten? Properly eaten, not a spoonful for the camera?”",
        "Nurul shook her head. All day she had managed two mouthfuls of nasi minyak on the pelamin and one slice of cake cut for the photographer.",
        "“Wait here.”",
        "He left. Five minutes later he came back with a tray: two cups of hot tea, a plate of leftover kuih seri muka and a single banana. He set the tray down with enormous care, as if carrying jewellery.",
        "“Mak Teh saw me making tea,” he said. “She said, ‘Amboi, married one day and already knows the kitchen.’ I told her I've always known the kitchen. She didn't believe me.”",
        "This time Nurul really laughed, hard enough that she had to cover her mouth so the people outside wouldn't hear. The laugh loosened something that had been stuck in her chest since morning.",
        "They drank their tea and talked about small things: the uncle who got Aiman's name wrong in his speech, the little boy who cried because he wanted to sit on the pelamin, the photographer who kept telling them to “look at each other like in a drama”. Slowly, the awkward conversation became a conversation between two friends.",
        "When the cups were empty, Aiman glanced at the clock. “We haven't prayed Isyak yet, have we?”",
        "They took turns making wuduk. Aiman laid out two prayer mats, one in front and one behind. It was the first time Nurul stood behind her husband as his makmum. Aiman's voice shook a little on the first takbir, then steadied.",
        "After the salam they made their own silent prayers. Nurul couldn't remember everything she asked for. She only remembered one thing: that this home would always have someone who noticed when she was tired.",
      ],
    },
    {
      heading: "The door closes, the lights go off",
      paragraphs: [
        "Aiman folded the prayer mats and sat beside Nurul at the end of the bed. He held out his hand, palm up, and waited.",
        "“Tonight we rest,” he said. “No exam. Nobody needs to know anything. Tomorrow we sleep in a bit, and if Mak Long asks, we'll say we were busy counting the duit sampul.”",
        "Nurul looked at his hand. The inai on her fingers looked brighter under the yellow lamp. She placed her hand in his. Warm. Ordinary. Safe.",
        "“Thank you for noticing,” she whispered.",
        "“Thank you for being honest,” Aiman replied.",
        "Outside, the cousins had gone quiet. The Proton under the mango tree sat still with its half-torn ribbon. Someone in the living room switched off the last light.",
        "Aiman got up, closed the bedroom door gently and pressed the switch.",
        "Darkness. Only the hum of the fan, and two people just beginning to learn how to be one home.",
      ],
    },
    {
      heading: "Tips for a calm wedding night",
      paragraphs: [
        "The story is fiction, but feeling nervous on the first night after marriage is common for many newlyweds. A few things that can help:",
      ],
      list: [
        "Talk honestly. Tell your spouse if you are tired or worried; nobody can read minds.",
        "Rest first. The nikah and kenduri are exhausting. Eating, drinking and sleeping are needs, not weaknesses.",
        "No pressure and no timetable. There is nothing to prove to anyone that night, including curious relatives.",
        "Be patient and respect each other's comfort. Closeness is built gradually, with both of you agreeing.",
        "If a worry keeps coming back, talk it through together first, then see a counsellor. LPPKN offers family counselling, and the HEAL 15555 line (Ministry of Health) offers mental health support.",
      ],
      after: ["For more, read [how to communicate with your spouse](/en/blog/how-to-communicate-with-your-spouse)."],
    },
  ],
  sources: [src.lppknCounselling, src.heal],
  disclaimer: "Fiction. The characters and events are not based on real people. The tips are general information, not medical or professional counselling advice.",
});

export const malamPertama: Article = {
  key: "malam-pertama",
  topic: "stories",
  published: "2026-10-09",
  updated: "2026-10-09",
  image: { src: "/blog/stories/malam-pertama.webp", width: 1200, height: 630 },
  ogImage: "/og/story-malam-pertama.jpg",
  ms: malamPertamaMs,
  en: malamPertamaEn,
};

export const storyArticles: Article[] = [malamPertama];
