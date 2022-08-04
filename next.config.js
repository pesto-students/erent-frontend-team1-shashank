const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: false,
};
module.exports = withPlugins(
    [
        [
            withAntdLess,
            {
                reactStrictMode: false,
                lessVarsFilePath: "./styles/variables.less",
                lessVarsFilePathAppendToEndOfContent: false,
                cssLoaderOptions: {},
                webpack(config) {
                    return config;
                },
            },
        ],
    ],
    nextConfig,
);
