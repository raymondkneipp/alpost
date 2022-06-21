import { useForm, SubmitHandler } from "react-hook-form";
import {
	CreateSiteInputType,
	createSiteValidator,
} from "shared/create-site-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";
import { Button, Container, Error, Input, Logo, Text } from "@/components";
import getDomain from "@/utils/get-domain";
import { Color, Radius } from "@prisma/client";
import getBgColor from "@/utils/get-bg-color";
import getRadius from "@/utils/get-radius";

export default function CreatePage() {
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm<CreateSiteInputType>({
		resolver: zodResolver(createSiteValidator),
		defaultValues: {
			color: Color.RED,
			radius: Radius.REGULAR,
		},
	});

	const watchColor = watch("color");
	const watchRadius = watch("radius");

	const { mutate, isLoading, data } = trpc.useMutation("sites.create", {
		onSuccess: (data) => {
			window.location.replace(getDomain(data));
		},
	});

	return (
		<Container spacer>
			<div className="absolute top-0 left-0 right-0 min-h-screen flex flex-col space-y-4 items-center justify-center">
				<div className="max-w-sm w-full flex flex-col space-y-4">
					<Text variant="h1" center>
						Create
					</Text>

					<Text variant="p" element="h2" center>
						What legion do you operate?
					</Text>
					<form
						className="flex flex-col space-y-4 w-full"
						onSubmit={handleSubmit((data) => {
							mutate(data);
						})}
					>
						<Input
							disabled={isLoading}
							label="Legion Name"
							register={register("name")}
							placeholder="Ex. John Doe"
						/>

						<Error error={errors.name} />

						<Input
							disabled={isLoading}
							label="Post Number"
							register={register("subdomain")}
							placeholder="Ex. 123"
							type="number"
						/>

						<Error error={errors.subdomain} />

						<Text variant="p" element="h2" center>
							Where is you legion located?
						</Text>

						<Input
							disabled={isLoading}
							label="Street"
							register={register("street")}
							placeholder="Ex. 123 Main Street"
						/>

						<Error error={errors.street} />

						<Input
							disabled={isLoading}
							label="City"
							register={register("city")}
							placeholder="Ex. Exampleville"
						/>

						<Error error={errors.city} />

						<Input
							disabled={isLoading}
							label="State"
							register={register("state")}
						/>

						<Error error={errors.state} />

						<Input
							disabled={isLoading}
							label="Zip"
							register={register("zip")}
						/>

						<Error error={errors.zip} />

						<Text variant="p" element="h2" center>
							What social media accounts does your legion use?
						</Text>

						<Input
							disabled={isLoading}
							label="Facebook"
							register={register("facebook")}
						/>

						<Error error={errors.facebook} />

						<Input
							disabled={isLoading}
							label="Instagram"
							register={register("instagram")}
						/>

						<Error error={errors.instagram} />

						<Input
							disabled={isLoading}
							label="Twitter"
							register={register("twitter")}
						/>

						<Error error={errors.twitter} />

						<Input
							disabled={isLoading}
							label="YouTube"
							register={register("youtube")}
						/>

						<Error error={errors.youtube} />

						<Text variant="p" element="h2" center>
							How would you like your site to look?
						</Text>

						<div className="flex flex-col space-y-1 flex-1">
							<Text variant="h6" element="label" htmlFor="color">
								Color
							</Text>
							<div className="flex space-x-2">
								<select
									{...register("color")}
									className="rounded-md dark:bg-neutral-800 bg-neutral-200 text-black dark:text-white placeholder:text-neutral-400 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 focus:bg-transparent focus:ring-0 form-input disabled:cursor-not-allowed disabled:text-opacity-30 dark:disabled:text-opacity-30 flex-1"
									id="color"
								>
									{Object.keys(Color).map((color, i) => (
										<option key={color} value={color}>
											{color}
										</option>
									))}
								</select>

								<div
									className={`${getBgColor(
										watchColor
									)} rounded-md w-10 border border-black dark:border-white`}
								></div>
							</div>
						</div>

						<Error error={errors.color} />

						<div className="flex flex-col space-y-1 flex-1">
							<Text variant="h6" element="label" htmlFor="radius">
								Radius
							</Text>
							<div className="flex space-x-2">
								<select
									{...register("radius")}
									className="rounded-md dark:bg-neutral-800 bg-neutral-200 text-black dark:text-white placeholder:text-neutral-400 border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 focus:bg-transparent focus:ring-0 form-input disabled:cursor-not-allowed disabled:text-opacity-30 dark:disabled:text-opacity-30 flex-1"
									id="color"
								>
									{Object.keys(Radius).map((radius, i) => (
										<option key={radius} value={radius}>
											{radius}
										</option>
									))}
								</select>

								<div
									className={`${getRadius(
										watchRadius
									)} w-10 bg-transparent border-black dark:border-white border-2`}
								></div>
							</div>
						</div>

						<Error error={errors.radius} />

						<input
							disabled={isLoading}
							type="submit"
							value="Create"
							className="dark:bg-white dark:text-black bg-black text-white rounded-md p-2"
						/>

						<Button color="ghost" href="/">
							Cancel
						</Button>
					</form>
				</div>
			</div>
		</Container>
	);
}
