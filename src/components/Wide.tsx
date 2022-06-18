type Props = {
	master: React.ReactNode;
	children: React.ReactNode;
};

const Tall: React.FC<Props> = ({ master, children }) => {
	return (
		<div className="space-y-12">
			<div className="space-y-6">{master}</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
		</div>
	);
};

export default Tall;
