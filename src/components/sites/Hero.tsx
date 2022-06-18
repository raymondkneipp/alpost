import { Text, Container, Button } from "@/components";
import { usePost } from "@/store";
import Image from "next/image";

const Hero: React.FC = () => {
	const { num, name } = usePost();

	return (
		<section className="relative">
			<Image
				src="/hero.jpg"
				alt="American flag"
				layout="fill"
				objectFit="cover"
				priority={true}
			/>
			<div className="relative min-h-screen bg-opacity-80 flex items-center bg-black">
				<Container className="max-w-screen-md" spacer centered>
					<Text variant="h1" color="light" center>
						Welcome to {name} American Legion Post {num}
					</Text>
					<div className="flex gap-4">
						<Button href="/" color="primary" size="lg">
							Become a Member
						</Button>
						<Button href="/" color="light" size="lg">
							Contact Us
						</Button>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Hero;
