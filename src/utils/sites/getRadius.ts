import { Radius } from '@prisma/client';

const getRadius = (radius: Radius) => {
	switch (radius) {
		case Radius.NONE:
			return 'rounded-none';
		case Radius.SMALL:
			return 'rounded-sm';
		case Radius.REGULAR:
			return 'rounded';
		case Radius.MEDIUM:
			return 'rounded-md';
		case Radius.LARGE:
			return 'rounded-lg';
		case Radius.XL:
			return 'rounded-xl';
		case Radius.XXL:
			return 'rounded-2xl';
		case Radius.XXXL:
			return 'rounded-3xl';
	}
};

export default getRadius;
