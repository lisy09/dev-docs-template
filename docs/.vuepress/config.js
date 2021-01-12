const path = require('path')
module.exports = {
    // hydrate: false,
    // base: path.resolve(__dirname, './dist'),
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-plantuml'))
        },
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: 'dev-docs-template',
            // description: ''
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'dev-docs-template',
        }
    },
    themeConfig: {
        sidebar: 'auto',
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/index.html' },
                    { text: 'GitHub', link: 'https://github.com/lisy09/dev-docs-template' },
                ],
                sidebar: {
                    '/guide/': [ 
                        {
                            title: 'Guide',
                            collapsable: true,
                            children: [
                                '',
                                'getting-started',
                                'edit-docs',
                                'build-sites'
                            ]
                        },
                        {
                            title: 'Advance',
                            collapsable: true,
                            children: [
                                'templates'
                            ]
                        }
                    ]
                }
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                nav: [
                    { text: 'Home', link: '/zh/' },
                ],
                sidebar: {
                    '/zh/': [
                        '',
                    ],
                }
            }
        }
    },
    plugins: [
        ['@snowdog/vuepress-plugin-pdf-export', {
            puppeteerLaunchOptions: {
              args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
          }]
    ]
}