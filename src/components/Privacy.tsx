import LegalPage from './ui/LegalPage';

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="January 10, 2026">
      <div className="max-w-3xl">
        <p className="mb-16 text-xl text-white/90">
          This Privacy Policy explains how GRAVIT ("GRAVIT", "we", "us") collects, uses, and protects information when you visit gravit.agency or engage us for a project.
        </p>

        <div className="grid grid-cols-1 gap-0 border-t border-white/20">
          {[
            {
              id: '01',
              title: 'Who We Are',
              content: `GRAVIT is a digital design and web development agency based in Kurnool, Andhra Pradesh, India, founded by Mokshagna Theja and Ravi Manohar. You can reach us at hellogravit.agency@gmail.com or through gravit.agency.`,
            },
            {
              id: '02',
              title: 'Information We Collect',
              content: `2.1 Information you provide directly
Contact/enquiry form details — name, email, phone number, institution or company name, and your message.
Project-related content shared with us during an engagement.

2.2 Information collected automatically
Basic technical data — IP address, browser type, device type, pages visited, and referring site.
Cookies and similar technologies used for analytics (e.g., Google Analytics) to understand site usage.`,
            },
            {
              id: '03',
              title: 'How We Use Your Information',
              content: `To respond to your enquiry and prepare a proposal.
To deliver, manage, and communicate about a project you\'ve engaged us for.
To improve our website and understand how visitors use it.
To send occasional updates about GRAVIT, only where you\'ve explicitly agreed to receive them.`,
            },
            {
              id: '04',
              title: 'Cookies',
              content: `Our website may use cookies for basic analytics. You can disable cookies in your browser settings; however, this may affect some site functionality.`,
            },
            {
              id: '05',
              title: 'How We Share & Store Information',
              content: `We do not sell your personal information. We may share it with trusted third-party service providers who help us operate (e.g., cloud hosting providers, email services, analytics tools). Because we use modern global cloud infrastructure, your data may be stored or processed on secure servers located outside of India. We ensure all such providers are bound to strict data security standards. We may also disclose information where formally required by law.`,
            },
            {
              id: '06',
              title: 'Data From Minors & Client Portals',
              content: `This website is a B2B platform intended for institutional decision-makers and is not directed at children. Where GRAVIT builds a website on behalf of a school or college client that collects data from or about students (including minors), that data collection is exclusively governed by the Privacy Policy of the respective institution\'s website and the Service Agreement between GRAVIT and that institution—not by this policy.`,
            },
            {
              id: '07',
              title: 'Data Retention',
              content: `We retain enquiry and project information only for as long as reasonably necessary to deliver our services, maintain business records, and meet legal or accounting requirements, after which it is securely deleted or anonymised.`,
            },
            {
              id: '08',
              title: 'Data Security',
              content: `We use reasonable technical and organisational measures to protect information in our possession against unauthorised access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
            },
            {
              id: '09',
              title: 'Your Rights',
              content: `Under India\'s Digital Personal Data Protection Act, 2023 (DPDP Act) and its Rules, you have rights to access, correct, and request the erasure of your personal data, and to raise a grievance about how it is handled. (As India\'s DPDP compliance obligations are phased in through May 2027, we aim to honour these rights as a standard business practice ahead of full enforcement). To exercise any of these rights, contact us using the details in Section 11.`,
            },
            {
              id: '10',
              title: 'Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. The "Last updated" date above reflects the most recent revision. Continued use of our website after changes means you accept the updated policy.`,
            },
            {
              id: '11',
              title: 'Grievance Officer & Contact',
              content: `Name: Mokshagna Theja / Ravi Manohar
Email: hellogravit.agency@gmail.com
Address: GRAVIT, Kurnool, Andhra Pradesh, India

For any privacy question or complaint, please write to the above and we\'ll respond within a reasonable time.`,
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
