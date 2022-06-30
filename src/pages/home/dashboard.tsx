import { useForm, SubmitHandler } from 'react-hook-form';
import {
	CreateSiteInputType,
	createSiteValidator,
} from 'shared/create-site-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '@/utils/trpc';
import { Button, Container, Error, Input, Text } from '@/components/shared';
import { Brand, Logo, SideNav } from '@/components/home';
import getDomain from '@/utils/get-domain';
import { Color, Radius } from '@prisma/client';
import getBgColor from '@/utils/get-bg-color';
import getRadius from '@/utils/get-radius';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import getTextColor from '@/utils/get-text-color';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import Image from 'next/image';
import { useEffect } from 'react';

export default function DashboardPage() {
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

				<div className="p-4">
					{site.data && (
						<>
							<div className="flex items-center justify-between">
								<Text variant="h1">Dashboard</Text>
								<Button
									color="primary"
									href={getDomain(site?.data?.subdomain)}
									size="lg"
								>
									Visit Site
								</Button>
							</div>
							<Text>Domain: {getDomain(site?.data?.subdomain)}</Text>
							<Text>Legion Name: {site?.data?.name}</Text>
							<Text>Color: {site?.data?.color}</Text>
							<Text>Radius: {site?.data?.radius}</Text>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
