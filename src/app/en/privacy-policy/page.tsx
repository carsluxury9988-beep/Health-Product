import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PolicyDraftNote } from "@/components/policy-draft-note";
import { store } from "@/config/store";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  "How order and contact details are collected and used by Health Product. Draft policy pending business-owner review.",
  "/en/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <Breadcrumbs locale="en" items={[{ label: "Privacy policy" }]} />
      <section className="page-hero container policy-hero">
        <p className="eyebrow"><span className="eyebrow-line" /> Your information</p>
        <h1>Privacy, with<br /><em>care and clarity.</em></h1>
        <p>This draft describes the information the website forms request and how it is intended to be used. The business owner must confirm the operational details before publication.</p>
      </section>
      <section className="section container policy-content">
        <PolicyDraftNote />
        <p className="policy-updated">Draft prepared 28 September 2026. Effective date and data-controller details require owner confirmation.</p>
        <article className="policy-block">
          <h2>Information collected</h2>
          <p>When you submit an order request, the form asks for your name, Malaysian mobile number, optional email address, delivery address, state or federal territory, chosen product and quantity. When you submit a contact message, it asks for your name, email address, optional phone number and product selection, and your message.</p>
          <p>The website host and mail provider may also process technical information needed to deliver and protect the service, such as request metadata, IP address and error logs. The exact providers and retention periods must be confirmed by the owner before launch.</p>
        </article>
        <article className="policy-block">
          <h2>Why information is used</h2>
          <p>Order details are sent to the business contact email to review and respond to an order request, check availability and coordinate delivery. Contact details and message content are used to reply to enquiries. Form submissions are not stored in an application database by this website.</p>
          <p>If analytics IDs are configured, optional analytics scripts are not loaded unless you choose “Allow analytics”. Your choice is kept in a first-party browser cookie for up to one year. Without consent, the analytics scripts remain off.</p>
        </article>
        <article className="policy-block">
          <h2>Service providers and transfers</h2>
          <p>Order and contact forms rely on the website hosting provider and, when configured, an SMTP email provider. Those providers may process information as part of delivering the service. The business owner must identify the actual providers, their locations and the relevant contractual/privacy terms before launch.</p>
        </article>
        <article className="policy-block">
          <h2>Security and retention</h2>
          <p>The application validates submissions and limits repeated requests, but these measures do not make any website or transmission method absolutely secure. Encryption in transit depends on the deployed host&apos;s HTTPS configuration. The owner must set and document how long messages and order emails are retained, who can access them, and when they are deleted.</p>
        </article>
        <article className="policy-block">
          <h2>Your questions</h2>
          <p>For a privacy question or request, email <a href={`mailto:${store.contactEmail}`}>{store.contactEmail}</a>. The business owner must confirm the identity of the data controller and the process for handling data-access or correction requests.</p>
        </article>
      </section>
    </main>
  );
}
