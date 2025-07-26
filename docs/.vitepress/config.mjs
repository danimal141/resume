import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/resume/",
  lang: "ja",
  title: "danimal141's resume",
  description: "私の経歴・スキル・アウトプットをまとめたレジュメサイトです",

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "style",
      {},
      `:root {
      --vp-c-brand-1: #1e3a8a;
      --vp-c-brand-2: #1e40af;
      --vp-c-brand-3: #1d4ed8;
      --vp-c-brand-soft: rgba(30, 58, 138, 0.14);
      --vp-font-family-base: 'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
    .dark {
      --vp-c-brand-1: #3b82f6;
      --vp-c-brand-2: #60a5fa;
      --vp-c-brand-3: #93c5fd;
    }
    .VPDoc .container { max-width: 960px !important; }
    .VPContent { padding-top: 48px !important; }
    .VPNav { backdrop-filter: blur(12px); background-color: rgba(255, 255, 255, 0.8); border-bottom: 1px solid var(--vp-c-divider); }
    .dark .VPNav { background-color: rgba(26, 26, 26, 0.8); }
    h1 { font-size: 2.5rem !important; font-weight: 700 !important; letter-spacing: -0.02em !important; line-height: 1.2 !important; margin: 2rem 0 1.5rem !important; background: linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-brand-2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    h2 { font-size: 1.875rem !important; font-weight: 600 !important; margin: 2.5rem 0 1rem !important; padding-top: 1.5rem !important; border-top: 1px solid var(--vp-c-divider); }
    h3 { font-size: 1.375rem !important; font-weight: 600 !important; margin: 1.5rem 0 0.75rem !important; }
    h4 { font-size: 1.125rem !important; font-weight: 600 !important; margin: 1.25rem 0 0.5rem !important; }
    p { line-height: 1.8; margin: 1rem 0; }
    ul, ol { margin: 1rem 0; padding-left: 2rem; }
    li { margin: 0.5rem 0; line-height: 1.7; }
    img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 1.5rem 0; }
    .VPContent > div > * { animation: fadeIn 0.6s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { h1 { font-size: 2rem !important; } h2 { font-size: 1.5rem !important; } h3 { font-size: 1.25rem !important; } .VPDoc .container { padding: 0 1.5rem; } }
    `,
    ],
  ],

  themeConfig: {
    siteTitle: "danimal141's resume",

    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/danimal141" },
      { text: "Twitter", link: "https://twitter.com/danimal141" },
    ],

    sidebar: false,

    socialLinks: [
      { icon: "github", link: "https://github.com/danimal141" },
      { icon: "twitter", link: "https://twitter.com/danimal141" },
    ],

    footer: {
      copyright: "Copyright © 2025 danimal141",
    },

    outline: {
      level: [2, 3],
      label: "目次",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "検索",
                buttonAriaLabel: "検索",
              },
              modal: {
                noResultsText: "何も見つかりませんでした",
                resetButtonTitle: "リセット",
                footer: {
                  selectText: "選択",
                  navigateText: "切り替え",
                },
              },
            },
          },
        },
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "",
        },
      },
    },
    // カスタムCSSを確実に読み込む
    optimizeDeps: {
      include: [],
    },
  },

  markdown: {
    lineNumbers: false,
    container: {
      tipLabel: "ヒント",
      warningLabel: "注意",
      dangerLabel: "警告",
      infoLabel: "情報",
      detailsLabel: "詳細",
    },
  },
});
