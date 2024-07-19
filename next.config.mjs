/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add HTML loader for client-side bundles
      if (!isServer) {
        config.module.rules.push({
          test: /\.html$/,
          use: 'html-loader',
        });
      }
  
      return config;
    },
  };
  

export default nextConfig;
