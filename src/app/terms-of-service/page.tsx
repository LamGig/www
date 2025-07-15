import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-4 py-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: June 15, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between the client, whether an individual or an entity (&quot;Client,&quot; &quot;you&quot;), and LamGig, Inc. (&quot;LamGig,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms govern all services provided by LamGig to the Client.
              </p>
              <p className="mb-4">
                By engaging LamGig for services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service & Scope of Work</h2>
              <p className="mb-4">
                LamGig provides custom software development, project management, and technology consulting services (&quot;Services&quot;). The specific details, deliverables, timelines, and scope for any project will be defined in a separate Statement of Work (&quot;SOW&quot;) document, which will be signed by both parties and will be governed by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">As a Client, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate, complete, and timely information necessary for project completion.</li>
                <li>Appoint a single point of contact for decision-making and approvals.</li>
                <li>Provide timely feedback and approvals to avoid project delays.</li>
                <li>Comply with all terms outlined in the applicable SOW.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment and Billing</h2>
              <p className="mb-4">
                Payment terms, schedules, and total fees will be specified in the SOW for each project. All invoices are due upon receipt, unless otherwise stated.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>All fees are non-refundable unless explicitly stated otherwise in the SOW.</li>
                <li>Late payments may be subject to interest charges of 1.5% per month or the maximum rate permitted by law, whichever is lower.</li>
                <li>We reserve the right to suspend all Services until payment is made in full.</li>
                <li>You are responsible for all applicable federal, state, and local taxes associated with your payments.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                Upon our receipt of full and final payment from you for a given project, LamGig assigns to you all rights, title, and interest in the custom-developed deliverables (&quot;Work Product&quot;) as specified in the SOW.
              </p>
              <p className="mb-4">
                Notwithstanding the foregoing, LamGig retains ownership of all of its pre-existing intellectual property, including its software, methodologies, tools, and general knowledge (&quot;LamGig IP&quot;). To the extent any LamGig IP is incorporated into the Work Product, LamGig grants you a non-exclusive, perpetual, worldwide, royalty-free license to use such LamGig IP solely as part of the Work Product.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
              <p className="mb-4">
                Both LamGig and the Client (&quot;the Parties&quot;) agree to keep confidential all non-public information disclosed by one party to the other. This includes business plans, client lists, financial information, and proprietary technical data. The Parties agree not to disclose such confidential information to any third party without prior written consent, except as required by law. This obligation of confidentiality shall survive the termination of our engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS.&quot; LAMGIG DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mb-4">
                In no event shall LamGig's total liability arising out of or related to our services exceed the total amount paid by you to LamGig under the applicable SOW. We are not liable for any indirect, incidental, consequential, or special damages, including loss of profits or data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="mb-4">
                Either party may terminate the services with appropriate written notice as specified in the project's SOW. Upon termination, you remain responsible for payment for all work performed and expenses incurred up to the date of termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution and Governing Law</h2>
              <p className="mb-4">
                These Terms, and any dispute arising from them, are governed by the laws of the **State of Delaware**, USA, without regard to its conflict of law principles. Any dispute, claim, or controversy shall be resolved through final and binding arbitration administered by the American Arbitration Association (&quot;AAA&quot;) under its Commercial Arbitration Rules. The arbitration will take place in Wilmington, Delaware.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. General Provisions</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes, and your continued use of our Services constitutes acceptance of the modified Terms. These Terms, together with any SOW, constitute the entire agreement between the Parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mb-2">Email: legal@lamgig.com</p>
              <p>Website: www.lamgig.com</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}