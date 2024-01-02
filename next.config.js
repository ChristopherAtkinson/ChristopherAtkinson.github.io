/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: '.build',
    assetPrefix: './',
    images: { unoptimized: true },
}

module.exports = nextConfig
