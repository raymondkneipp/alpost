import { Text, Container, Wide, NewsSkeleton, NewsEmpty } from "@/components";
import getRadius from "@/utils/get-radius";
import { trpc } from "@/utils/trpc";
import { News } from "@prisma/client";
import Image from "next/image";
import usePost from "store/post";
import useTheme from "store/theme";

type NewsItemProps = {
	news: News;
};

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
	const { radius } = useTheme();

	return (
		<article
			className={`bg-neutral-200 dark:bg-neutral-800 rounded-md overflow-hidden ${getRadius(
				radius
			)}`}
		>
			<Image
				src="/hero.jpg"
				width={200}
				height={100}
				layout="responsive"
				objectFit="cover"
			/>
			<div className="p-4">
				<Text variant="h5" element="h3">
					{news.title}
				</Text>
				<Text>{news.content.slice(0, 100)}...</Text>
				<Text color="primary">
					{news.createdAt.toLocaleDateString("en-us", {
						weekday: "long",
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</Text>
			</div>
		</article>
	);
};

type Props = {
	simple?: boolean;
};

const News: React.FC<Props> = ({ simple }) => {
	const { num: subdomain } = usePost();
	const { data, isLoading } = trpc.useQuery([
		"news.get-all-news",
		{ subdomain },
	]);

	console.log(data);

	return (
		<section>
			<Container spacer>
				<Wide
					master={
						<Text variant={simple ? "h2" : "h1"}>Read The Latest News</Text>
					}
				>
					{isLoading || !data ? (
						<NewsSkeleton />
					) : (
						<>
							{data.news.length == 0 && <NewsEmpty />}
							{data.news.map((item) => (
								<NewsItem news={item} key={item.id} />
							))}
						</>
					)}
				</Wide>
			</Container>
		</section>
	);
};

export default News;
