type Props = {
	master: React.ReactNode;
	children: React.ReactNode;
};

const Tall: React.FC<Props> = ({ master, children }) => {
	return (
		<div className="grid grid-cols-1 gap-y-12 lg:gap-12 lg:grid-cols-3">
			<div className="flex flex-col items-start space-y-4">{master}</div>
			<div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">{children}</div>
		</div>
	);
};

export default Tall;
