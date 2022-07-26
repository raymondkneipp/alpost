import { Brand, NavLink } from '@/components/home';
import { Container } from '@/components/shared';

const Footer: React.FC = () => {
	return (
		<footer className="py-6 border-t border-neutral-200 dark:border-neutral-800">
			<Container className="flex flex-col items-center space-y-6">
				<Brand />
				<div>
					<div className="flex items-center space-x-6">
						<NavLink href="#features">Features</NavLink>
						<NavLink href="#testimonials">Testimonials</NavLink>
						<NavLink href="#pricing">Pricing</NavLink>
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
