import { OfficersContext, ThemeContext } from '@/contexts/sites';

import ButtonLink from './ButtonLink';
import { Container } from '@/components/shared';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Officers } from '@prisma/client';
import { Wide } from '@/layouts/shared';
import { getRadius } from '@/utils/sites';
import { useContext } from 'react';

type OfficerItemProps = {
	data: Officers;
};

const OfficerItem: React.FC<OfficerItemProps> = ({ data }) => {
	const { radius } = useContext(ThemeContext);

	return (
		<article
			className={`${getRadius(
				radius
			)} bg-neutral-200 dark:bg-neutral-800 flex flex-col flex-1 p-4 space-y-4 text-center sm:text-left`}
		>
			<div className="flex flex-col items-center space-y-4 sm:space-x-4 sm:flex-row sm:space-y-0">
				{/* <Image
					src="/shared/officer.png"
					width={100}
					height={100}
					className={`${getRadius(radius)}`}
					alt={`${data.name} portrait`}
				/> */}
				<div className="flex flex-col items-center space-y-2 sm:items-start">
					<h3 className="text-xl font-medium font-heading text-neutral-900 dark:text-neutral-100">
						{data.name}
					</h3>
					<p className="text-neutral-600 dark:text-neutral-400">{data.title}</p>
				</div>
			</div>
			<p className="text-neutral-600 dark:text-neutral-400">
				{data.description}
			</p>
		</article>
	);
};

type MeetOfficersProps = {
	simple?: boolean;
};

const MeetOfficers: React.FC<MeetOfficersProps> = ({ simple = false }) => {
	const officers = useContext(OfficersContext);
	const { radius } = useContext(ThemeContext);

	return (
		<section className="py-16" id="officers">
			<Container>
				<Wide
					master={
						<>
							<h2 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
								Meet Our Officers
							</h2>
							<p className="text-neutral-600 dark:text-neutral-400">
								Meet the extraordinary members in charge and responsible for our
								post.
							</p>
							{simple && (
								<ButtonLink href="/about#officers">
									<span className="flex items-center space-x-2">
										<span>All Officers</span>
										<HiOutlineArrowRight />
									</span>
								</ButtonLink>
							)}
						</>
					}
				>
					<>
						{officers.length > 0 ? (
							<>
								{officers
									.slice(0, simple ? 3 : officers.length)
									.map((officerItem) => (
										<OfficerItem key={officerItem.id} data={officerItem} />
									))}
							</>
						) : (
							<div
								className={`h-60 bg-neutral-200 dark:bg-neutral-800 col-span-full flex items-center justify-center ${getRadius(
									radius
								)}`}
							>
								<p className="text-lg text-neutral-600 dark:text-neutral-400">
									We currently do not have any officers
								</p>
							</div>
						)}
					</>
				</Wide>
			</Container>
		</section>
	);
};

export default MeetOfficers;
