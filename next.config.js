/** @type {import('next').NextConfig} */

const CopyPlugin = require("copy-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    
    config.resolve.fallback = { fs: false };

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: "node_modules/rhino3dm/rhino3dm.wasm", to: "static/chunks/pages/"}
        ]
      })
    )

    return config;
  },
}

module.exports = nextConfig
