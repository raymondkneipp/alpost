import { ButtonLink } from '@/components/sites';
import { Container } from '@/components/shared';
import { ThemeContext } from '@/contexts/sites';
import { getBg } from '@/utils/sites';
import { useContext } from 'react';

const CTA: React.FC = () => {
	const { color } = useContext(ThemeContext);

	return (
		<section className={`${getBg(color)} py-16`}>
			<Container className="flex flex-col items-center justify-center max-w-screen-sm space-y-4 text-center">
				<h2 className="text-2xl font-medium font-heading md:text-4xl text-neutral-100">
					Join Our Post Today!
				</h2>
				<p className="md:text-lg text-neutral-100 dark:text-neutral-300">
					Join our post and get involved with the nation&apos;s largest
					organization for veterans of all ages.
				</p>
				<ButtonLink href="/apply" theme="light" size="lg">
					Become a Member
				</ButtonLink>
			</Container>
		</section>
	);
};

export default CTA;
