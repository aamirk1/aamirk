import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-pdf", "pdfjs-dist"],
  devIndicators: false,
  // Set esmExternals to 'loose' to better handle buggy ESM packages like pdfjs-dist 5.x
  experimental: {
    esmExternals: "loose",
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules\/pdfjs-dist/,
      resolve: {
        fullySpecified: false,
      },
      type: "javascript/auto",
    });

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    return config;
  },
};

export default nextConfig;
