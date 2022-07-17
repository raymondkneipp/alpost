import Link from 'next/link';
import { Brand } from '@/components/sites';
import { Container } from '@/components/shared';

const Navbar: React.FC = () => {
	return (
		<nav className="border border-b py-2">
			<Container className="flex items-center justify-between">
				<Brand />
				<div className="flex items-center space-x-4">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/news">News</Link>
					<Link href="/events">Events</Link>
					<Link href="/contact">Contact</Link>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
