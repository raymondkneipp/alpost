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
			</Container>
		</footer>
	);
};

export default Footer;
