import { Text, Button, Container } from "@/components";
import { Logo } from "@/components/home";
import getTextColor from "@/utils/get-text-color";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import useTheme from "store/theme";
import { NavLink } from "../sites";

const Navbar: React.FC = () => {
	const { color } = useTheme();
	return (
		<nav className="py-10">
			<Container className="flex items-center justify-between space-x-8">
				<Link href="/">
					<a className="flex items-center space-x-2">
						<Logo />
						<Text variant="h5" size="sm" element="span">
							AL
							<span className={getTextColor(color)}>Post</span>
						</Text>
					</a>
				</Link>
				<div className="flex-1 space-x-2 hidden md:flex">
					<NavLink href="/#features">Features</NavLink>
					<NavLink href="/#testimonials">Testimonials</NavLink>
					<NavLink href="/#pricing">Pricing</NavLink>
				</div>
				<div className="flex space-x-2">
					<div className="hidden md:block">
						<NavLink href="/login">Sign In</NavLink>
					</div>
					<Button href="/login">Get Started</Button>
					<Button
						onClick={() => console.log("menu")}
						color="ghost"
						className="block md:hidden"
					>
						<FaBars />
					</Button>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
