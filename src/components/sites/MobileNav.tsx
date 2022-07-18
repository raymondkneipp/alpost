import { Fragment, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { HiOutlineMenu } from 'react-icons/hi';
import { MobileNavLink } from '@/components/sites';
import { ThemeContext } from '@/contexts/sites';
import { getRadius } from '@/utils/sites';

const MobileNav: React.FC = () => {
	const { radius } = useContext(ThemeContext);

	return (
		<Popover className="sm:hidden">
			{({ open }) => (
				<>
					<Popover.Button
						className={`text-neutral-900 dark:text-neutral-100 p-2 ${getRadius(
							radius
						)}`}
					>
						<HiOutlineMenu size={24} />
					</Popover.Button>

					<Transition
						show={open}
						enter="transition ease-out duration-100"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition ease-in duration-75"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Popover.Overlay className="fixed inset-0 opacity-50 bg-neutral-400 dark:bg-neutral-700" />
					</Transition>

					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Popover.Panel
							className={`absolute z-10 inset-x-0 bg-neutral-100 dark:bg-neutral-900 mx-4 mt-10 p-2 ${getRadius(
								radius
							)}`}
						>
							<div className="flex flex-col">
								<MobileNavLink href="/">Home</MobileNavLink>
								<MobileNavLink href="/about">About</MobileNavLink>
								<MobileNavLink href="/news">News</MobileNavLink>
								<MobileNavLink href="/events">Events</MobileNavLink>
								<MobileNavLink href="/contact">Contact</MobileNavLink>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default MobileNav;
