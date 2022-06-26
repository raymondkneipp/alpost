import { Button, Container, Text, List, Item, Wide } from "@/components";
import getBgColor from "@/utils/get-bg-color";
import getRadius from "@/utils/get-radius";
import getTextColor from "@/utils/get-text-color";
import { FaCheck } from "react-icons/fa";
import useTheme from "store/theme";

const Features: React.FC = () => {
	return (
		<section id="features">
			<Container spacer>
				<Wide master={<Text variant="h2">Features</Text>}>
					<Text size="lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						architecto placeat dignissimos repellendus, blanditiis ut quibusdam
						eum repellat numquam accusamus necessitatibus suscipit nam laborum
						iusto natus odio laboriosam qui porro.
					</Text>
					<Text size="lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						architecto placeat dignissimos repellendus, blanditiis ut quibusdam
						eum repellat numquam accusamus necessitatibus suscipit nam laborum
						iusto natus odio laboriosam qui porro.
					</Text>
					<Text size="lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						architecto placeat dignissimos repellendus, blanditiis ut quibusdam
						eum repellat numquam accusamus necessitatibus suscipit nam laborum
						iusto natus odio laboriosam qui porro.
					</Text>
				</Wide>
			</Container>
		</section>
	);
};

export default Features;
