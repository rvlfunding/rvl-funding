import { R } from '../content';
import type { StateData } from '../types';

/** 加州、特拉华、德州、纽约州。数据于 2026-11-04 在各州政府网站核对。 */
export const STATES_A: StateData[] = [
  {
    slug: 'california',
    name: '加州',
    en: 'California',
    abbr: 'CA',
    title: '加州公司注册与落地指南：800 美元税、年报、销售税与用工',
    h1: '加州公司注册与落地指南',
    description:
      '在加州注册或经营公司：LLC 70 美元、公司 100 美元的注册费，每年最低 800 美元税，州信息声明，7.25% 销售税基础税率，EDD 雇主登记、SDI 与劳工补偿保险要求。',
    keywords: ['加州注册公司', '加州 LLC', '加州公司年费', '加州 800 美元税', '加州雇主登记', '洛杉矶注册公司'],
    lead: '加州是华人企业家最集中的州之一，也是对企业要求最细的州之一。在加州注册或经营的公司，每年都有最低 800 美元的税，雇佣员工后还有一整套州级登记与预扣要求。',
    fit: '业务、员工、仓库或门店在加州，或主要面向加州与美国西海岸客户；团队计划常驻洛杉矶、湾区等地。',
    checked: '2026 年 11 月 4 日',
    facts: [
      { k: 'LLC 注册费', v: 'Articles of Organization，70 美元', src: 1 },
      { k: '公司注册费', v: 'Articles of Incorporation（一般股份公司），100 美元', src: 2 },
      { k: '信息声明（Statement of Information）', v: 'LLC 20 美元，成立后 90 日内，之后每两年一次；公司 25 美元，成立后 90 日内，之后每年一次', src: 1 },
      { k: '年度税', v: 'LLC 每年 800 美元，另按加州总收入缴纳 LLC 费用（25 万美元以上为 900 美元至 11,790 美元）；公司特许经营税率 8.84%，最低 800 美元', src: 3 },
      { k: '首年豁免', v: '经州务卿注册或登记的公司，第一个纳税年度不适用最低特许经营税；LLC 的首年豁免仅适用于 2021 至 2023 纳税年度，已过期', src: 3 },
      { k: '销售税', v: '州基础税率 7.25%，地方另加；远程卖家上一或当年在加州销售额超过 50 万美元需登记', src: 4 },
      { k: '雇主登记', v: '单季支付工资超过 100 美元后 15 日内向 EDD 登记', src: 5 },
      { k: '员工预扣', v: '2026 年州残疾保险（SDI）员工预扣 1.3%，无工资上限', src: 6 },
      { k: '劳工补偿保险', v: '有一名员工即须投保', src: 7 },
      { k: '最低工资', v: '2026 年全州 16.90 美元 / 小时，部分城市与县更高', src: 8 },
    ],
    blocks: [
      {
        h: '在加州设立公司',
        p: [
          '加州的成立文件在州务卿的 bizfile Online 提交。成立后 90 日内需要提交第一份信息声明，之后 LLC 每两年、公司每年提交一次。州务卿曾提醒企业警惕冒充政府催缴信息声明费用的信件，收到时应核对来源。',
          '在特拉华或其他州注册、但在加州经营的公司，通常需要在加州办理外州登记，同样适用加州的年度税与信息声明。',
        ],
      },
      {
        h: '800 美元与 LLC 费用',
        p: [
          'LLC 只要在加州登记，无论是否经营，每年都要缴纳 800 美元年度税，直到正式注销；加州总收入达到 25 万美元以上时，还要另缴 LLC 费用。很多网上资料仍写着 LLC 首年免缴 800 美元，这项豁免只适用于 2021 至 2023 纳税年度，现已过期。',
        ],
      },
      {
        h: '雇佣员工',
        points: [
          '在 EDD 登记雇主账户，办理州所得税预扣、失业保险、就业培训税与 SDI',
          '2026 年新雇主失业保险费率 3.4%，应税工资上限每人 7,000 美元',
          '有员工即须投保劳工补偿保险',
          '执行全州及所在城市的最低工资、加班与带薪病假规定',
          '独立承包人认定采用较严格的 ABC 标准，签约前确认用工模式',
        ],
      },
      {
        h: '本地落地的现实情况',
        p: [
          '洛杉矶港是西半球最繁忙的集装箱港口之一，中国是其最主要的贸易伙伴，许多跨境卖家把仓储与物流放在南加州。我们的团队位于洛杉矶，南加州客户可预约面谈，需到场办理的开户、签署与公证可在当地协助安排。',
        ],
      },
    ],
    faqs: [
      { q: '在特拉华注册、在加州经营，还要交 800 美元吗？', a: '通常要。在加州经营的外州公司需要在加州登记，并适用加州的年度税与信息声明要求。' },
      { q: '加州 LLC 第一年免 800 美元吗？', a: '目前不免。LLC 的首年豁免只适用于 2021 至 2023 纳税年度；公司（Corporation）在第一个纳税年度不适用最低特许经营税。' },
    ],
    sources: [
      { label: 'California Secretary of State：LLC forms and fees', url: 'https://www.sos.ca.gov/business-programs/cannabizfile/cannabis-forms-and-fees/limited-liability-companies-llc-california' },
      { label: 'California Secretary of State：Corporation forms and fees', url: 'https://www.sos.ca.gov/business-programs/cannabizfile/cannabis-forms-and-fees/corporations-and-cooperatives-california' },
      { label: 'California FTB：Limited liability company', url: 'https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html' },
      { label: 'CDTFA：Wayfair general information', url: 'https://cdtfa.ca.gov/industry/wayfair/general-information.htm' },
      { label: 'California EDD：Register as an employer', url: 'https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/' },
      { label: 'California EDD：Rates and withholding', url: 'https://edd.ca.gov/en/payroll_taxes/rates_and_withholding/' },
      { label: "California DIR：Workers' compensation for employers", url: 'https://www.dir.ca.gov/dwc/employer.htm' },
      { label: 'California DIR：2026 minimum wage announcement', url: 'https://www.dir.ca.gov/DIRNews/2025/2025-118.html' },
    ],
    related: [R.la, R.formation, R.tax, R.hr],
    questions: ['california-800-franchise-tax', 'contractor-vs-employee', 'which-state-to-incorporate', 'first-us-employee'],
  },
  {
    slug: 'delaware',
    name: '特拉华州',
    en: 'Delaware',
    abbr: 'DE',
    title: '特拉华公司注册指南：注册费、特许经营税与年报',
    h1: '特拉华公司注册指南',
    description:
      '在特拉华注册公司：LLC 110 美元、公司最低 109 美元的注册费，LLC 年度税 400 美元，公司特许经营税与 3 月 1 日年报，注册代理人要求，以及在其他州经营时的外州登记。',
    keywords: ['特拉华注册公司', '特拉华 LLC', '特拉华公司年费', '特拉华特许经营税', 'Delaware 公司'],
    lead: '特拉华是美国最常见的公司注册地，因为它的公司法与法院在投资人中认可度高。但特拉华是“注册地”，不是“经营地”，在其他州经营仍需当地登记并承担当地税费。',
    fit: '计划引入风险投资或机构投资、需要标准化股权结构的公司；实际经营地另在他州时，应同时规划外州登记。',
    checked: '2026 年 11 月 4 日',
    facts: [
      { k: 'LLC 注册费', v: 'Certificate of Formation，110 美元', src: 1 },
      { k: '公司注册费', v: 'Certificate of Incorporation，最低 109 美元，按授权股本计算', src: 1 },
      { k: 'LLC 年度税', v: '400 美元，每年 6 月 1 日前缴纳；逾期罚款 200 美元并按月计息 1.5%', src: 2 },
      { k: '公司特许经营税', v: '授权股份法最低 175 美元，或假定面值资本法最低 400 美元，每年 3 月 1 日前缴纳', src: 2 },
      { k: '公司年报', v: '年度特许经营税报告，3 月 1 日前提交，申报费 50 美元', src: 3 },
      { k: '销售税', v: '无州及地方销售税；在特拉华销售商品或提供服务需缴纳毛收入税（0.0945% 至 1.9914%）', src: 4 },
      { k: '注册代理人', v: '必须在特拉华有实际街道地址的注册代理人', src: 5 },
      { k: '劳工补偿保险', v: '几乎所有有员工的雇主都须在首位员工入职前投保', src: 6 },
      { k: '最低工资', v: '15.00 美元 / 小时', src: 7 },
    ],
    blocks: [
      {
        h: '为什么选择特拉华',
        p: [
          '特拉华州公司司官方年报显示，州内注册的法律实体超过 210 万个，财富 500 强中约三分之二在特拉华注册。投资人熟悉特拉华的公司法，这是它最主要的优势。',
        ],
      },
      {
        h: '2026 年的费用变化',
        p: [
          '特拉华于 2026 年通过立法，把 LLC、有限合伙与普通合伙的年度税由 300 美元调整为 400 美元，相关条款自 2026 年 1 月 1 日起生效。部分州政府页面与网上资料仍写着 300 美元，首次按 400 美元缴纳的年度，请以特拉华公司司的最新说明为准。',
        ],
        note: '首次按 400 美元缴纳的具体年度待确认。',
      },
      {
        h: '在其他州经营时',
        p: [
          '特拉华公司在加州、纽约等州有办公室、员工或库存时，通常需要在当地办理外州登记，缴纳当地的年度税费并提交年报。只为“省钱”而选择特拉华，往往会同时承担两个州的费用。',
        ],
      },
    ],
    faqs: [
      { q: '特拉华公司每年最少要交多少？', a: 'LLC 每年年度税 400 美元；公司按授权股份法计算的特许经营税最低 175 美元，另加 50 美元年报申报费，注册代理人费用另计。' },
      { q: '特拉华有销售税吗？', a: '没有销售税，但在特拉华销售商品或提供服务需缴纳毛收入税。在其他州的销售，按当地规定处理。' },
    ],
    sources: [
      { label: 'Delaware Division of Corporations：Fee schedule (Aug 2026)', url: 'https://corpfiles.delaware.gov/Fee_Schedule/AugustFee2026.pdf' },
      { label: 'Delaware Division of Corporations：Alternative entity tax instructions', url: 'https://corp.delaware.gov/alt-entitytaxinstructions/' },
      { label: 'Delaware Division of Corporations：Franchise taxes', url: 'https://corp.delaware.gov/frtax/' },
      { label: 'Delaware Division of Revenue：Gross receipts taxes', url: 'https://revenue.delaware.gov/business-tax-forms/doing-business-in-delaware/step-4-gross-receipts-taxes/' },
      { label: 'Delaware Division of Corporations：How to form a new business entity', url: 'https://corp.delaware.gov/howtoform/' },
      { label: "Delaware Office of Workers' Compensation：Required coverage", url: 'https://industrialaffairs.delaware.gov/en/knowledgebase-employer/which-employers-are-legally-required-to-carry-workers-compensation-insurance-in-delaware' },
      { label: 'Delaware Office of Labor Law Enforcement：Minimum wage', url: 'https://industrialaffairs.delaware.gov/en-us/knowledgebase-employee/what-is-the-current-minimum-wage-in-delaware' },
    ],
    related: [R.formation, R.tax, '/zh/states/california', '/zh/states/wyoming'],
    questions: ['which-state-to-incorporate', 'llc-or-c-corp', 'registered-agent'],
  },
  {
    slug: 'texas',
    name: '德州',
    en: 'Texas',
    abbr: 'TX',
    title: '德州公司注册与落地指南：特许经营税、销售税与用工',
    h1: '德州公司注册与落地指南',
    description:
      '在德州注册或经营公司：LLC 与公司注册费均为 300 美元，特许经营税 265 万美元免税门槛，6.25% 州销售税，无州个人所得税，劳工补偿保险对多数私营雇主为自愿。',
    keywords: ['德州注册公司', '德州 LLC', '德州特许经营税', '休斯顿公司注册', '德州销售税'],
    lead: '德州没有州个人所得税，特许经营税对多数中小企业设有较高的免税门槛，是制造、物流与能源相关企业常见的落地州。',
    fit: '制造、仓储物流、能源与贸易相关业务；计划在休斯顿、达拉斯或奥斯汀设立运营或区域中心。',
    checked: '2026 年 11 月 4 日',
    facts: [
      { k: 'LLC 注册费', v: 'Certificate of Formation（Form 205），300 美元', src: 1 },
      { k: '公司注册费', v: 'Certificate of Formation（Form 201），300 美元', src: 2 },
      { k: '年度申报', v: '向州审计长提交特许经营税报告及公开信息报告，每年 5 月 15 日前', src: 3 },
      { k: '特许经营税', v: '2026 与 2027 年度报告的免税门槛为年化总收入 265 万美元；税率 0.375%（零售批发）或 0.75%（其他）', src: 3 },
      { k: '州个人所得税', v: '无', src: 3 },
      { k: '销售税', v: '州税率 6.25%，地方最多另加 2%；远程卖家过去 12 个月在德州收入达 50 万美元需登记', src: 4 },
      { k: '失业保险', v: '单季工资达 1,500 美元等情形下向德州劳动力委员会登记，10 日内完成', src: 5 },
      { k: '劳工补偿保险', v: '多数私营雇主可选择不投保（non-subscriber）', src: 6 },
      { k: '最低工资', v: '7.25 美元 / 小时（采用联邦标准）', src: 5 },
    ],
    blocks: [
      {
        h: '在德州设立公司',
        p: [
          '德州的 LLC 与公司都通过州务卿提交 Certificate of Formation，费用均为 300 美元。公司必须指定德州的注册代理人与注册办公地址，不能使用邮政信箱，公司自身也不能担任自己的代理人。',
        ],
      },
      {
        h: '特许经营税：门槛之下也要申报',
        p: [
          '年化总收入不超过 265 万美元的企业不需缴纳特许经营税，但仍需每年提交公开信息报告或所有权信息报告。漏报会影响公司的良好存续状态。',
        ],
      },
      {
        h: '劳工补偿保险的特殊之处',
        p: [
          '德州是少数允许多数私营雇主不参加劳工补偿保险的州。选择不参加的雇主在员工工伤诉讼中会失去部分法律保护，并需履行通知义务。是否参加，应结合行业风险与客户合同要求决定。',
        ],
        note: '不参加时的通知义务细节待确认，以德州保险局规定为准。',
      },
    ],
    faqs: [
      { q: '德州公司收入很低，还要报特许经营税吗？', a: '需要提交报告。收入在免税门槛以下时无需缴税，但仍需提交公开信息报告或所有权信息报告。' },
      { q: '德州雇主必须买劳工险吗？', a: '多数私营雇主可以选择不买，但选择不参加有法律后果与通知义务，且客户合同可能要求投保。' },
    ],
    sources: [
      { label: 'Texas Secretary of State：Form 205 instructions', url: 'https://www.sos.state.tx.us/corp/instructions/205.shtml' },
      { label: 'Texas Secretary of State：Form 201 instructions', url: 'https://www.sos.state.tx.us/corp/instructions/201.shtml' },
      { label: 'Texas Comptroller：Franchise tax', url: 'https://comptroller.texas.gov/taxes/franchise/' },
      { label: 'Texas Comptroller：Remote sellers', url: 'https://comptroller.texas.gov/taxes/sales/remote-sellers.php' },
      { label: 'Texas Workforce Commission：Determine tax account', url: 'https://www.twc.texas.gov/programs/unemployment-tax/determine-tax-account' },
      { label: "Texas Department of Insurance：Workers' compensation coverage", url: 'https://www.tdi.texas.gov/wc/employer/coverage.html' },
    ],
    related: [R.formation, R.tax, R.hr, '/zh/states/california'],
    questions: ['workers-comp-insurance', 'sales-tax-for-cross-border-sellers', 'which-state-to-incorporate'],
  },
  {
    slug: 'new-york',
    name: '纽约州',
    en: 'New York',
    abbr: 'NY',
    title: '纽约州公司注册与落地指南：LLC 登报、税费与用工',
    h1: '纽约州公司注册与落地指南',
    description:
      '在纽约州注册或经营公司：LLC 200 美元、公司 125 美元的注册费，LLC 成立 120 日内登报公告，每两年 9 美元申报，4% 州销售税，劳工补偿、残疾保险与带薪家庭假要求。',
    keywords: ['纽约注册公司', '纽约 LLC', '纽约 LLC 登报', '法拉盛公司注册', '纽约雇主要求'],
    lead: '纽约是华人企业与金融、贸易、餐饮业务的重要集中地。纽约州对 LLC 有独特的登报公告要求，对雇主则要求劳工补偿、残疾保险与带薪家庭假三项同时具备。',
    fit: '面向美东市场、金融与专业服务、贸易与零售；团队计划在纽约市或周边常驻。',
    checked: '2026 年 11 月 4 日',
    facts: [
      { k: 'LLC 注册费', v: 'Articles of Organization，200 美元', src: 1 },
      { k: '公司注册费', v: 'Certificate of Incorporation，125 美元（另有股本税，待确认）', src: 2, tbd: true },
      { k: 'LLC 登报公告', v: '成立后 120 日内，在县书记员指定的两家报纸连续刊登六周，再提交公告证明（50 美元）', src: 1 },
      { k: '定期申报', v: '每两年提交 Biennial Statement，9 美元', src: 3 },
      { k: '公司税', v: '一般税率 6.5%，营业所得超过 500 万美元为 7.25%；按纽约收入计算固定最低税 25 美元起', src: 4 },
      { k: 'LLC 年费', v: '按纽约来源收入缴纳 25 美元至 4,500 美元（IT-204-LL）', src: 5 },
      { k: '销售税', v: '州税率 4%，加地方税；远程卖家需同时满足销售额超过 50 万美元且超过 100 笔', src: 6 },
      { k: '雇主保险', v: '劳工补偿保险、残疾保险（DBL）与带薪家庭假均为强制', src: 7 },
      { k: '最低工资', v: '2026 年纽约市、长岛与威彻斯特 17.00 美元 / 小时，州内其他地区 16.00 美元', src: 8 },
    ],
    blocks: [
      {
        h: 'LLC 的登报公告',
        p: [
          '纽约州要求新成立的 LLC 在 120 日内完成登报公告，未完成的 LLC 会被暂停在纽约开展业务的权限。纽约市的指定报纸刊登费用可能较高，应在预算中预留。',
        ],
      },
      {
        h: '2026 年起的受益所有人披露',
        p: [
          '纽约州《LLC 透明法》自 2026 年 1 月 1 日起生效。州务院页面说明，依外国法律成立并获准在纽约经营的 LLC，需要提交受益所有人披露或豁免声明。对在纽约成立的 LLC 如何适用、期限与罚则，以州务院与律师的意见为准。',
        ],
        note: '适用范围与期限待确认。',
      },
      {
        h: '雇佣员工',
        points: [
          '通过 NYS-100 一次登记失业保险与预扣税账户',
          '投保劳工补偿保险、残疾保险（DBL）与带薪家庭假',
          '按地区执行最低工资，纽约市另有地方规定',
          '纽约市另有地方营业税，需单独评估',
        ],
      },
      {
        h: '本地落地的现实情况',
        p: [
          '纽约市政府资料显示，2019 年纽约市约有 41.8 万名中国移民，皇后区法拉盛人数最多，其次为布鲁克林的本森赫斯特、曼哈顿华埠与日落公园。面向华人社区的零售与服务业务，选址与用工都需结合这些社区的特点。',
        ],
      },
    ],
    faqs: [
      { q: '纽约 LLC 不登报会怎样？', a: '未在 120 日内完成登报并提交证明的 LLC，在纽约开展业务的权限会被暂停，直到补办完成。' },
      { q: '在纽约雇一名员工，需要买哪些保险？', a: '劳工补偿保险、残疾保险（DBL）与带薪家庭假三项都需要具备。' },
    ],
    sources: [
      { label: 'New York Department of State：Forming an LLC', url: 'https://dos.ny.gov/forming-limited-liability-company-new-york' },
      { label: 'New York Department of State：Forming a business corporation', url: 'https://dos.ny.gov/forming-business-corporation-new-york' },
      { label: 'New York Department of State：Biennial statements', url: 'https://dos.ny.gov/biennial-statements-business-corporations-and-limited-liability-companies' },
      { label: 'NYS Department of Taxation and Finance：CT-3 instructions', url: 'https://www.tax.ny.gov/forms/current-forms/ct/ct3i.htm' },
      { label: 'NYS Department of Taxation and Finance：LLC annual filing fee', url: 'https://www.tax.ny.gov/pit/efile/annual_filing_fee.htm' },
      { label: 'NYS Department of Taxation and Finance：Sales tax nexus', url: 'https://www.tax.ny.gov/pubs_and_bulls/publications/sales/nexus.htm' },
      { label: 'NYS Workers’ Compensation Board：Disability and PFL coverage', url: 'https://www.wcb.ny.gov/content/main/coverage-required-db.jsp' },
      { label: 'NYC Mayor’s Office of Immigrant Affairs：API immigrant population fact sheet', url: 'https://www.nyc.gov/assets/immigrants/downloads/pdf/Fact-Sheet-NYCs-API-Immigrant-Population.pdf' },
    ],
    related: [R.formation, R.hr, R.tax, '/zh/states/new-jersey'],
    questions: ['first-us-employee', 'workers-comp-insurance', 'boi-reporting'],
  },
];
