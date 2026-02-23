import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Rimasanfer Ltd",
  description:
    "Privacy Policy for Rimasanfer Ltd, including data handling principles and contact details for privacy-related inquiries."
};

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="container policy-wrap fade-up">
        <p className="eyebrow">Policy</p>
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: February 23, 2026</p>

        <h2>1. Scope</h2>
        <p>
          This policy explains how Rimasanfer Ltd handles personal information collected through
          this website and direct business communications.
        </p>

        <h2>2. Data We Process</h2>
        <p>
          We may process contact details, company information, and inquiry content you provide via
          email or contact forms.
        </p>

        <h2>3. Purpose</h2>
        <p>
          Data is used to assess engagement fit, respond to inquiries, and manage professional
          communication related to consulting services.
        </p>

        <h2>4. Sharing</h2>
        <p>
          We do not sell personal data. Information is shared only when required for service
          delivery, legal compliance, or legitimate business operations.
        </p>

        <h2>5. Retention</h2>
        <p>
          We retain information only as long as needed for business purposes, legal obligations, or
          dispute resolution.
        </p>

        <h2>6. Your Requests</h2>
        <p>
          You may request access, correction, or deletion of your personal data, subject to legal
          and contractual obligations.
        </p>

        <h2>7. Contact</h2>
        <p>
          For privacy inquiries, contact <a href="mailto:manuel@rimasanfer.com">manuel@rimasanfer.com</a>.
        </p>

        <p>
          <Link className="btn btn-secondary" href="/">
            Return to Home
          </Link>
        </p>
      </div>
    </main>
  );
}
