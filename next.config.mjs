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
    webpack: (config, { dev }) => {
        if (dev) {
          config.devtool = 'source-map';
          config.watchOptions = {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000, // Check for changes every second
          };
        }
        return config;
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