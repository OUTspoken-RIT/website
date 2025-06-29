/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/website/docs",
  assetPrefix: "/website/docs",
  distDir: "docs",
};

export default nextConfig;
