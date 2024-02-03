/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.flagcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
            },
        ],
    }
}

module.exports = nextConfig
