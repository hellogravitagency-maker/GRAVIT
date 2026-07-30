import LegalPage from './ui/LegalPage';

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="30 July 2026">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">1. Scope of Work</h2>
        <p>
          Defined per the signed proposal/quote for each project. Anything outside that scope (extra pages, new features, additional integrations) requires a written change order and may affect price and timeline.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">2. Payment Terms</h2>
        <p>
          Per the schedule on our Pricing page for the relevant tier. Milestone invoices are due within 5 working days unless otherwise agreed in writing. Work pauses if a payment is more than 7 days overdue.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">3. Revisions</h2>
        <p>
          Each tier includes a fixed number of revision rounds (see Pricing). A "round" is one consolidated set of feedback delivered together. A request for a new direction after a design has already been approved is treated as new scope, not a revision.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">4. Timeline</h2>
        <p>
          Project timelines assume the client supplies content (text, images, logos, approvals) within the agreed windows. Delays caused by late client content or feedback shift the delivery date accordingly and are not GRAVIT's responsibility.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">5. Intellectual Property & Ownership</h2>
        <p>
          Full ownership of the final custom design and code transfers to the client only once final payment is received in full. Until then, GRAVIT retains ownership. GRAVIT retains ownership of its own pre-existing frameworks, internal tools, design systems, and reusable components used to build the site — the client receives the right to use these as part of their delivered site, not the underlying framework itself. Licensed third-party assets (stock photography, premium fonts, plugins) remain subject to their own licenses.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">6. Portfolio Rights</h2>
        <p>
          GRAVIT may display completed work (screenshots, case studies, links) in its own portfolio, website, and social media, unless the client requests otherwise in writing (e.g. for confidential or NDA-covered projects).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">7. Third-Party Costs</h2>
        <p>
          Domain registration, hosting, premium plugins, and other third-party services are billed at cost and are non-refundable once purchased. Renewal is the client's responsibility unless a maintenance plan is in place.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">8. Client Content Warranty</h2>
        <p>
          The client confirms they own or hold the rights to any text, images, logos, or other material they provide, and agrees to hold GRAVIT harmless from any third-party copyright claim arising from that material.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">9. Confidentiality</h2>
        <p>
          Both parties agree to keep project details, credentials, and business information confidential during and after the engagement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">10. Limitation of Liability</h2>
        <p>
          GRAVIT's liability for any claim relating to a project is limited to the total amount paid for that project. GRAVIT is not liable for indirect or consequential losses (e.g. lost business, lost data) arising from use of the delivered site.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">11. Termination</h2>
        <p>
          Either party may terminate a project in writing. The client remains liable for all work completed and any costs already incurred up to the termination date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">12. Force Majeure</h2>
        <p>
          Neither party is liable for delays caused by events outside their reasonable control.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">13. Governing Law</h2>
        <p>
          These terms are governed by the laws of India, with courts in Kurnool, Andhra Pradesh having exclusive jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">14. Changes to These Terms</h2>
        <p>
          GRAVIT may update these terms from time to time. Continued engagement after an update constitutes acceptance of the revised terms.
        </p>
      </section>
    </LegalPage>
  );
}
