import React from 'react';

type EventItemProps = {
	title: string;
	start: Date;
	stop: Date;
	location: string;
};

const EventItem: React.FC<EventItemProps> = ({
	title,
	start,
	stop,
	location,
}) => {
	return (
		<div className="py-8 space-y-4">
			<h2 className="text-xl font-medium font-heading md:text-2xl text-neutral-900 dark:text-neutral-100">
				{title}
			</h2>
			<p className="text-neutral-600 dark:text-neutral-400">
				From: {new Date(start).toDateString()}
			</p>
			<p className="text-neutral-600 dark:text-neutral-400">
				To: {new Date(stop).toDateString()}
			</p>
			<p className="text-neutral-600 dark:text-neutral-400">
				Location: {location}
			</p>
		</div>
	);
};

const ListEvents: React.FC = () => {
	return (
		<section className="flex flex-col py-16 divide-y divide-neutral-200 dark:divide-neutral-800">
			<EventItem
				title="Monthly Meeting"
				start={new Date()}
				stop={new Date()}
				location="American Legion"
			/>
			<EventItem
				title="Monthly Meeting"
				start={new Date()}
				stop={new Date()}
				location="American Legion"
			/>
			<EventItem
				title="Monthly Meeting"
				start={new Date()}
				stop={new Date()}
				location="American Legion"
			/>
			<EventItem
				title="Monthly Meeting"
				start={new Date()}
				stop={new Date()}
				location="American Legion"
			/>
		</section>
	);
};

export default ListEvents;
