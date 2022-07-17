import { Color } from '@prisma/client';

const getBg = (color: Color) => {
	switch (color) {
		case Color.RED:
			return 'bg-red-700 dark:bg-red-800';
		case Color.ORANGE:
			return 'bg-orange-700 dark:bg-orange-800';
		case Color.AMBER:
			return 'bg-amber-700 dark:bg-amber-800';
		case Color.YELLOW:
			return 'bg-yellow-700 dark:bg-yellow-800';
		case Color.LIME:
			return 'bg-lime-700 dark:bg-lime-800';
		case Color.GREEN:
			return 'bg-green-700 dark:bg-green-800';
		case Color.EMERALD:
			return 'bg-emerald-700 dark:bg-emerald-800';
		case Color.TEAL:
			return 'bg-teal-700 dark:bg-teal-800';
		case Color.CYAN:
			return 'bg-cyan-700 dark:bg-cyan-800';
		case Color.SKY:
			return 'bg-sky-700 dark:bg-sky-800';
		case Color.BLUE:
			return 'bg-blue-700 dark:bg-blue-800';
		case Color.INDIGO:
			return 'bg-indigo-700 dark:bg-indigo-800';
		case Color.VIOLET:
			return 'bg-violet-700 dark:bg-violet-800';
		case Color.PURPLE:
			return 'bg-purple-700 dark:bg-purple-800';
		case Color.FUCHSIA:
			return 'bg-fuchsia-700 dark:bg-fuchsia-800';
		case Color.PINK:
			return 'bg-pink-700 dark:bg-pink-800';
		case Color.ROSE:
			return 'bg-rose-700 dark:bg-rose-800';
	}
};

export default getBg;
