type Props = {
	title: string;
	children: React.ReactNode;
};

const DescriptionList: React.FC<Props> = ({ title, children }) => {
	return (
		<dl className="flex flex-col space-y-4">
			<dt className="font-medium uppercase text-neutral-900 dark:text-neutral-100 font-heading">
				{title}
			</dt>
			{children}
		</dl>
	);
};
export default DescriptionList;
