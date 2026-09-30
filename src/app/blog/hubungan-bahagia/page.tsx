import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { msPageMetadata } from "@/lib/ms-page-metadata";
import { store } from "@/config/store";

export const metadata: Metadata = msPageMetadata(
  "Perkahwinan Bahagia & Kesihatan Lelaki di Malaysia | Penjagaan Diri",
  "Bacaan panjang tentang hubungan bahagia, keyakinan lelaki, komunikasi dengan isteri, dan penjagaan diri tanpa dakwaan perubatan. Beli produk kesihatan lelaki di Malaysia dengan COD.",
  "/blog/hubungan-bahagia",
  [
    "perkahwinan bahagia",
    "hubungan suami isteri",
    "kesihatan lelaki Malaysia",
    "penjagaan diri lelaki",
    "keyakinan dalam hubungan",
    "komunikasi dalam perkahwinan",
    "produk kesihatan lelaki",
  ],
);

const sections = [
  {
    title: "Kenapa halaman ini ditulis",
    body: [
      "Kebanyakan pasangan tidak mahu syarahan. Mereka mahu rumah yang lebih lembut selepas hari yang panjang. Artikel ini untuk harapan yang senyap itu: suami yang mahu hadir, isteri yang mahu dirasai, dan perkahwinan yang masih ada ruang untuk bernafas.",
      "Lebih Yakin menjual katalog kecil kesejahteraan lelaki — Magnum Pump, Ultrahot, Horsemen dan Hammer of Thor. Kami menulis tentang kehidupan berumahtangga kerana itulah dunia pelanggan kami. Ini bukan klinik, dan ini bukan janji bahawa sebarang produk boleh membaiki hubungan.",
    ],
  },
  {
    title: "Hubungan bahagia bukan hasil satu botol",
    body: [
      "Perkahwinan yang tenang dibina daripada rutin kecil. Makan malam tanpa telefon. Tanya khabar selepas kerja. Jangan jadikan setiap perbualan sebagai ujian. Jika anda penat sehingga kepala berdenyut atau badan terasa berat, itu isyarat untuk berehat atau berjumpa doktor — bukan untuk membeli janji di iklan.",
      "Produk kesejahteraan lelaki seperti Magnum Pump, Ultrahot, Horsemen atau Hammer of Thor boleh menjadi sebahagian daripada rutin peribadi. Ia bukan pengganti komunikasi, dan ia bukan rawatan untuk penyakit. Baca bungkusan rasmi. Jika ada masalah kesihatan, rujuk profesional yang berkelayakan.",
    ],
  },
  {
    title: "Keyakinan lelaki dan rasa selamat isteri",
    body: [
      "Keyakinan yang sihat kelihatan seperti lelaki yang tidak perlu membuktikan diri setiap malam. Isteri biasanya lebih tenang apabila suami jaga diri: mandi, pakaian kemas, janji yang ditepati, dan nada suara yang tidak kasar. Itu penjagaan diri yang nampak dalam rumah tangga.",
      "Ada yang mencari maklumat intim secara senyap. Itu biasa. Yang penting ialah tidak membawa rasa malu ke atas pasangan. Bercakap dengan lembut. Jika kedua-dua pihak tidak selesa, jangan paksa. Hubungan suami isteri yang panjang hidup daripada rasa selamat, bukan daripada tekanan.",
    ],
  },
  {
    title: "Penjagaan diri tanpa tekanan iklan",
    body: [
      "Iklan kesihatan lelaki di Malaysia sering menggunakan bahasa yang memalukan. Kami elakkan itu. Harga di Lebih Yakin ialah RM159 setiap produk. Penghantaran percuma ke seluruh Malaysia. COD tersedia selepas destinasi disahkan. Pesanan dihantar melalui e-mel ke producth006@gmail.com.",
      "Pilih produk hanya jika anda mahu memilikinya, bukan kerana takut ketinggalan. Bandingkan nama pada bungkusan. Jangan percaya dakwaan lulus atau asli luar negara tanpa dokumen. Kedai yang jujur akan katakan apa yang belum mereka tahu.",
    ],
  },
  {
    title: "Apabila badan memberi isyarat",
    body: [
      "Sakit yang berulang atau perubahan tiba-tiba pada badan bukan topik untuk halaman produk. Itu topik klinik. Cari sumber perubatan yang sah atau berjumpa doktor. Jangan guna artikel hubungan sebagai diagnosis.",
      "Yang relevan dengan laman ini ialah: lelaki yang jaga kesihatan asas — makan, tidur, pergerakan, dan pemeriksaan jika perlu — biasanya lebih mudah hadir dalam perkahwinan. Itu sahaja kaitan yang jujur.",
    ],
  },
  {
    title: "Cara pesan dengan tenang",
    body: [
      "Jika anda memutuskan untuk melihat katalog, buka halaman produk, pilih Magnum Pump, Ultrahot, Horsemen atau Hammer of Thor, kemudian isi borang pesanan. E-mel anda akan dibuka kepada kedai. Hantar mesej itu. Pasukan kami di Kuala Lumpur akan sahkan alamat sebelum hantar.",
      `Alamat pejabat: ${store.address}. E-mel: ${store.contactEmail}. Kami tidak menjanjikan hasil perubatan. Kami menjanjikan harga yang sama, pos percuma, dan proses yang jelas.`,
    ],
  },
];

export default function MarriageArticlePage() {
  return (
    <main id="main-content">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Hubungan bahagia" }]} />
      <article className="section container blog-list">
        <header className="page-hero blog-hero">
          <p className="eyebrow"><span className="eyebrow-line" /> Hubungan & penjagaan diri</p>
          <h1>Perkahwinan bahagia bermula<br /><em>dengan kehadiran, bukan janji iklan.</em></h1>
          <p>Bacaan untuk suami dan isteri di Malaysia yang mahu kesihatan lelaki, keyakinan dan rumah tangga yang lebih tenang. Ini maklumat gaya hidup, bukan nasihat perubatan.</p>
        </header>
        <figure className="blog-hero-photo" style={{ position: "relative", width: "100%", maxWidth: 920, aspectRatio: "16 / 10", margin: "0 auto 2rem" }}>
          <Image src="/home-couple.webp" alt="Pasangan suami isteri duduk bersama" fill sizes="(max-width: 920px) 100vw, 920px" priority style={{ objectFit: "cover" }} />
        </figure>
        {sections.map((section) => (
          <section className="blog-article" key={section.title}>
            <div className="blog-article-content">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <p className="blog-disclaimer">Artikel ini untuk maklumat umum. Ia tidak merawat penyakit, tidak menggantikan doktor, dan tidak membuat dakwaan khusus tentang Magnum Pump, Ultrahot, Horsemen atau Hammer of Thor.</p>
        <p><Link className="text-link" href="/produk">Lihat produk kesihatan lelaki <span aria-hidden="true">↗</span></Link></p>
      </article>
    </main>
  );
}
