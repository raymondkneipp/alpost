import { Brand, ButtonLink } from '@/components/home';
import { Container } from '@/components/shared';

import Link from 'next/link';

type Props = {
	href: string;
	children: React.ReactNode;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	return (
		<Link
			href={href}
			className="px-6 py-3 text-blue-900 transition rounded-sm dark:text-blue-300 hover:bg-blue-900/10 dark:hover:bg-blue-300/10"
		>
			{children}
		</Link>
	);
};

const Navbar: React.FC = () => {
	return (
		<nav className="py-12">
			<Container className="flex items-center justify-between">
				<Brand />
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
