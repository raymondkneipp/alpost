import { Text } from "@/components";
import { Logo } from "@/components/home";

const Brand: React.FC = () => {
	return (
		<div className="flex flex-row space-x-2">
			<Logo />
			<Text variant="h4" size="sm" color="usa" element="span" className="mb-1">
				ALPost
			</Text>
		</div>
	);
};

export default Brand;
