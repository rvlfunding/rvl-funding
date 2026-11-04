import { R } from '../content';
import type { QuestionData } from '../types';

/**
 * 问题解答页：每页回答一个高频问题，对应一组长尾关键词。
 * 金额、门槛以官方来源为准；不确定之处标「待确认」或写明以官方公布为准。
 */

export const QUESTION_CATEGORIES: Record<QuestionData['category'], string> = {
  company: '公司注册',
  banking: '银行开户',
  tax: '报税与合规',
  hr: '用工与人力资源',
  immigration: '身份与移民',
  planning: '资产、税务与保险',
};

const IRS_5472 = { label: 'IRS：About Form 5472', url: 'https://www.irs.gov/forms-pubs/about-form-5472' };
const IRS_EIN = { label: 'IRS：Employer ID Numbers', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers' };
const USCIS_EB1 = { label: 'USCIS：Employment-Based Immigration: First Preference EB-1', url: 'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1' };
const USCIS_L1A = { label: 'USCIS：L-1A Intracompany Transferee Executive or Manager', url: 'https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager' };
const VISA_BULLETIN = { label: 'U.S. Department of State：Visa Bulletin', url: 'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html' };
const FTB_800 = { label: 'California FTB：Minimum franchise tax', url: 'https://www.ftb.ca.gov/file/business/types/corporations/index.html' };
const FINCEN_BOI = { label: 'FinCEN：Beneficial Ownership Information Reporting', url: 'https://www.fincen.gov/boi' };

export const QUESTIONS: QuestionData[] = [
  // —— 公司注册 ——
  {
    slug: 'first-step-entering-us-market',
    category: 'company',
    q: '中国公司进入美国市场，第一步是什么？',
    en: 'What is the first step for a Chinese company entering the US market?',
    title: '中国公司进入美国市场第一步是什么',
    description: '中国公司进入美国市场的第一步：先确定业务与所在州，再定实体形式与注册州，随后依次完成 EIN、开户、州税登记与用工准备。',
    keywords: ['中国公司进入美国市场', '中国企业出海美国第一步', '美国落地顺序'],
    answer: '第一步不是注册公司，而是确定在美国要做什么业务、在哪个州经营。业务与地点决定了实体形式、注册州、登记哪些州税与适用哪些劳动法规，后续每一步都以此为前提。',
    blocks: [
      {
        h: '建议的先后顺序',
        points: [
          '明确业务模式：平台销售、自营网站、线下门店、贸易或服务',
          '确定经营所在州：库存、员工、办公室在哪里',
          '选择实体形式与注册州',
          '注册公司，指定注册代理人，申请 EIN',
          '开立美国公司银行账户',
          '登记州税账户，准备用工与保险',
          '建立合规日历',
        ],
      },
      {
        h: '最常见的返工',
        p: ['先在某个州注册，后来发现主要经营在另一个州，只能再办外州登记、承担两地年费；或者先招了人，才发现还没有完成州雇主登记与劳工补偿保险。提前一次规划，通常比事后补救便宜得多。'],
      },
    ],
    related: [R.business, R.formation, R.states],
    questions: ['how-to-register-us-company', 'which-state-to-incorporate', 'first-us-employee'],
  },
  {
    slug: 'how-to-register-us-company',
    category: 'company',
    q: '中国人如何注册美国公司？',
    en: 'How to register a US company as a Chinese founder?',
    title: '中国人如何注册美国公司：步骤、材料与注意事项',
    description: '中国人注册美国公司无需美国身份：核名、提交成立文件、指定注册代理人、制定章程或运营协议、申请 EIN，并在经营州办理登记。',
    keywords: ['中国人注册美国公司', '如何注册美国公司', '非居民注册美国公司', '美国公司注册流程'],
    answer: '非美国居民可以直接在美国任一州注册公司，不需要美国身份或签证。基本步骤是：选定实体形式与注册州、核名、提交成立文件、指定注册代理人、申请 EIN，再在实际经营州完成登记。',
    blocks: [
      {
        h: '注册步骤',
        points: [
          '选择实体形式（LLC 或 C-Corp）与注册州',
          '核名，确认公司名称可用',
          '向州政府提交成立文件并缴纳州政府费用',
          '指定在该州有实际地址的注册代理人',
          '制定运营协议或公司章程，记录股权',
          '申请 EIN',
          '如在其他州经营，办理外州登记',
        ],
      },
      {
        h: '注册之后马上要做的事',
        p: ['注册完成只是开始。开户、州税登记、年报与联邦信息申报都有各自的要求与截止日，建议在注册当月建立合规日历。'],
      },
    ],
    faqs: [
      { q: '需要美国地址吗？', a: '州政府要求注册代理人在该州有实际地址；公司的经营地址与通讯地址可另行安排，但银行开户通常会审查经营实质。' },
    ],
    related: [R.formation, R.banking, R.states],
    questions: ['llc-or-c-corp', 'which-state-to-incorporate', 'registered-agent', 'ein-without-ssn'],
  },
  {
    slug: 'llc-or-c-corp',
    category: 'company',
    q: '注册美国公司，选 LLC 还是 C-Corp？',
    en: 'LLC or C-Corp for a Chinese founder?',
    title: '美国公司选 LLC 还是 C-Corp：中国企业家的比较',
    description: 'LLC 与 C-Corp 在税务处理、股权融资与跨国经营上的差异，以及外资 LLC 的信息申报要求；选择取决于股东结构、融资与身份规划。',
    keywords: ['LLC 还是 C-Corp', 'LLC 和 C-Corp 区别', '外国人 LLC', '中国人注册 C-Corp'],
    answer: 'LLC 结构灵活、可选择税务分类，适合结构简单的业务；C-Corp 以股票为单位，便于引入投资与设计股权，也更常用于跨国关联公司与需要清晰组织架构的安排。最终选择应与 CPA 一起，结合股东结构与身份规划确定。',
    blocks: [
      {
        h: '主要差异',
        table: {
          head: ['比较项', 'LLC', 'C-Corp'],
          rows: [
            ['所有权', '成员权益', '股票'],
            ['联邦税', '视税务分类而定；外资单一成员 LLC 默认为穿透实体，并有信息申报义务', '公司层面申报 Form 1120 并缴税'],
            ['融资', '机构投资人较少接受', '风险投资与股权激励的常见形式'],
            ['与身份规划', '可用，但需证明组织架构与经营实质', '常见于 L-1A、EB-1C 的关联公司安排'],
          ],
        },
      },
      {
        h: '容易忽略的一点',
        p: ['外资持有的单一成员 LLC 虽然在联邦层面通常不单独缴纳所得税，但仍需就与外国所有人之间的特定交易申报 Form 5472，漏报的罚款很重。'],
      },
    ],
    related: [R.formation, R.tax],
    questions: ['form-5472', 'which-state-to-incorporate', 'annual-tax-filings'],
    sources: [IRS_5472],
  },
  {
    slug: 'which-state-to-incorporate',
    category: 'company',
    q: '美国公司注册在哪个州好？特拉华、怀俄明还是经营所在州？',
    en: 'Which state should I incorporate in: Delaware, Wyoming or where I operate?',
    title: '美国公司注册在哪个州：特拉华、怀俄明与经营州比较',
    description: '注册州与经营州的区别；特拉华适合引入机构投资，怀俄明费用较低，实际经营州可避免重复登记与年费。各州费用见各州落地指南。',
    keywords: ['美国公司注册哪个州', '特拉华公司', '怀俄明公司', '在哪个州注册公司'],
    answer: '如果业务主要在一个州，通常直接在该州注册最简单；计划引入机构投资时，特拉华更常见；怀俄明等州费用较低，但如果实际在其他州经营，仍需在经营州办理外州登记并承担当地税费。',
    blocks: [
      {
        h: '注册州不等于经营州',
        p: ['在某州有办公室、员工、库存或大量销售，通常构成在该州“经营业务”，需要办理外州登记。很多企业以为注册在低费用州可以节省成本，结果需要同时承担两个州的年报与税费。'],
      },
      {
        h: '如何判断',
        points: ['公司将在哪些州有员工、库存或办公室', '是否计划引入风险投资或机构投资', '身份申请对美国公司经营地点的要求', '各州的年报、特许经营税与销售税规定'],
      },
    ],
    related: [R.states, R.formation, '/zh/states/delaware', '/zh/states/wyoming', '/zh/states/california'],
    questions: ['how-to-register-us-company', 'california-800-franchise-tax'],
  },
  {
    slug: 'ein-without-ssn',
    category: 'company',
    q: '没有 SSN，如何为美国公司申请 EIN？',
    en: 'How to get an EIN without an SSN?',
    title: '没有 SSN 如何申请 EIN：非美国居民的申请方式',
    description: '非美国居民为美国公司申请 EIN：在线申请需负责人的 SSN 或 ITIN，没有时可通过电话、传真或邮寄 SS-4 表格向 IRS 申请。',
    keywords: ['EIN 申请', '没有 SSN 申请 EIN', '外国人申请 EIN', 'SS-4 表格'],
    answer: 'EIN 是美国公司的联邦税号，开户、报税与雇佣都需要。IRS 的在线申请要求负责人提供 SSN 或 ITIN；没有的国际申请人，可以按 IRS 说明以电话、传真或邮寄 Form SS-4 的方式申请。',
    blocks: [
      {
        h: '申请前准备',
        points: ['公司已在州政府完成注册', '确定“负责人”（responsible party）', '准备公司名称、地址、成立日期与业务类型', '填写 Form SS-4'],
      },
      {
        h: '常见问题',
        p: ['EIN 上的公司名称与地址应与州政府注册记录一致，否则开户时可能需要补件。拿到 EIN 确认函后应妥善保存，银行与 CPA 都会要求提供。'],
      },
    ],
    related: [R.formation, R.banking],
    questions: ['how-to-register-us-company', 'us-bank-account-without-residency'],
    sources: [IRS_EIN],
  },
  {
    slug: 'registered-agent',
    category: 'company',
    q: '美国公司的注册代理人是什么？必须要有吗？',
    en: 'What is a registered agent and do I need one?',
    title: '美国注册代理人（Registered Agent）是什么',
    description: '注册代理人是在注册州有实际地址、工作时间可接收政府文书与法律送达的个人或机构；美国各州一般都要求公司指定注册代理人。',
    keywords: ['注册代理人', 'Registered Agent', '美国公司注册代理', '法律文书送达'],
    answer: '注册代理人是公司在注册州的官方联络人，负责接收州政府通知、年报提醒与法律文书送达。各州一般要求公司在注册时指定，并且必须在该州有实际地址。',
    blocks: [
      {
        h: '为什么重要',
        p: ['错过法律文书或年报通知，可能导致缺席判决或公司被撤销良好存续状态。对身在中国的股东来说，选择可靠的注册代理人并及时转送文件尤其重要。'],
      },
      {
        h: '在多个州经营时',
        p: ['在其他州办理外州登记时，通常也需要在该州指定注册代理人。我们把各州的代理人与年报日期一并纳入合规日历。'],
      },
    ],
    related: [R.formation, R.legal, R.states],
    questions: ['how-to-register-us-company', 'which-state-to-incorporate'],
  },
  // —— 银行开户 ——
  {
    slug: 'us-bank-account-without-residency',
    category: 'banking',
    q: '没有美国身份，如何开美国公司银行账户？',
    en: 'How to open a US business bank account without US residency?',
    title: '没有美国身份如何开美国公司银行账户',
    description: '非美国居民可以为美国公司开立银行账户，常见材料包括注册文件、EIN、股东与签字人身份证明、股权结构与经营实质材料，部分银行要求本人到场。',
    keywords: ['没有美国身份开户', '非居民美国公司银行账户', '美国公司开户材料', '如何开美国公司银行账户'],
    answer: '可以。多数银行要求提供公司注册文件、EIN、股东及董事身份证明、股权结构说明与经营实质材料，部分银行要求签字人本人到分行面谈。不同银行对跨境客户的接受程度差别很大，选对渠道很关键。',
    blocks: [
      {
        h: '材料清单',
        points: ['成立文件与运营协议或章程', 'EIN 确认函', '股东、董事、签字人的护照', '穿透到最终受益人的股权结构图', '业务说明、合同、店铺与网站等经营实质材料', '资金来源说明'],
      },
      {
        h: '提高通过率的做法',
        p: ['材料之间的信息要一致；业务描述要具体，能说明在美国的收款与付款需求；签字人本人到场的，提前预约并把行程与其他需到场的事项安排在一起。'],
      },
    ],
    related: [R.banking, R.formation],
    questions: ['bank-account-rejected', 'ein-without-ssn'],
  },
  {
    slug: 'bank-account-rejected',
    category: 'banking',
    q: '美国公司银行开户被拒怎么办？',
    en: 'My US business bank account application was rejected. What now?',
    title: '美国公司银行开户被拒：常见原因与应对',
    description: '美国公司开户被拒的常见原因：股权结构说明不足、经营实质与资金来源材料欠缺、信息不一致；如何补充材料并选择适合跨境企业的银行渠道。',
    keywords: ['美国公司开户被拒', '美国银行拒绝开户', '跨境企业开户', '开户被拒怎么办'],
    answer: '先弄清被拒的原因，再决定补件还是换渠道。常见原因包括股权结构说明不足、经营实质与资金来源材料欠缺，以及不同文件之间的信息不一致。',
    blocks: [
      {
        h: '常见原因',
        points: ['最终受益人或多层股权结构没有说清', '缺少能证明真实业务的合同、发票或店铺记录', '资金来源说明不足', '注册地址、EIN 与申请表信息不一致', '业务所属行业被该银行列为高风险'],
      },
      {
        h: '应对步骤',
        points: ['整理被拒反馈，逐项补齐材料', '统一各文件中的公司信息', '评估是否更换为接受跨境客户的银行', '必要时先开立支付平台账户维持收款，同时推进银行开户'],
      },
    ],
    related: [R.banking],
    questions: ['us-bank-account-without-residency'],
  },
  // —— 报税与合规 ——
  {
    slug: 'annual-tax-filings',
    category: 'tax',
    q: '美国公司每年要报哪些税？如何合规避免罚款？',
    en: 'What US business taxes must I file each year to stay compliant?',
    title: '美国公司每年要报哪些税：联邦、州与工资税清单',
    description: '美国公司的常见年度申报：联邦所得税（C-Corp 为 Form 1120）、外资公司 Form 5472、州所得税或特许经营税、销售税与工资税，由 CPA 确认并按合规日历申报。',
    keywords: ['美国公司每年要报哪些税', '美国公司报税', '美国公司合规', '美国公司罚款'],
    answer: '常见义务包括联邦所得税申报（C-Corp 为 Form 1120）、外资持股达 25% 的公司或外资单一成员 LLC 的 Form 5472 信息申报、州所得税或特许经营税（加州公司及 LLC 每年最低 800 美元），以及有员工时的工资税申报。具体申报义务由 CPA 确认。',
    blocks: [
      {
        h: '按层级梳理',
        table: {
          head: ['层级', '义务', '触发条件'],
          rows: [
            ['联邦', 'Form 1120 等所得税申报', '按实体与税务分类'],
            ['联邦', 'Form 5472', '外资持股达 25%，或外资单一成员 LLC 的特定交易'],
            ['州', '年报、特许经营税或州所得税', '注册州及外州登记州'],
            ['州', '销售税', '在该州构成经济关联'],
            ['联邦与州', '工资税', '雇佣员工后'],
          ],
        },
      },
      {
        h: '避免罚款的做法',
        p: ['从成立当月建立合规日历，标明每项申报的截止日、所需材料与负责的 CPA；即使公司当年没有收入，也应确认需要提交的表格。'],
      },
    ],
    related: [R.tax, R.states],
    questions: ['form-5472', 'california-800-franchise-tax', 'sales-tax-for-cross-border-sellers', 'boi-reporting'],
    sources: [IRS_5472],
  },
  {
    slug: 'form-5472',
    category: 'tax',
    q: '外资美国公司为什么要报 Form 5472？',
    en: 'Why does a foreign-owned US company file Form 5472?',
    title: 'Form 5472 是什么：外资美国公司与外资 LLC 的信息申报',
    description: 'Form 5472 适用于外资持股达 25% 的美国公司，以及外资单一成员 LLC 与外国关联方的特定交易；漏报的罚款很重，应由 CPA 申报。',
    keywords: ['Form 5472', '5472 表格', '外资 LLC 报税', '外国人 LLC 申报'],
    answer: 'Form 5472 是一份信息申报表，用于报告美国公司与其外国关联方之间的交易。外资持股达 25% 的美国公司，以及外国人持有的单一成员 LLC，通常都需要申报。漏报或逾期的罚款金额很高。',
    blocks: [
      {
        h: '谁需要申报',
        points: ['一个外国人直接或间接持有至少 25% 股权的美国公司', '外国人持有的单一成员 LLC（被视为穿透实体时，按 IRS 规定随附形式上的 Form 1120 申报）'],
      },
      {
        h: '需要准备的记录',
        p: ['与外国股东或关联方之间的出资、借款、付款、服务与货物往来都需要记录。建议从公司成立起，就把关联交易单独记账，便于 CPA 申报。'],
      },
    ],
    related: [R.tax],
    questions: ['annual-tax-filings', 'llc-or-c-corp'],
    sources: [IRS_5472],
  },
  {
    slug: 'california-800-franchise-tax',
    category: 'tax',
    q: '加州 800 美元特许经营税是什么？在特拉华注册也要交吗？',
    en: "What is California's $800 minimum franchise tax?",
    title: '加州 800 美元最低特许经营税：谁需要交',
    description: '在加州注册、登记或经营的公司与 LLC，每年一般需缴纳最低 800 美元特许经营税；在特拉华注册但在加州经营的公司通常同样适用。',
    keywords: ['加州 800 美元税', '加州特许经营税', '加州 LLC 年费', 'California franchise tax'],
    answer: '在加州注册、在加州办理外州登记或在加州经营业务的公司与 LLC，一般每年都需要向加州税务局（FTB）缴纳最低 800 美元的特许经营税，与是否盈利无关。在特拉华注册、在加州经营的公司通常同样适用。',
    blocks: [
      {
        h: '要点',
        points: ['与是否有收入无关', '在加州“经营业务”的外州公司同样适用', 'LLC 收入较高时还可能需要另缴 LLC 费用', '是否适用首年豁免等例外，以 FTB 公布为准'],
      },
      {
        h: '为什么经常被漏缴',
        p: ['不少企业注册在其他州，以为与加州无关，但在加州有员工、办公室或库存，就可能构成在加州经营。逾期会产生罚款与利息，并可能影响公司的良好存续状态。'],
      },
    ],
    related: ['/zh/states/california', R.tax, R.la],
    questions: ['which-state-to-incorporate', 'annual-tax-filings'],
    sources: [FTB_800],
  },
  {
    slug: 'sales-tax-for-cross-border-sellers',
    category: 'tax',
    q: '跨境卖家在美国要交销售税吗？',
    en: 'Do cross-border sellers need to collect US sales tax?',
    title: '跨境卖家美国销售税：经济关联与平台代收',
    description: '美国销售税由各州征收；2018 年后各州普遍对远程卖家设定经济关联门槛。亚马逊等平台通常代收代缴，但自营网站与线下销售仍需自行登记。',
    keywords: ['美国销售税', '跨境卖家销售税', 'sales tax nexus', '亚马逊销售税'],
    answer: '美国没有全国统一的销售税，由各州与地方征收。2018 年美国最高法院 Wayfair 案之后，各州普遍规定远程卖家在当地销售额或交易笔数达到门槛即需登记。通过亚马逊等平台的销售通常由平台代收代缴，但自营网站与其他渠道仍需自行判断。',
    blocks: [
      {
        h: '构成关联的常见情形',
        points: ['在该州有库存（包括存放在平台仓库）', '在该州有员工或办公室', '在该州的销售额或交易笔数超过经济关联门槛'],
        note: '各州门槛不同，见各州落地指南，并以该州税务部门公布为准。',
      },
      {
        h: '平台代收不等于完全免责',
        p: ['平台代收只覆盖经平台完成的销售。如果同时有自营网站、批发或线下销售，仍需评估在各州的登记与申报义务，并保留平台代收的记录。'],
      },
    ],
    related: [R.tax, R.states],
    questions: ['annual-tax-filings'],
  },
  {
    slug: 'boi-reporting',
    category: 'tax',
    q: '美国公司还需要向 FinCEN 申报受益所有人信息（BOI）吗？',
    en: 'Do I still need to file a BOI report with FinCEN?',
    title: '美国公司 BOI 申报：2026 年的最新要求',
    description: 'FinCEN 规则调整后，在美国成立的公司已无需申报受益所有人信息；在外国成立并在美国州政府登记经营的公司仍可能需要申报，以 FinCEN 最新公布为准。',
    keywords: ['BOI 申报', 'FinCEN BOI', '受益所有人信息', '美国公司透明法'],
    answer: '根据 FinCEN 的规则调整，在美国成立的公司已无需申报受益所有人信息（BOI）。在外国成立、并在美国某州登记经营的“外国报告公司”仍可能需要申报。规则曾多次变动，请以 FinCEN 最新公布为准。',
    blocks: [
      {
        h: '对中国企业意味着什么',
        p: ['如果您以中国公司直接在美国州政府办理外州登记经营，可能属于需要申报的外国报告公司；如果您在美国新设了子公司，该子公司一般不再需要申报。具体由律师或 CPA 根据最新规定确认。'],
      },
    ],
    related: [R.tax, R.legal],
    questions: ['annual-tax-filings', 'how-to-register-us-company'],
    sources: [FINCEN_BOI],
  },
  // —— 用工 ——
  {
    slug: 'first-us-employee',
    category: 'hr',
    q: '美国第一位员工下月入职，需要提前完成什么？',
    en: 'My first US employee starts next month. What do I need to do?',
    title: '美国首位员工入职前清单：登记、工资、保险与文件',
    description: '美国首位员工入职前需完成：州雇主登记（预扣税与失业保险）、工资系统、劳工补偿保险、I-9 与 W-4 等入职文件、员工与承包人的区分。',
    keywords: ['美国第一位员工', '美国首位员工雇佣', '美国员工入职', '美国雇主登记'],
    answer: '通常需要完成州雇主登记（州预扣税与失业保险）、设置工资系统、按州规定投保劳工补偿保险、准备 I-9、W-4 等入职文件与福利方案，并确认该岗位应按员工而非独立承包人处理。',
    blocks: [
      {
        h: '入职前四周清单',
        points: ['确认公司已有 EIN 与银行账户', '在员工工作所在州办理雇主登记', '选择工资系统或 PEO', '投保劳工补偿保险', '准备录用通知、I-9、W-4 与州表格', '确认工资、加班与带薪假规则', '准备员工手册或基本制度'],
      },
      {
        h: '入职当天与之后',
        p: ['I-9 需在规定时限内完成核验；首个发薪日前确认预扣设置；之后按期申报工资税。各州规定差别很大，加州与纽约州尤其细致。'],
      },
    ],
    related: [R.hr, R.peo, R.states],
    questions: ['hire-employees-payroll', 'workers-comp-insurance', 'contractor-vs-employee', 'peo-vs-eor'],
  },
  {
    slug: 'hire-employees-payroll',
    category: 'hr',
    q: '美国公司如何雇人、办工资和员工保险？',
    en: "How to hire employees, run payroll and get workers' comp in the US?",
    title: '美国公司如何雇人、办工资与员工保险',
    description: '美国公司雇人的基本流程：州雇主登记、设置工资系统、按州法律购买劳工补偿保险、准备入职文件；尚未建立人事体系的企业可先通过 PEO 合规用工。',
    keywords: ['美国公司雇人', '美国工资发放', '美国员工保险', 'payroll 美国'],
    answer: '首次雇佣前，通常需完成州雇主登记、设置工资系统、准备入职文件，并按州法律购买劳工补偿保险。尚未建立人事体系的企业，可先通过 PEO 合规用工。',
    blocks: [
      {
        h: '工资（Payroll）包括什么',
        points: ['按期计算工资与加班', '预扣联邦与州所得税、社会保障与医疗保险税', '缴纳雇主部分的税费与失业保险', '按期向联邦与州申报', '年末出具 W-2'],
      },
      {
        h: '员工保险与福利',
        p: ['劳工补偿保险多数州强制要求；医疗保险、退休计划等福利视公司规模与竞争需要安排。部分州另有州残疾保险或带薪家庭假的预扣要求。'],
      },
    ],
    related: [R.hr, R.peo],
    questions: ['first-us-employee', 'workers-comp-insurance', 'peo-vs-eor'],
  },
  {
    slug: 'peo-vs-eor',
    category: 'hr',
    q: '美国 PEO 和 EOR 有什么区别？',
    en: 'PEO vs EOR in the US: what is the difference?',
    title: '美国 PEO 与 EOR 区别：适用场景与成本比较',
    description: 'PEO 与已设立的美国公司共同承担雇主职责；EOR 以自身名义雇佣员工，多用于尚未设立美国实体的阶段。如何按实体安排、人数与长期规划选择。',
    keywords: ['PEO 和 EOR 区别', '美国 PEO', '美国 EOR', '美国人力外包'],
    answer: 'PEO 与您已设立的美国公司共同承担雇主职责；EOR 以自身名义雇佣员工，多用于尚未设立美国实体的阶段。选择取决于实体安排、员工人数与长期规划。',
    blocks: [
      {
        h: '如何选择',
        points: ['已有美国公司、员工人数较少：通常考虑 PEO', '尚未设立美国公司、先雇佣一两名员工：可考虑 EOR', '计划以美国公司申请 L-1A 或 EB-1C：需与移民律师确认用工模式对申请的影响'],
      },
      {
        h: '成本结构',
        p: ['PEO 常按员工人数或工资比例收费，EOR 通常按每名员工收取较高的月费。比较时应把福利、劳工保险与合规支持一并计算。'],
      },
    ],
    related: [R.peo, R.hr],
    questions: ['first-us-employee', 'hire-employees-payroll'],
  },
  {
    slug: 'workers-comp-insurance',
    category: 'hr',
    q: '美国的劳工补偿保险必须买吗？',
    en: "Is workers' compensation insurance mandatory in the US?",
    title: '美国劳工补偿保险（Workers’ Comp）是否必须购买',
    description: '劳工补偿保险由各州规定，多数州要求有员工的雇主投保，加州要求所有有员工的雇主投保；德州等少数州允许私营雇主选择不投保。',
    keywords: ['劳工补偿保险', "workers' comp", '美国劳工险', '加州劳工保险'],
    answer: '由各州规定。多数州要求有员工的雇主投保，例如加州要求所有有员工的雇主投保；也有少数州允许私营雇主选择不参加，但需承担相应责任。各州规定见各州落地指南。',
    blocks: [
      {
        h: '为什么重要',
        p: ['未按规定投保可能面临罚款、停工令，并在员工工伤时承担全部赔偿责任。投保通常需要在首位员工入职前完成。'],
      },
      {
        h: '如何投保',
        p: ['可通过持牌保险经纪向保险公司投保，部分州由州基金承保；使用 PEO 时，劳工保险通常包含在 PEO 的方案中。'],
      },
    ],
    related: [R.hr, R.states],
    questions: ['first-us-employee', 'hire-employees-payroll'],
  },
  {
    slug: 'contractor-vs-employee',
    category: 'hr',
    q: '在美国用独立承包人（1099）还是员工（W-2）？',
    en: 'Independent contractor (1099) or employee (W-2)?',
    title: '1099 独立承包人还是 W-2 员工：美国用工认定',
    description: '美国区分员工与独立承包人，认定错误会带来补税、罚款与劳动法责任；加州采用较严格的 ABC 标准，用工模式应提前由劳动法律师确认。',
    keywords: ['1099 和 W-2 区别', '独立承包人认定', '加州 ABC 测试', '美国用工合规'],
    answer: '是否可以按独立承包人处理，不由合同名称决定，而由实际工作关系决定。认定错误可能导致补缴税款、罚款与劳动法责任。加州等州采用较严格的标准，建议在签约前由劳动法律师确认。',
    blocks: [
      {
        h: '常见判断因素',
        points: ['公司是否控制工作的方式与时间', '工作是否属于公司的主营业务', '对方是否独立经营、有其他客户', '由谁提供工具与承担经营风险'],
      },
      {
        h: '加州的特别之处',
        p: ['加州以 ABC 标准作为认定的一般规则，要求同时满足三项条件才能按独立承包人处理，很多在其他州常见的安排在加州并不适用。'],
      },
    ],
    related: [R.hr, R.legal, '/zh/states/california'],
    questions: ['first-us-employee'],
  },
  // —— 身份与移民 ——
  {
    slug: 'eb1c-requirements',
    category: 'immigration',
    q: 'EB-1C 的基本条件是什么？',
    en: 'What are the basic requirements for EB-1C?',
    title: 'EB-1C 基本条件：跨国公司经理或高管移民',
    description: 'EB-1C 基本条件：过去 3 年内在海外关联公司担任高管或经理满 1 年；美国公司与海外公司存在关联关系且已运营满 1 年；赴美后继续担任管理职位。',
    keywords: ['EB-1C 条件', 'EB-1C 要求', '跨国高管移民条件', 'EB1C'],
    answer: '申请人在过去 3 年内，于海外关联公司担任高管或经理满 1 年；美国公司与海外公司存在母子、分支或关联关系，且已运营满 1 年；赴美后继续担任管理职位。',
    blocks: [
      {
        h: '三方面同时成立',
        table: {
          head: ['方面', '需要证明'],
          rows: [
            ['申请人', '过去 3 年内在海外关联公司担任经理或高管满 1 年'],
            ['公司关系', '美国公司与海外公司存在母子、分支或关联关系'],
            ['美国公司', '已运营满 1 年，职位为管理或高管职位'],
          ],
        },
      },
      {
        h: '可以提前做的准备',
        p: ['海外企业保留任职、组织架构与管理职能的证明；美国公司从设立起保留经营记录、组织架构与雇佣资料。可以先做三分钟自测，看看目前处于哪个阶段。'],
      },
    ],
    related: [R.eb1c, R.status, R.l1a],
    questions: ['eb1c-vs-l1a', 'eb1c-company-size', 'eb1c-process'],
    sources: [USCIS_EB1],
  },
  {
    slug: 'eb1c-vs-l1a',
    category: 'immigration',
    q: 'EB-1C 和 L-1A 有什么区别？',
    en: 'EB-1C vs L-1A: what is the difference?',
    title: 'EB-1C 与 L-1A 的区别：绿卡与工作签证',
    description: 'L-1A 是非移民工作签证，新设公司首次批 1 年；EB-1C 直接申请绿卡，且无需劳工证。两者常组合使用：先以 L-1A 派驻，再申请 EB-1C。',
    keywords: ['EB-1C 和 L-1A 区别', 'L-1A 转 EB-1C', 'L1A EB1C', '跨国经理人签证'],
    answer: 'L-1A 是非移民工作签证，新设公司首次批 1 年；EB-1C 直接申请绿卡，且无需劳工证。企业主常见的做法是先以 L-1A 派驻美国，待美国公司运营满 1 年后再申请 EB-1C。',
    blocks: [
      {
        h: '对比',
        table: {
          head: ['比较项', 'L-1A', 'EB-1C'],
          rows: [
            ['类别', '非移民工作签证', '职业移民第一优先（绿卡）'],
            ['美国公司要求', '可为新设办公室', '需已运营满 1 年'],
            ['首次期限', '新办公室最长 1 年', '不适用'],
            ['劳工证', '不需要', '不需要'],
          ],
        },
      },
    ],
    related: [R.l1a, R.eb1c],
    questions: ['eb1c-requirements', 'l1a-new-office', 'eb1c-process'],
    sources: [USCIS_L1A, USCIS_EB1],
  },
  {
    slug: 'l1a-new-office',
    category: 'immigration',
    q: 'L-1A 新办公室需要准备什么？',
    en: 'What does an L-1A new office petition require?',
    title: 'L-1A 新办公室：场地、经营计划与续签准备',
    description: 'L-1A 新办公室申请需已取得经营场地，并证明一年内可支撑管理职位；首次批准期最长 1 年，续签时会审查实际经营与组织架构。',
    keywords: ['L-1A 新办公室', 'L1A new office', 'L-1A 续签', 'L-1A 场地要求'],
    answer: '除了海外任职与公司关联关系外，新办公室申请需要证明美国公司已取得足够的经营场地，并且经营计划能在一年内支撑经理或高管职位。首次批准期最长 1 年，续签时会审查这一年的实际经营。',
    blocks: [
      {
        h: '落地准备',
        points: ['签订商业租约', '完成公司设立、EIN 与银行开户', '资金到位并有记录', '制定组织架构与招聘计划', '准备第一年的经营计划'],
      },
      {
        h: '续签时看什么',
        p: ['移民局会关注美国公司是否真实经营、是否按计划招聘、申请人是否主要从事管理工作。经营记录要从第一天开始积累，这也是之后申请 EB-1C 的基础。'],
      },
    ],
    related: [R.l1a, R.formation, R.legal],
    questions: ['eb1c-vs-l1a', 'eb1c-company-size'],
    sources: [USCIS_L1A],
  },
  {
    slug: 'eb1c-company-size',
    category: 'immigration',
    q: '美国新公司需要雇佣多少人才能办 EB-1C？',
    en: 'How many employees does the US company need for EB-1C?',
    title: 'EB-1C 美国公司需要多大规模、雇多少人',
    description: '法规未设 EB-1C 美国公司的最低雇员人数或投资金额，但须证明组织架构足以支撑管理职位，且业务真实运营。',
    keywords: ['EB-1C 公司规模', 'EB-1C 雇员人数', '美国新公司需要雇佣多少人', 'EB-1C 美国公司要求'],
    answer: '法规未设最低雇员人数或投资金额，但须证明组织架构足以支撑管理职位，且业务真实运营。',
    blocks: [
      {
        h: '移民局关注什么',
        points: ['申请人是否主要从事管理或高管职能，而不是亲自执行日常业务', '是否有下属员工或职能部门承担日常工作', '公司的人员配置是否与其业务阶段相称', '经营是否真实、持续'],
      },
      {
        h: '企业侧的安排',
        p: ['人员规模与组织架构需要与业务计划相匹配，并能被工资记录、合同与经营资料证明。我们把招聘、工资与经营记录的安排与身份申请的时间表对齐。'],
      },
    ],
    related: [R.eb1c, R.hr],
    questions: ['eb1c-requirements', 'l1a-new-office'],
    sources: [USCIS_EB1],
  },
  {
    slug: 'eb1c-family',
    category: 'immigration',
    q: 'EB-1C 配偶和子女能否同时获得绿卡？',
    en: 'Can my spouse and children get green cards with EB-1C?',
    title: 'EB-1C 配偶与子女随行：未满 21 岁未婚子女',
    description: 'EB-1C 申请人的配偶及未满 21 岁的未婚子女可作为随行家属一同申请；子女年龄临近 21 岁时，应尽早规划时间表并由律师评估年龄保护。',
    keywords: ['EB-1C 配偶子女', 'EB-1C 随行家属', '子女 21 岁 绿卡', 'CSPA'],
    answer: '可以。配偶及未满 21 岁的未婚子女可作为随行家属一同申请。',
    blocks: [
      {
        h: '子女年龄需要提前规划',
        p: ['子女的年龄在什么时点计算、能否受到《儿童身份保护法》（CSPA）的保护，涉及具体计算，应由移民律师评估。子女年龄接近 21 岁的家庭，应尽早排定时间表。'],
      },
    ],
    related: [R.eb1c, R.status],
    questions: ['eb1c-requirements', 'eb1c-visa-bulletin'],
  },
  {
    slug: 'eb1c-visa-bulletin',
    category: 'immigration',
    q: 'EB-1C 需要排期吗？',
    en: 'Is there a wait (priority date) for EB-1C?',
    title: 'EB-1C 排期：中国大陆出生申请人如何看签证公告',
    description: 'EB-1C 属职业移民第一优先，中国大陆出生的申请人须按每月签证公告排期，以当期公布为准。',
    keywords: ['EB-1C 排期', '签证公告', 'EB-1 中国排期', 'visa bulletin'],
    answer: '属职业移民第一优先，中国大陆出生的申请人须按每月签证公告排期，以当期公布为准。',
    blocks: [
      {
        h: '如何看签证公告',
        p: ['签证公告按出生地与类别列出“最终行动日期”与“递交申请日期”。申请人的优先日早于当期日期时，才可以进入下一步。排期会随每月公告变动，规划时应预留余地。'],
      },
    ],
    related: [R.eb1c, R.status],
    questions: ['eb1c-process', 'eb1c-family'],
    sources: [VISA_BULLETIN],
  },
  {
    slug: 'eb1c-process',
    category: 'immigration',
    q: 'EB-1C 完整流程有哪些关键节点？',
    en: 'What are the key milestones in the EB-1C process?',
    title: 'EB-1C 完整流程与关键节点',
    description: 'EB-1C 关键节点：设立美国公司，通常先以 L-1A 过渡；美国公司运营满 1 年后递交 I-140；获批且排期到达后，在美国境内调整身份或赴领馆面签。',
    keywords: ['EB-1C 流程', 'EB-1C 时间线', 'I-140 EB-1C', 'EB-1C 关键节点'],
    answer: '设立美国公司，通常先以 L-1A 过渡；美国公司运营满 1 年后递交 I-140；获批且排期到达后，在美国境内调整身份或赴领馆面签。',
    blocks: [
      {
        h: '节点与企业侧准备',
        table: {
          head: ['节点', '企业侧准备'],
          rows: [
            ['设立美国公司', '实体、EIN、银行账户、场地'],
            ['L-1A 过渡', '经营计划、组织架构、招聘'],
            ['运营满 1 年', '经营记录、工资记录、财务报表'],
            ['递交 I-140', '组织架构、职位说明、公司关系证明'],
            ['排期到达后', '调整身份或领馆面签'],
          ],
        },
      },
    ],
    related: [R.eb1c, R.l1a, R.ops],
    questions: ['eb1c-requirements', 'eb1c-vs-l1a', 'eb1c-visa-bulletin'],
    sources: [USCIS_EB1],
  },
  {
    slug: 'eb5-vs-eb1c',
    category: 'immigration',
    q: 'EB-5 和 EB-1C 哪个好？如何选择？',
    en: 'EB-5 or EB-1C: which is better?',
    title: 'EB-5 与 EB-1C 如何选择：条件、资金与周期比较',
    description: 'EB-5 以投资与就业创造为基础，EB-1C 以跨国公司管理职位为基础；两者在申请条件、资金要求与周期上差异明显，适合的人群不同。',
    keywords: ['EB-5 和 EB-1C 哪个好', 'EB-5 EB-1C 比较', '投资移民还是跨国高管', 'EB-5 投资金额'],
    answer: '两者在申请条件、资金要求与周期上差异明显。已有真实经营的海外企业、并计划在美国设立关联公司的企业主，通常先评估 EB-1C；不具备跨国任职条件、资金来源清晰的家庭，可以评估 EB-5。具体申请策略由合作移民律师出具。',
    blocks: [
      {
        h: '对比',
        table: {
          head: ['比较项', 'EB-5', 'EB-1C'],
          rows: [
            ['基础', '投资与就业创造', '跨国公司的管理职位'],
            ['资金', '一般 105 万美元，目标就业区 80 万美元（以移民局公布为准）', '无法定投资金额'],
            ['关键证明', '合法资金来源、就业创造', '海外任职、公司关联、美国公司经营'],
          ],
        },
        note: 'EB-5 项目涉及证券投资，投资建议由持牌顾问提供。',
      },
    ],
    related: ['/zh/eb5', R.eb1c, R.status],
    questions: ['eb1c-requirements'],
  },
  // —— 资产、税务与保险 ——
  {
    slug: 'pre-immigration-tax-planning',
    category: 'planning',
    q: '移民美国前，资产和税务怎么规划？',
    en: 'How should I plan assets and taxes before immigrating to the US?',
    title: '移民前的资产与税务规划：时间窗口与注意事项',
    description: '成为美国税务居民后通常需就全球收入申报纳税并申报境外资产；身份变化前梳理资产、确认时间窗口，由 CPA 与律师出具意见。',
    keywords: ['移民前税务规划', '移民美国资产规划', '美国税务居民', '境外资产申报'],
    answer: '美国税务居民一般需要就全球收入申报纳税，并申报境外金融账户与特定境外资产。很多安排只能在身份变化之前完成，因此应在取得绿卡或开始长期居住之前，与 CPA 一起梳理资产并确认时间窗口。',
    blocks: [
      {
        h: '身份变化前要梳理的内容',
        points: ['企业股权与分红安排', '房产与其取得成本', '金融账户与投资', '保单与受益人', '家庭成员之间的赠与与借款'],
      },
      {
        h: '分工',
        p: ['税务意见由 CPA 出具，信托与传承架构由律师设计，投资建议由持牌顾问提供。我们负责统筹时间表与材料，确保在身份变化前完成需要提前处理的事项。'],
      },
    ],
    related: [R.planning, R.trust, R.status],
    questions: ['non-resident-life-insurance', 'eb5-vs-eb1c'],
  },
  {
    slug: 'non-resident-life-insurance',
    category: 'planning',
    q: '非美国居民可以购买美国人寿保险吗？',
    en: 'Can non-US residents buy US life insurance?',
    title: '非美国居民购买美国人寿保险：条件与核保',
    description: '部分保险公司在投保人满足其对签证、在美关联及资产等条件时接受投保，最终以核保结果为准；保单由持牌保险机构签发。',
    keywords: ['非美国居民人寿保险', '外国人买美国保险', '美国人寿保险中文咨询', '美国保险核保'],
    answer: '部分保险公司在投保人满足其对签证、在美关联及资产等条件时接受投保，最终以核保结果为准。我们协助评估可行性并比较方案，保单由持牌保险机构签发。',
    blocks: [
      {
        h: '保险公司通常关注',
        points: ['投保人与美国的关联：资产、企业、家庭成员或签证', '财务状况与保额的合理性', '健康状况与体检', '居住国与旅行情况'],
      },
      {
        h: '与家庭规划的关系',
        p: ['人寿保险常与信托、传承与移民前规划一起考虑。保单的持有人与受益人安排会带来不同的税务后果，应与 CPA 和律师确认。'],
      },
    ],
    related: [R.planning, R.trust],
    questions: ['pre-immigration-tax-planning'],
  },
  {
    slug: 'amazon-product-liability-insurance',
    category: 'planning',
    q: '亚马逊要求产品责任险怎么办？',
    en: 'Amazon requires product liability insurance. What should I do?',
    title: '亚马逊产品责任险：投保要点与 COI 出具',
    description: '亚马逊对达到一定销售额的卖家要求购买商业综合责任险并提交保险证明（COI）；保额、附加被保险人与出具时效的常见要求，以亚马逊最新政策为准。',
    keywords: ['亚马逊产品责任险', '亚马逊保险要求', 'COI 保险证明', '跨境卖家保险'],
    answer: '亚马逊对达到一定销售额的卖家要求购买商业综合责任险（含产品责任），并在卖家后台提交保险证明（COI）。具体销售额门槛、保额与条款要求以亚马逊卖家中心的最新政策为准（待确认）。',
    blocks: [
      {
        h: '投保时要核对的内容',
        points: ['保额是否满足平台要求', '是否将平台列为附加被保险人', '承保地域与产品类别', '保单生效日期与平台提交时限', '保险公司评级'],
      },
      {
        h: '时间紧迫时',
        p: ['平台通知通常有提交期限。收到通知后应尽快整理产品清单、销售数据与公司资料，通过持牌保险经纪询价。保单由持牌保险机构签发。'],
      },
    ],
    related: [R.urgent, R.business],
    questions: ['sales-tax-for-cross-border-sellers'],
  },
];

export const QUESTION_BY_SLUG = Object.fromEntries(QUESTIONS.map((q) => [q.slug, q]));
