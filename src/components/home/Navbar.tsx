import { Brand, ButtonLink, MobileNav, NavLink } from '@/components/home';
import { Container } from '@/layouts/shared';
import Link from 'next/link';

const Navbar: React.FC = () => {
	return (
		<nav className="py-12">
			<Container className="flex items-center justify-between">
				<Link href="/">
					<Brand />
				</Link>

				<MobileNav />

				<div className="items-center hidden space-x-3 md:flex">
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
