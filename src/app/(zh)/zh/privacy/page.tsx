import Link from 'next/link';
import { PageHero } from '../_components/Article';
import { JsonLd } from '../_components/JsonLd';
import { EMAIL, R } from '../content';
import { breadcrumb, buildMetadata, graph, webPage } from '../seo';

const PATH = '/zh/privacy';
const TITLE = '隐私政策';
const DESC = 'RVL Funding 网站如何收集、使用和保护个人信息，以及加州居民依据 CCPA/CPRA 享有的隐私权利。';
const ADDRESS = '17800 Castleton St, City of Industry, CA 91748';

export const metadata = {
  ...buildMetadata({ path: PATH, title: TITLE, description: DESC, en: '/privacy' }),
  // 律师审核前不收录。
  robots: { index: false, follow: true },
};

const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

export default function PrivacyPage() {
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '隐私政策', path: PATH },
  ];
  return (
    <>
      <JsonLd data={graph(webPage(PATH, TITLE, DESC), breadcrumb(crumbs))} />
      <main id="top">
        <PageHero
          crumbs={crumbs}
          eyebrow="Privacy"
          h1="隐私政策"
          lead="本政策说明 rvlfunding.com 收集哪些个人信息、为什么收集、由哪些服务商协助处理，以及您如何查阅、更正或删除这些信息。"
        />
        <div className="wrap article single">
          <div className="article-body">
            <p>最近更新：2026 年 11 月 4 日</p>
            <p>
              English readers: see the <Link href="/privacy" hrefLang="en" lang="en">Privacy Policy</Link>.
            </p>

            <section className="blk" aria-labelledby="who-h">
              <h2 id="who-h">一、我们是谁</h2>
              <p>
                RVL Funding（下称「我们」）运营 rvlfunding.com，办公地址为 {ADDRESS}。任何隐私问题或请求，请发邮件至 {mail}。
              </p>
              <p>本政策适用于通过本网站收集的信息。您作为委托客户提供的信息，也可能受您与我们的委托条款约束。</p>
            </section>

            <section className="blk" aria-labelledby="collect-h">
              <h2 id="collect-h">二、我们收集哪些信息</h2>
              <h3>您主动提供的信息</h3>
              <ul>
                <li>订阅资讯：订阅每周更新时提供的电子邮箱。</li>
                <li>
                  资料下载申请：申请下载加州公司注册指南等资料时提供的姓名、电子邮箱，以及您选择填写的公司名称和电话。我们会通过邮件发送有时效的下载链接。
                </li>
                <li>
                  联系表单：英文站的联系表单由 Google 表单提供，Google 会收到您填写的内容并转交给我们。
                </li>
                <li>预约咨询：通过 Cal.com 预约，Cal.com 会收到您的姓名、电子邮箱、预约时间及您填写的备注，并与我们共享。</li>
                <li>您发给我们的邮件：您写信至 {EMAIL} 时所附的内容。</li>
              </ul>
              <h3>自动收集的信息</h3>
              <ul>
                <li>
                  托管日志：网站由 Vercel 托管，Vercel 会为提供和保护网站记录 IP 地址、浏览器类型、访问页面等技术信息，并保存一段有限的时间。
                </li>
                <li>防滥用：提交下载表单时，您的 IP 地址会短暂保存在服务器内存中，用于限制重复提交，之后不会保存。</li>
                <li>
                  Cookie 与统计：网站本身的代码不设置广告或统计类 Cookie。嵌入的 Google 表单和 Cal.com 页面可能依其各自政策设置 Cookie。
                </li>
              </ul>
              <p>中文站的「自测」在您的浏览器内完成，答案不会发送给我们。</p>
              <p>我们不会通过本网站有意收集身份证件号码、金融账户号码等敏感个人信息，请勿通过表单发送此类信息。</p>
            </section>

            <section className="blk" aria-labelledby="use-h">
              <h2 id="use-h">三、我们如何使用</h2>
              <ul>
                <li>回复您的咨询，跟进预约请求；</li>
                <li>发送您申请的下载链接和资讯邮件；</li>
                <li>安排并准备咨询会议；</li>
                <li>维护网站安全与正常运行；</li>
                <li>履行法律义务。</li>
              </ul>
              <p>我们不出售个人信息，也不为跨情境行为广告目的共享个人信息。</p>
            </section>

            <section className="blk" aria-labelledby="share-h">
              <h2 id="share-h">四、与谁共享</h2>
              <p>我们只与协助运营网站的服务商共享个人信息，各服务商依其自身条款处理：</p>
              <ul>
                <li>Vercel：网站托管；</li>
                <li>Resend：发送订阅确认、下载链接和资讯邮件，并保存资讯订阅名单；</li>
                <li>Google：通过 Google 表单提供联系表单；</li>
                <li>Cal.com：咨询预约；</li>
                <li>GitHub：运行每周资讯邮件任务。</li>
              </ul>
              <p>在法律要求或为保护我们的权利时，我们也可能披露信息。</p>
            </section>

            <section className="blk" aria-labelledby="keep-h">
              <h2 id="keep-h">五、保存多久</h2>
              <ul>
                <li>资讯订阅：保存至您退订为止；</li>
                <li>咨询、下载申请和预约信息：在回复您和保留正常业务记录所需的期限内保存。</li>
              </ul>
              <p>每封资讯邮件都附有退订链接，您也可以发邮件至 {mail} 退订。</p>
            </section>

            <section className="blk" aria-labelledby="ca-h">
              <h2 id="ca-h">六、加州居民的隐私权利（CCPA/CPRA）</h2>
              <p>如果您是加州居民，您可以要求我们：</p>
              <ul>
                <li>告知我们收集了您哪些个人信息、来源、收集目的以及与谁共享；</li>
                <li>提供这些信息的副本；</li>
                <li>删除这些信息；</li>
                <li>更正不准确的信息；</li>
                <li>停止出售或共享您的信息（我们本就不出售、不共享）；</li>
                <li>限制对敏感个人信息的使用（我们不会用其推断您的特征）。</li>
              </ul>
              <p>
                您行使上述权利不会受到任何差别对待。提出请求请发邮件至 {mail}，主题注明「隐私请求」。我们会确认收到，通过比对已持有的信息核实您的身份，并在 45 天内答复。经您书面授权，授权代理人也可代您提出请求。
              </p>
              <p>关于「请勿追踪」（Do Not Track）：本网站不会跨网站追踪您，因此不会因该信号改变处理方式。</p>
            </section>

            <section className="blk" aria-labelledby="other-h">
              <h2 id="other-h">七、未成年人、安全与境外访客</h2>
              <p>本网站不面向 16 岁以下的儿童，我们不会有意收集其个人信息。如您认为儿童向我们提供了信息，请联系我们，我们会予以删除。</p>
              <p>我们采取合理措施保护个人信息，但任何传输或存储方式都无法做到绝对安全。</p>
              <p>
                我们的服务商在美国存储信息。如您从中国或其他国家访问，您的信息将被传输至美国并在美国处理。
              </p>
            </section>

            <section className="blk" aria-labelledby="change-h">
              <h2 id="change-h">八、政策更新与联系方式</h2>
              <p>
                本政策如有更新，我们会在本页公布并更新上方日期。如有疑问或请求，请发邮件至 {mail}，或致函 RVL Funding, {ADDRESS}。
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
