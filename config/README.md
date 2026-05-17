# 网站配置文件说明

本目录用于存放网站相关配置文件。

## 建议文件清单

- `site-config.json`    — 网站全局配置（标题、描述、联系方式等）
- `nav.json`            — 导航栏链接配置（方便动态生成）
- `seo.json`            — SEO 相关配置（keywords、description）

---

## site-config.json 示例

```json
{
  "siteTitle": "我的网站",
  "siteDescription": "简单 · 高效 · 优雅",
  "author": "Your Name",
  "email": "your@email.com",
  "wechat": "your_wechat_id",
  "github": "https://github.com/yourusername",
  "year": 2026
}
```

## nav.json 示例

```json
[
  { "label": "首页", "href": "../index.html" },
  { "label": "关于", "href": "about.html" },
  { "label": "服务", "href": "services.html" },
  { "label": "联系", "href": "contact.html" }
]
```

> 本网站当前为纯静态 HTML，无需后端。
> 如需接入后端，可在此目录添加服务端配置文件（如 `api-config.js`、`.env` 等）。
