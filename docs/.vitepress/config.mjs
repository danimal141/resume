import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/resume/',
  lang: 'ja',
  title: 'danimal141\'s resume',
  description: '私の経歴・スキル・アウトプットをまとめたレジュメサイトです',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap', rel: 'stylesheet' }],
    ['style', {}, `:root {
      --vp-c-brand-1: #1e3a8a;
      --vp-c-brand-2: #1e40af;
      --vp-c-brand-3: #1d4ed8;
      --vp-c-brand-soft: rgba(30, 58, 138, 0.14);
      --vp-font-family-base: 'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }`]
  ],

  themeConfig: {
    siteTitle: 'danimal141\'s resume',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/danimal141' },
      { text: 'Twitter', link: 'https://twitter.com/danimal141' }
    ],

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danimal141' },
      { icon: 'twitter', link: 'https://twitter.com/danimal141' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 danimal141'
    },

    outline: {
      level: [2, 3],
      label: '目次'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                noResultsText: '何も見つかりませんでした',
                resetButtonTitle: 'リセット',
                footer: {
                  selectText: '選択',
                  navigateText: '切り替え'
                }
              }
            }
          }
        }
      }
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      }
    },
    // カスタムCSSを確実に読み込む
    optimizeDeps: {
      include: []
    }
  },

  markdown: {
    lineNumbers: false,
    container: {
      tipLabel: 'ヒント',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '情報',
      detailsLabel: '詳細'
    }
  }
})
