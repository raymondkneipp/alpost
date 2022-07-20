import { Color } from '@prisma/client';

const getBorder = (color: Color) => {
	switch (color) {
		case Color.RED:
			return 'border-red-700 dark:border-red-500';
		case Color.ORANGE:
			return 'border-orange-700 dark:border-orange-500';
		case Color.AMBER:
			return 'border-amber-700 dark:border-amber-500';
		case Color.YELLOW:
			return 'border-yellow-700 dark:border-yellow-500';
		case Color.LIME:
			return 'border-lime-700 dark:border-lime-500';
		case Color.GREEN:
			return 'border-green-700 dark:border-green-500';
		case Color.EMERALD:
			return 'border-emerald-700 dark:border-emerald-500';
		case Color.TEAL:
			return 'border-teal-700 dark:border-teal-500';
		case Color.CYAN:
			return 'border-cyan-700 dark:border-cyan-500';
		case Color.SKY:
			return 'border-sky-700 dark:border-sky-500';
		case Color.BLUE:
			return 'border-blue-700 dark:border-blue-500';
		case Color.INDIGO:
			return 'border-indigo-700 dark:border-indigo-500';
		case Color.VIOLET:
			return 'border-violet-700 dark:border-violet-500';
		case Color.PURPLE:
			return 'border-purple-700 dark:border-purple-500';
		case Color.FUCHSIA:
			return 'border-fuchsia-700 dark:border-fuchsia-500';
		case Color.PINK:
			return 'border-pink-700 dark:border-pink-500';
		case Color.ROSE:
			return 'border-rose-700 dark:border-rose-500';
		case Color.NEUTRAL:
			return 'border-neutral-700 dark:border-neutral-500';
	}
};

export default getBorder;
