type Props = {
	master: React.ReactNode;
	children: React.ReactNode;
};

const Wide: React.FC<Props> = ({ master, children }) => {
	return (
		<div className="space-y-12">
			<div className="space-y-6">{master}</div>
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">{children}</div>
		</div>
	);
};

export default Wide;
