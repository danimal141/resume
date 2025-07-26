# danimal141's resume

A modern resume site built with VitePress.

## 🌐 Live Site

https://danimal141.github.io/resume/

## ✨ Features

### 📝 VitePress Powered

- Fast static site generation
- Modern and beautiful design
- Responsive design
- Dark mode support
- Fast search functionality

### 🔍 Text Linting

Automatic proofreading with [textlint](https://github.com/textlint/textlint)

```bash
npm run lint
```

Also automatically executed on pre-commit via [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).
Proofreading rules are configured in `.textlintrc`.

### 🚀 Auto Deploy

When you push to the main branch, GitHub Actions automatically builds and deploys to GitHub Pages.

## 🛠 Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run text linting
npm run lint
```

## 📁 Project Structure

```
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.mjs         # VitePress configuration
│   │   └── theme/
│   │       ├── index.mjs      # Custom theme
│   │       └── custom.css     # Styles
│   ├── images/                # Image files
│   └── index.md              # Main content
├── .github/workflows/
│   └── deploy.yml            # GitHub Pages deploy configuration
└── package.json
```

## 🎨 Customization

### Styling

You can customize styles in `docs/.vitepress/theme/custom.css`.

### Configuration

You can modify VitePress configuration in `docs/.vitepress/config.mjs`.
