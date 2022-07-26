import { Logo } from '@/components/home';

const Brand: React.FC = () => {
	return (
		<div className="flex items-center space-x-3">
			<Logo />

			<span className="text-2xl font-medium text-red-700 dark:text-red-400 sm:text-4xl font-heading">
				alpost
			</span>
		</div>
	);
};

export default Brand;
