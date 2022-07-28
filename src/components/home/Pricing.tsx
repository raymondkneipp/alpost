import { Container, Wide } from '@/layouts/shared';
import { HiCheck } from 'react-icons/hi';

type Props = {
	name: string;
	price: number;
	perks: string[];
	special?: boolean;
};

const PricingItem: React.FC<Props> = ({
	name,
	price,
	perks,
	special = false,
}) => {
	return (
		<div
			className={`flex flex-col flex-1 space-y-3 rounded-sm p-6 ${
				special ? 'bg-white dark:bg-neutral-800 shadow-lg' : ''
			}`}
		>
			<div className="space-y-1">
				<h3 className="text-lg font-medium font-heading sm:text-xl md:text-2xl">
					{name}
				</h3>
				<h4 className="text-4xl font-medium font-heading sm:text-5xl md:text-5xl">
					${price}
				</h4>
				<p className="text-sm text-blue-900 dark:text-blue-300">per month</p>
			</div>
			<div className="flex-1">
				{perks.map((perk) => (
					<div className="flex py-3 space-x-3" key={perk}>
						<span className="text-green-900 dark:text-green-300">
							<HiCheck size={24} />
						</span>
						<span className="text-blue-900 dark:text-blue-300">{perk}</span>
					</div>
				))}
			</div>
		</div>
	);
};

const Pricing: React.FC = () => {
	return (
		<section className="py-24" id="pricing">
			<Container>
				<Wide
					master={
						<>
							<h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl font-heading">
								Pricing Plans
							</h2>
						</>
					}
				>
					<PricingItem
						name="Budget"
						price={15}
						perks={[
							'Ready to Use Website',
							'SSL Encryption',
							'Light & Dark Mode',
							'1 Theme',
							'Free Subdomain',
						]}
					/>
					<PricingItem
						name="Basic"
						price={19}
						perks={[
							'Ready to Use Website',
							'SSL Encryption',
							'Light & Dark Mode',
							'5 Themes',
							'Free Subdomain',
							'Custom Domain',
						]}
						special
					/>
					<PricingItem
						name="Pro"
						price={24}
						perks={[
							'Ready to Use Website',
							'SSL Encryption',
							'Light & Dark Mode',
							'17 Themes',
							'Free Subdomain',
							'Custom Domain',
						]}
					/>
				</Wide>
			</Container>
		</section>
	);
};

export default Pricing;
