import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Tall, Container, Logo, Text, List, Item } from "@/components";

type Props = {
	content: string;
};

const Footer: React.FC<Props> = ({ content }) => {
	return (
		<footer className="py-8">
			<Container>
				<Tall
					master={
						<>
							<Logo />
							<Text>{content}</Text>
						</>
					}
					slave={
						<div className="col-span-full flex items-start justify-between sm:justify-around flex-wrap gap-4">
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
						</div>
					}
				/>

				<div className="mt-8 flex items-center justify-center">
					<Text href="https://alpost.org" variant="a" center>
						Website By ALPost
					</Text>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
