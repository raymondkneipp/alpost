import { useForm, SubmitHandler } from "react-hook-form";
import {
	CreateSiteInputType,
	createSiteValidator,
} from "shared/create-site-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";
import Link from "next/link";
import { Text } from "@/components";

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
		<div className="h-screen flex flex-col space-y-4 items-center justify-center">
			<Text variant="h1">Create Post</Text>
			<Link href="/" passHref>
				<Text element="a">Back</Text>
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
					className="rounded-md dark:bg-neutral-800 bg-neutral-200 text-black dark:text-white placeholder:text-neutral-400 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 focus:bg-transparent focus:ring-0 form-input"
				/>
				{errors.name && (
					<div className="bg-red-700 dark:bg-red-900 text-white dark:text-red-100 p-2 rounded-md text-sm">
						{errors.name.message}
					</div>
				)}
				<input
					disabled={isLoading}
					{...register("subdomain")}
					type="text"
					placeholder="Post #"
					className="rounded-md dark:bg-neutral-800 bg-neutral-200 text-black dark:text-white placeholder:text-neutral-400 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 focus:bg-transparent focus:ring-0 form-input"
				/>
				{errors.subdomain && (
					<div className="bg-red-700 dark:bg-red-900 text-white dark:text-red-100 p-2 rounded-md text-sm">
						{errors.subdomain.message}
					</div>
				)}
				<input
					disabled={isLoading}
					type="submit"
					value="Create"
					className="dark:bg-white dark:text-black bg-black text-white rounded-md p-2"
				/>
			</form>
		</div>
	);
}
