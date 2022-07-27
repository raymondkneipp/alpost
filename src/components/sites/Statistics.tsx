import { StatsContext, ThemeContext } from '@/contexts/sites';

import { Container } from '@/layouts/shared';
import { getFg } from '@/utils/sites';
import { useContext } from 'react';
import { HiTrendingUp } from 'react-icons/hi';

type StatisticsItemProps = {
	title: string;
	content: string;
};

const StatisticsItem: React.FC<StatisticsItemProps> = ({ title, content }) => {
	const { color } = useContext(ThemeContext);
	return (
		<dl className="flex flex-col items-center p-4 basis-1/3">
			<dt className="uppercase text-neutral-600 dark:text-neutral-400">
				{title}
			</dt>
			<dd className="flex items-center space-x-2 text-xl font-medium font-heading text-neutral-900 dark:text-neutral-100 md:text-3xl">
				<span>{content}</span>
				<span className={`${getFg(color)}`}>
					<HiTrendingUp />
				</span>
			</dd>
		</dl>
	);
};

const Statistics: React.FC = () => {
	const stats = useContext(StatsContext);

	return (
		<section className="py-16 my-16 bg-neutral-200 dark:bg-neutral-800">
			<Container className="flex flex-col items-center space-y-8">
				<h2 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
					What Makes Our Post Great?
				</h2>
				<div className="flex flex-col flex-wrap items-center justify-around w-full sm:space-y-0 sm:flex-row sm:items-start">
					{stats.map((stat) => (
						<StatisticsItem
							title={stat.title}
							content={stat.content}
							key={stat.id}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Statistics;
