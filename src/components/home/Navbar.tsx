import { Brand } from '@/components/home';
import { Container } from '@/components/shared';

import Link from 'next/link';

type Props = {
	href: string;
	children: React.ReactNode;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	return (
		<Link href={href} className="px-6 py-3 text-blue-900 dark:text-blue-300">
			{children}
		</Link>
	);
};

const Navbar: React.FC = () => {
	return (
		<nav className="py-12">
			<Container className="flex items-center justify-between">
				<Brand />
				<div>
					<NavLink href="#features">Features</NavLink>
					<NavLink href="#testimonials">Testimonials</NavLink>
					<NavLink href="#pricing">Pricing</NavLink>
					<NavLink href="#waitlist">Join Waitlist</NavLink>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
