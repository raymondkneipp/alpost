import cn from "variant-classnames";

type Props = {
	children: React.ReactNode;
	className?: string;
	spacer?: boolean;
	centered?: boolean;
};

const Container: React.FC<Props> = ({
	children,
	className = "",
	spacer,
	centered,
}) => {
	const variants = {
		$all: `container mx-auto px-4 py-2 ${className}`,
		centered:
			"flex flex-col items-center justify-center h-full text-center space-y-4",
		spacer: "py-24",
	};

	return <div className={cn(variants, { centered, spacer })}>{children}</div>;
};

export default Container;
