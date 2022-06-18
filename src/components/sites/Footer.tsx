import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Tall, Container, Logo, Text, DList, DItem } from "@/components";
import useSocials from "store/socials";
import usePost from "store/post";
import useAddress from "store/address";

const Footer: React.FC = () => {
	const { name, num } = usePost();
	const { facebook, twitter, instagram, youtube } = useSocials();
	const socials =
		facebook !== "" || twitter !== "" || instagram !== "" || youtube !== "";
	const { street, city, state, zip } = useAddress();

	return (
		<footer className="py-8">
			<Container>
				<Tall
					master={
						<>
							<Logo />
							<Text>
								{name} American Legion Post {num} located on {street} {city},{" "}
								{state} {zip}
							</Text>
						</>
					}
					slave={
						<div className="col-span-full flex items-start justify-between sm:justify-around flex-wrap gap-4">
							<DList title="Pages">
								<DItem>
									<Text href="/" variant="a">
										Home
									</Text>
								</DItem>
								<DItem>
									<Text href="/about" variant="a">
										About
									</Text>
								</DItem>
								<DItem>
									<Text href="/news" variant="a">
										News
									</Text>
								</DItem>
								<DItem>
									<Text href="/events" variant="a">
										Events
									</Text>
								</DItem>
								<DItem>
									<Text href="/contact" variant="a">
										Contact
									</Text>
								</DItem>
							</DList>

							<DList title="Other">
								<DItem>
									<Text href="/affiliated" variant="a">
										Affiliated Websites
									</Text>
								</DItem>
								<DItem>
									<Text href="/login" variant="a">
										Login
									</Text>
								</DItem>
								<DItem>
									<Text href="/apply" variant="a">
										Apply
									</Text>
								</DItem>
							</DList>

							{socials && (
								<DList title="Social">
									{facebook && (
										<DItem>
											<Text href={facebook} variant="a">
												<FaFacebook size={18} className="mr-2" />
												Facebook
											</Text>
										</DItem>
									)}
									{instagram && (
										<DItem>
											<Text href={instagram} variant="a">
												<FaInstagram size={18} className="mr-2" />
												Instagram
											</Text>
										</DItem>
									)}
									{twitter && (
										<DItem>
											<Text href={twitter} variant="a">
												<FaTwitter size={18} className="mr-2" />
												Twitter
											</Text>
										</DItem>
									)}
									{youtube && (
										<DItem>
											<Text href={youtube} variant="a">
												<FaYoutube size={18} className="mr-2" />
												YouTube
											</Text>
										</DItem>
									)}
								</DList>
							)}
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
