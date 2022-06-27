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

				<div className="flex justify-center items-center w-full">
					<Text href="https://raymondkneipp.com" variant="a">
						Website by Raymond Kneipp
					</Text>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
