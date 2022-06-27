import { Container, Logo, Text } from "@/components";
import { NavLink } from "@/components/sites";
import getTextColor from "@/utils/get-text-color";
import { Color } from "@prisma/client";
import { useTheme } from "@/store";
import { useState, Fragment } from "react";
import { Brand } from "@/components/home";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";

type Props = {
	post: string;
};

const Navbar: React.FC<Props> = ({ post }) => {
	const { color } = useTheme();

	return (
		<nav className="bg-neutral-100 dark:bg-neutral-900 fixed top-0 left-0 right-0 shadow-md z-40">
			<Container>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Logo />
						<Text variant="h5" element="span" className={getTextColor(color)}>
							Post {post}
						</Text>
					</div>

					<div className="md:flex items-center space-x-4 hidden">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/about">About</NavLink>
						<NavLink href="/news">News</NavLink>
						<NavLink href="/events">Events</NavLink>
						<NavLink href="/contact">Contact</NavLink>
					</div>

					<Popover className="md:hidden">
						{({ open }) => (
							<>
								<Popover.Button className="w-10 h-10 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center rounded-3xl">
									<FaBars size={20} />
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
									<Popover.Overlay className="bg-neutral-400 dark:bg-neutral-700 fixed inset-0 opacity-50" />
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
									<Popover.Panel className="absolute inset-x-0 m-4 mt-10 z-10 dark:bg-neutral-900 bg-neutral-100 p-4 rounded-3xl shadow-xl">
										<div className="grid grid-cols-1">
											<NavLink href="/">Home</NavLink>
											<NavLink href="/about">About</NavLink>
											<NavLink href="/news">News</NavLink>
											<NavLink href="/events">Events</NavLink>
											<NavLink href="/contact">Contact</NavLink>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
