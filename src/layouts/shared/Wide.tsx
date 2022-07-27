type Props = {
	master: React.ReactNode;
	children: React.ReactNode;
};

const Wide: React.FC<Props> = ({ master, children }) => {
	return (
		<div className="space-y-8">
			<div className="flex flex-col items-start space-y-4">{master}</div>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">{children}</div>
		</div>
	);
};

export default Wide;
