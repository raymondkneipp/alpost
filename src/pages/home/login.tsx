import { useForm, SubmitHandler } from "react-hook-form";
import {
	CreateSiteInputType,
	createSiteValidator,
} from "shared/create-site-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";
import { Button, Container, Error, Input, Text } from "@/components";
import { Logo } from "@/components/home";
import getDomain from "@/utils/get-domain";
import { Color, Radius } from "@prisma/client";
import getBgColor from "@/utils/get-bg-color";
import getRadius from "@/utils/get-radius";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import getTextColor from "@/utils/get-text-color";
import useTheme from "store/theme";

export default function SignUp() {
	const { data: session } = useSession();
	const { color } = useTheme();

	return (
		<Container spacer>
			<div className="absolute top-0 left-0 right-0 min-h-screen flex flex-col space-y-4 items-center justify-center">
				<div className="max-w-sm w-full flex flex-col space-y-4">
					{session ? (
						<>
							<Text variant="h1" center>
								Hello and Welcome {session.user?.email}
							</Text>
							<Button color="secondary" onClick={() => signOut()}>
								Sign Out
							</Button>
						</>
					) : (
						<div className="flex flex-col items-center">
							<Logo />
							<Text variant="h3" element="h1" color="usa">
								ALPost
							</Text>
							<div className="flex-1 flex flex-col self-stretch space-y-4 mt-4">
								<Button
									color="secondary"
									onClick={() => signIn("github")}
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
					)}
				</div>
			</div>
		</Container>
	);
}
