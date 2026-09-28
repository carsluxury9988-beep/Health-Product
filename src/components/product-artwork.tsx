import Image from "next/image";
import { getMessages, type Locale } from "@/i18n";

export function ProductArtwork({ name, images = [], locale = "ms", sizes = "(max-width: 760px) 100vw, 50vw", preload = false }: { name: string; images?: readonly string[]; locale?: Locale; sizes?: string; preload?: boolean }) {
  const image = images[0];
  const t = getMessages(locale);

  return (
    <div className={image ? "product-artwork has-image" : "product-artwork"} role={image ? undefined : "img"} aria-label={image ? undefined : `${name}: ${t.common.productImageMissing}`}>
      {image ? (
        <Image
          className="official-product-image"
          src={image}
          alt={locale === "ms" ? `Bungkusan rasmi produk ${name}` : `${name} official product packaging`}
          fill
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          sizes={sizes}
        />
      ) : (
        <>
          <div className="artwork-shape artwork-shape-one" aria-hidden="true" />
          <div className="artwork-shape artwork-shape-two" aria-hidden="true" />
          <span className="artwork-monogram" aria-hidden="true">H</span>
          <div className="artwork-caption">
            <span className="artwork-kicker">{locale === "ms" ? "Imej produk rasmi" : "Official product image"}</span>
            <span>{locale === "ms" ? "belum dibekalkan" : "to be supplied"}</span>
          </div>
        </>
      )}
    </div>
  );
}
