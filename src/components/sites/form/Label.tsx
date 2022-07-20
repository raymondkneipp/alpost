type Props = {
	htmlFor: string;
	children: React.ReactNode;
};

const Label: React.FC<Props> = ({ htmlFor, children }) => {
	return (
		<label
			htmlFor={htmlFor}
			className="font-medium uppercase font-heading text-neutral-900 dark:text-neutral-100"
		>
			{children}
		</label>
	);
};

export default Label;
