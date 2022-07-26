import { Container } from '@/components/shared';
import { ButtonLink } from '@/components/sites';
import { getFg } from '@/utils/sites';
import { News } from '@prisma/client';
import { ThemeContext } from 'contexts/sites/ThemeContext';
import { useContext } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

type Props = {
	post: News;
};

const Post: React.FC<Props> = ({ post }) => {
	const { color } = useContext(ThemeContext);

	return (
		<section className="py-16">
			<Container className="flex flex-col items-start space-y-4 max-w-prose">
				<ButtonLink href="/news">
					<span className="inline-flex items-center space-x-2">
						<HiOutlineArrowLeft size={16} />
						<span>All News</span>
					</span>
				</ButtonLink>
				<h1 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
					{post.title}
				</h1>

				<p className={`${getFg(color)}`}>
					{new Date(post.createdAt).toDateString()}
				</p>

				<hr className="border-neutral-200 dark:border-neutral-800" />

				<p className="text-neutral-600 dark:text-neutral-400">{post.content}</p>
			</Container>
		</section>
	);
};

export default Post;
