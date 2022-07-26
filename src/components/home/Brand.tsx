import { Logo } from '@/components/home';
import Link from 'next/link';

const Brand: React.FC = () => {
	return (
		<Link href="/">
			<div className="flex items-center space-x-3">
				<Logo />

				<span className="text-2xl font-medium text-red-700 dark:text-red-400 sm:text-4xl font-heading">
					alpost
				</span>
			</div>
		</Link>
	);
};

export default Brand;
