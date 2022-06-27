import { useForm, SubmitHandler } from "react-hook-form";
import {
	CreateSiteInputType,
	createSiteValidator,
} from "shared/create-site-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";
import { Button, Container, Error, Input, Text } from "@/components";
import { Brand, Logo } from "@/components/home";
import getDomain from "@/utils/get-domain";
import { Color, Radius } from "@prisma/client";
import getBgColor from "@/utils/get-bg-color";
import getRadius from "@/utils/get-radius";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import getTextColor from "@/utils/get-text-color";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

export default function DashboardPage() {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <p>...</p>;
	}

	if (status === "unauthenticated") {
		router.push("/login");
		return null;
	}

	return (
		<Container spacer>
			<div className="absolute top-0 left-0 right-0 min-h-screen flex flex-col space-y-4 items-center justify-center">
				<div className="max-w-sm w-full flex flex-col space-y-4">
					<Text variant="h1" center>
						Hello and Welcome {session?.user?.email}
					</Text>
					<Button color="secondary" onClick={() => signOut()}>
						Sign Out
					</Button>
				</div>
			</div>
		</Container>
	);
}
