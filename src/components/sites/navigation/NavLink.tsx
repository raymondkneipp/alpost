import Link from "next/link";
import { Text } from "@/components";
import { useRouter } from "next/router";

type Props = {
	href: string;
	children: string;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
	const router = useRouter();

	const active = router.asPath.startsWith(href);

	return (
		<Link href={href} passHref>
			<Text
				variant="p"
				element="a"
				color={active ? "primary" : "dark"}
				className="px-4 py-2 rounded-md hover:bg-neutral-200"
			>
				{children}
			</Text>
		</Link>
	);
};

export default NavLink;
