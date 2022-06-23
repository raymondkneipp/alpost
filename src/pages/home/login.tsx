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
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignUp() {
	const { data: session } = useSession();

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
						<>
							<Text variant="h1" center>
								Sign Up
							</Text>
							<Button color="secondary" onClick={() => signIn("github")}>
								Sign Up with Github
							</Button>
						</>
					)}
				</div>
			</div>
		</Container>
	);
}
