/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		domains: ['media.wisdo.com', 'res.cloudinary.com'],
	},

	compiler: {
		styledComponents: true,
	},

	webpack(config) {
		const fileLoaderRule = config.module.rules.find(
			(rule) => rule.test && rule.test.test('.svg')
		);
		fileLoaderRule.exclude = /\.svg$/;
		config.module.rules.push({
			test: /\.svg$/,
			loader: require.resolve('@svgr/webpack'),
		});
		return config;
	},
};

module.exports = nextConfig;
