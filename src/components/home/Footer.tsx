import { Anchor, Brand } from '@/components/home';
import { Container } from '@/layouts/shared';
import Link from 'next/link';

const Footer: React.FC = () => {
	return (
		<footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
			<Container className="flex flex-col items-center space-y-6">
				<Link href="/">
					<Brand />
				</Link>
				<div>
					<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
						<Anchor href="#features">Features</Anchor>
						<Anchor href="#testimonials">Testimonials</Anchor>
						<Anchor href="#pricing">Pricing</Anchor>
					</div>
				</div>
				<a
					href="https://raymondkneipp.com"
					className="text-blue-900 underline transition dark:text-blue-300 decoration-blue-900/25 dark:decoration-blue-300/25 hover:decoration-blue-900 dark:hover:decoration-blue-300"
				>
					Website by Raymond Kneipp
				</a>
			</Container>
		</footer>
	);
};

export default Footer;
