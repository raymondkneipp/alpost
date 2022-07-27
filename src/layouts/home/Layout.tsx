import { Footer, Navbar } from '@/components/home';

import { NextSeo } from 'next-seo';

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<NextSeo
				title="alpost - American Legion Website Builder"
				description=""
				additionalLinkTags={[
					{
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
					{
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossOrigin: 'true',
					},
					{
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500&display=swap',
					},
					{
						rel: 'icon',
						type: 'image/svg+xml',
						href: '/shared/favicon.svg',
					},
					{
						rel: 'icon',
						type: 'image/png',
						href: '/shared/favicon.png',
					},
				]}
			/>

			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
