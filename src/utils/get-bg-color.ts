import { Color } from "@prisma/client";

export default function getBgColor(color: Color) {
	let bg;

	switch (color) {
		case Color.BLACK:
			return "bg-black dark:bg-black";
		case Color.SLATE:
			return "bg-slate-700 dark:bg-slate-900";
		case Color.GRAY:
			return "bg-gray-700 dark:bg-gray-900";
		case Color.ZINC:
			return "bg-zinc-700 dark:bg-zinc-900";
		case Color.NEUTRAL:
			return "bg-neutral-700 dark:bg-neutral-900";
		case Color.STONE:
			return "bg-stone-700 dark:bg-stone-900";
		case Color.RED:
			return "bg-red-700 dark:bg-red-900";
		case Color.ORANGE:
			return "bg-orange-700 dark:bg-orange-900";
		case Color.AMBER:
			return "bg-amber-700 dark:bg-amber-900";
		case Color.YELLOW:
			return "bg-yellow-700 dark:bg-yellow-900";
		case Color.LIME:
			return "bg-lime-700 dark:bg-lime-900";
		case Color.GREEN:
			return "bg-green-700 dark:bg-green-900";
		case Color.EMERALD:
			return "bg-emerald-700 dark:bg-emerald-900";
		case Color.TEAL:
			return "bg-teal-700 dark:bg-teal-900";
		case Color.CYAN:
			return "bg-cyan-700 dark:bg-cyan-900";
		case Color.SKY:
			return "bg-sky-700 dark:bg-sky-900";
		case Color.BLUE:
			return "bg-blue-700 dark:bg-blue-900";
		case Color.INDIGO:
			return "bg-indigo-700 dark:bg-indigo-900";
		case Color.VIOLET:
			return "bg-violet-700 dark:bg-violet-900";
		case Color.PURPLE:
			return "bg-purple-700 dark:bg-purple-900";
		case Color.FUCHSIA:
			return "bg-fuchsia-700 dark:bg-fuchsia-900";
		case Color.PINK:
			return "bg-pink-700 dark:bg-pink-900";
		case Color.ROSE:
			return "bg-rose-700 dark:bg-rose-900";
	}
}
