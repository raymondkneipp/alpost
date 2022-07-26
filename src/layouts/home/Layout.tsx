import { NextSeo } from 'next-seo';

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<NextSeo
				title="Home"
				titleTemplate="American Legion Website Builder | alpost | %s"
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
				]}
			/>
			<main className="bg-blue-900">{children}</main>
		</>
	);
};

export default Layout;
