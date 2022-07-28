import { Container, Wide } from '@/layouts/shared';
import React from 'react';
import {
	HiAtSymbol,
	HiCalendar,
	HiCash,
	HiChartBar,
	HiChatAlt2,
	HiColorSwatch,
	HiGlobeAlt,
	HiLightningBolt,
	HiMoon,
	HiSparkles,
	HiSpeakerphone,
	HiUserAdd,
} from 'react-icons/hi';

import { IconCard } from '@/components/home';

const Features: React.FC = () => {
	return (
		<section className="py-24" id="features">
			<Container className="space-y-24">
				<Wide
					master={
						<>
							<h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl font-heading">
								Features
							</h2>
						</>
					}
				>
					<IconCard icon={HiSpeakerphone} title="Announcements">
						Make sure members know vital events with banner notifications and
						news posts.
					</IconCard>
					<IconCard icon={HiCalendar} title="Events">
						You don&apos;t have to miss an event again when you create an event
						listing on your Web site.
					</IconCard>
					<IconCard icon={HiColorSwatch} title="Customizable Design">
						We offer 17 different themes for you to choose from, along with many
						other settings to change the look of your site.
					</IconCard>
					<IconCard icon={HiMoon} title="Dark Mode">
						By default, light and dark modes are provided.
					</IconCard>
					<IconCard icon={HiChartBar} title="Statistics">
						Present your post in a way that highlights why it is the best.
					</IconCard>
					<IconCard icon={HiCash} title="Hall Rental">
						Make renting your hall easier with an online form.
					</IconCard>
					<IconCard icon={HiChatAlt2} title="Engage With Visitors">
						Visitors can easily get in touch using the contact form in your
						website.
					</IconCard>
					<IconCard icon={HiSparkles} title="Modern Design">
						We offer well-designed and easy to navigate websites.
					</IconCard>
					<IconCard icon={HiLightningBolt} title="Performance">
						We offer a fast, search engine optimized site to gain and retain
						members.
					</IconCard>
				</Wide>

				<Wide
					master={
						<>
							<h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl font-heading">
								Features Coming Soon
							</h2>
						</>
					}
				>
					<IconCard icon={HiUserAdd} title="Member Application">
						Make it easier than ever for anyone to apply to become a member.
					</IconCard>
					<IconCard icon={HiCash} title="Automatic Due Collection">
						Collect membership dues on a regular schedule automatically.
					</IconCard>
					<IconCard icon={HiGlobeAlt} title="Custom Domains">
						Choose a unique domain name for your website instead of the free
						subdomain.
					</IconCard>
					<IconCard icon={HiAtSymbol} title="Emails">
						Communicate via email with your legion email.
					</IconCard>
					<IconCard icon={HiChatAlt2} title="Instant Messaging">
						Easily communicate with all legion members privately.
					</IconCard>
				</Wide>
			</Container>
		</section>
	);
};

export default Features;
