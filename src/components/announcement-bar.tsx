import { getMessages, type Locale } from "@/i18n";

export function AnnouncementBar({ locale }: { locale: Locale }) {
  const items = getMessages(locale).announcement;
  return (
    <div className="announcement">
      <div className="container announcement-inner">
        {items.map((item, index) => (
          <span key={item} className={index > 0 ? "announcement-extra" : undefined}>{item}</span>
        ))}
      </div>
    </div>
  );
}
