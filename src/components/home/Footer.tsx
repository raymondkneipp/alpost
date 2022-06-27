import { Text } from "@/components";
import { NavLink } from "@/components/sites";
import { Brand } from "@/components/home";
import { Container } from "@/components";

const Footer: React.FC = () => {
	return (
		<footer>
			<Container centered spacer className="pb-4">
				<Brand />
				<div className="flex space-x-2">
					<NavLink href="/#features">Features</NavLink>
					<NavLink href="/#testimonials">Testimonials</NavLink>
					<NavLink href="/#pricing">Pricing</NavLink>
				</div>

				<hr className="mx-4 my-2 dark:border-neutral-800 w-full" />

				<div className="flex justify-between items-center w-full flex-col space-y-2 sm:space-y-0 sm:flex-row">
					<Text>&copy; {new Date().getFullYear()} ALPost</Text>
					<Text href="https://raymondkneipp.com" variant="a">
						Website by Raymond Kneipp
					</Text>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
