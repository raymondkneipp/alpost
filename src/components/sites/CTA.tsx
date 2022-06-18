import { Container, Logo, NavLink, Text } from "@/components";
import { useTheme } from "@/store";
import getBgColor from "@/utils/get-bg-color";

const CTA: React.FC = () => {
	const { color } = useTheme();

	return (
		<section className={`${getBgColor(color)}`}>
			<Container spacer centered>
				<Text color="light" variant="h2">
					Join Our Post Today!
				</Text>
				<Text color="light">
					Join our post and be a part of the largest veteran organization
					reaching over two million members.
				</Text>
			</Container>
		</section>
	);
};

export default CTA;
