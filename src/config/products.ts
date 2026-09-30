import { store } from "@/config/store";
import { formatPrice } from "@/lib/format";

export type ProductId = "magnum-pump" | "ultrahot" | "horsemen" | "hammer-of-thor";

export type Product = {
  id: ProductId;
  slug: string;
  name: string;
  price: number;
  currency: "MYR";
  images: readonly string[];
  shortDescription: string;
  shortDescriptionMs: string;
  description: string;
  descriptionMs: string;
  benefits: readonly string[] | null;
  ingredients: readonly string[] | null;
  usage: string | null;
  warnings: string | null;
  category: string | null;
  availability: "unknown";
  sku: string | null;
  seoTitle: string;
  seoTitleMs: string;
  seoDescription: string;
  seoDescriptionMs: string;
  keywords: readonly string[];
};

const cataloguePrice = 159;

const sharedMarketKeywords = [
  "produk kesihatan lelaki Malaysia",
  "suplemen kesihatan lelaki",
  "beli online Malaysia",
  "penghantaran percuma Malaysia",
  "COD Malaysia",
  "RM159",
] as const;

function productKeywords(name: string) {
  return [
    `${name} Malaysia`,
    `beli ${name} Malaysia`,
    `${name} harga`,
    `${name} RM159`,
    `${name} COD`,
    `${name} penghantaran percuma`,
    `${name} online Malaysia`,
    ...sharedMarketKeywords,
  ];
}

const copy: Record<ProductId, Pick<Product, "shortDescription" | "shortDescriptionMs" | "description" | "descriptionMs">> = {
  "magnum-pump": {
    shortDescriptionMs: "Pilihan kesejahteraan lelaki untuk rutin peribadi anda. Beli Magnum Pump online di Malaysia, RM159, COD.",
    shortDescription: "A discreet men's wellness choice for your own routine. Buy Magnum Pump online in Malaysia, RM159, COD.",
    descriptionMs: `Magnum Pump ialah salah satu produk kesejahteraan lelaki dalam katalog Lebih Yakin. Harga tetap ${formatPrice(cataloguePrice)} dengan penghantaran percuma ke seluruh Malaysia dan pilihan bayaran tunai semasa penghantaran (COD).\n\nPesan terus di lebihyakin.my. Isi borang pesanan, e-mel anda akan dibuka kepada producth006@gmail.com, kemudian hantar. Pasukan kami mengesahkan destinasi sebelum barang dihantar.\n\nMaklumat ramuan, cara penggunaan dan amaran perlu dibaca pada bungkusan rasmi. Laman ini bukan nasihat perubatan.`,
    description: `Magnum Pump is one of the men's wellness products in the Lebih Yakin catalogue. The price is a clear ${formatPrice(cataloguePrice)}, with free delivery across Malaysia and Cash on Delivery.\n\nOrder on lebihyakin.my. Complete the form and your email app opens to producth006@gmail.com. Our team confirms the destination before dispatch.\n\nIngredients, directions and warnings belong on the official pack. This page is not medical advice.`,
  },
  ultrahot: {
    shortDescriptionMs: "Teman katalog untuk lelaki yang mahu pesan dengan tenang. Ultrahot RM159, beli online, penghantaran percuma.",
    shortDescription: "A calm catalogue choice if you prefer to order privately. Ultrahot is RM159 online, with free delivery.",
    descriptionMs: `Ultrahot dijual di Malaysia melalui Lebih Yakin pada harga ${formatPrice(cataloguePrice)}. Tiada caj pos. COD tersedia, tertakluk pada destinasi dan kurier.\n\nSesuai jika anda mahu proses yang ringkas: pilih produk, isi alamat, buka e-mel kepada producth006@gmail.com dan hantar pesanan.\n\nKami tidak menambah dakwaan kesihatan yang belum disahkan. Semak label rasmi sebelum menggunakan sebarang produk kesejahteraan.`,
    description: `Ultrahot is sold in Malaysia through Lebih Yakin at ${formatPrice(cataloguePrice)}. Postage is free. Cash on Delivery is offered, subject to destination and courier.\n\nThe path is short: choose the product, add your address, open email to producth006@gmail.com and send.\n\nWe do not invent health claims. Read the official label before using any wellness product.`,
  },
  horsemen: {
    shortDescriptionMs: "Horsemen dalam koleksi kesihatan lelaki Malaysia. RM159, pesan online, COD ke seluruh negara.",
    shortDescription: "Horsemen in our Malaysian men's wellness collection. RM159, order online, COD nationwide.",
    descriptionMs: `Horsemen ialah nama dalam koleksi kesejahteraan lelaki kami. Pelanggan di Semenanjung, Sabah dan Sarawak boleh pesan secara dalam talian pada harga ${formatPrice(cataloguePrice)}.\n\nPenghantaran percuma. Bayaran secara COD selepas pasukan kami sahkan alamat. E-mel pesanan pergi ke producth006@gmail.com.\n\nGunakan halaman ini untuk harga, cara pesan dan sokongan. Untuk soalan kesihatan peribadi, rujuk profesional yang berkelayakan.`,
    description: `Horsemen is part of our men's wellness collection. Customers in Peninsular Malaysia, Sabah and Sarawak can order online at ${formatPrice(cataloguePrice)}.\n\nDelivery is free. Pay by COD after we confirm the address. Order email goes to producth006@gmail.com.\n\nUse this page for price, how to order and support. For personal health questions, speak with a qualified professional.`,
  },
  "hammer-of-thor": {
    shortDescriptionMs: "Beli Hammer of Thor di Malaysia dengan harga jelas RM159, COD dan penghantaran percuma.",
    shortDescription: "Buy Hammer of Thor in Malaysia at a clear RM159, with COD and free delivery.",
    descriptionMs: `Hammer of Thor ialah nama yang kerap dicari di Malaysia. Di Lebih Yakin, harga katalog ialah ${formatPrice(cataloguePrice)} — tanpa harga diskaun rekaan.\n\nBeli online, bukan melalui marketplace yang tidak disahkan di sini. Hantar pesanan melalui e-mel ke producth006@gmail.com. Kami akan hubungi anda untuk sahkan COD dan masa hantar.\n\nKami tidak mendakwa produk ini “lulus KKM” atau “asli Italy” tanpa dokumen. Baca bungkusan rasmi. Ini bukan nasihat perubatan.`,
    description: `Hammer of Thor is a name people often search for in Malaysia. In this catalogue the price is ${formatPrice(cataloguePrice)} — no invented discount.\n\nBuy online here rather than an unverified marketplace listing. Send the order email to producth006@gmail.com. We confirm COD and timing with you.\n\nWe do not claim “KKM approved” or “original Italy” without documents. Read the official pack. This is not medical advice.`,
  },
};

function buildProduct(id: ProductId, name: string, image: string): Product {
  const text = copy[id];
  return {
    id,
    slug: id,
    name,
    price: cataloguePrice,
    currency: "MYR",
    images: [image],
    ...text,
    benefits: null,
    ingredients: null,
    usage: null,
    warnings: null,
    category: "Men's wellness",
    availability: "unknown",
    sku: null,
    seoTitle: `${name} Malaysia | Buy Online RM159 COD Free Delivery`,
    seoTitleMs: `${name} Malaysia | Beli Online RM159 COD Penghantaran Percuma`,
    seoDescription: `Buy ${name} in Malaysia for ${formatPrice(cataloguePrice)}. Free nationwide delivery and Cash on Delivery. Order by email to producth006@gmail.com.`,
    seoDescriptionMs: `Beli ${name} di Malaysia pada harga ${formatPrice(cataloguePrice)}. Penghantaran percuma ke seluruh Malaysia dan COD. Pesan melalui e-mel ke producth006@gmail.com.`,
    keywords: productKeywords(name),
  };
}

export const products: readonly Product[] = [
  buildProduct("magnum-pump", "Magnum Pump", "/products/magnum-pump.webp"),
  buildProduct("ultrahot", "Ultrahot", "/products/ultrahot.webp"),
  buildProduct("horsemen", "Horsemen", "/products/horsemen.webp"),
  buildProduct("hammer-of-thor", "Hammer of Thor", "/products/hammer-of-thor.webp"),
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

void store;
