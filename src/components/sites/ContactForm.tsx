import { LabeledInput, LabeledTextarea, Submit } from '@/components/sites';

const ContactForm: React.FC = () => {
	return (
		<form className="flex flex-col space-y-4 col-span-full">
			<div className="grid gap-4 sm:grid-cols-2">
				<LabeledInput label="email" type="email" />
				<LabeledInput label="Name" />
			</div>
			<LabeledTextarea label="Message" />
			<Submit>Send Message</Submit>
		</form>
	);
};

export default ContactForm;
