import { Text, Container } from "@/components";
import { usePost, useTheme } from "@/store";
import getBgColor from "@/utils/get-bg-color";
import Image from "next/image";

const Hero: React.FC = () => {
	const { num, name } = usePost();
	const { color } = useTheme();

	return (
		<section className="relative">
			<Image
				src="/hero.jpg"
				alt="American flag"
				layout="fill"
				objectFit="cover"
			/>
			<div className="relative min-h-screen bg-opacity-70 flex flex-col items-center justify-center bg-black">
				<Container className="max-w-screen-md">
					<Text variant="h1" color="light" center>
						Welcome to {name} American Legion Post {num}
					</Text>
				</Container>
			</div>
		</section>
	);
};

export default Hero;
