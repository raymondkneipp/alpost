import { Container, Logo, NavLink, Text } from "@/components";
import getTextColor from "@/utils/get-text-color";
import { Color } from "@prisma/client";

type Props = {
	color: Color;
};

const Navbar: React.FC<Props> = ({ color }) => {
	return (
		<nav className="bg-neutral-100 dark:bg-neutral-900 fixed top-0 left-0 right-0 shadow-md">
			<Container>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Logo />
						<Text variant="h5" element="span" className={getTextColor(color)}>
							Post
						</Text>
					</div>

					<div className="flex items-center space-x-6">
						<NavLink color={color} href="/">
							Home
						</NavLink>
						<NavLink color={color} href="/about">
							About
						</NavLink>
						<NavLink color={color} href="/news">
							News
						</NavLink>
						<NavLink color={color} href="/events">
							Events
						</NavLink>
						<NavLink color={color} href="/contact">
							Contact
						</NavLink>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
