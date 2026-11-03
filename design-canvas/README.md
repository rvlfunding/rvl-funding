# design-canvas · rvlfunding.com 画板源文件

Claude Design（设计画板）用的源文件。每个 `project/*.dc.html` 是网站一页的完整渲染（HTML + 全站 CSS 内联），可直接作为画板导入或作为重新设计的底稿。

| 文件 | 对应网页 |
|---|---|
| Main.dc.html | / 首页 |
| Services.dc.html | /services 服务与价格 |
| About.dc.html | /about 关于 |
| Assessment.dc.html | /assessment 路径评估 |
| Contact.dc.html | /contact 联系 |
| Team-hr.dc.html | /team/hr 职能落地页示例 |

- 文案的唯一来源仍是 `src/lib/site-content.ts`、`src/lib/team-content.ts`、各 `src/app/**/page.tsx`。
- 样式来源：`src/app/globals.css`（品牌：navy #0a2540、green #15603b、金色仅 logo）。
- 画板上的改动不会自动回到代码；改完由 Claude 同步。
- 重新生成画板：本地起站后运行 `python3 scripts/make-canvas-boards.py`。
