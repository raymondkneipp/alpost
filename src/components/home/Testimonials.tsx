import { trpc } from "@/utils/trpc";
import { Button, Container, Logo, Text, Wide } from "@/components";
import getRadius from "@/utils/get-radius";
import getBgColor from "@/utils/get-bg-color";
import getDomain from "@/utils/get-domain";
import { Site } from "@prisma/client";
import Image from "next/image";

const TestimonialItem: React.FC<{ site: Site }> = ({ site }) => {
	return (
		<a
			key={site.id}
			href={getDomain(site.subdomain)}
			className="p-8 rounded-3xl shadow-xl bg-white dark:bg-neutral-800"
		>
			<div>
				<Text size="lg">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					praesentium mollitia eveniet qui architecto cum. Est at omnis veniam,
				</Text>
			</div>
			<hr className="my-4 dark:border-neutral-700" />
			<div className="flex items-center flex-row">
				<div className="flex-1">
					<Text variant="h6" element="h3">
						{site.subdomain} {site.name}
					</Text>
					<Text size="sm">{getDomain(site.subdomain)}</Text>
				</div>
				<Logo size={60} />
			</div>
		</a>
	);
};

const Testimonials: React.FC = () => {
	const { data, isLoading } = trpc.useQuery(["sites.get-all-sites"]);

	if (isLoading || !data) {
		return <div>Loading...</div>;
	}

	return (
		<Container spacer>
			<Wide
				master={
					<div className="max-w-screen-md mx-auto space-y-8">
						<Text variant="h2" center>
							Loved by legions worldwide
						</Text>
						<Text center>
							Our software is so simple that people can’t help but fall in love
							with it. Simplicity is easy when you just skip tons of
							mission-critical features.
						</Text>
					</div>
				}
			>
				<>
					{data.map((site) => (
						<TestimonialItem site={site} />
					))}
				</>
			</Wide>
		</Container>
	);
};

export default Testimonials;
