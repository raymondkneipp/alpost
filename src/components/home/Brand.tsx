import Link from "next/link";
import { Text } from "@/components";
import { Logo } from "@/components/home";

const Brand: React.FC = () => {
	return (
		<Link href="/">
			<a className="flex flex-row space-x-2">
				<Logo />
				<Text
					variant="h4"
					size="sm"
					color="usa"
					element="span"
					className="mb-1"
				>
					ALPost
				</Text>
			</a>
		</Link>
	);
};

export default Brand;
