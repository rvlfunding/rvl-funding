# 中文首页 v2（/zh）

由首页 v2 稿（深蓝 #0B2340、深绿 #15603B）移植的 Next.js 页面，路径为 `/zh`。

## 改文案
所有文字、价格、团队、FAQ、文章、预约链接、社交媒体地址都在 `content.ts`，改这一个文件即可。

## 上线前需替换的内容（页面上以虚线“待确认”标出）
- 团队：Ruby 简介措辞、Zena 简介、客户经理与运营协调的姓名与照片
- 合作机构名称与资质说明
- 媒体报道与合作机构 Logo（各 6 个位置）
- `BOOKING`：目前是带主题的邮件链接，拿到预约日历地址后替换
- `SOCIAL`：YouTube、LinkedIn、Facebook、X 主页地址（填入后会自动写进结构化数据）
- 洞察文章：每篇的 `href` 为空时链接到本区块，文章页做好后填入

## 结构
- `../layout.tsx`：中文站独立根布局（lang="zh-Hans"），字体由 next/font 自托管（Noto Serif SC、Noto Sans SC、Cormorant Garamond）
- `page.tsx`：SEO 元数据（标题、描述、关键词、canonical、hreflang、Open Graph）与 JSON-LD（Organization、ProfessionalService、WebPage、BreadcrumbList、FAQPage）
- `_components/`：页眉、客户类型切换、三分钟自测为客户端组件，其余为服务端组件
- `home.css`：只在 /zh 加载，不影响英文页面
- 图片：`public/images/home-v2/`，均来自 Unsplash，署名在页脚

英文站点的页面已移入 `src/app/(site)/`（路由组，网址不变），以便中英文各用各的页眉页脚与样式。

## 本地预览
```
npm install
npm run dev
```
然后打开 http://localhost:3000/zh
