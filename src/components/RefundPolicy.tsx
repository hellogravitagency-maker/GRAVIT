import LegalPage from './ui/LegalPage';

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="January 10, 2026">
      <div className="max-w-3xl">
        <p className="mb-16 text-xl text-white/90">
          This Refund Policy explains how payments, cancellations, and refunds are handled for website design and development projects undertaken by GRAVIT. It works alongside the Master Service Agreement signed for each project. In the event of any conflict, the signed Master Service Agreement takes precedence over this general policy.
        </p>

        <div className="grid grid-cols-1 gap-0 border-t border-white/20">
          {[
            {
              id: '01',
              title: 'How Projects Are Billed',
              content: `Projects are billed in milestones, typically: 40% advance on signing, 40% on design approval, and 20% before final handover (unless otherwise specified in your specific Service Agreement). Each milestone payment corresponds to work completed up to that stage.`,
            },
            {
              id: '02',
              title: 'Advance Payment',
              content: `The advance payment secures your project slot and covers discovery, planning, and early design work. Once work has commenced, the advance is strictly non-refundable, as it compensates for time and resources already committed.`,
            },
            {
              id: '03',
              title: 'Milestone Payments',
              content: `Once a milestone deliverable (e.g., design mockups) has been reviewed and approved by the client, the corresponding payment for that milestone is fully earned and non-refundable.`,
            },
            {
              id: '04',
              title: 'Cancellation Before Work Begins',
              content: `If you cancel after signing the Agreement but before any discovery, design, or development work has started, you will receive a refund of the advance paid, minus an administrative fee equal to 10% of the total project value to cover onboarding and administrative costs already incurred.`,
            },
            {
              id: '05',
              title: 'Cancellation After Work Begins',
              content: `If you cancel mid-project, GRAVIT will calculate the value of work completed to date. This value will be calculated based on the approved milestone schedule or, where a milestone is partially complete, at GRAVIT\'s standard hourly rate. We will refund any amount paid in excess of that calculated value. No refund is provided for milestones already completed and approved.`,
            },
            {
              id: '06',
              title: 'Cancellation by GRAVIT',
              content: `If GRAVIT is unable to complete a project for reasons exclusively within our control, we will refund any amount paid for work not yet delivered.`,
            },
            {
              id: '07',
              title: 'Non-Refundable Items',
              content: `The following items are strictly non-refundable under any circumstances:

Third-party costs already incurred on your behalf (e.g., domain registration, hosting, stock media, plugin/API licenses).
Payment gateway or bank transaction charges, where applicable.
Completed months/periods of an Annual Maintenance Contract (AMC) already delivered.
Custom work approved via a signed Change Request Form.`,
            },
            {
              id: '08',
              title: 'How to Request a Refund',
              content: `Send a written request to hellogravit.agency@gmail.com with your project name and the reason for the request. We\'ll review it against the milestone schedule for your project and respond within 5 business days.`,
            },
            {
              id: '09',
              title: 'Processing Time',
              content: `Approved refunds are processed within 7–14 business days to the original payment method (bank transfer or UPI).`,
            },
            {
              id: '10',
              title: 'Related Documents',
              content: `This policy should be read together with the Service Agreement (Clauses 3 and 10) signed for your specific project, which governs payment terms and termination in more detail.`,
            },
          ].map((section) => (
            <section 
              key={section.id} 
              className="py-12 border-b border-white/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start group hover:bg-white/5 transition-colors -mx-6 px-6"
            >
              <div className="md:col-span-3 flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">{section.id}</span>
                <h2 className="text-xl md:text-2xl font-normal tracking-tight text-white font-heading">{section.title}</h2>
              </div>
              <div className="md:col-span-9">
                {section.content.split('\n').map((para, i) => (
                  <p key={i} className="text-white/70 font-body text-base md:text-lg leading-relaxed group-hover:text-white/90 transition-colors mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </LegalPage>
  );
}
