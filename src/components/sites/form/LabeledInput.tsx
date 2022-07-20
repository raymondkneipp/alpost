import { Input, Label } from '@/components/sites';

import { useId } from 'react';

type Props = {
	label: string;
	type?: string;
};

const LabeledInput: React.FC<Props> = ({ type = 'text', label }) => {
	const id = useId();

	return (
		<div className="flex flex-col space-y-2">
			<Label htmlFor={id}>{label}</Label>
			<Input type={type} placeholder={`Your ${label.toLowerCase()}`} id={id} />
		</div>
	);
};
export default LabeledInput;
