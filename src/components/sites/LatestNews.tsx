import { NewsContext, ThemeContext } from '@/contexts/sites';
import { getFg, getRadius } from '@/utils/sites';

import { Container } from '@/components/shared';
import Image from 'next/future/image';
import Link from 'next/link';
import { News } from '@prisma/client';
import { Wide } from '@/layouts/shared';
import { useContext } from 'react';

type NewsItemProps = {
	data: News;
};

const NewsItem: React.FC<NewsItemProps> = ({ data }) => {
	const { radius, color } = useContext(ThemeContext);

	return (
		<Link href={`/news/${data.id}`}>
			<article
				className={`${getRadius(
					radius
				)} overflow-hidden bg-neutral-200 dark:bg-neutral-800 flex flex-col`}
			>
				<Image src="/shared/american-flag.jpg" width={800} height={400} />
				<div className="flex flex-col flex-1 p-4 space-y-4">
					<h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
						{data.title}
					</h3>
					<p className="flex-1 text-neutral-600 dark:text-neutral-400">
						{data.content.substring(0, 100)}...
					</p>
					<footer className="pt-4 border-t border-neutral-300 dark:border-neutral-700">
						<p className={`text-sm ${getFg(color)}`}>
							{new Date(data.createdAt).toDateString()}
						</p>
					</footer>
				</div>
			</article>
		</Link>
	);
};

type LatestNewsProps = {
	simple?: boolean;
};

const LatestNews: React.FC<LatestNewsProps> = ({ simple = false }) => {
	const news = useContext(NewsContext);
	const { radius } = useContext(ThemeContext);

	return (
		<Container className="py-16">
			<Wide
				master={
					<div>
						<h2 className="text-2xl font-bold md:text-4xl text-neutral-900 dark:text-neutral-100">
							Read The Latest News
						</h2>
					</div>
				}
			>
				<>
					{news.length > 0 ? (
						<>
							{news.slice(0, simple ? 3 : news.length).map((newsItem) => (
								<NewsItem key={newsItem.id} data={newsItem} />
							))}
						</>
					) : (
						<div
							className={`h-60 bg-neutral-200 dark:bg-neutral-800 col-span-full flex items-center justify-center ${getRadius(
								radius
							)}`}
						>
							<p className="text-lg text-neutral-600 dark:text-neutral-400">
								You are all caught up
							</p>
						</div>
					)}
				</>
			</Wide>
		</Container>
	);
};

export default LatestNews;
