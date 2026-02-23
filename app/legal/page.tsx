import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice | Rimasanfer Ltd",
  description: "Legal notice and website terms for Rimasanfer Ltd."
};

export default function LegalPage() {
  return (
    <main className="section">
      <div className="container policy-wrap fade-up">
        <p className="eyebrow">Legal</p>
        <h1>Legal Notice</h1>
        <p className="muted">Last updated: February 23, 2026</p>

        <h2>1. Website Owner</h2>
        <p>Rimasanfer Ltd</p>

        <h2>2. Service Information</h2>
        <p>
          Rimasanfer Ltd provides business management and business development consulting services.
          Website information is provided for general informational purposes and does not constitute
          binding professional advice unless formal engagement terms are agreed.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          Website content, text, and branding are protected by applicable intellectual property
          laws. Reproduction or distribution requires prior written permission.
        </p>

        <h2>4. Liability Limitation</h2>
        <p>
          While we aim for accuracy and availability, Rimasanfer Ltd does not guarantee that
          website content is complete, current, or uninterrupted at all times.
        </p>

        <h2>5. External Links</h2>
        <p>
          This website may link to third-party websites. Rimasanfer Ltd is not responsible for
          third-party content, practices, or availability.
        </p>

        <h2>6. Contact</h2>
        <p>
          For legal inquiries, contact <a href="mailto:manuel@rimasanfer.com">manuel@rimasanfer.com</a>.
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
