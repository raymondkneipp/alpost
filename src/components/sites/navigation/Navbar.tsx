import { Container, Logo, NavLink, Text } from "@/components";

const Navbar: React.FC = () => {
	return (
		<nav className="bg-neutral-100 dark:bg-neutral-900 fixed top-0 left-0 right-0">
			<Container>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Logo />
						<Text variant="h5" element="span" color="primary">
							Post
						</Text>
					</div>

					<div className="flex items-center space-x-6">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/about">About</NavLink>
						<NavLink href="/news">News</NavLink>
						<NavLink href="/events">Events</NavLink>
						<NavLink href="/contact">Contact</NavLink>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
