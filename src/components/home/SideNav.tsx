import { Brand } from "@/components/home";
import { NavLink } from "@/components/sites";

const SideNav: React.FC = () => {
	return (
		<nav className="max-w-xs w-full">
			<div className="border-b dark:border-neutral-800 p-4">
				<Brand />
			</div>

			<div className="p-4">
				<NavLink href="/dashboard/">Home</NavLink>
				<NavLink href="/dashboard/settings">Settings</NavLink>
			</div>
		</nav>
	);
};

export default SideNav;
