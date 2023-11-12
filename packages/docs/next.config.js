const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `kurly_${hash}`,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@base/tokens'],
};

module.exports = withVanillaExtract(nextConfig);
