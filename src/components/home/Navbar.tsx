import { Brand, ButtonLink, NavLink } from '@/components/home';
import { Container } from '@/components/shared';
import Link from 'next/link';

const Navbar: React.FC = () => {
	return (
		<nav className="py-12">
			<Container className="flex items-center justify-between">
				<Link href="/">
					<Brand />
				</Link>
				<div className="flex items-center space-x-6">
					<NavLink href="#features">Features</NavLink>
					<NavLink href="#testimonials">Testimonials</NavLink>
					<NavLink href="#pricing">Pricing</NavLink>
					<ButtonLink href="#waitlist">Join Waitlist</ButtonLink>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
