import { Container } from '@/components/shared';
import { Wide } from '@/layouts/shared';

const News: React.FC = () => {
	return (
		<Container className="py-8">
			<Wide
				master={
					<div>
						<h2 className="text-2xl font-bold md:text-4xl text-neutral-900 dark:text-neutral-100">
							Read The Latest News
						</h2>
					</div>
				}
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ratione
					corrupti! Maxime, harum quod? Sunt iusto, laborum alias cum
					repudiandae atque nisi blanditiis fugit doloribus facilis neque, amet
					vel numquam.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ratione
					corrupti! Maxime, harum quod? Sunt iusto, laborum alias cum
					repudiandae atque nisi blanditiis fugit doloribus facilis neque, amet
					vel numquam.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ratione
					corrupti! Maxime, harum quod? Sunt iusto, laborum alias cum
					repudiandae atque nisi blanditiis fugit doloribus facilis neque, amet
					vel numquam.
				</p>
			</Wide>
		</Container>
	);
};

export default News;
