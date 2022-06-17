import { Container, Logo, NavLink, Text } from "@/components";

const Navbar: React.FC = () => {
	return (
		<nav className="bg-white fixed top-0 left-0 right-0">
			<Container>
				<Logo />
				<Text variant="h4" element="span" color="primary">
					Post ___
				</Text>

				<div>
					<NavLink href="/">Home</NavLink>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/news">News</NavLink>
					<NavLink href="/Events">Events</NavLink>
					<NavLink href="/Contact">Contact</NavLink>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
