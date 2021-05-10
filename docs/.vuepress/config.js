module.exports = {
    title: "Nico's Ventures",
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
                'mornings',
            ],
            '/knowledge/': [
                '',
                {
                    title: 'Books',
                    collapsable: false,
                    children: ['books/thus-spoke-zarathustra'],
                },
                {
                    title: 'Miscellaneous',
                    collapsable: false,
                    children: [
                        'Survival'
                    ],
                },
            ],
            '/levels/': [
                '',
                'business',
                'life',
                'leadership',
                'learning',
                'tech',
                'family',
            ],
        },
        docsDir: 'docs',
        dest: 'public',
    }
}