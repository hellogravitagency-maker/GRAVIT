import LegalPage from './ui/LegalPage';

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="January 10, 2026">
      <div className="max-w-3xl">
        <p className="mb-16 text-xl text-white/90">
          These Terms of Service ("Terms") govern your use of gravit.agency (the "Website"), operated by GRAVIT ("GRAVIT", "we", "us"). By using the Website, you agree to these Terms.
        </p>

        <div className="grid grid-cols-1 gap-0 border-t border-white/20">
          {[
            {
              id: '01',
              title: 'About GRAVIT',
              content: `GRAVIT is a digital design and web development agency based in Kurnool, Andhra Pradesh, offering website design, development, brand identity, and digital strategy services.`,
            },
            {
              id: '02',
              title: 'Use of This Website',
              content: `You may browse this Website and use its contact/enquiry forms for legitimate business purposes.
You may not scrape, copy, republish Website content, attempt to disrupt the Website, or upload any malicious code or illegal material through our forms.`,
            },
            {
              id: '03',
              title: 'Intellectual Property',
              content: `All text, graphics, logos, and design on this Website belong to GRAVIT, unless otherwise credited, and may not be reproduced without written permission. Portfolio projects shown on this Website remain the property of their respective clients where applicable and are displayed with permission, per each client\'s Portfolio Release Consent.`,
            },
            {
              id: '04',
              title: 'Engaging Our Services',
              content: `This Website provides general information about GRAVIT. Any actual project—its scope, price, timeline, and terms—is governed exclusively by the Master Service Agreement and Statement of Work (SOW) signed between GRAVIT and the client for that specific engagement. In case of conflict, the signed Service Agreement takes precedence over these Website Terms.`,
            },
            {
              id: '05',
              title: 'Testimonials & Case Studies',
              content: `Client testimonials and case studies shown on this Website reflect individual client experiences and are shared with the relevant client\'s consent. They do not constitute a guarantee, warranty, or prediction regarding the outcome of your specific project.`,
            },
            {
              id: '06',
              title: 'Limitation of Liability',
              content: `To the maximum extent permitted by applicable law, GRAVIT shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Website. Furthermore, GRAVIT\'s total aggregate liability for any direct damages arising out of or related to your use of this Website shall not exceed ₹1,000 INR. This clause does not apply to liabilities arising under a signed client Service Agreement, which is governed by its own terms.`,
            },
            {
              id: '07',
              title: 'Indemnification',
              content: `You agree to indemnify, defend, and hold harmless GRAVIT from any claims, damages, or legal expenses arising out of your misuse of the Website or your violation of these Terms.`,
            },
            {
              id: '08',
              title: 'Third-Party Links',
              content: `This Website may link to third-party sites (e.g., social media, partner tools). We are not responsible for the content, security, or privacy practices of those external sites.`,
            },
            {
              id: '09',
              title: 'Governing Law & Jurisdiction',
              content: `These Terms are governed by the laws of India, and any dispute shall be subject to the exclusive jurisdiction of the courts at Kurnool, Andhra Pradesh.`,
            },
            {
              id: '10',
              title: 'Changes to These Terms',
              content: `We may update these Terms from time to time. The "Last updated" date above reflects the most recent revision.`,
            },
            {
              id: '11',
              title: 'Contact Us',
              content: `Questions about these Terms can be sent to hellogravit.agency@gmail.com or via the contact form on gravit.agency.`,
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
