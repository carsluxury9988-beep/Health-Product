import { QuestionIndexPage, questionIndexMetadata } from "@/components/pages/question-index";

export const metadata = questionIndexMetadata("ms");

export default function Page() {
  return <QuestionIndexPage locale="ms" />;
}
