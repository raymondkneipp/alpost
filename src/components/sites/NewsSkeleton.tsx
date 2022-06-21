const NewsSkeleton: React.FC = () => {
	return (
		<>
			<div className="bg-neutral-200 dark:bg-neutral-800 rounded-md h-80 animate-pulse"></div>
			<div className="bg-neutral-200 dark:bg-neutral-800 rounded-md h-80 animate-pulse hidden md:block"></div>
			<div className="bg-neutral-200 dark:bg-neutral-800 rounded-md h-80 animate-pulse hidden md:block"></div>
		</>
	);
};

export default NewsSkeleton;
