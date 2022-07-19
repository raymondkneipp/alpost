import { Container } from '@/components/shared';
import { HiTrendingUp } from 'react-icons/hi';
import { ThemeContext } from '@/contexts/sites';
import { getFg } from '@/utils/sites';
import { useContext } from 'react';

type StatisticsItemProps = {
	title: string;
	content: string;
};

const StatisticsItem: React.FC<StatisticsItemProps> = ({ title, content }) => {
	const { color } = useContext(ThemeContext);
	return (
		<dl className="flex flex-col items-center sm:items-start">
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
	return (
		<section className="py-16 my-16 bg-neutral-200 dark:bg-neutral-800">
			<Container className="flex flex-col items-center space-y-8">
				<h2 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
					What Makes Our Post Great?
				</h2>
				<div className="flex flex-col items-center justify-around w-full space-y-4 sm:space-y-0 sm:flex-row sm:items-start">
					<StatisticsItem title="Funds Raised" content="$130,532" />
					<StatisticsItem title="Volunteer Hours" content="45,328" />
					<StatisticsItem title="Members" content="152" />
				</div>
			</Container>
		</section>
	);
};

export default Statistics;
