import { Container, Text, Button } from '@/components/shared';
import getDomain from '@/utils/get-domain';
import getTextColor from '@/utils/get-text-color';
import { FaPlay } from 'react-icons/fa';

const Hero: React.FC = () => {
	return (
		<section>
			<Container spacer centered className="max-w-screen-md">
				<Text variant="h1" size="lg">
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
					<Button href={getDomain('demo')} color="ghost" size="lg">
						<FaPlay className="mr-2" />
						View Demo
					</Button>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
