import Link from 'next/link';
import { EMAIL, JsonLd, PageHero, Section, breadcrumb, enMetadata, graph, webPage } from '@/components/en/kit';

const PATH = '/privacy';
const TITLE = 'Privacy Policy';
const DESCRIPTION =
  'How RVL Funding collects, uses and protects personal information on rvlfunding.com, and the privacy rights California residents have under the CCPA and CPRA.';

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION, noindex: true });

export default function PrivacyPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Privacy policy', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd data={graph(webPage(PATH, TITLE, DESCRIPTION), breadcrumb(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Legal"
        title="Privacy policy"
        text="This policy explains what personal information rvlfunding.com collects, why, who helps us process it, and how you can access, correct or delete it."
      />

      <section className="section-intro">
        <div className="container en-legal">
          <p>Last updated: November 4, 2026</p>
          <p>
            中文读者请看<Link href="/zh/privacy" hrefLang="zh-Hans" lang="zh-Hans">隐私政策（中文）</Link>.
          </p>
        </div>
      </section>

      <Section id="who" label="1" title="Who we are">
        <div className="en-legal">
          <p>
            RVL Funding (“we”, “us”) operates rvlfunding.com. Our office is at 17800 Castleton St, City of Industry, CA 91748. For
            any privacy question or request, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
          <p>
            This policy covers information collected through this website. Information you give us as a client may also be covered by
            the terms of your engagement with us.
          </p>
        </div>
      </Section>

      <Section id="collect" label="2" title="What we collect and where it comes from" tone="mist">
        <div className="en-legal">
          <h3>Information you give us</h3>
          <ul>
            <li>
              <strong>Newsletter sign-up.</strong> Your email address, when you subscribe to our weekly updates.
            </li>
            <li>
              <strong>Resource download requests.</strong> Your name and email address, and if you choose, your company name and phone
              number, when you request a guide such as the California company formation guide. We email you a download link that expires
              after a set time.
            </li>
            <li>
              <strong>Contact form.</strong> The contact form is provided by Google Forms. Google receives what you enter there and
              passes it to us.
            </li>
            <li>
              <strong>Booking a consultation.</strong> Bookings are made through Cal.com. Cal.com receives your name, email address,
              chosen time and any notes you add, and shares them with us.
            </li>
            <li>
              <strong>Emails you send us.</strong> Whatever you include when you write to {EMAIL}.
            </li>
          </ul>
          <h3>Information collected automatically</h3>
          <ul>
            <li>
              <strong>Hosting logs.</strong> The site is hosted by Vercel, which records technical data such as IP address, browser
              type and pages requested in order to deliver and secure the site, and keeps it for a limited period.
            </li>
            <li>
              <strong>Abuse protection.</strong> When you submit the download form, your IP address is held briefly in server memory to
              limit repeated submissions. It is not stored afterwards.
            </li>
            <li>
              <strong>Cookies and analytics.</strong> The site’s own code does not set advertising or analytics cookies. The embedded Google Forms and Cal.com pages may set their own
              cookies under their own policies.
            </li>
          </ul>
          <p>
            The self-assessment on our Chinese pages runs in your browser. Your answers are not sent to us.
          </p>
          <p>
            We do not intentionally collect sensitive personal information such as government identification numbers or financial
            account numbers through this website. Please do not send them through the forms.
          </p>
        </div>
      </Section>

      <Section id="use" label="3" title="How we use it">
        <div className="en-legal">
          <ul>
            <li>To answer your questions and follow up on consultation requests.</li>
            <li>To send the download links and the newsletter you asked for.</li>
            <li>To schedule and prepare for consultations.</li>
            <li>To keep the website secure and working.</li>
            <li>To meet legal obligations.</li>
          </ul>
          <p>
            We do not sell personal information, and we do not share it for cross-context behavioral advertising.
          </p>
        </div>
      </Section>

      <Section id="providers" label="4" title="Who we share it with" tone="mist">
        <div className="en-legal">
          <p>We share personal information only with service providers that help us run the site, under their own terms:</p>
          <ul>
            <li>Vercel: website hosting.</li>
            <li>Resend: sending sign-up confirmations, download links and the newsletter, and keeping the newsletter list.</li>
            <li>Google: the contact form, through Google Forms.</li>
            <li>Cal.com: consultation booking.</li>
            <li>GitHub: running the weekly newsletter job.</li>
          </ul>
          <p>
            We may also disclose information when the law requires it, or to protect our rights.
          </p>
        </div>
      </Section>

      <Section id="retention" label="5" title="How long we keep it">
        <div className="en-legal">
          <ul>
            <li>Newsletter: until you unsubscribe.</li>
            <li>Inquiries, download requests and booking details: for as long as we need them to respond to you and to keep ordinary business records.</li>
          </ul>
          <p>
            Every newsletter email has an unsubscribe link. You can also email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> to unsubscribe.
          </p>
        </div>
      </Section>

      <Section id="california" label="6" title="Your California privacy rights (CCPA and CPRA)" tone="mist">
        <div className="en-legal">
          <p>If you are a California resident, you can ask us to:</p>
          <ul>
            <li>tell you what personal information we have collected about you, where it came from, why we collected it and who we shared it with;</li>
            <li>give you a copy of that information;</li>
            <li>delete it;</li>
            <li>correct information that is inaccurate;</li>
            <li>stop selling or sharing it, although we do not sell or share it;</li>
            <li>limit our use of sensitive personal information, although we do not use it to infer characteristics about you.</li>
          </ul>
          <p>
            We will not treat you differently for exercising these rights. To make a request, email{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with the subject “Privacy request”. We will confirm receipt, verify your identity
            by matching information we already hold, and respond within 45 days. An authorized agent may make a request for you with
            your written permission.
          </p>
          <p>
            Do Not Track: the site does not track you across other websites, so it does not change its behavior in response to Do Not
            Track signals.
          </p>
        </div>
      </Section>

      <Section id="other" label="7" title="Children, security and international visitors">
        <div className="en-legal">
          <p>
            This website is not directed to children under 16, and we do not knowingly collect their personal information. If you
            believe a child has given us information, email us and we will delete it.
          </p>
          <p>
            We use reasonable safeguards to protect personal information, but no method of transmission or storage is completely
            secure.
          </p>
          <p>
            Our service providers store information in the United States. If you visit from China or another country, your
            information will be transferred to and processed in the United States.
          </p>
        </div>
      </Section>

      <Section id="changes" label="8" title="Changes and contact" tone="mist">
        <div className="en-legal">
          <p>
            We will post any changes on this page and update the date above. Questions or requests: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>,
            or write to RVL Funding, 17800 Castleton St, City of Industry, CA 91748.
          </p>
        </div>
      </Section>
    </main>
  );
}
