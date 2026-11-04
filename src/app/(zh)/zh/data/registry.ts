import { R } from '../content';
import { QUESTIONS } from './questions';
import { SERVICES_DATA } from './services';
import { STATES } from './states';

/** 全站中文页面清单：路径 → 显示名称。用于内链、面包屑与站点地图。 */
const STATIC: Record<string, string> = {
  [R.home]: '首页',
  [R.about]: '关于我们',
  [R.faq]: '常见问题',
  [R.urgent]: '紧急事项',
  [R.states]: '各州落地指南',
};

const NAMES: Record<string, string> = {
  ...STATIC,
  ...Object.fromEntries(SERVICES_DATA.map((s) => [`/zh/${s.slug}`, s.name])),
  ...Object.fromEntries(STATES.map((s) => [`/zh/states/${s.slug}`, `${s.name}落地指南`])),
  ...Object.fromEntries(QUESTIONS.map((q) => [`/zh/faq/${q.slug}`, q.q])),
};

export function pageName(path: string) {
  const name = NAMES[path];
  if (!name) throw new Error(`中文站内链指向不存在的页面：${path}`);
  return name;
}

export const ZH_PATHS = Object.keys(NAMES);
