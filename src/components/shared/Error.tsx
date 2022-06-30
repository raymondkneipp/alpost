import { FieldError } from "react-hook-form";

type Props = {
	error: FieldError | undefined;
};
const Error: React.FC<Props> = ({ error }) => {
	if (error) {
		return (
			<div className="bg-red-700 dark:bg-red-900 text-white dark:text-red-100 p-2 rounded-md text-sm">
				{error.message}
			</div>
		);
	}
	return null;
};

export default Error;
