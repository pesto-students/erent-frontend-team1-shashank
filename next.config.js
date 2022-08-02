/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
};
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], nextConfig);
