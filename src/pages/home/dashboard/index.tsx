import { trpc } from '@/utils/trpc';
import { Button, Text } from '@/components/shared';
import getDomain from '@/utils/get-domain';
import { DashboardLayout } from '@/layouts/home';

export default function DashboardPage() {
	const site = trpc.useQuery(['sites.get-site']);

	return (
		<DashboardLayout>
			<>
				{site.data && (
					<>
						<div className="flex items-center justify-between">
							<Text variant="h1">Home</Text>
							<Button
								color="primary"
								href={getDomain(site?.data?.subdomain)}
								size="lg"
								target="_blank"
							>
								Visit Site
							</Button>
						</div>
						<Text>Domain: {getDomain(site?.data?.subdomain)}</Text>
						<Text>Legion Name: {site?.data?.name}</Text>
					</>
				)}
			</>
		</DashboardLayout>
	);
}
