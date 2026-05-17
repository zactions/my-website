# 🚀 网站免费部署指南

## 方案一：GitHub Pages（推荐，最稳定）

### 你需要做的（总共约 5 分钟）

#### 第 1 步：注册 GitHub 账号（2 分钟）
1. 打开 https://github.com
2. 点击右上角 **Sign up**
3. 输入邮箱、密码、用户名（用户名将成为你网址的一部分）
4. 验证邮箱

#### 第 2 步：创建仓库（1 分钟）
1. 登录后点击左上角 **New** 或右上角 **+ → New repository**
2. **Repository name** 填：`my-website`（或你喜欢的名字）
3. 选择 **Public**（公开，免费）
4. 勾选 **Add a README file**
5. 点击 **Create repository**

#### 第 3 步：上传网站文件（1 分钟）
1. 进入刚创建的仓库页面
2. 点击 **Add file → Upload files**
3. 把 `web1.0_deploy.zip` 里的所有文件拖进去（或点击选择文件）
   - 注意：不要上传 zip 文件本身，要解压后上传里面的文件
4. 点击 **Commit changes**

#### 第 4 步：开启 GitHub Pages（1 分钟）
1. 仓库页面点击 **Settings**（顶部标签）
2. 左侧菜单点击 **Pages**
3. **Source** 选择 **Deploy from a branch**
4. **Branch** 选择 **main**，文件夹选 **/(root)**
5. 点击 **Save**
6. 等待 1-2 分钟，页面上方会显示绿色提示：
   ```
   Your site is live at https://你的用户名.github.io/my-website/
   ```

### ✅ 你的网址
```
https://你的用户名.github.io/my-website/
```

**示例：** 如果你的 GitHub 用户名是 `zhangsan`，仓库名是 `my-website`，则网址为：
```
https://zhangsan.github.io/my-website/
```

---

## 方案二：Vercel（国内访问更快）

### 你需要做的（总共约 3 分钟）

#### 第 1 步：注册 Vercel（1 分钟）
1. 打开 https://vercel.com
2. 点击 **Sign Up**
3. 选择 **Continue with GitHub**（用 GitHub 账号登录）

#### 第 2 步：部署网站（2 分钟）
1. 登录后点击 **Add New... → Project**
2. 如果你已经把代码推到了 GitHub，直接选择对应的仓库
3. 点击 **Deploy**
4. 等待 30 秒，Vercel 会给你一个网址：
   ```
   https://my-website-你的用户名.vercel.app
   ```

**或者不用 GitHub，直接拖拽上传：**
1. 打开 https://vercel.com/new
2. 选择 **Import Git Repository** 下方的 **Upload** 选项
3. 把 `web1.0_deploy.zip` 解压后的文件夹拖进去
4. 点击 **Deploy**

---

## 🔍 让百度搜到你的网站

1. 打开 https://ziyuan.baidu.com/
2. 登录百度账号
3. 点击 **站点管理 → 添加网站**
4. 输入你的网址（如 `https://zhangsan.github.io/my-website/`）
5. 验证网站所有权（按提示操作）
6. 验证通过后，点击 **链接提交 → 手动提交**
7. 输入你的网址，点击 **提交**

> 百度收录需要时间（通常几天到几周），请耐心等待。

---

## 📁 文件说明

| 文件 | 说明 |
|---|---|
| `index.html` | 首页 |
| `css/style.css` | 样式文件 |
| `js/main.js` | 交互脚本 |
| `pages/about.html` | 关于我页面 |
| `pages/services.html` | 服务页面 |
| `pages/contact.html` | 联系页面 |
| `sitemap.xml` | 站点地图（帮助搜索引擎收录） |
| `robots.txt` | 搜索引擎爬虫规则 |
| `README.md` | 项目说明 |

---

## ❓ 常见问题

**Q: 网址能改吗？**
A: 可以。GitHub Pages 的网址是 `用户名.github.io/仓库名`，改仓库名就能改网址。也可以绑定自己的域名（需要购买）。

**Q: 网站内容怎么修改？**
A: 在 GitHub 仓库里直接编辑文件，或本地修改后重新上传。

**Q: 手机能打开吗？**
A: 能。网站已经是响应式设计，手机、平板、电脑都能正常显示。

**Q: 会收费吗？**
A: 不会。GitHub Pages 和 Vercel 免费版完全免费，无广告。

**Q: 网站会掉线吗？**
A: 不会。只要 GitHub/Vercel 服务正常运行，你的网站就一直在。

---

**遇到任何问题，把截图发给我，我一步步教你！**
