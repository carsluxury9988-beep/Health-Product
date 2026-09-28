import Image from "next/image";
import { store } from "@/config/store";
import type { Locale } from "@/i18n";

export function HeroArtwork({ locale = "ms" }: { locale?: Locale }) {
  if (store.heroImagePath) {
    return (
      <div className="hero-art hero-art-photo">
        <Image
          className="hero-couple-image"
          src={store.heroImagePath}
          alt={locale === "ms" ? "Pasangan dewasa berkongsi detik mesra di rumah" : "An adult couple sharing an affectionate moment at home"}
          fill
          preload
          loading="eager"
          sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1000px) 48vw, 42vw"
        />
      </div>
    );
  }

  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-orbit orbit-one" />
      <div className="hero-art-orbit orbit-two" />
      <div className="hero-art-disc">
        {locale === "ms" ? <>
          <span className="disc-top">RUANG UNTUK DIRI</span>
          <span className="disc-script">kenali<br /><em>diri anda.</em></span>
          <span className="disc-bottom">KESEJAHTERAAN · PENJAGAAN DIRI · HUBUNGAN</span>
        </> : <>
          <span className="disc-top">A LITTLE SPACE</span>
          <span className="disc-script">to feel<br /><em>like you.</em></span>
          <span className="disc-bottom">WELLNESS · SELF-CARE · CONNECTION</span>
        </>}
      </div>
      <span className="hero-art-label">{locale === "ms" ? "Penjagaan diri yang lebih bermakna" : "A more considered kind of care"}</span>
      <span className="hero-art-star star-one">✳</span>
      <span className="hero-art-star star-two">✳</span>
    </div>
  );
}
