import { Container, Text, Button } from "@/components";
import { FaPlay } from "react-icons/fa";

const Hero: React.FC = () => {
	return (
		<section>
			<Container spacer centered>
				<Text variant="h1">A Cool Tagline For a Cool Product</Text>
				<Text variant="p" size="lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					saepe accusamus fugit id voluptatibus beatae sint, iusto sit
				</Text>
				<div className="flex space-x-4">
					<Button href="/" color="primary" size="lg">
						Free Trial
					</Button>
					<Button href="/" color="ghost" size="lg">
						<FaPlay className="mr-2" />
						Watch Video
					</Button>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
