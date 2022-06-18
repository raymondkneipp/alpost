import { Text } from "@/components";
import getTextColor from "@/utils/get-text-color";
import { Color } from "@prisma/client";
import { useRouter } from "next/router";

type Props = {
	href: string;
	children: string;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	const router = useRouter();

	const active = router.asPath.startsWith(href);

	return (
		<Text
			href={href}
			color={active ? "primary" : "dark"}
			className="px-4 py-2 inline-block rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800"
		>
			{children}
		</Text>
	);
};

export default NavLink;
