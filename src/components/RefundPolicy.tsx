import React from 'react';
import LegalLayout from './ui/LegalLayout';

export default function RefundPolicy() {
  return (
    <LegalLayout 
      title="Refund Policy" 
      lastUpdated="January 10, 2026"
      seoDescription="Refund Policy for website design and development projects undertaken by GRAVIT."
      seoPath="/refund-policy"
    >
      <p className="text-xl">
        This Refund Policy explains how payments, cancellations, and refunds are handled for website design and development projects undertaken by GRAVIT. It works alongside the Master Service Agreement signed for each project. In the event of any conflict, the signed Master Service Agreement takes precedence over this general policy.
      </p>

      <h2>01 / How Projects Are Billed</h2>
      <p>
        Projects are billed in milestones, typically: 40% advance on signing, 40% on design approval, and 20% before final handover (unless otherwise specified in your specific Service Agreement). Each milestone payment corresponds to work completed up to that stage.
      </p>

      <h2>02 / Advance Payment</h2>
      <p>
        The advance payment secures your project slot and covers discovery, planning, and early design work. Once work has commenced, the advance is strictly non-refundable, as it compensates for time and resources already committed.
      </p>

      <h2>03 / Milestone Payments</h2>
      <p>
        Once a milestone deliverable (e.g., design mockups) has been reviewed and approved by the client, the corresponding payment for that milestone is fully earned and non-refundable.
      </p>

      <h2>04 / Cancellation Before Work Begins</h2>
      <p>
        If you cancel after signing the Agreement but before any discovery, design, or development work has started, you will receive a refund of the advance paid, minus an administrative fee equal to 10% of the total project value to cover onboarding and administrative costs already incurred.
      </p>

      <h2>05 / Cancellation After Work Begins</h2>
      <p>
        If you cancel mid-project, GRAVIT will calculate the value of work completed to date. This value will be calculated based on the approved milestone schedule or, where a milestone is partially complete, at GRAVIT's standard hourly rate. We will refund any amount paid in excess of that calculated value. No refund is provided for milestones already completed and approved.
      </p>

      <h2>06 / Cancellation by GRAVIT</h2>
      <p>
        If GRAVIT is unable to complete a project for reasons exclusively within our control, we will refund any amount paid for work not yet delivered.
      </p>

      <h2>07 / Non-Refundable Items</h2>
      <p>
        The following items are strictly non-refundable under any circumstances:
      </p>
      <ul>
        <li>Third-party costs already incurred on your behalf (e.g., domain registration, hosting, stock media, plugin/API licenses).</li>
        <li>Payment gateway or bank transaction charges, where applicable.</li>
        <li>Completed months/periods of an Annual Maintenance Contract (AMC) already delivered.</li>
        <li>Custom work approved via a signed Change Request Form.</li>
      </ul>

      <h2>08 / How to Request a Refund</h2>
      <p>
        Send a written request to <code>hello@gravit.agency</code> with your project name and the reason for the request. We'll review it against the milestone schedule for your project and respond within 5 business days.
      </p>

      <h2>09 / Processing Time</h2>
      <p>
        Approved refunds are processed within 7–14 business days to the original payment method (bank transfer or UPI).
      </p>

      <h2>10 / Related Documents</h2>
      <p>
        This policy should be read together with the Service Agreement (Clauses 3 and 10) signed for your specific project, which governs payment terms and termination in more detail.
      </p>
    </LegalLayout>
  );
}
