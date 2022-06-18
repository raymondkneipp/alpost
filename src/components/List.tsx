import { Text } from "@/components";
import React from "react";

type ItemProps = {
	children: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({ children }) => {
	return <Text element="li">{children}</Text>;
};

type ListProps = {
	children: React.ReactNode;
};

export const List: React.FC<ListProps> = ({ children }) => {
	return <ul className="flex flex-col space-y-4">{children}</ul>;
};
