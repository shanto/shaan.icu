const imageConfig = {
    remotePatterns: [
        {
            hostname: "github.com",
            pathname: "**/blob/**",
        },
        {
            hostname: "media.licdn.com",
            pathname: "/dms/image/**",
        },
        {
            hostname: "royerdesign.com",
            pathname: "/images/**",
        },
    ],
}

const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: imageConfig,
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    experimental: {
        turbo: {
            watch: true,
            resolveExtensions: [
            '.mdx',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.mjs',
            '.json',
            ],
        },
    }
};

export default nextConfig;