import { Text, Container } from '@/components/shared';
import { NavLink } from '@/components/sites';
import { Brand } from '@/components/home';

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

				<hr className="w-full mx-4 my-2 dark:border-neutral-800" />

				<div className="flex flex-col items-center justify-between w-full space-y-2 sm:space-y-0 sm:flex-row">
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
