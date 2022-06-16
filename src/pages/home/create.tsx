import { useForm, SubmitHandler } from "react-hook-form";

export default function CreatePage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	return (
		<div className="bg-sky-700 h-screen flex flex-col space-y-4 items-center justify-center">
			<h1 className="font-bold text-2xl text-sky-100">Create Post</h1>
			<form className="flex flex-col space-y-4 max-w-xs w-full">
				<input
					type="text"
					placeholder="Name"
					className="rounded-md bg-sky-800 text-white placeholder:text-sky-300 border-transparent focus:border-sky-900 focus:bg-sky-700 focus:ring-0 form-input"
				/>
				<input
					type="text"
					placeholder="Post #"
					className="rounded-md bg-sky-800 text-white placeholder:text-sky-300 border-transparent focus:border-sky-900 focus:bg-sky-700 focus:ring-0 form-input"
				/>
				<input
					type="submit"
					value="Create"
					className="bg-white rounded-md p-2"
				/>
			</form>
		</div>
	);
}
