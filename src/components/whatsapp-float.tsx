import { getMessages, type Locale } from "@/i18n";
import { enquiryUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function WhatsAppFloat({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <WhatsAppLink href={enquiryUrl(locale)} source="floating_button" className="wa-float" ariaLabel={t.common.whatsappFloat}>
      <WhatsAppIcon size={30} />
      <span className="wa-float-label">{t.common.whatsappChat}</span>
    </WhatsAppLink>
  );
}
