import { Container, Logo, NavLink, Text } from "@/components";
import getTextColor from "@/utils/get-text-color";
import { Color } from "@prisma/client";
import { useTheme } from "@/store";

type Props = {
	post: string;
};

const Navbar: React.FC<Props> = ({ post }) => {
	const { color } = useTheme();

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
