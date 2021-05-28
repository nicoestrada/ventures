module.exports = {
    title: "Nico Estrada",
    description: "Software Developer and Entreprenuer",
    serviceWorker: true,
    plugins: [
        '@vuepress/last-updated',
        ['@vuepress/google-analytics', { ga: 'G-R3JY8FSRD9' }],
        ['@vuepress/search', { searchHotkeys: [] }],
    ],
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'Levels', link: '/levels/' },
            { text: 'Labs', link: '/labs/' },
            { text: 'Knowledge', link: '/knowledge/' },
        ],
        sidebar: {
            '/blog/': [
                '',
                'finding-a-fit',
                'decline-of-the-west'
            ],
            '/levels/': [
                '',
                'reach-for-what-is-attainable',
            ],
            '/labs/': [
                '',
            ],
            '/knowledge/': [
                '',
            ],
        },
        docsDir: 'docs',
        editLinks: true,
    }
}