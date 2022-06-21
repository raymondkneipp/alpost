import { Text } from "@/components";

const NewsEmpty: React.FC = () => {
	return (
		<div className="bg-neutral-200 dark:bg-neutral-800 rounded-md h-80 flex items-center justify-center col-span-full">
			<Text variant="h6">Could not find any news</Text>
		</div>
	);
};

export default NewsEmpty;
