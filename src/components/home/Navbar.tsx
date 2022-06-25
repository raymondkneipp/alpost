import Image from "next/image";
import { Text, Button, Container } from "@/components";
import getTextColor from "@/utils/get-text-color";
import useTheme from "store/theme";

const Navbar: React.FC = () => {
	const { color } = useTheme();
	return (
		<nav>
			<Container className="flex items-center justify-between space-x-8">
				<div className="flex items-center space-x-2">
					<Image src="/favicon.svg" width={60} height={60} layout="fixed" />
					<Text variant="h5" size="sm" element="span">
						<span className="font-normal">AL</span>
						<span className={getTextColor(color)}>Post</span>
					</Text>
				</div>
				<div className="flex-1"></div>
				<div>
					<Button href="/login">Get Started</Button>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
