import { Logo, Text, List, Item } from "@/components";
const Footer: React.FC = () => {
	return (
		<footer>
			<Logo />
			<Text>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime id,
				nobis numquam optio eos dolor perferendis non tenetur, in, reiciendis
				explicabo? Iste enim dolore at reiciendis nulla id natus consequatur.
			</Text>

			<List title="Pages">
				<Item>
					<Text href="/" variant="a">
						Home
					</Text>
				</Item>
				<Item>
					<Text href="/about" variant="a">
						About
					</Text>
				</Item>
				<Item>
					<Text href="/news" variant="a">
						News
					</Text>
				</Item>
				<Item>
					<Text href="/events" variant="a">
						Events
					</Text>
				</Item>
				<Item>
					<Text href="/contact" variant="a">
						Contact
					</Text>
				</Item>
			</List>
		</footer>
	);
};

export default Footer;
