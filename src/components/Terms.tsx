import React from 'react';
import LegalLayout from './ui/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout 
      title="Terms of Service" 
      lastUpdated="January 10, 2026"
      seoDescription="Terms of Service for using GRAVIT's digital platforms and architecture services."
      seoPath="/terms"
    >
      <p className="text-xl">
        These Terms of Service ("Terms") govern your use of gravit.agency (the "Website"), operated by GRAVIT ("GRAVIT", "we", "us"). By using the Website, you agree to these Terms.
      </p>

      <h2>01 / About GRAVIT</h2>
      <p>
        GRAVIT is a digital design and web development agency based in Bangalore, Karnataka, offering website design, development, brand identity, and digital strategy services.
      </p>

      <h2>02 / Use of This Website</h2>
      <p>
        You may browse this Website and use its contact/enquiry forms for legitimate business purposes. You may not scrape, copy, republish Website content, attempt to disrupt the Website, or upload any malicious code or illegal material through our forms.
      </p>

      <h2>03 / Intellectual Property</h2>
      <p>
        All text, graphics, logos, and design on this Website belong to GRAVIT, unless otherwise credited, and may not be reproduced without written permission. Portfolio projects shown on this Website remain the property of their respective clients where applicable and are displayed with permission, per each client's Portfolio Release Consent.
      </p>

      <h2>04 / Engaging Our Services</h2>
      <p>
        This Website provides general information about GRAVIT. Any actual project—its scope, price, timeline, and terms—is governed exclusively by the Master Service Agreement and Statement of Work (SOW) signed between GRAVIT and the client for that specific engagement. In case of conflict, the signed Service Agreement takes precedence over these Website Terms.
      </p>

      <h2>05 / Testimonials & Case Studies</h2>
      <p>
        Client testimonials and case studies shown on this Website reflect individual client experiences and are shared with the relevant client's consent. They do not constitute a guarantee, warranty, or prediction regarding the outcome of your specific project.
      </p>

      <h2>06 / Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, GRAVIT shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Website. Furthermore, GRAVIT's total aggregate liability for any direct damages arising out of or related to your use of this Website shall not exceed ₹1,000 INR. This clause does not apply to liabilities arising under a signed client Service Agreement, which is governed by its own terms.
      </p>

      <h2>07 / Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless GRAVIT from any claims, damages, or legal expenses arising out of your misuse of the Website or your violation of these Terms.
      </p>

      <h2>08 / Third-Party Links</h2>
      <p>
        This Website may link to third-party sites (e.g., social media, partner tools). We are not responsible for the content, security, or privacy practices of those external sites.
      </p>

      <h2>09 / Governing Law & Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India, and any dispute shall be subject to the exclusive jurisdiction of the courts at Bangalore, Karnataka.
      </p>

      <h2>10 / Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The "Last updated" date above reflects the most recent revision.
      </p>

      <h2>11 / Contact Us</h2>
      <p>
        Questions about these Terms can be sent to <code>hello@gravit.agency</code> or via the contact form on gravit.agency.
      </p>
    </LegalLayout>
  );
}
