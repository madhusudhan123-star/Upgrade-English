const siteUrl = 'https://upgrade-english.vercel.app/'

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
    outDir: 'public',
}