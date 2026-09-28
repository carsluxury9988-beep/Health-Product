import { getMessages, type Locale } from "@/i18n";

export function PolicyDraftNote({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale);
  return (
    <aside className="policy-draft-note" role="note">
      <strong>{t.common.draft}</strong>
      <p>{t.common.draftText}</p>
    </aside>
  );
}
