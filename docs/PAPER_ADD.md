新增 Paper 指南

下面是向本仓库添加一篇 paper（放在 `src/content/papers/`）时应遵循的最小规范与示例，方便被站点组件（`PaperCard.astro`）正确读取并渲染。

必备位置

- 文章文件放在：`src/content/papers/Your Paper Title.md`
- 封面/图片放在 `public/paper/...` 下（例如 `public/paper/metagpt/metagpt.jpg`），并在 frontmatter 中使用以 `/paper/...` 开头的路径。

Frontmatter 字段说明（支持的字段）

- title: string 或 object
  - 字符串示例：
    ```yaml
    title: 'My Paper Title'
    ```
  - 对象示例（推荐，可直接指定 title 的跳转链接）：
    ```yaml
    title:
      text: 'My Paper Title'
      url: 'https://arxiv.org/abs/xxxx.xxxxx'
    ```

- affiliations: 数组，显示作者/组织（可选）

  ```yaml
  affiliations:
    - 'University A'
    - 'Research Lab B'
  ```

- image: 图片路径

  ```yaml
  image: '/paper/your-project/image.png'
  ```

- links: 可选，支持任意键名。每个键的值可以是：
  - 字符串（直接为 URL）
  - 对象 `{ url?, color?, label? }`，其中 `url` 可为空（空或缺失时在页面上显示为不可点击的文本），`color` 支持十六进制或颜色名，用于设置文字和边框颜色，`label` 用来自定义显示文字。
- priority: 可选数字（越大越靠前），用于在论文列表页控制排序。缺省时按文件名稳定排序。

```yaml
priority: 230800352 #建议使用论文arxiv的序号 如https://arxiv.org/abs/2308.00352就是230800352
```

示例：

```yaml
links:
  github: 'https://github.com/owner/repo'
  arxiv:
    url: 'https://arxiv.org/abs/xxxx.xxxxx'
    color: '#0d7ff0'
  'ICLR 2024 Oral':
    url: ''
    color: '#f00d0d'
```

- 说明：当 `url` 为空或缺失时，页面会默认渲染为不可点击的灰色/带边框文本（无 hover underline）。

示例完整 frontmatter

```yaml
---
title:
  text: 'MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework'
  url: 'https://arxiv.org/abs/2308.00352'
affiliations:
  - 'DeepWisdom'
  - 'AI Initiative'
image: '/paper/metagpt/metagpt.jpg'
links:
  Github:
    url: 'https://github.com/geekan/MetaGPT'
    color: '#0d7ff0'
  Arxiv:
    url: 'https://arxiv.org/abs/2308.00352'
  'ICLR 2024 Oral':
    url: ''
    color: '#f00d0d'
priority: 230800352
---
```
