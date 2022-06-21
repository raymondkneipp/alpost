import { Text } from "@/components";
import getRadius from "@/utils/get-radius";
import useTheme from "store/theme";

const NewsEmpty: React.FC = () => {
	const { radius } = useTheme();
	return (
		<div
			className={`bg-neutral-200 dark:bg-neutral-800 h-80 flex items-center justify-center col-span-full ${getRadius(
				radius
			)}`}
		>
			<Text variant="h6">Could not find any news</Text>
		</div>
	);
};

export default NewsEmpty;
