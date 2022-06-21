import getRadius from "@/utils/get-radius";
import useTheme from "store/theme";

const NewsSkeleton: React.FC = () => {
	const { radius } = useTheme();
	return (
		<>
			<div
				className={`bg-neutral-200 dark:bg-neutral-800 h-80 animate-pulse ${getRadius(
					radius
				)}`}
			></div>
			<div
				className={`bg-neutral-200 dark:bg-neutral-800 h-80 animate-pulse ${getRadius(
					radius
				)} hidden md:block`}
			></div>
			<div
				className={`bg-neutral-200 dark:bg-neutral-800 h-80 animate-pulse ${getRadius(
					radius
				)} hidden md:block`}
			></div>
		</>
	);
};

export default NewsSkeleton;
