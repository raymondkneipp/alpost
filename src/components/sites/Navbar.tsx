import { Brand, NavLink } from '@/components/sites';
import { Container } from '@/components/shared';

const Navbar: React.FC = () => {
	return (
		<nav className="border border-b py-2">
			<Container className="flex items-center justify-between">
				<Brand />
				<div className="flex items-center space-x-4">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/news">News</NavLink>
					<NavLink href="/events">Events</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
