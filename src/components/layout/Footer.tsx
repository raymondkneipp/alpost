import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Container, Logo, Text, List, Item } from "@/components";
const Footer: React.FC = () => {
	return (
		<footer>
			<Container>
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

				<List title="Other">
					<Item>
						<Text href="/affiliated" variant="a">
							Affiliated Websites
						</Text>
					</Item>
					<Item>
						<Text href="/login" variant="a">
							Login
						</Text>
					</Item>
					<Item>
						<Text href="/apply" variant="a">
							Apply
						</Text>
					</Item>
				</List>

				<List title="Social">
					<Item>
						<Text href="https://facebook.com" variant="a">
							<FaFacebook size={18} className="mr-2" />
							Facebook
						</Text>
					</Item>
					<Item>
						<Text href="https://instagram.com" variant="a">
							<FaInstagram size={18} className="mr-2" />
							Instagram
						</Text>
					</Item>
					<Item>
						<Text href="https://twitter.com" variant="a">
							<FaTwitter size={18} className="mr-2" />
							Twitter
						</Text>
					</Item>
					<Item>
						<Text href="https://youtube.com" variant="a">
							<FaYoutube size={18} className="mr-2" />
							YouTube
						</Text>
					</Item>
					<Item>
						<Text href="https://linkedin.com" variant="a">
							<FaLinkedin size={18} className="mr-2" />
							LinkedIn
						</Text>
					</Item>
				</List>

				<Text href="https://alpost.org" variant="a">
					Website By ALPost
				</Text>
			</Container>
		</footer>
	);
};

export default Footer;
