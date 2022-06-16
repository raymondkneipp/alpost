import { Color } from "@prisma/client";

export default function getBgColor(color: Color) {
	let bg;

	switch (color) {
		case Color.BLACK:
			return "bg-black";
		case Color.SLATE:
			return "bg-slate-700";
		case Color.GRAY:
			return "bg-gray-700";
		case Color.ZINC:
			return "bg-zinc-700";
		case Color.NEUTRAL:
			return "bg-neutral-700";
		case Color.STONE:
			return "bg-stone-700";
		case Color.RED:
			return "bg-red-700";
		case Color.ORANGE:
			return "bg-orange-700";
		case Color.AMBER:
			return "bg-amber-700";
		case Color.YELLOW:
			return "bg-yellow-700";
		case Color.LIME:
			return "bg-lime-700";
		case Color.GREEN:
			return "bg-green-700";
		case Color.EMERALD:
			return "bg-emerald-700";
		case Color.TEAL:
			return "bg-teal-700";
		case Color.CYAN:
			return "bg-cyan-700";
		case Color.SKY:
			return "bg-sky-700";
		case Color.BLUE:
			return "bg-blue-700";
		case Color.INDIGO:
			return "bg-indigo-700";
		case Color.VIOLET:
			return "bg-violet-700";
		case Color.PURPLE:
			return "bg-purple-700";
		case Color.FUCHSIA:
			return "bg-fuchsia-700";
		case Color.PINK:
			return "bg-pink-700";
		case Color.ROSE:
			return "bg-rose-700";
	}
}
