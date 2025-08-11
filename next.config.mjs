import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  ...nextConfig,
  pageExtensions: ["ts", "tsx", "mdx"],
});
