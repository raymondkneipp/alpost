import { useForm, SubmitHandler } from "react-hook-form";
import {
	CreateSiteInputType,
	createSiteValidator,
} from "shared/create-site-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/utils/trpc";
import { Button, Container, Error, Input, Text } from "@/components";
import { Brand, Logo, SideNav } from "@/components/home";
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
import Image from "next/image";

export default function DashboardPage() {
	const { data, status } = useSession();
	const session = data as Session & { user: { id: string } };
	const router = useRouter();

	const { data: site, isLoading } = trpc.useQuery(["sites.get-site"]);

	if (status === "loading" || isLoading) {
		return <p>...</p>;
	}

	if (!site) {
		router.push("/create");
		return null;
	}

	if (status === "unauthenticated") {
		router.push("/login");
		return null;
	}

	if (!session || !session?.user || !session?.user?.image) {
		return "error";
	}

	return (
		<div className="flex divide-x dark:divide-neutral-800 min-h-screen">
			<SideNav />
			<div className="flex-1">
				<div className="flex items-center flex-1 justify-between border-b dark:border-neutral-800 p-4">
					<div className="space-x-2 flex items-center">
						<div className="rounded-full h-14 w-14 relative overflow-hidden">
							<Image src={session?.user?.image} layout="fill" />
						</div>
						<Text variant="h6" size="lg" element="span">
							{session?.user?.name}
						</Text>
					</div>
					<Button color="secondary" onClick={() => signOut()}>
						Sign Out
					</Button>
				</div>

				<div className="p-4">
					<div className="flex items-center justify-between">
						<Text variant="h1">Dashboard</Text>
						<Button color="primary" href={getDomain(site.subdomain)} size="lg">
							Visit Site
						</Button>
					</div>
					<Text>Domain: {getDomain(site.subdomain)}</Text>
					<Text>Legion Name: {site.name}</Text>
					<Text>Color: {site.color}</Text>
					<Text>Radius: {site.radius}</Text>
				</div>
			</div>
		</div>
	);
}
