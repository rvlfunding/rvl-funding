/**
 * 中文站全部共用文案与数据（首页、导航、页脚、常见问题、自测）。
 * 各服务页的文案在 pages.ts。改字只需改这两个文件。
 * 标有“待确认”的位置上线前需替换。
 */

export const SITE_URL = 'https://www.rvlfunding.com';
export const EMAIL = 'info@rvlfunding.com';

/** 中文站各页路径。 */
export const R = {
  home: '/zh',
  business: '/zh/us-business',
  formation: '/zh/us-company-formation',
  tax: '/zh/us-business-tax',
  banking: '/zh/us-business-banking',
  hr: '/zh/us-hr',
  peo: '/zh/us-peo',
  ops: '/zh/us-operations',
  status: '/zh/us-status',
  eb1c: '/zh/eb1c',
  l1a: '/zh/l1a',
  planning: '/zh/cross-border-planning',
  legal: '/zh/us-legal-compliance',
  trust: '/zh/us-trust',
  la: '/zh/los-angeles',
  states: '/zh/states',
  about: '/zh/about',
  faq: '/zh/faq',
  urgent: '/zh/urgent',
} as const;

/** 问题解答页路径。 */
export const Q = (slug: string) => `/zh/faq/${slug}`;

/** 预约入口。拿到正式预约链接（如日历页）后替换这些地址。 */
const mail = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
export const BOOKING = {
  assessment: mail('预约路径评估'),
  business: mail('预约美国落地诊断（企业版）'),
  family: mail('预约美国身份与家庭规划诊断（家庭版）'),
  monthly: mail('咨询月度陪跑服务'),
  project: mail('咨询全程项目管理'),
};

/** 社交媒体主页（待提供）。填入后图标自动链接，并写入结构化数据。 */
export const SOCIAL = {
  youtube: '',
  linkedin: '',
  facebook: '',
  x: '',
};

export const IMG = {
  hero: '/images/home-v2/la-night.jpg',
  /** 待确认：Ruby 要求更换或由她提供 */
  team: '/images/home-v2/team.jpg',
  family: '/images/home-v2/family.jpg',
  signing: '/images/home-v2/signing.jpg',
  advisors: '/images/home-v2/advisors.jpg',
  meeting: '/images/home-v2/meeting.jpg',
};

export const ALT = {
  hero: '洛杉矶市中心夜景，RVL 服务华人企业家美国落地',
  team: '高层办公室中的企业团队会议',
  family: '夕阳下走过木桥的两位家庭成员',
  signing: '签署商业文件',
  advisors: '两位顾问在办公室交谈',
  meeting: '俯瞰城市的现代会议室',
};

export const HOME_SEO = {
  title: '美国注册公司与落地运营｜华人企业家的加州本地团队｜RVL Funding',
  description:
    'RVL 为华人企业家统筹美国落地事务：公司设立、银行开户、人力资源、商业法咨询、工作签证和移民、资产与税务协调等。',
  keywords: [
    '美国注册公司',
    '美国公司注册',
    '中国企业美国落地',
    '洛杉矶中国企业落地顾问',
    '中国人注册美国公司',
    '美国公司银行开户',
    '美国公司报税',
    '美国首位员工雇佣',
    '美国 PEO 与 EOR',
    'EB-1C 跨国高管移民',
    'L-1A 新办公室',
    'EB-5 与 EB-1C 比较',
    '移民前资产与税务规划',
    '美国人寿保险中文咨询',
  ],
};

export const NAV = [
  { href: R.business, label: '企业落地' },
  { href: R.legal, label: '商业咨询' },
  { href: R.status, label: '身份与家庭' },
  { href: R.planning, label: '跨境资产' },
  { href: `${R.planning}#tax`, label: '税务优化' },
  { href: `${R.home}#pricing`, label: '收费标准' },
  { href: `${R.home}#insights`, label: '洞察' },
  { href: R.about, label: '关于我们' },
];

export const UTIL = { region: '加州 美国' };

export const HERO = {
  eyebrow: '美国落地统筹 · 职业移民规划',
  /** 待确认：文档中 SEO 一节写「跨国企业家的美国统筹人」，首屏一节写「您在美国的企业管家」，此处用较新的 SEO 一节 */
  titleLines: ['美国注册公司与落地运营', '华人企业家的加州本地团队'],
  sub: '公司注册、人力资源、工作签证，财务税务，按项目交付。',
  desc: '专属定制化对接律师、注册会计师与持牌顾问，将分散的专业服务纳入同一时间表与同一份行动清单，确保每一关键节点有人负责、按期完成。',
  ctaBusiness: '预约企业诊断',
  ctaFamily: '预约家庭诊断',
  trust: ['首次会谈前签署保密协议', '客户资金不经由我方', '专业意见由持牌方出具'],
  cardTitle: '常见问题',
  card: [
    { q: '中国人如何注册美国公司？', href: Q('how-to-register-us-company') },
    { q: '如何开美国公司银行账户？', href: Q('us-bank-account-without-residency') },
    { q: '美国公司每年要报哪些税？', href: Q('annual-tax-filings') },
    { q: '美国新公司需要雇佣多少人？', href: Q('eb1c-company-size') },
  ],
};

/** 滚动条：每个词条都有专属页面。 */
export const MARQUEE = [
  { label: '公司注册', href: R.formation },
  { label: '公司报税', href: R.tax },
  { label: '银行开户', href: R.banking },
  { label: '人力外包', href: R.peo },
  { label: '跨国经理人', href: R.eb1c },
  { label: '移民前后资产与税务协调', href: R.planning },
  { label: '美国身份规划', href: R.status },
];

export const CLIENTS = {
  eyebrow: 'Clients',
  title: '两类客户，各有其关键路径',
  tabs: [
    {
      id: 'biz',
      label: '企业客户',
      image: IMG.team,
      imageAlt: ALT.team,
      heading: '已在或即将在美国开展业务的中国企业及跨境卖家',
      points: [
        '首位美国员工即将入职，薪酬、税务登记与劳工险尚未就绪',
        '美国公司银行开户受阻，影响收款与平台结算',
        '亚马逊等平台或渠道商要求出具产品责任险证明（COI）',
        '拟以 L-1A 新办公室派驻高管，需同步完成实体与经营安排',
      ],
      cta: '预约企业诊断',
      more: { href: R.business, label: '了解美国企业落地' },
    },
    {
      id: 'fam',
      label: '家庭客户',
      image: IMG.family,
      imageAlt: ALT.family,
      heading: '企业主及其家庭、高净值家庭',
      points: [
        '比较 EB-1A、EB-1C 等身份路径的申请条件、成本与周期',
        '取得身份前，梳理资产结构，并与 CPA 确认税务居民身份变化的影响',
        '评估家庭保障缺口，包括非美国居民的资产安排',
        '为子女教育与长期居留预先制定时间表',
      ],
      cta: '预约家庭诊断',
      more: { href: R.status, label: '了解移民与身份规划' },
    },
  ],
};

/** 三分钟自测：五道 EB-1C 硬性门槛题。 */
export const ASSESS = {
  eyebrow: 'Self-assessment',
  title: '三分钟自测：您目前处于哪个阶段？',
  lead: '五道是非题，对应跨国高管（EB-1C）路径的硬性门槛，答完即时显示建议的起点。',
  fine: '本自测仅用于判断服务起点，不构成法律、税务或投资意见；能否申请及申请策略，以移民律师的意见为准。',
  cta: '预约路径评估',
  questions: [
    { id: 'entity', text: '您在中国是否有企业？' },
    { id: 'revenue', text: '该企业近一年营业额是否超过人民币 3,000 万元？' },
    { id: 'tenure', text: '过去 3 年内，您是否在该企业连续担任高管或部门负责人满 1 年？' },
    { id: 'relation', text: '您是否已在美国设立（或计划设立）与该企业存在母子、分支或关联关系的公司？' },
    { id: 'child', text: '您的子女是否未满 19 岁？' },
  ],
  results: {
    empty: { title: '请先完成右侧题目', text: '回答“是”或“否”，全部作答后在此显示建议起点。' },
    progress: { title: '继续作答', text: '已回答 {n} / 5 题。' },
    ready: {
      title: '具备 EB-1C 跨国高管路径的基本条件',
      text: '海外企业、任职年限与关联公司三项基本条件均已具备。建议预约路径评估，由移民律师确认管理职能与美国公司运营情况是否达到申请标准。',
    },
    scale: {
      title: '基本条件具备，企业规模需重点评估',
      text: '任职与关联公司条件已具备，但企业营业额未达人民币 3,000 万元。建议在路径评估中重点论证企业规模与经营实质。',
    },
    gap: {
      title: '跨国高管路径尚有条件未满足',
      text: '您已有海外企业，但以下条件尚未满足。部分条件可通过提前安排任职与架构创造，建议尽早进行路径评估。',
    },
    noEntity: {
      title: '暂不具备跨国高管路径的前提',
      text: '该路径以海外企业为基础。可在路径评估中比较 EB-1A、NIW 等其他身份路径。',
    },
  },
  missing: {
    tenure: '须在过去 3 年内于海外企业连续担任高管或部门负责人满 1 年。',
    relation: '须在美国设立与海外企业存在母子、分支或关联关系的公司，且递交 EB-1C 前已运营满 1 年。',
  },
  childNote: '配偶及未满 21 岁的未婚子女可作为随行家属一同申请，建议尽早排定时间表。',
};

export const SERVICES = {
  eyebrow: 'Practice areas',
  title: '服务范围',
  lead: '六个业务板块覆盖企业落地与家庭规划的主要节点，可单项委托，也可纳入月度陪跑。',
  items: [
    { n: 'I', title: '美国企业落地', text: '实体设立、EIN 申请、银行开户、州税登记与合规日历。', more: '中国企业美国落地服务', href: R.business },
    { n: 'II', title: '人力资源', text: '薪酬与福利搭建、劳工保险、背景调查、员工手册、入离职文件。', more: '美国人力资源与 PEO', href: R.hr },
    { n: 'III', title: '项目统筹', text: '定制专属团队。', more: '美国落地项目统筹', href: R.ops },
    { n: 'IV', title: '移民与身份', text: 'L-1A、O-1、NIW、EB-1A、EB-1C、EB-2/3 路径比较。', more: '美国职业移民路径', href: R.status },
    { n: 'V', title: '资产与税务协调', text: '取得身份前的资产梳理，确认税务居民身份变化的影响。', more: '移民前后资产与税务规划', href: R.planning },
    { n: 'VI', title: '法律与合规', text: '合同租约，股权文件，劳动法合规，信托，公证。', more: '美国商业法律与合规', href: R.legal },
  ],
};

export const PROCESS = {
  eyebrow: 'Engagement',
  title: '服务流程',
  lead: '先以评估确定范围与优先级，再决定是否进入月度陪跑或全程项目管理。',
  steps: [
    { title: '初步沟通', when: '签署保密协议', text: '确认事项范围与参与方。' },
    { title: '诊断', when: '两次会议', text: '交付时间表、优先事项、责任方与 30 日行动清单。' },
    { title: '协调执行', when: '按月例会', text: '按月召开例会，维护合规日历，跟进薪酬、保险与 CPA 事项，每月出具一页式进展报告。' },
    { title: '年度服务', when: '按季度复盘', text: '90 日试行期满后转为年度服务，按季度复盘。' },
  ],
};

export const PRICING = {
  eyebrow: 'Fees',
  title: '收费标准',
  lead: '评估按次收费，陪跑按月收费，项目管理按约定范围收费；费用在签约前书面确认。',
  plans: [
    {
      type: '按次',
      title: '路径评估',
      price: '300',
      unit: '美元起',
      points: ['一次会议', '一份书面评估报告'],
      cta: '预约路径评估',
      href: BOOKING.assessment,
      featured: false,
    },
    {
      type: '按月',
      title: '月度陪跑',
      price: '2,500',
      unit: '美元起',
      points: ['合规日历', '经营记录', '申报和材料提前通知'],
      cta: '咨询月度陪跑',
      href: BOOKING.monthly,
      featured: true,
    },
    {
      type: '按项目',
      title: '全程项目管理',
      price: '300,000',
      unit: '美元',
      points: ['月度陪跑全部内容', '商业计划书', '签证申请 / 延期资料搜集等'],
      cta: '咨询全程项目管理',
      href: BOOKING.project,
      featured: false,
    },
  ],
  fees: '员工薪酬及第三方审计、公证、政府费用实报实销；律师费由客户直接支付予律师事务所。',
};

export const NETWORK = {
  eyebrow: 'Advisory network',
  title: '专业协作网络',
  lead: '每一项需要执照的意见，均由相应持牌专业人士出具；我们负责统筹、排期与执行跟进。',
  roles: [
    { role: '移民律师', scope: '身份申请策略、申请文件与递交' },
    { role: '商业法律师', scope: '实体设立、合同审阅与用工合规' },
    { role: '注册会计师（CPA）', scope: '税务申报与税务居民身份规划' },
    { role: '持牌投资顾问', scope: '证券与投资建议' },
    { role: 'PEO 服务商', scope: '薪酬发放、福利管理与雇主责任' },
    { role: '保险公司', scope: '承保、保单签发与理赔' },
  ],
  principlesTitle: '执业原则',
  principles: [
    { title: '不经手资金', text: '客户资金仅在客户、公司或信托账户之间流转。' },
    { title: '保密先行', text: '首次会谈前签署保密协议。' },
    { title: '分级授权', text: '按事项授予查阅与代办权限，可随时收回。' },
    { title: '案例匿名', text: '对外分享的案例均经脱敏处理。' },
  ],
};

export const TEAM = {
  eyebrow: 'Team',
  title: '团队',
  lead: '中美两地经验，兼具企业经营与家庭决策的双重视角。',
  more: { href: R.about, label: '关于我们' },
};

export const INSIGHTS = {
  eyebrow: 'Insights',
  title: '洞察',
  allLabel: '查看全部常见问题',
  allHref: R.faq,
  posts: [
    { cat: '企业落地', title: '中国公司进入美国市场，第一步是什么', text: '实体、银行、税务登记与用工的先后顺序，以及常见的返工成本。', kind: '落地指南', href: Q('first-step-entering-us-market') },
    { cat: '用工', title: '美国第一位员工下月入职：需要提前完成的事项', text: '州雇主登记、薪酬系统、劳工补偿保险与入职文件的时间安排。', kind: '清单', href: Q('first-us-employee') },
    { cat: '用工', title: '美国 PEO 与 EOR：适用场景与成本比较', text: '两种模式在雇主责任、实体要求与费用结构上的差异。', kind: '比较', href: Q('peo-vs-eor') },
    { cat: '企业落地', title: '美国公司银行开户被拒：常见原因与应对', text: '股权结构、经营实质与资金来源材料如何准备。', kind: '应对', href: Q('bank-account-rejected') },
    { cat: '商业保险', title: '亚马逊要求产品责任险：投保要点与 COI 出具', text: '保额、附加被保险人与出具时效的常见要求。', kind: '投保', href: Q('amazon-product-liability-insurance') },
    { cat: '家庭规划', title: '移民前的资产与税务规划：时间窗口与注意事项', text: '税务居民身份变化前后，需与 CPA 提前确认的事项。', kind: '规划', href: Q('pre-immigration-tax-planning') },
  ],
};

export type FaqItem = { q: string; a: string; en?: string };

/** 全站常见问题，按主题分组。各页按需引用，/zh/faq 汇总全部。 */
export const FAQS: Record<'business' | 'hr' | 'eb1c' | 'status' | 'planning' | 'general', { title: string; items: FaqItem[] }> = {
  business: {
    title: '公司注册、银行开户与报税',
    items: [
      {
        q: '中国人如何注册美国公司？选 LLC 还是 C-Corp？',
        en: 'How to register a US company as a Chinese founder: LLC or C-Corp?',
        a: '非美国居民可以直接在美国注册公司，无需美国身份。LLC 结构灵活，可选择税务处理方式；C-Corp 便于引入投资与设计股权，也更常用于需要清晰组织架构的跨国经营。注册州通常在实际经营所在州（如加州）与特拉华州之间比较。公司形式与税务处理建议与 CPA 共同确认。',
      },
      {
        q: '没有美国身份，如何开美国公司银行账户？',
        en: 'How to open a US business bank account without US residency?',
        a: '非美国居民可以为美国公司开立银行账户。多数银行要求提供公司注册文件、EIN、股东及董事身份证明、股权结构说明与经营实质材料，部分银行要求签字人本人到场。我们协助梳理材料，并对接适合跨境企业的银行渠道。',
      },
      {
        q: '美国公司每年要报哪些税？如何合规避免罚款？',
        en: 'What US business taxes must I file each year to stay compliant?',
        a: '常见义务包括联邦所得税申报（C-Corp 为 Form 1120）、外资持股达 25% 的公司或外资单一成员 LLC 的 Form 5472 信息申报、州所得税或特许经营税（加州公司及 LLC 每年最低 800 美元），以及有员工时的工资税申报。逾期或漏报可能产生罚款，具体申报义务由 CPA 确认，我们将各项截止日排入合规日历。',
      },
      {
        q: '美国公司如何雇人、办工资和员工保险？',
        en: "How to hire employees, run payroll and get workers' comp in the US?",
        a: '首次雇佣前，通常需完成州雇主登记、设置工资系统、准备入职文件，并按州法律购买劳工补偿保险（加州要求有员工的雇主投保）。尚未建立人事体系的企业，可先通过 PEO 合规用工。',
      },
      {
        q: '美国公司银行开户被拒怎么办？',
        a: '常见原因包括股权结构说明不足、经营实质与资金来源材料欠缺。我们协助梳理材料，并对接适合跨境企业的银行渠道。',
      },
    ],
  },
  hr: {
    title: '用工与人力资源',
    items: [
      {
        q: 'PEO 与 EOR 有何区别？',
        a: 'PEO 与您已设立的美国公司共同承担雇主职责；EOR 以自身名义雇佣员工，多用于尚未设立美国实体的阶段。选择取决于实体安排、员工人数与长期规划。',
      },
      {
        q: '首位美国员工入职前需要完成什么？',
        a: '通常包括州雇主登记、薪酬系统、劳工补偿保险、入职文件与福利方案。诊断会将以上事项排入时间表并指定责任方。',
      },
    ],
  },
  eb1c: {
    title: 'EB-1C 关键节点',
    items: [
      {
        q: 'EB-1C 的基本条件是什么？',
        a: '申请人在过去 3 年内，于海外关联公司担任高管或经理满 1 年；美国公司与海外公司存在母子、分支或关联关系，且已运营满 1 年；赴美后继续担任管理职位。',
      },
      {
        q: 'EB-1C 和 L-1A 有什么区别？',
        a: 'L-1A 是非移民工作签证，新设公司首次批 1 年；EB-1C 直接申请绿卡，且无需劳工证。',
      },
      {
        q: '美国公司需要多大规模？',
        a: '法规未设最低雇员人数或投资金额，但须证明组织架构足以支撑管理职位，且业务真实运营。',
      },
      {
        q: '配偶和子女能否同时获得绿卡？',
        a: '配偶及未满 21 岁的未婚子女可作为随行家属一同申请。',
      },
      {
        q: 'EB-1C 需要排期吗？',
        a: '属职业移民第一优先，中国大陆出生的申请人须按每月签证公告排期，以当期公布为准。',
      },
      {
        q: '完整流程有哪些关键节点？',
        a: '设立美国公司，通常先以 L-1A 过渡；美国公司运营满 1 年后递交 I-140；获批且排期到达后，在美国境内调整身份或赴领馆面签。',
      },
    ],
  },
  status: {
    title: '身份路径',
    items: [
      {
        q: 'EB-5 与 EB-1C 如何选择？',
        a: '两者在申请条件、资金要求与周期上差异明显。我们在诊断中比较两条路径的适用性，具体申请策略由合作移民律师出具。',
      },
    ],
  },
  planning: {
    title: '资产、税务与保险',
    items: [
      {
        q: '非美国居民可以购买美国人寿保险吗？',
        a: '部分保险公司在投保人满足其对签证、在美关联及资产等条件时接受投保，最终以核保结果为准。我们协助评估可行性并比较方案。',
      },
    ],
  },
  general: {
    title: '服务与收费',
    items: [
      {
        q: '诊断费可以抵扣吗？',
        a: '企业版诊断完成后 30 日内签约月度服务，诊断费可从后续费用中抵扣。',
      },
      {
        q: '你们是否提供法律或税务意见？',
        a: '不提供。法律意见由合作律师提供，证券投资建议由持牌顾问提供，税务意见由 CPA 提供；我们负责统筹与执行跟进。',
      },
      {
        q: '服务哪些地区？',
        a: '团队位于洛杉矶南加州，服务全球华语企业家与家庭；以视频会议为主，南加州客户可预约面谈。',
      },
    ],
  },
};

/** 首页常见问题：取各组代表性问题。 */
export const HOME_FAQ = {
  eyebrow: 'FAQ',
  title: '常见问题',
  lead: '如事项已临近截止日，请直接预约诊断，并在预约时注明截止日期。',
  items: [
    FAQS.planning.items[0],
    FAQS.status.items[0],
    FAQS.hr.items[0],
    FAQS.hr.items[1],
    FAQS.business.items[4],
    ...FAQS.general.items,
  ],
};

export const CTA = {
  title: '先诊断，再决定是否委托',
  text: '两次会议，一份时间表与 30 日行动清单；是否继续委托，由您决定。',
};

export const FOOTER = {
  tagline: '跨国企业家的美国统筹人。',
  location: '17800 Castleton St, City of Industry, CA 91748',
  columns: [
    {
      title: '服务',
      links: [
        { href: R.business, label: '企业落地' },
        { href: R.trust, label: '信托设立' },
        { href: R.status, label: '身份规划' },
        { href: R.tax, label: '公司报税' },
        { href: R.planning, label: '资产配置' },
      ],
    },
    {
      title: '资源',
      links: [
        { href: `${R.home}#insights`, label: '洞察' },
        { href: R.faq, label: '常见问题' },
        { href: R.urgent, label: '紧急事项' },
        { href: R.ops, label: '企业顾问' },
        { href: R.states, label: '各州落地指南' },
      ],
    },
    {
      title: '公司',
      links: [
        { href: R.about, label: '关于我们' },
        { href: `${R.home}#pricing`, label: '收费标准' },
        { href: `${R.home}#cta`, label: '预约诊断' },
      ],
    },
  ],
  compliance:
    '本网站内容仅供一般信息参考，不构成法律、税务、投资或保险建议，亦不构成律师与客户关系。法律意见由合作律师提供，证券投资建议由持牌顾问提供，税务意见由 CPA 提供；具体事项以持牌专业人士的书面意见为准。',
  legal: '© 2026 RVL Funding',
};
