import { Container, Text, Button } from "@/components";
import getDomain from "@/utils/get-domain";
import { FaPlay } from "react-icons/fa";

const Hero: React.FC = () => {
	return (
		<section>
			<Container spacer centered className="max-w-screen-md">
				<Text variant="h1" color="primary">
					A Cool Tagline For a Cool Product
				</Text>
				<Text variant="p" size="lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					saepe accusamus fugit id voluptatibus beatae sint, iusto sit
				</Text>
				<div className="flex space-x-4">
					<Button href="/login" color="usa" size="lg">
						Get Started
					</Button>
					<Button href={getDomain("demo")} color="ghost" size="lg">
						<FaPlay className="mr-2" />
						View Demo
					</Button>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
