import { Color, Radius } from "@prisma/client";
import create from "zustand";

interface ThemeState {
	color: Color;
	setColor: (newColor: Color) => void;
	radius: Radius;
	setRadius: (newRadius: Radius) => void;
}

const useTheme = create<ThemeState>((set) => ({
	color: Color.RED,
	setColor: (newColor) => set((state) => ({ color: newColor })),
	radius: Radius.XXXL,
	setRadius: (newRadius) => set((state) => ({ radius: newRadius })),
}));

export default useTheme;
