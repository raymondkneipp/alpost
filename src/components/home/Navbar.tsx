import { useState, Fragment } from "react";
import { Text, Button, Container } from "@/components";
import { Logo } from "@/components/home";
import getTextColor from "@/utils/get-text-color";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import useTheme from "store/theme";
import { NavLink } from "../sites";
import { Popover, Transition } from "@headlessui/react";

const Navbar: React.FC = () => {
	const { color } = useTheme();

	return (
		<nav className="py-10">
			<Container className="flex items-center justify-between md:space-x-8 relative">
				<Link href="/">
					<a className="flex items-center space-x-2">
						<Logo />
						<Text variant="h5" size="sm" element="span" color="usa">
							ALPost
						</Text>
					</a>
				</Link>
				<div className={`flex-1 hidden space-x-2 md:flex`}>
					<NavLink href="/#features">Features</NavLink>
					<NavLink href="/#testimonials">Testimonials</NavLink>
					<NavLink href="/#pricing">Pricing</NavLink>
				</div>
				<div className="flex space-x-2">
					<div className="hidden md:block">
						<NavLink href="/login">Sign In</NavLink>
					</div>
					<Button href="/login">Get Started</Button>

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
									<Popover.Panel className="absolute inset-x-0 m-4 z-10 dark:bg-neutral-900 bg-neutral-100 p-4 rounded-3xl shadow-xl">
										<div className="grid grid-cols-1">
											<NavLink href="/#features">Features</NavLink>
											<NavLink href="/#testimonials">Testimonials</NavLink>
											<NavLink href="/#pricing">Pricing</NavLink>
											<hr className="mx-4 my-2 dark:border-neutral-800" />
											<NavLink href="/login">Sign In</NavLink>
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

// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
//           Options
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Account settings
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Support
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   License
//                 </a>
//               )}
//             </Menu.Item>
//             <form method="POST" action="#">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     type="submit"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block w-full text-left px-4 py-2 text-sm'
//                     )}
//                   >
//                     Sign out
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }
