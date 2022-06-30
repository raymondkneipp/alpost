import { Button, Container, Error, Input, Text } from '@/components/shared';
import { Brand, Logo } from '@/components/home';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { trpc } from '@/utils/trpc';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LoginPage() {
	const session = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session.status === 'authenticated') {
			router.push('/dashboard');
		}
	}, [session.status]);

	if (session.status === 'loading') {
		return <p>loading...</p>;
	}

	return (
		<Container spacer>
			<div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center min-h-screen space-y-4">
				<div className="flex flex-col w-full max-w-sm space-y-4">
					<div className="flex flex-col items-center">
						<Brand />
						<div className="flex flex-col self-stretch flex-1 mt-4 space-y-4">
							<Button
								color="secondary"
								onClick={() => signIn('github')}
								size="lg"
							>
								<FaGithub size={30} className="mr-2" />
								Continue with Github
							</Button>
							<Button color="secondary" size="lg">
								<FaGoogle size={30} className="mr-2" />
								Continue with Google
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
