/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "yxtdichn8p.ufs.sh",
      },
    ],
  },
}

export default nextConfig
