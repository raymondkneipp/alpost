import { Container, Logo, Text, Button } from "@/components";
import { NavLink } from "@/components/sites";
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
				<Button href="/" color="light" size="lg">
					Become a Member
				</Button>
			</Container>
		</section>
	);
};

export default CTA;
