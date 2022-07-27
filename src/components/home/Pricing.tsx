import { ButtonLink } from '@/components/home';
import { Container, Wide } from '@/layouts/shared';

const Pricing: React.FC = () => {
	return (
		<section className="py-12" id="pricing">
			<Container>
				<Wide
					master={
						<>
							<h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl font-heading">
								Everything you need for{' '}
								<span className="text-red-700 dark:text-red-400">
									$15 a month
								</span>
							</h2>
							<p className="text-lg text-blue-900 dark:text-blue-300">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Laudantium et obcaecati magnam necessitatibus dolorem doloribus
								doloremque sit harum.
							</p>
							<ButtonLink href="#waitlist">Join Waitlist</ButtonLink>
						</>
					}
				>
					<div className="space-y-3">
						<h3 className="font-medium font-heading">All-on-one Platform</h3>
						<p className="text-blue-900 dark:text-blue-300">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consectetur optio quaerat magnam enim, quidem ducimus iusto culpa
							consequatur provident adipisci consequuntur exercitationem earum
							asperiores similique nam veniam velit? Laboriosam, tempore?
						</p>
					</div>
				</Wide>
			</Container>
		</section>
	);
};

export default Pricing;
