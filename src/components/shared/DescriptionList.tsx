type Props = {
	title: string;
	children: React.ReactNode;
};

const DescriptionList: React.FC<Props> = ({ title, children }) => {
	return (
		<dl className="flex flex-col space-y-2">
			<dt className="font-bold uppercase text-neutral-900 dark:text-neutral-100">
				{title}
			</dt>
			{children}
		</dl>
	);
};
export default DescriptionList;
