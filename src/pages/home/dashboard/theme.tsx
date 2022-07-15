import { trpc } from '@/utils/trpc';
import getDomain from '@/utils/get-domain';
import { DashboardLayout } from '@/layouts/home';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
	UpdateThemeInputType,
	updateThemeValidator,
} from 'shared/update-theme-validator';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Button,
	Container,
	Error,
	Input,
	Logo,
	Text,
} from '@/components/shared';
import { Color, Radius } from '@prisma/client';
import getBgColor from '@/utils/get-bg-color';
import getRadius from '@/utils/get-radius';
import { useRouter } from 'next/router';

export default function DashboardPage() {
	const site = trpc.useQuery(['sites.get-site']);
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm<UpdateThemeInputType>({
		resolver: zodResolver(updateThemeValidator),
		defaultValues: {
			color: site?.data?.color,
			radius: site?.data?.radius,
		},
	});

	const watchColor = watch('color');
	const watchRadius = watch('radius');

	const router = useRouter();

	const { mutate, isLoading, data } = trpc.useMutation('sites.update-theme', {
		onSuccess: (data) => {
			// if (data?.site) {
			// 	router.push('/dashboard');
			// }
			alert('changes made');
		},
	});

	return (
		<DashboardLayout>
			<>
				{site.data && (
					<>
						<div className="flex items-center justify-between">
							<Text variant="h1">Theme</Text>
							<Button
								color="primary"
								href={getDomain(site?.data?.subdomain)}
								size="lg"
								target="_blank"
							>
								Visit Site
							</Button>
						</div>

						<Text>Color: {site?.data?.color}</Text>
						<Text>Radius: {site?.data?.radius}</Text>

						<form
							onSubmit={handleSubmit((data) => {
								console.log('updating...');
								mutate(data);
							})}
						>
							<div className="flex flex-col flex-1 space-y-1">
								<Text variant="h6" element="label" htmlFor="color">
									Color
								</Text>
								<div className="flex space-x-2">
									<select
										{...register('color')}
										className="flex-1 text-black border-transparent rounded-md dark:bg-neutral-800 bg-neutral-200 dark:text-white placeholder:text-neutral-400 focus:border-neutral-300 dark:focus:border-neutral-700 focus:bg-transparent focus:ring-0 form-input disabled:cursor-not-allowed disabled:text-opacity-30 dark:disabled:text-opacity-30"
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
										)} rounded-md w-10 border-2 border-black dark:border-white`}
									></div>
								</div>
							</div>

							<Error error={errors.color} />

							<div className="flex flex-col flex-1 space-y-1">
								<Text variant="h6" element="label" htmlFor="radius">
									Radius
								</Text>
								<div className="flex space-x-2">
									<select
										{...register('radius')}
										className="flex-1 text-black border-transparent rounded-md dark:bg-neutral-800 bg-neutral-200 dark:text-white placeholder:text-neutral-400 focus:border-neutral-300 dark:focus:border-neutral-700 focus:bg-transparent focus:ring-0 form-input disabled:cursor-not-allowed disabled:text-opacity-30 dark:disabled:text-opacity-30"
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
								value="Save"
								className="p-2 text-white bg-black rounded-md cursor-pointer dark:bg-white dark:text-black disabled:bg-red-500"
							/>
						</form>
					</>
				)}
			</>
		</DashboardLayout>
	);
}
