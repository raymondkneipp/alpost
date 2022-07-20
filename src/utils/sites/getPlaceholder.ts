import { Color } from '@prisma/client';

const getPlaceholder = (color: Color) => {
	switch (color) {
		case Color.RED:
			return 'placeholder-red-700/60 dark:placeholder-red-500/50';
		case Color.ORANGE:
			return 'placeholder-orange-700/60 dark:placeholder-orange-500/50';
		case Color.AMBER:
			return 'placeholder-amber-700/60 dark:placeholder-amber-500/50';
		case Color.YELLOW:
			return 'placeholder-yellow-700/60 dark:placeholder-yellow-500/50';
		case Color.LIME:
			return 'placeholder-lime-700/60 dark:placeholder-lime-500/50';
		case Color.GREEN:
			return 'placeholder-green-700/60 dark:placeholder-green-500/50';
		case Color.EMERALD:
			return 'placeholder-emerald-700/60 dark:placeholder-emerald-500/50';
		case Color.TEAL:
			return 'placeholder-teal-700/60 dark:placeholder-teal-500/50';
		case Color.CYAN:
			return 'placeholder-cyan-700/60 dark:placeholder-cyan-500/50';
		case Color.SKY:
			return 'placeholder-sky-700/60 dark:placeholder-sky-500/50';
		case Color.BLUE:
			return 'placeholder-blue-700/60 dark:placeholder-blue-500/50';
		case Color.INDIGO:
			return 'placeholder-indigo-700/60 dark:placeholder-indigo-500/50';
		case Color.VIOLET:
			return 'placeholder-violet-700/60 dark:placeholder-violet-500/50';
		case Color.PURPLE:
			return 'placeholder-purple-700/60 dark:placeholder-purple-500/50';
		case Color.FUCHSIA:
			return 'placeholder-fuchsia-700/60 dark:placeholder-fuchsia-500/50';
		case Color.PINK:
			return 'placeholder-pink-700/60 dark:placeholder-pink-500/50';
		case Color.ROSE:
			return 'placeholder-rose-700/60 dark:placeholder-rose-500/50';
		case Color.NEUTRAL:
			return 'placeholder-neutral-700/60 dark:placeholder-neutral-500/50';
		case Color.WHITE:
			return 'placeholder-white';
	}
};

export default getPlaceholder;
