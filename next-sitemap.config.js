/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.imageautomat.com',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        const priorities = {
            '/': 1.0,
            '/product': 0.9,
            '/software': 0.8,
            '/rental': 0.8,
            '/oem': 0.7,
            '/payment': 0.7,
            '/contact': 0.5,
        }
        return {
            loc: path,
            changefreq: path === '/' ? 'daily' : 'weekly',
            priority: priorities[path] || 0.7,
            lastmod: new Date().toISOString(),
        }
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}
