type Props = {
	children: React.ReactNode;
};

const DescriptionListItem: React.FC<Props> = ({ children }) => {
	return <dd className="text-neutral-600 dark:text-neutral-400">{children}</dd>;
};

export default DescriptionListItem;
