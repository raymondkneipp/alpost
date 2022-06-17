import type { NextPage } from "next";
import { Text, Container } from "@/components";
import { Color, Size, Variant } from "@/components/Text";

const TextPage: NextPage = () => {
	const variants = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
	const colors = ["dark", "light", "primary"];
	const sizes = ["sm", "md", "lg"];

	return (
		<Container>
			<div className="flex">
				{variants.map((v, k) => (
					<div key={k}>
						{sizes.map((s, ke) => (
							<div key={ke}>
								{colors.map((c, key) => (
									<div className={s === "md" ? "border" : "bg-red-500"}>
										<Text
											variant={v as Variant}
											color={c as Color}
											size={s as Size}
											key={`${k}-${ke}-${key}`}
										>
											Hello
										</Text>
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</Container>
	);
};

export default TextPage;
