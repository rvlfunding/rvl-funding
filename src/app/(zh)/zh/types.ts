import type { FaqItem } from './content';

/** 正文段落块：一个 H2 加若干段落、要点或表格。 */
export type Block = {
  h: string;
  id?: string;
  p?: string[];
  points?: string[];
  table?: { head: string[]; rows: string[][] };
  note?: string;
};

export type Source = { label: string; url: string };

/** 服务页、移民路径页、地区页共用的数据结构。 */
export type ServiceData = {
  slug: string;
  kind: 'service' | 'route' | 'local';
  /** 面包屑与内链中显示的短名称。 */
  name: string;
  /** SEO 标题（不含品牌后缀）。 */
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  lead: string;
  image?: string;
  imageAlt?: string;
  /** schema.org serviceType。 */
  serviceType: string;
  blocks: Block[];
  faqs: FaqItem[];
  /** 相关页面路径。 */
  related: string[];
  /** 相关问题解答页 slug。 */
  questions: string[];
  /** 页面底部是否插入三分钟自测。 */
  assess?: boolean;
  cta?: { title: string; text: string };
};

export type StateData = {
  slug: string;
  name: string;
  en: string;
  abbr: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  lead: string;
  /** 一句话概括该州最适合的场景。 */
  fit: string;
  facts: Array<{ k: string; v: string; src?: number; tbd?: boolean }>;
  blocks: Block[];
  faqs: FaqItem[];
  sources: Source[];
  related: string[];
  questions: string[];
  /** 资料核对日期。 */
  checked: string;
};

export type QuestionData = {
  slug: string;
  category: 'company' | 'banking' | 'tax' | 'hr' | 'immigration' | 'planning';
  /** 页面 H1，即问题本身。 */
  q: string;
  /** 英文问题（双语检索）。 */
  en?: string;
  title: string;
  description: string;
  keywords: string[];
  /** 简短结论，显示在页首「简要回答」框。 */
  answer: string;
  blocks: Block[];
  faqs?: FaqItem[];
  related: string[];
  questions: string[];
  sources?: Source[];
};
