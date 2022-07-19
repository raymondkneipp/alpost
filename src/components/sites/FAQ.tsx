import { Disclosure, Transition } from '@headlessui/react';

import { Container } from '@/components/shared';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { Tall } from '@/layouts/shared';

type FAQItemProps = {
	question: string;
	answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
	return (
		<Disclosure as="div">
			{({ open }) => (
				<>
					<Disclosure.Button className="flex justify-between w-full py-6 text-xl font-medium text-left font-heading text-neutral-900 dark:text-neutral-100 flex-center">
						<span>{question}</span>
						<div
							className={`flex items-center justify-center transition ${
								open ? 'rotate-90' : ''
							}`}
						>
							<HiOutlineChevronRight size={24} />
						</div>
					</Disclosure.Button>
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Disclosure.Panel className="pb-6 text-neutral-600 dark:text-neutral-400">
							{answer}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	);
};

const FAQ: React.FC = () => {
	return (
		<section className="py-16">
			<Container>
				<Tall
					master={
						<h2 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
							Frequently Asked Questions
						</h2>
					}
				>
					<div className="flex flex-col items-stretch divide-y col-span-full divide-neutral-200 dark:divide-neutral-800">
						<FAQItem
							question="Omnis eos fugiat assumenda impedit?"
							answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos quasi, perspiciatis neque nisi numquam quae autem ipsum consequatur, iste, veritatis obcaecati dicta maiores tempora. "
						/>
						<FAQItem
							question="Omnis eos fugiat assumenda impedit?"
							answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos quasi, perspiciatis neque nisi numquam quae autem ipsum consequatur, iste, veritatis obcaecati dicta maiores tempora. "
						/>
						<FAQItem
							question="Omnis eos fugiat assumenda impedit?"
							answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos quasi, perspiciatis neque nisi numquam quae autem ipsum consequatur, iste, veritatis obcaecati dicta maiores tempora. "
						/>
						<FAQItem
							question="Omnis eos fugiat assumenda impedit?"
							answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos quasi, perspiciatis neque nisi numquam quae autem ipsum consequatur, iste, veritatis obcaecati dicta maiores tempora. "
						/>
					</div>
				</Tall>
			</Container>
		</section>
	);
};

export default FAQ;
