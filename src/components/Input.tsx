import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { Text } from "@/components";

interface Props {
	label: string;
	type?: string;
	placeholder?: string;
	register: UseFormRegisterReturn<any>;
	disabled?: boolean;
}

const Input: React.VFC<Props> = ({
	label,
	type = "text",
	placeholder = "",
	register,
	disabled = false,
}) => {
	return (
		<div className="flex flex-col space-y-1 flex-1">
			<Text variant="h6" element="label" htmlFor={label.replace(/\s/g, "")}>
				{label}
			</Text>
			<input
				disabled={disabled}
				type={type}
				id={label.replace(/\s/g, "")}
				className="rounded-md dark:bg-neutral-800 bg-neutral-200 text-black dark:text-white placeholder:text-neutral-400 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 focus:bg-transparent focus:ring-0 form-input disabled:cursor-not-allowed disabled:text-opacity-30 dark:disabled:text-opacity-30"
				placeholder={placeholder}
				{...register}
			/>
		</div>
	);
};

export default Input;
