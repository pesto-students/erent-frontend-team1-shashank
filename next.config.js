const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: false,
    images: {
        domains: ["res.cloudinary.com", "res.cloudinary.com"],
    },
};
module.exports = withPlugins(
    [
        [
            withAntdLess,
            {
                reactStrictMode: false,
                // reactStrictMode: true,
                images: {
                    disableStaticImages: true,
                    domains: ["res.cloudinary.com", "res.cloudinary.com"],
                },
                lessVarsFilePath: "./styles/variables.less",
                lessVarsFilePathAppendToEndOfContent: false,
                cssLoaderOptions: {},
                webpack(config, options) {
                    const { isServer } = options;
                    config.module.rules.push({
                        test: /\.(wav|mp3|ogg|mpe?g|png|jpe?g|gif|svg)$/i,
                        exclude: config.exclude,

                        use: [
                            {
                                loader: require.resolve("file-loader"),
                                options: {
                                    limit: 10000,
                                    fallback: require.resolve("url-loader"),
                                    publicPath: `_next/static/images/`,
                                    outputPath: `${
                                        isServer ? "../" : ""
                                    }static/images/`,
                                    name: "[name]-[hash].[ext]",
                                    esModule: config.esModule || false,
                                },
                            },
                        ],
                    });
                    return config;
                },
            },
        ],
    ],
    nextConfig,
);
