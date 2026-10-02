/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//   },
// }

const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  assetPrefix: '/personal-portfolio/',
  trailingSlash: true,

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },
}

export default nextConfig
