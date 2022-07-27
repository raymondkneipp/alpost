import { Brand, MobileNav, NavLink } from '@/components/sites';

import { Container } from '@/layouts/shared';

const Navbar: React.FC = () => {
	return (
		<nav className="sticky inset-x-0 top-0 z-50 py-2 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
			<Container className="flex items-center justify-between">
				<Brand />

				<MobileNav />

				<div className="items-center hidden md:space-x-2 lg:space-x-4 sm:flex">
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
