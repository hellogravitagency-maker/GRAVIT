import React from 'react';
import LegalLayout from './ui/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="January 10, 2026"
      seoDescription="Privacy Policy and Data Protection guidelines for GRAVIT and our digital product architecture."
      seoPath="/privacy"
    >
      <p className="text-xl">
        This Privacy Policy explains how GRAVIT ("GRAVIT", "we", "us") collects, uses, and protects information when you visit gravit.agency or engage us for a project.
      </p>

      <h2>01 / Who We Are</h2>
      <p>
        GRAVIT is a digital design and web development agency based in Bangalore, Karnataka, India, founded by Mokshagna Theja and Ravi Manohar. You can reach us at <code>hello@gravit.agency</code> or through our intake forms.
      </p>

      <h2>02 / Information We Collect</h2>
      <p><strong>2.1 Information you provide directly</strong></p>
      <ul>
        <li>Contact/enquiry form details — name, email, phone number, institution or company name, and your message.</li>
        <li>Project-related content shared with us during an engagement.</li>
      </ul>
      
      <p><strong>2.2 Information collected automatically</strong></p>
      <ul>
        <li>Basic technical data — IP address, browser type, device type, pages visited, and referring site.</li>
        <li>Cookies and similar technologies used for analytics (e.g., Google Analytics) to understand site usage.</li>
      </ul>

      <h2>03 / How We Use Your Information</h2>
      <ul>
        <li>To respond to your enquiry and prepare a proposal.</li>
        <li>To deliver, manage, and communicate about a project you've engaged us for.</li>
        <li>To improve our website and understand how visitors use it.</li>
        <li>To send occasional updates about GRAVIT, only where you've explicitly agreed to receive them.</li>
      </ul>

      <h2>04 / Cookies</h2>
      <p>
        Our website may use cookies for basic analytics. You can disable cookies in your browser settings; however, this may affect some site functionality.
      </p>

      <h2>05 / How We Share & Store Information</h2>
      <p>
        We do not sell your personal information. We may share it with trusted third-party service providers who help us operate (e.g., cloud hosting providers, email services, analytics tools). Because we use modern global cloud infrastructure, your data may be stored or processed on secure servers located outside of India. We ensure all such providers are bound to strict data security standards. We may also disclose information where formally required by law.
      </p>

      <h2>06 / Data From Minors & Client Portals</h2>
      <p>
        This website is a B2B platform intended for institutional decision-makers and is not directed at children. Where GRAVIT builds a website on behalf of a school or college client that collects data from or about students (including minors), that data collection is exclusively governed by the Privacy Policy of the respective institution's website and the Service Agreement between GRAVIT and that institution—not by this policy.
      </p>

      <h2>07 / Data Retention</h2>
      <p>
        We retain enquiry and project information only for as long as reasonably necessary to deliver our services, maintain business records, and meet legal or accounting requirements, after which it is securely deleted or anonymised.
      </p>

      <h2>08 / Data Security</h2>
      <p>
        We use reasonable technical and organisational measures to protect information in our possession against unauthorised access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>09 / Your Rights</h2>
      <p>
        Under India's Digital Personal Data Protection Act, 2023 (DPDP Act) and its Rules, you have rights to access, correct, and request the erasure of your personal data, and to raise a grievance about how it is handled. (As India's DPDP compliance obligations are phased in through May 2027, we aim to honour these rights as a standard business practice ahead of full enforcement). To exercise any of these rights, contact us using the details in Section 11.
      </p>

      <h2>10 / Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The "Last updated" date above reflects the most recent revision. Continued use of our website after changes means you accept the updated policy.
      </p>

      <h2>11 / Grievance Officer & Contact</h2>
      <p>
        Name: Mokshagna Theja / Ravi Manohar<br/>
        Email: hello@gravit.agency<br/>
        Address: GRAVIT, Bangalore, Karnataka, India<br/><br/>
        For any privacy question or complaint, please write to the above and we'll respond within a reasonable time.
      </p>
    </LegalLayout>
  );
}
