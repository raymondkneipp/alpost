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
	images: {
		domains: ['i.pravatar.cc'],
	},
};

module.exports = nextConfig;
