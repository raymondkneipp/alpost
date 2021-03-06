import { ButtonLink, IconCard } from '@/components/sites';
import {
	HiClock,
	HiLocationMarker,
	HiOutlineArrowRight,
	HiQuestionMarkCircle,
	HiUsers,
} from 'react-icons/hi';

import { Container, Tall } from '@/layouts/shared';

const UpcomingEvent: React.FC = () => {
	return (
		<section className="py-16">
			<Container>
				<Tall
					master={
						<>
							<h2 className="items-start text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
								Upcoming Event
							</h2>
							<p className="text-lg text-neutral-600 dark:text-neutral-400">
								Check out our upcoming events so you can get involved.
							</p>
							<ButtonLink href="/events" theme="secondary">
								<span className="flex items-center space-x-2">
									<span>All Events</span>
									<HiOutlineArrowRight />
								</span>
							</ButtonLink>
						</>
					}
				>
					<IconCard
						title="Who"
						icon={HiUsers}
						content="We welcome everyone to our meetings."
					/>
					<IconCard
						title="Why"
						icon={HiQuestionMarkCircle}
						content="We will be discussing goals for the next several months."
					/>
					<IconCard
						title="When"
						icon={HiClock}
						content="Our Meeting will take place on Sunday, September 25th from 5:00 pm to 7:00 pm."
					/>
					<IconCard
						title="Where"
						icon={HiLocationMarker}
						content="We will be meeting at the Exampleville American Legion."
					/>
				</Tall>
			</Container>
		</section>
	);
};

export default UpcomingEvent;
