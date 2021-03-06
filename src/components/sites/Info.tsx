import { IconCard } from '@/components/sites';
import { Container, Tall } from '@/layouts/shared';
import { FaBullseye } from 'react-icons/fa';
import { HiFlag } from 'react-icons/hi';

const Info: React.FC = () => {
	return (
		<section className="py-16">
			<Container>
				<Tall
					master={
						<>
							<h1 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
								About Our Post
							</h1>
							<p className="max-w-lg text-lg text-neutral-600 dark:text-neutral-400">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Libero, dolorem cumque sint adipisci dolores vero modi assumenda
								dicta aliquam
							</p>
						</>
					}
				>
					<IconCard
						title="Mission"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						expedita, eius placeat quidem praesentium corrupti blanditiis, quia
						ad magni dicta iusto atque quisquam, impedit eos corporis laborum
						facilis iste minima!"
						icon={FaBullseye}
					/>
					<IconCard
						title="Origin"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						expedita, eius placeat quidem praesentium corrupti blanditiis, quia
						ad magni dicta iusto atque quisquam, impedit eos corporis laborum
						facilis iste minima!"
						icon={HiFlag}
					/>
				</Tall>
			</Container>
		</section>
	);
};

export default Info;
