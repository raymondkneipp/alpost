import { Container, Logo, NavLink, Text } from "@/components";
import getTextColor from "@/utils/get-text-color";
import { Color } from "@prisma/client";

type Props = {
	color: Color;
	post: string;
};

const Navbar: React.FC<Props> = ({ color, post }) => {
	return (
		<nav className="bg-neutral-100 dark:bg-neutral-900 fixed top-0 left-0 right-0 shadow-md z-40">
			<Container>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Logo />
						<Text variant="h5" element="span" className={getTextColor(color)}>
							Post {post}
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
