import { useForm, SubmitHandler } from "react-hook-form";
import {
	CreateSiteInputType,
	createSiteValidator,
} from "shared/create-site-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";
import Link from "next/link";

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
		<div className="bg-black h-screen flex flex-col space-y-4 items-center justify-center">
			<h1 className="font-bold text-2xl text-white">Create Post</h1>
			<Link href="/">
				<a className="text-neutral-400 hover:text-white underline max-w-xs w-full">
					Back
				</a>
			</Link>
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
					className="rounded-md bg-neutral-900 text-white placeholder:text-neutral-400 border-transparent focus:border-neutral-700 focus:bg-black focus:ring-0 form-input"
				/>
				{errors.name && (
					<div className="bg-red-900 text-red-100 p-2 rounded-md text-sm">
						{errors.name.message}
					</div>
				)}
				<input
					disabled={isLoading}
					{...register("subdomain")}
					type="text"
					placeholder="Post #"
					className="rounded-md bg-neutral-900 text-white placeholder:text-neutral-400 border-transparent focus:border-neutral-700 focus:bg-black focus:ring-0 form-input"
				/>
				{errors.subdomain && (
					<div className="bg-red-900 text-red-100 p-2 rounded-md text-sm">
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
