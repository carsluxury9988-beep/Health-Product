import { QuestionIndexPage, questionIndexMetadata } from "@/components/pages/question-index";

export const metadata = questionIndexMetadata("en");

export default function Page() {
  return <QuestionIndexPage locale="en" />;
}
