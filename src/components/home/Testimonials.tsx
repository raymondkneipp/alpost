import { Container, Wide } from '@/layouts/shared';
import Image from 'next/future/image';
import React from 'react';

type Props = {
	children: string;
	post: number;
	address: string;
};

const TestimonialItem: React.FC<Props> = ({ children, post, address }) => {
	return (
		<div className="p-6 bg-white rounded-sm shadow-2xl dark:bg-neutral-800">
			<p className="text-blue-900 dark:text-blue-300">{children}</p>
			<hr className="my-6 border-t-neutral-200 dark:border-t-neutral-700" />
			<div className="flex items-center justify-between">
				<div>
					<h3 className="text-lg font-medium font-heading">Post {post}</h3>
					<h4 className="font-medium font-heading text-neutral-600 dark:text-neutral-400">
						{address}
					</h4>
				</div>
				<Image
					src="/shared/American-Legion-Emblem-borderless.png"
					width={60}
					height={60}
				/>
			</div>
		</div>
	);
};

const Testimonials: React.FC = () => {
	return (
		<section className="py-24" id="testimonials">
			<Container className="space-y-24">
				<Wide
					master={
						<>
							<h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl font-heading">
								Testimonials
							</h2>
						</>
					}
				>
					<TestimonialItem post={288} address="Williamsburg, OH">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, porro debitis assumenda, optio voluptas, at suscipit
						maiores eius blanditiis minima possimus a dignissimos vero eum nam
					</TestimonialItem>
					<TestimonialItem post={288} address="Williamsburg, OH">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, porro debitis assumenda, optio voluptas, at suscipit
						maiores eius blanditiis minima possimus a dignissimos vero eum nam
					</TestimonialItem>
					<TestimonialItem post={288} address="Williamsburg, OH">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, porro debitis assumenda, optio voluptas, at suscipit
						maiores eius blanditiis minima possimus a dignissimos vero eum nam
					</TestimonialItem>
				</Wide>
			</Container>
		</section>
	);
};

export default Testimonials;
