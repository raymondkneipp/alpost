import { Brand } from '@/components/home';
import { NavLink } from '@/components/sites';

const SideNav: React.FC = () => {
	return (
		<nav className="w-full max-w-xs">
			<div className="p-4 border-b dark:border-neutral-800">
				<Brand />
			</div>

			<div className="p-4">
				<NavLink href="/dashboard/">Home</NavLink>
				<NavLink href="/dashboard/theme">Theme</NavLink>
				<NavLink href="/dashboard/settings">Settings</NavLink>
			</div>
		</nav>
	);
};

export default SideNav;
