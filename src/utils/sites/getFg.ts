import { Color } from '@prisma/client';

const getFg = (color: Color) => {
	switch (color) {
		case Color.RED:
			return 'text-red-700 dark:text-red-500';
		case Color.ORANGE:
			return 'text-orange-700 dark:text-orange-500';
		case Color.AMBER:
			return 'text-amber-700 dark:text-amber-500';
		case Color.YELLOW:
			return 'text-yellow-700 dark:text-yellow-500';
		case Color.LIME:
			return 'text-lime-700 dark:text-lime-500';
		case Color.GREEN:
			return 'text-green-700 dark:text-green-500';
		case Color.EMERALD:
			return 'text-emerald-700 dark:text-emerald-500';
		case Color.TEAL:
			return 'text-teal-700 dark:text-teal-500';
		case Color.CYAN:
			return 'text-cyan-700 dark:text-cyan-500';
		case Color.SKY:
			return 'text-sky-700 dark:text-sky-500';
		case Color.BLUE:
			return 'text-blue-700 dark:text-blue-500';
		case Color.INDIGO:
			return 'text-indigo-700 dark:text-indigo-500';
		case Color.VIOLET:
			return 'text-violet-700 dark:text-violet-500';
		case Color.PURPLE:
			return 'text-purple-700 dark:text-purple-500';
		case Color.FUCHSIA:
			return 'text-fuchsia-700 dark:text-fuchsia-500';
		case Color.PINK:
			return 'text-pink-700 dark:text-pink-500';
		case Color.ROSE:
			return 'text-rose-700 dark:text-rose-500';
	}
};

export default getFg;
