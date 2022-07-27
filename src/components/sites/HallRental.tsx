import { getFg, getRadius } from '@/utils/sites';

import { ButtonLink } from '@/components/sites';
import { ThemeContext } from '@/contexts/sites';
import { Container, Wide } from '@/layouts/shared';
import { useContext } from 'react';
import { HiCheck } from 'react-icons/hi';

type PricingItemProps = {
	name: string;
	description: string;
	perks: string[];
	price: number;
};

const PricingItem: React.FC<PricingItemProps> = ({
	name,
	description,
	perks,
	price,
}) => {
	const { color, radius } = useContext(ThemeContext);
	return (
		<article
			className={`space-y-4 bg-neutral-200 dark:bg-neutral-800 p-4 flex flex-col ${getRadius(
				radius
			)}`}
		>
			<h3 className="text-xl font-medium font-heading text-neutral-900 dark:text-neutral-100">
				{name}
			</h3>
			<h4 className="flex items-baseline space-x-2 text-5xl font-medium font-heading text-neutral-900 dark:text-neutral-100">
				<span>${price}</span>
				<span className="text-sm text-neutral-600 dark:text-neutral-400">
					/ hr
				</span>
			</h4>
			<p className="text-neutral-600 dark:text-neutral-400">{description}</p>
			<ul className="flex-1 space-y-4">
				{perks.map((perk, i) => (
					<li
						key={i}
						className="flex items-center space-x-2 text-neutral-900 dark:text-neutral-100"
					>
						<span className={`${getFg(color)}`}>
							<HiCheck />
						</span>
						<span>{perk}</span>
					</li>
				))}
			</ul>
			<ButtonLink href="/contact" theme="primary">
				Buy {name}
			</ButtonLink>
		</article>
	);
};

const HallRental: React.FC = () => {
	return (
		<section className="py-16">
			<Container>
				<Wide
					master={
						<>
							<h2 className="text-2xl font-medium font-heading md:text-4xl text-neutral-900 dark:text-neutral-100">
								Rent Our Hall
							</h2>
							<p className="max-w-lg text-lg text-neutral-600 dark:text-neutral-400">
								The space is perfect for a variety of special events, from
								weddings and celebrations to birthdays and other gatherings.
							</p>
						</>
					}
				>
					<>
						<PricingItem
							name="Half Hall"
							description="If you budget is tight, only book the half of the hall that you need."
							perks={[
								'100 seats',
								'1 keg',
								'1 bartender',
								'Access to kitchen',
								'10 tables',
							]}
							price={50}
						/>
						<PricingItem
							name="Full Hall"
							description="For larger parties, you can rent the entire hall."
							perks={[
								'200 seats',
								'2 kegs',
								'1 bartender',
								'Access to kitchen',
								'20 tables',
							]}
							price={75}
						/>
						<PricingItem
							name="Holiday"
							description="Have you decided what to do for the holidays? Consider a party at our location."
							perks={[
								'200 seats',
								'3 kegs',
								'2 bartenders',
								'Access to kitchen',
							]}
							price={100}
						/>
					</>
				</Wide>
			</Container>
		</section>
	);
};

export default HallRental;
