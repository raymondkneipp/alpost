import { EmailGrabber } from '@/components/home';
import { Container } from '@/layouts/shared';

const Waitlist: React.FC = () => {
	return (
		<section id="waitlist" className="py-24 bg-red-700 dark:bg-red-400">
			<Container className="grid items-end gap-12 lg:grid-cols-2">
				<div className="space-y-6">
					<h2 className="text-2xl font-medium sm:text-3xl md:text-4xl font-heading text-neutral-100 dark:text-neutral-900">
						Join The Waitlist to Get Early Access
					</h2>
					<p className="text-lg text-neutral-200 dark:text-neutral-800">
						Your new legion website is coming soon! We will notify you via email
						when you can start building a website for your legion.
					</p>
				</div>
				<EmailGrabber />
			</Container>
		</section>
	);
};

export default Waitlist;
