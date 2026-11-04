/**
 * 中文首页 v2 的全部文案与数据。
 * 改字只需改这个文件，组件会自动更新。标有 TBD 的位置是待确认内容，上线前需替换。
 */

export const SITE_URL = 'https://www.rvlfunding.com';
export const PAGE_PATH = '/zh';
export const EMAIL = 'info@rvlfunding.com';

/** 预约入口。拿到正式预约链接（如日历页）后替换这两个地址。 */
export const BOOKING = {
  business: `mailto:${EMAIL}?subject=${encodeURIComponent('预约美国落地诊断（企业版）')}`,
  family: `mailto:${EMAIL}?subject=${encodeURIComponent('预约美国身份与家庭规划诊断（家庭版）')}`,
};

/** 社交媒体主页。拿到正式地址后填入；留空的图标会指向页首。 */
export const SOCIAL = {
  youtube: '',
  linkedin: '',
  facebook: '',
  x: '',
};

export const IMG = {
  hero: '/images/home-v2/la-night.jpg',
  team: '/images/home-v2/team.jpg',
  family: '/images/home-v2/family.jpg',
  signing: '/images/home-v2/signing.jpg',
  advisors: '/images/home-v2/advisors.jpg',
  meeting: '/images/home-v2/meeting.jpg',
};

export const SEO = {
  title: '华人企业美国落地与家庭规划顾问｜洛杉矶｜RVL Funding',
  description:
    'RVL 为华人企业家统筹美国落地事务：公司设立与银行开户、首位员工雇佣、产品责任险与劳工险、身份项目协调、资产与税务协调及人寿保险。先诊断，后协调，按里程碑交付。',
  keywords: [
    '中国企业美国落地',
    '洛杉矶中国企业落地顾问',
    '美国首位员工雇佣',
    '美国 PEO',
    '产品责任险 COI',
    '亚马逊产品责任险',
    '劳工补偿保险',
    'L-1A 新办公室',
    'EB-5 与 EB-1C 比较',
    '移民前资产与税务规划',
    '非美国居民人寿保险',
    '美国人寿保险中文咨询',
  ],
};

export const NAV = [
  { href: '#services', label: '企业落地' },
  { href: '#services', label: '商业保险' },
  { href: '#clients', label: '身份与家庭' },
  { href: '#services', label: '跨境规划' },
  { href: '#services', label: '人寿保险' },
  { href: '#pricing', label: '收费标准' },
  { href: '#insights', label: '洞察' },
  { href: '#team', label: '关于我们' },
];

export const HERO = {
  eyebrow: '美国落地统筹 · 身份与家庭规划',
  titleLines: ['华人企业家的', '美国侧负责人'],
  sub: '公司落地、用工、保险与家庭身份，统一筹划，按里程碑交付。',
  desc: '我们以单一责任人对接合作律师、注册会计师与持牌顾问，将分散的专业服务纳入同一时间表与同一份行动清单，确保每一关键节点有人负责、按期完成。',
  ctaBusiness: '预约企业诊断',
  ctaFamily: '预约家庭诊断',
  trust: ['首次会谈前签署保密协议', '客户资金不经由我方', '专业意见由持牌方出具'],
  nodesTitle: '常见关键节点',
  nodes: [
    '首位美国员工入职前的薪酬、税务登记与劳工险',
    '美国公司银行账户开立',
    '平台要求的产品责任险与 COI',
    'L-1A 新办公室的实体与经营安排',
  ],
  nodesFoot: '任一节点临近截止日，建议先做诊断。',
};

export const MARQUEE = [
  '美国公司设立与银行开户',
  '首位员工雇佣与 PEO',
  '产品责任险与 COI',
  '劳工补偿保险',
  'L-1A 新办公室',
  'EB-5 与 EB-1C 路径比较',
  '移民前资产与税务协调',
  '人寿保险与年金',
  '洛杉矶 / 南加州',
];

export const CLIENTS = {
  eyebrow: 'Clients',
  title: '两类客户，各有其关键路径',
  tabs: [
    {
      id: 'biz',
      label: '企业客户',
      image: IMG.team,
      imageAlt: '高层办公室中的团队会议',
      heading: '已在或即将在美国开展业务的中国企业及跨境卖家',
      points: [
        '首位美国员工即将入职，薪酬、税务登记与劳工险尚未就绪',
        '美国公司银行开户受阻，影响收款与平台结算',
        '亚马逊等平台或渠道商要求出具产品责任险证明（COI）',
        '拟以 L-1A 新办公室派驻高管，需同步完成实体与经营安排',
      ],
      cta: '预约企业诊断',
    },
    {
      id: 'fam',
      label: '家庭客户',
      image: IMG.family,
      imageAlt: '夕阳下走过木桥的两人',
      heading: '企业主及其家庭、高净值家庭',
      points: [
        '比较 EB-5、EB-1C 等身份路径的申请条件、成本与周期',
        '取得身份前梳理资产结构，并与 CPA 确认税务居民身份变化的影响',
        '评估家庭保障缺口，包括非美国居民的人寿保险安排',
        '为子女教育与长期居留预先制定时间表',
      ],
      cta: '预约家庭诊断',
    },
  ],
};

export const ASSESS = {
  eyebrow: 'Self-assessment',
  title: '三分钟自测：您目前处于哪个阶段？',
  lead: '五道是非题，答完即时显示建议的服务起点。',
  fine: '本自测仅用于判断服务起点，不构成法律、税务或投资意见。',
  /** 前三题为企业类，后两题为家庭类。 */
  questions: [
    '未来 90 日内是否有美国员工入职，或已有员工但尚未建立合规薪酬？',
    '美国公司是否尚未开立可正常使用的银行账户？',
    '销售渠道是否要求您提供产品责任险或 COI？',
    '家庭成员是否计划在两年内申请美国身份？',
    '是否尚未与 CPA 讨论取得身份前后的税务影响？',
  ],
  results: {
    empty: { title: '请先完成右侧题目', text: '回答“是”或“否”，结果会在此处更新。' },
    both: {
      title: '先做企业版诊断，家庭事项同步排期',
      text: '企业端存在临近节点，建议先完成美国落地诊断（企业版），并将身份与家庭事项纳入同一时间表。',
    },
    business: { title: '美国落地诊断（企业版）', text: '两次会议，交付时间表、优先事项、责任方与 30 日行动清单。' },
    family: { title: '美国身份与家庭规划诊断（家庭版）', text: '比较身份路径，整理律师与 CPA 问题清单，评估家庭保障缺口。' },
    partial: { title: '继续作答', text: '已回答 {n} / 5 题。' },
    none: { title: '暂无紧迫节点', text: '可先阅读洞察文章；如情况变化，再预约诊断。' },
  },
};

export const SERVICES = {
  eyebrow: 'Practice areas',
  title: '服务范围',
  lead: '六个业务板块覆盖企业落地与家庭规划的主要节点，可单项委托，也可纳入月度协调。',
  items: [
    { n: 'I', title: '美国企业落地', text: '实体设立、EIN 申请、银行开户、州税登记与合规日历。', more: '中国企业美国落地服务' },
    { n: 'II', title: '首位员工与用工', text: 'PEO 与 EOR 方案比较、薪酬与福利搭建、劳工补偿保险。', more: '美国首位员工雇佣服务' },
    { n: 'III', title: '商业保险', text: '产品责任险、一般责任险与劳工险的方案比较、投保协调及 COI 出具。', more: '产品责任险与 COI' },
    { n: 'IV', title: '身份项目协调', text: 'L-1A、EB-1C、EB-5 路径比较，配合合作移民律师管理材料与时间表。', more: 'EB-5 与 EB-1C 比较' },
    { n: 'V', title: '资产与税务协调', text: '取得身份前的资产梳理，与 CPA 共同确认税务居民身份变化的影响。', more: '移民前资产与税务规划' },
    { n: 'VI', title: '人寿保险与年金', text: '家庭保障规划，含非美国居民投保可行性评估。', more: '美国人寿保险中文咨询' },
  ],
};

export const PROCESS = {
  eyebrow: 'Engagement',
  title: '服务流程',
  lead: '先以诊断确定范围与优先级，再决定是否进入月度协调。',
  steps: [
    { title: '初步沟通', when: '签署保密协议', text: '确认事项范围、参与方与时间要求。' },
    { title: '诊断', when: '两次会议', text: '交付时间表、优先事项、责任方与 30 日行动清单。' },
    { title: '协调执行', when: '90 日试行', text: '月度例会，维护合规日历，跟进薪酬、保险与 CPA 事项，每月出具一页式进展报告。' },
    { title: '年度服务', when: '按季度复盘', text: '试行期满后转为年度服务，按季度检视进度与风险。' },
  ],
};

export const PRICING = {
  eyebrow: 'Fees',
  title: '收费标准',
  lead: '诊断按次收费，协调按月收费；费用与工时上限在签约前书面确认。',
  plans: [
    {
      type: '诊断 · 企业版',
      title: '美国落地诊断',
      price: '1,500–3,000',
      unit: '美元 / 次',
      note: '30 日内签约后续服务可抵扣',
      points: ['两次会议', '时间表与优先事项', '责任方与 30 日行动清单'],
      cta: '预约企业诊断',
      href: 'business' as const,
      featured: false,
    },
    {
      type: '诊断 · 家庭版',
      title: '美国身份与家庭规划诊断',
      price: '1,500–3,000',
      unit: '美元 / 次',
      note: '一次性收费',
      points: ['身份路径比较', '律师与 CPA 问题清单', '家庭保障缺口评估'],
      cta: '预约家庭诊断',
      href: 'family' as const,
      featured: false,
    },
    {
      type: '月费 · 基础版',
      title: '落地协调月费',
      price: '2,000–3,500',
      unit: '美元 / 月',
      note: '每月约 8 小时；90 日试行后转年度',
      points: ['月度例会与合规日历', '薪酬、保险与 CPA 跟进', '一页式月度报告'],
      cta: '咨询月度服务',
      href: 'business' as const,
      featured: true,
    },
    {
      type: '月费 · 完整版',
      title: '美国侧负责人月费',
      price: '5,000–10,000',
      unit: '美元 / 月',
      note: '每月约 20 小时',
      points: ['基础版全部内容', 'PEO 用工与身份项目协调', '季度复盘'],
      cta: '咨询月度服务',
      href: 'business' as const,
      featured: false,
    },
  ],
  fees: '员工薪酬及第三方费用另计；律师费由客户直接支付予律师事务所；保险产品由保险公司按规定支付佣金。',
};

export const NETWORK = {
  eyebrow: 'Advisory network',
  title: '专业协作网络',
  lead: '每一项需要执照的意见，均由相应持牌专业人士出具；我们负责统筹、排期与执行跟进。',
  roles: [
    { role: '合作移民律师', scope: '身份申请策略、申请文件与递交' },
    { role: '公司与雇佣律师', scope: '实体设立、合同审阅与用工合规' },
    { role: '注册会计师 CPA', scope: '税务申报与税务居民身份规划' },
    { role: '持牌投资顾问', scope: '证券与投资建议' },
    { role: 'PEO 服务商', scope: '薪酬发放、福利管理与雇主责任' },
    { role: '保险公司', scope: '承保、保单签发与理赔' },
  ],
  fine: '合作机构名称与资质于签署保密协议后提供',
  fineTbd: '待确认',
  principlesTitle: '执业原则',
  principles: [
    { title: '不经手资金', text: '客户资金仅在客户、保险公司或律师信托账户之间流转。' },
    { title: '保密先行', text: '首次会谈前签署保密协议。' },
    { title: '分级授权', text: '按事项授予查阅与代办权限，可随时收回。' },
    { title: '案例匿名', text: '对外分享的案例均经脱敏处理。' },
  ],
};

export const TEAM = {
  eyebrow: 'Team',
  title: '团队',
  lead: '中美两地经验，兼具企业经营与家庭决策的双重视角。',
  /** tbd 有值时显示虚线待确认标签；placeholder 为 true 时头像显示“照片”占位。 */
  people: [
    {
      initial: 'R',
      name: 'Ruby',
      role: '创始合伙人',
      bio: '十余年中美贸易经验；持牌人寿保险与产品责任险经纪人；曾随企业经历从 9 人至 40 人的扩张。',
      tbd: '措辞待确认',
      placeholder: false,
    },
    { initial: 'Z', name: 'Zena', role: '合伙人', bio: '职责与简介', tbd: '待确认', placeholder: false },
    { initial: '照片', name: '客户经理', role: '岗位', bio: '姓名与简介', tbd: '待确认', placeholder: true },
    { initial: '照片', name: '运营协调', role: '岗位', bio: '姓名与简介', tbd: '待确认', placeholder: true },
  ],
  photoAlt: '办公室中的团队会议',
};

export const INSIGHTS = {
  eyebrow: 'Insights',
  title: '洞察',
  allLabel: '查看全部文章',
  allHref: '/insights',
  /** href 为空的文章尚无独立页面，链接暂指向本区块。 */
  posts: [
    { cat: '企业落地', title: '中国公司进入美国市场，第一步是什么', text: '实体、银行、税务登记与用工的先后顺序，以及常见的返工成本。', kind: '落地指南', href: '' },
    { cat: '用工', title: '美国第一位员工下月入职：需要提前完成的事项', text: '州雇主登记、薪酬系统、劳工补偿保险与入职文件的时间安排。', kind: '清单', href: '' },
    { cat: '用工', title: '美国 PEO 与 EOR：适用场景与成本比较', text: '两种模式在雇主责任、实体要求与费用结构上的差异。', kind: '比较', href: '' },
    { cat: '企业落地', title: '美国公司银行开户被拒：常见原因与应对', text: '股权结构、经营实质与资金来源材料如何准备。', kind: '应对', href: '' },
    { cat: '商业保险', title: '亚马逊要求产品责任险：投保要点与 COI 出具', text: '保额、附加被保险人与出具时效的常见要求。', kind: '投保', href: '' },
    { cat: '家庭规划', title: '移民前的资产与税务规划：时间窗口与注意事项', text: '税务居民身份变化前后，需与 CPA 提前确认的事项。', kind: '规划', href: '' },
  ],
};

export const FAQ = {
  eyebrow: 'FAQ',
  title: '常见问题',
  lead: '如事项已临近截止日，请直接预约诊断，并在预约时注明截止日期。',
  items: [
    { q: '非美国居民可以购买美国人寿保险吗？', a: '部分保险公司在投保人满足其对签证、在美关联及资产等条件时接受投保，最终以核保结果为准。我们协助评估可行性并比较方案。' },
    { q: 'EB-5 与 EB-1C 如何选择？', a: '两者在申请条件、资金要求与周期上差异明显。我们在诊断中比较两条路径的适用性，具体申请策略由合作移民律师出具。' },
    { q: 'PEO 与 EOR 有何区别？', a: 'PEO 与您已设立的美国公司共同承担雇主职责；EOR 以自身名义雇佣员工，多用于尚未设立美国实体的阶段。选择取决于实体安排、员工人数与长期规划。' },
    { q: '首位美国员工入职前需要完成什么？', a: '通常包括州雇主登记、薪酬系统、劳工补偿保险、入职文件与福利方案。诊断会将以上事项排入时间表并指定责任方。' },
    { q: '美国公司银行开户被拒怎么办？', a: '常见原因包括股权结构说明不足、经营实质与资金来源材料欠缺。我们协助梳理材料，并对接适合跨境企业的银行渠道。' },
    { q: '诊断费可以抵扣吗？', a: '企业版诊断完成后 30 日内签约月度服务，诊断费可从后续费用中抵扣。' },
    { q: '你们是否提供法律或税务意见？', a: '不提供。法律意见由合作律师提供，证券投资建议由持牌顾问提供，税务意见由 CPA 提供；我们负责统筹与执行跟进。' },
    { q: '服务哪些地区？', a: '团队位于洛杉矶南加州，服务全球华语企业家与家庭；以视频会议为主，南加州客户可预约面谈。' },
  ],
};

export const LOGOS = {
  rows: [
    { label: '媒体报道', slots: 6 },
    { label: '合作机构', slots: 6 },
  ],
  slotText: '待确认',
};

export const CTA = {
  title: '先诊断，再决定是否委托',
  text: '两次会议，一份时间表与 30 日行动清单；是否继续委托，由您决定。',
};

export const FOOTER = {
  tagline: '华人企业家的美国侧负责人。',
  location: '南加州 · 核桃市',
  columns: [
    {
      title: '服务',
      links: [
        { href: '#services', label: '企业落地' },
        { href: '#services', label: '商业保险' },
        { href: '#clients', label: '身份与家庭' },
        { href: '#services', label: '跨境规划' },
        { href: '#services', label: '人寿保险' },
      ],
    },
    {
      title: '资源',
      links: [
        { href: '#insights', label: '洞察' },
        { href: '#faq', label: '常见问题' },
        { href: '#faq', label: '紧急事项' },
        { href: '#services', label: '洛杉矶中国企业落地顾问' },
      ],
    },
    {
      title: '公司',
      links: [
        { href: '#team', label: '关于我们' },
        { href: '#pricing', label: '收费标准' },
        { href: '#cta', label: '预约诊断' },
      ],
    },
    {
      title: '自测',
      links: [
        { href: '#assess', label: '三分钟自测' },
        { href: '#process', label: '服务流程' },
        { href: '#principles', label: '执业原则' },
      ],
    },
  ],
  compliance: '法律意见由合作律师提供，证券投资建议由持牌顾问提供，税务意见由 CPA 提供。',
  legal: '保险业务由 RVL Insurance Solutions LLC 办理。© 2026 RVL Funding · 隐私政策 · 使用条款',
  credits: '图片：Unsplash（Henning Witzel、Marc Wieland、Felix Viray、Wavie Hu、Conikal、Scott Graham）',
};
