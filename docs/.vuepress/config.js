module.exports = {
    title: "Nico Estrada",
    description: "Software Developer and Entreprenuer",
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'Levels', link: '/levels/' },
            { text: 'Knowledge', link: '/knowledge/' },
            { text: 'Twitter', link: 'https://twitter.com/stradamoney' },
        ],
        sidebar: {
            '/blog/': [
                '',
            ],
            '/levels/': [
                '',
            ],
            '/knowledge/': [
                '',
            ],
        },
        docsDir: 'docs',
        dest: 'public',
    }
}