import { Color } from "@prisma/client";
import create from "zustand";

interface ThemeState {
	color: Color;
	setColor: (newColor: Color) => void;
}

const useTheme = create<ThemeState>((set) => ({
	color: Color.RED,
	setColor: (newColor) => set((state) => ({ color: newColor })),
}));

export default useTheme;
