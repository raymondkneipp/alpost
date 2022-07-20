/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		images: { allowFutureImage: true },
		newNextLinkBehavior: true,
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};

module.exports = nextConfig;
