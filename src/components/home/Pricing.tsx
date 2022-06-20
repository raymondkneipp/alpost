import { Button, Container, Text, List, Item, Wide } from "@/components";
import { FaCheck } from "react-icons/fa";

type PricingItemProps = {
	name: string;
	price: number;
	perks: string[];
};

const PricingItem: React.FC<PricingItemProps> = ({ name, price, perks }) => {
	return (
		<div className="bg-neutral-200 dark:bg-neutral-800 rounded-md p-4 flex flex-col space-y-4">
			<div className="flex flex-col">
				<Text variant="h5" element="h3">
					{name}
				</Text>

				<Text variant="h2" element="h4">
					${price}
				</Text>
			</div>

			<List>
				{perks.map((perk, i) => (
					<Item key={`${i}${name}`}>
						<FaCheck className="mr-2 text-green-600 dark:text-green-400" />
						{perk}
					</Item>
				))}
			</List>

			<div className="flex flex-col justify-end flex-1">
				<Button href="/create">Buy {name}</Button>
			</div>
		</div>
	);
};

const Pricing: React.FC = () => {
	return (
		<Container spacer>
			<Wide master={<Text variant="h2">Pricing Plans</Text>}>
				<PricingItem
					name="Budget"
					price={14}
					perks={[
						"SSL Encryption",
						"Light & Dark Mode",
						"3 Themes",
						"Free Subdomain",
					]}
				/>
				<PricingItem
					name="Basic"
					price={19}
					perks={[
						"SSL Encryption",
						"Light & Dark Mode",
						"6 Themes",
						"Custom Domain",
					]}
				/>
				<PricingItem
					name="Pro"
					price={24}
					perks={["SSL Encryption", "Light & Dark Mode", "9 Themes"]}
				/>
			</Wide>
		</Container>
	);
};

export default Pricing;
