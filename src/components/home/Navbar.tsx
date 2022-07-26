import { Container } from '@/components/shared';
import Image from 'next/future/image';
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
				<div className="flex items-center space-x-3">
					<picture>
						<source
							srcSet="/home/logo-dark.svg"
							media="(prefers-color-scheme: dark)"
						/>
						<Image src="/home/logo.svg" width="70" height="70" />
					</picture>

					<span className="text-2xl font-medium text-red-700 dark:text-red-400 sm:text-4xl font-heading">
						alpost
					</span>
				</div>
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
