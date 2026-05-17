# 我的网站

由 QClaw 整理生成的完整静态网站。

## 目录结构

```
D:\QClaw\website_complete\
├── index.html              # 首页
├── README.md              # 项目说明（本文件）
├── css\
│   └── style.css         # 全局样式
├── js\
│   └── main.js           # 交互脚本
├── images\               # 图片资源目录
│   └── README.txt        # 图片使用说明
├── pages\
│   ├── about.html        # 关于我
│   ├── services.html     # 服务内容
│   └── contact.html      # 联系我
└── config\               # 配置文件目录
    └── README.md         # 配置说明
```

## 本地预览

直接用浏览器打开 `index.html` 即可预览。

或用简易 HTTP 服务器：

```bash
# Python
cd D:\QClaw\website_complete
python -m http.server 8080

# Node.js
npx serve .
```

然后访问 `http://localhost:8080`

## 修改说明

- 修改文字内容：直接编辑对应 `.html` 文件
- 修改样式：编辑 `css/style.css`
- 修改交互：编辑 `js/main.js`
- 添加图片：放入 `images/` 目录，在 HTML 中引用

## 技术栈

- 纯 HTML5 + CSS3 + JavaScript（无框架依赖）
- 响应式设计，兼容手机/平板/电脑
- 渐变配色：#667eea → #764ba2

## 由 QClaw 搭建

所有文件归集于 `D:\QClaw\website_complete\`，完整无遗漏。
