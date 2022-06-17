import { Text } from "@/components";
import React from "react";

type ListItemElement = "li" | "dd";
type ListElement = "ul" | "dl";

type ItemProps = {
	children: React.ReactNode;
	element?: ListItemElement;
	key?: any;
};

export const Item: React.FC<ItemProps> = ({ element, children }) => {
	return <Text element={element}>{children}</Text>;
};

type ListProps = {
	children: React.ReactElement<ItemProps>[];
	title?: string;
};

export const List: React.FC<ListProps> = ({ children, title }) => {
	let listElement: ListElement = "ul";
	let listItemElement: ListItemElement = "li";

	if (title) {
		listElement = "dl";
		listItemElement = "dd";
	}

	const items = children.map((item, i) =>
		React.cloneElement(item, { element: listItemElement, key: i })
	);

	const list = React.createElement(listElement, { className: "" }, items);

	return (
		<>
			{title && (
				<Text element="dt" variant="h6" cap>
					{title}
				</Text>
			)}
			{list}
		</>
	);
};
