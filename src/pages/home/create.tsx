import { useForm, SubmitHandler } from "react-hook-form";
import {
	CreateSiteInputType,
	createSiteValidator,
} from "shared/create-site-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";

export default function CreatePage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CreateSiteInputType>({
		resolver: zodResolver(createSiteValidator),
	});

	const { mutate, isLoading, data } = trpc.useMutation("sites.create", {
		onSuccess: (data) => {
			let domain: string;
			let proto: string;
			if (process.env.NODE_ENV === "development") {
				proto = "http";
				domain = "localhost:3000";
			} else {
				proto = "https";
				domain = "alpost.org";
			}

			window.location.replace(`${proto}://${data.subdomain}.${domain}`);
		},
	});

	return (
		<div className="bg-sky-700 h-screen flex flex-col space-y-4 items-center justify-center">
			<h1 className="font-bold text-2xl text-sky-100">Create Post</h1>
			<form
				className="flex flex-col space-y-4 max-w-xs w-full"
				onSubmit={handleSubmit((data) => {
					mutate(data);
				})}
			>
				<input
					disabled={isLoading}
					{...register("name")}
					type="text"
					placeholder="Name"
					className="rounded-md bg-sky-800 text-white placeholder:text-sky-300 border-transparent focus:border-sky-900 focus:bg-sky-700 focus:ring-0 form-input"
				/>
				{errors.name && (
					<div className="text-red-900 bg-red-100 p-2 rounded-md text-sm">
						{errors.name.message}
					</div>
				)}
				<input
					disabled={isLoading}
					{...register("subdomain")}
					type="text"
					placeholder="Post #"
					className="rounded-md bg-sky-800 text-white placeholder:text-sky-300 border-transparent focus:border-sky-900 focus:bg-sky-700 focus:ring-0 form-input"
				/>
				{errors.subdomain && (
					<div className="text-red-900 bg-red-100 p-2 rounded-md text-sm">
						{errors.subdomain.message}
					</div>
				)}
				<input
					disabled={isLoading}
					type="submit"
					value="Create"
					className="bg-white rounded-md p-2"
				/>
			</form>
		</div>
	);
}
