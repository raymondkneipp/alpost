type Props = {
	step: number;
	total: number;
};

const Step: React.FC<Props> = ({ step, total }) => {
	return (
		<div className="flex items-center">
			<div>
				{step} / {total}
			</div>
		</div>
	);
};

export default Step;
