# Yingshu Li · Academic Homepage

基于 Jekyll 的科研个人主页，发布到 https://yingshu-li.github.io/ 。

## 内容放在哪里

| 内容 | 位置 | 编辑方式 |
| --- | --- | --- |
| 姓名、邮箱、研究方向、About Me、学历、经历、奖项 | `data/profile.yml` | 修改对应字段；简介支持 HTML |
| 教学 | `data/teaching.yml` | 每门课程一个条目 |
| 学术服务、Workshop | `data/services.yml` | 名称、描述及可选日期 |
| 比赛 | `data/competition.yml` | 名称、成绩和年份 |
| 论文 | `_publications/YYYY/` | 按发表年份归类，每篇一个 Markdown 文件 |
| News | `_news/YYYY/` | 按动态日期年份归类，每条一个 Markdown 文件 |
| 博客 | `_posts/` | 新建 `YYYY-MM-DD-title.md` |
| 未发布博客 | `_drafts/` | 本地用 `--drafts` 预览 |
| 导航 | `data/navigation.yml` | 页面名称及网址 |
| 首页展示数量 | `data/display.yml` | 论文、最新动态和博客的展示数量 |

`_posts/` 和 `_drafts/` 可在需要时创建。不要将模板说明或示例文章作为正式内容发布。

## 添加论文

```yaml
---
title: "Paper title"
date: 2026-01-01
selected: true
pub: "Full venue name"
short_venue: "Venue"
pub_date: "2026"
authors:
  - "<strong>Yingshu Li</strong>"
  - "Coauthor"
links:
  Paper: https://example.org/paper
---
```

`selected` 控制是否参与首页筛选；首页先按发表年份，再按 `date` 倒序排列。全部论文页显示全部条目。没有正文链接时使用 `links: {}`，不要用会议主页代替论文链接。论文标题、作者、发表信息必须与原文一致。作者后的 `*` 表示共同贡献；`data/authors.yml` 可配置作者主页和姓名强调。

## 添加 News

```yaml
---
title: "Full announcement"
summary: "A concise announcement for the homepage."
date: 2026-01-01
---
```

`summary` 可省略，此时显示 `title`。两者支持 HTML。最新动态位于首页滚动区域，旧动态可通过 Earlier updates 展开。

## 写博客

```yaml
---
title: "Post title"
description: "A short description for the blog index."
---

Write the article in Markdown here.
```

发布后的路径为 `/blog/YYYY/MM/DD/title/`，博客列表和首页最新文章自动更新。图片建议按文章放入 `assets/images/posts/<slug>/`，正文使用从 `/assets/` 开始的路径。

## 代码与资源

- `index.html`、`publications.html`、`blog/index.html`、`404.html`：页面入口。
- `layouts/research.html`：全站框架；`layouts/post.html`：博客正文模板。
- `includes/research/`：论文、作者、动态、博客列表和背景信息组件。
- `assets/css/research.css`：白底学术风格、移动布局和滚动区域。
- `assets/js/copy-email.js`：邮箱复制、成功提示和手动复制回退。
- `assets/images/badges/self.jpg`：当前头像；同目录保留个人经历相关机构图标。
- `_config.yml`：Jekyll 集合和博客 URL 配置。

内容文件夹不会改变当前首页、论文页或博客入口的网址。`_site/` 是自动生成的输出，`vendor/`、`.bundle/` 和缓存是本地环境文件，不应手工维护或提交。

## 本地预览与发布

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4173
```

打开 http://127.0.0.1:4173/ 。修改 `_config.yml` 后需要重启服务。

提交前检查：

```sh
bundle exec jekyll build --strict_front_matter
git diff --check
```

确认页面后提交并推送 `main`，GitHub Pages 自动执行构建和部署。样式和脚本带构建版本号，避免更新后继续使用旧缓存。

## 清理记录与许可

已移除旧版 Bootstrap 布局和组件、Showcase 示例集合、演示图片和无效展示配置。个人内容保留在上述数据和集合中；历史版本可通过 Git 查看和恢复。

项目最初基于 [academic-homepage](https://github.com/luost26/academic-homepage)。保留原项目的 [MIT License](LICENSE) 及版权声明。

目录 `data/`、`includes/`、`layouts/` 已通过配置去除下划线。`_config.yml`、集合目录 `_publications/`、`_news/` 和博客目录 `_posts/`、`_drafts/` 保留 Jekyll 约定的名称；直接去掉前缀会导致配置或内容无法加载。
