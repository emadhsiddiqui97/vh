/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['getvininfo.ca']
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;

// remotePatterns: [
//   {
//     protocol: 'https',
//     hostname: 'getvininfo.ca',
//     port: '',
//     pathname: '/wp-content/uploads/2024/10/',
//   },
// ],