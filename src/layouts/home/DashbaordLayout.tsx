import { trpc } from '@/utils/trpc';
import { Button, Text } from '@/components/shared';
import { SideNav } from '@/components/home';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
	children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
	const site = trpc.useQuery(['sites.get-site']);

	const session = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session.status === 'unauthenticated') {
			router.push('/login');
		}
	}, [session.status]);

	if (session.status === 'loading' || site.status === 'loading') {
		return <p>loading...</p>;
	}

	return (
		<div className="flex min-h-screen divide-x dark:divide-neutral-800">
			<SideNav />
			<div className="flex-1">
				<div className="flex items-center justify-between flex-1 p-4 border-b dark:border-neutral-800">
					<div className="flex items-center space-x-2">
						{session?.data?.user?.image && (
							<div className="relative overflow-hidden rounded-full h-14 w-14">
								<Image
									src={session?.data?.user?.image}
									layout="fill"
									alt="profile picture"
								/>
							</div>
						)}
						<Text variant="h6" size="lg" element="span">
							{session?.data?.user?.name}
						</Text>
					</div>
					<Button color="secondary" onClick={() => signOut()}>
						Sign Out
					</Button>
				</div>

				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
