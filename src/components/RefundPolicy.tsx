import LegalPage from './ui/LegalPage';

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund & Cancellation Policy" lastUpdated="30 July 2026">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">1. Scope</h2>
        <p>
          This policy applies to all GRAVIT services (website design, development, and related digital services). We do not sell physical products.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">2. Before work begins</h2>
        <p>
          If you cancel within 3 days of paying the advance and no work has started, you'll receive a full refund minus any consultation or planning time already spent.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">3. After work begins</h2>
        <p>
          The advance payment is non-refundable once work has started, as it reserves project time and covers planning/design work already underway.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">4. Mid-project cancellation</h2>
        <p>
          If a project is cancelled partway through, completed and delivered milestones are non-refundable. Any remaining advance beyond completed work may be refunded proportionally.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">5. Completed projects</h2>
        <p>
          Once a project is delivered and approved, it is not eligible for a refund.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">6. Third-party costs</h2>
        <p>
          Domain registration, hosting, and any licensed assets purchased on your behalf are non-refundable once purchased.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">7. If GRAVIT cancels</h2>
        <p>
          If GRAVIT is unable to deliver or cancels a project, any unused advance is refunded in full.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">8. How to request</h2>
        <p>
          Email hellogravit.agency@gmail.com with your name, invoice number, and payment date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">9. Processing time</h2>
        <p>
          Approved refunds are processed within 7–10 business days, via the original payment method.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4 font-heading">10. Changes</h2>
        <p>
          This policy may be updated periodically. Continued engagement implies acceptance of the latest version.
        </p>
      </section>
    </LegalPage>
  );
}
