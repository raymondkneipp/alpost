import { Label, Textarea } from '@/components/sites';

import { useId } from 'react';

type Props = {
	label: string;
};

const LabeledTextarea: React.FC<Props> = ({ label }) => {
	const id = useId();

	return (
		<div className="flex flex-col space-y-2">
			<Label htmlFor={id}>{label}</Label>
			<Textarea placeholder={`Your ${label.toLowerCase()}`} id={id} />
		</div>
	);
};
export default LabeledTextarea;
