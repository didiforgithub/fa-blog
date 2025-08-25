# 更新日志

## 2025-01-XX - PaperCard组件重构与响应式优化

### 🎨 界面设计优化

#### PaperCard组件全面重构
- **布局调整**: 改为左图右文的横向布局设计
- **图片优化**: 
  - 固定图片尺寸为 300px × 250px，支持4:3比例显示
  - 图片自适应高度，避免强制拉伸变形
  - 图片与文字顶部对齐，视觉效果更协调
  - 移除图片阴影效果，保持简洁风格
- **文字布局**:
  - 标题完整显示，不再截断
  - 组织信息使用 `•` 分隔的简洁格式
  - 按钮间距优化为12px，视觉更舒适
- **hover效果**: 统一使用灰色hover效果，简化交互反馈

#### 响应式设计实现
- **移动端**: 上图下文的垂直布局
  - 图片居中显示，最大宽度限制
  - 文字和按钮居中对齐
- **桌面端**: 左图右文的水平布局
  - 图片固定尺寸，文字左对齐
  - 按钮左对齐排列
- **断点**: 使用Tailwind的md断点(768px)作为分界

### 📐 布局系统重构

#### BaseLayout响应式宽度控制
- **新增maxWidth参数**: 支持 xl/2xl/3xl/4xl/5xl/6xl/7xl
- **统一容器约束**: 整个页面容器使用统一的最大宽度限制
- **组件对齐优化**: Nav、Header、Footer与主内容完美对齐

#### 页面宽度配置
- **Paper页面**: 使用 `max-w-6xl` (1152px) - 为论文卡片提供更多展示空间
- **其他页面**: 使用 `max-w-3xl` (768px) - 保持良好的阅读体验

#### 组件宽度修复
- 移除Nav、Header、Footer组件中的硬编码 `max-w-6xl`
- 所有组件现在继承父容器的宽度约束
- 解决了不同组件宽度不一致的问题

### 📝 内容标准化

#### 组织名称缩写化
为提升显示效果和节省空间，将所有论文中的组织名称替换为标准缩写：

**大学机构**:
- Université de Montréal → UdeM
- The Hong Kong University of Science and Technology → HKUST
- The Hong Kong University of Science and Technology (Guangzhou) → HKUST(GZ)
- University of California, Berkeley → UC Berkeley
- University of California, San Diego → UCSD
- The Chinese University of Hong Kong, Shenzhen → CUHK-SZ
- Renmin University of China → RUC
- Nanjing University → NJU
- Fudan University → Fudan
- Xiamen University → XMU
- Yale University → Yale
- Stanford University → Stanford
- University of Pennsylvania → UPenn

**研究机构**:
- King Abdullah University of Science and Technology → KAUST
- Microsoft Research Asia → MSRA
- Nanyang Technological University → NTU
- University of Illinois at Urbana-Champaign → UIUC
- Google DeepMind → DeepMind
- Canada CIFAR AI Chair → CIFAR

**其他组织**:
- Mila- Quebec AI Institute → Mila
- Argonne National Laboratory → ANL
- Penn State University → PSU
- The Swiss AI Lab IDSIA/USI/SUPSI → IDSIA

### 🔧 技术改进

#### Tailwind CSS优化
- 修复动态类名生成问题，使用明确的条件渲染替代模板字符串
- 确保所有Tailwind类名能被正确识别和应用
- 优化CSS类的使用，减少不必要的复杂性

#### 卡片间距优化
- 使用 `space-y-4` 统一控制卡片间距
- 移除单个卡片的内边距，避免间距重复
- 解决了卡片间距不一致的视觉问题

### 📱 用户体验提升

#### 视觉一致性
- 统一的最大宽度约束确保所有页面元素对齐
- 简化的hover效果提供一致的交互反馈
- 优化的间距系统提升整体视觉协调性

#### 内容可读性
- 论文标题完整显示，不再被截断
- 组织名称缩写化，信息更紧凑
- 按钮布局优化，操作更便捷

#### 响应式体验
- 移动端垂直布局适合小屏幕浏览
- 桌面端水平布局充分利用屏幕空间
- 平滑的断点切换，无缝的用户体验

### 🎯 影响范围

**修改的文件**:
- `src/components/PaperCard.astro` - 核心组件重构
- `src/layouts/BaseLayout.astro` - 布局系统优化
- `src/components/Nav.astro` - 宽度约束修复
- `src/components/Header.astro` - 宽度约束修复
- `src/components/Footer.astro` - 宽度约束修复
- `src/pages/papers/[...page].astro` - 页面宽度配置
- `src/content/papers/*.md` - 组织名称标准化

**受益页面**:
- 论文列表页面 - 更好的展示效果和响应式体验
- 所有其他页面 - 统一的布局对齐和视觉一致性

这次更新显著提升了网站的视觉效果、用户体验和响应式表现，为后续功能扩展打下了良好基础。
