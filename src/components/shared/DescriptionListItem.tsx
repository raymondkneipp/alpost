type Props = {
	children: React.ReactNode;
};

const DescriptionListItem: React.FC<Props> = ({ children }) => {
	return <dd className="text-neutral-700 dark:text-neutral-300">{children}</dd>;
};

export default DescriptionListItem;
