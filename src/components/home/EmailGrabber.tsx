const EmailGrabber: React.FC = () => {
	return (
		<form className="space-y-3">
			<label
				htmlFor="email"
				className="text-sm font-medium font-heading text-neutral-100 dark:text-neutral-900"
			>
				Email Address
			</label>
			<div className="flex flex-col space-y-3 transition border-opacity-25 rounded-sm sm:p-3 sm:space-y-0 sm:max-w-lg sm:border-2 dark:border-opacity-25 border-neutral-100 dark:border-neutral-900 focus-within:border-opacity-100 dark:focus-within:border-opacity-100 sm:flex-row">
				<input
					type="email"
					id="email"
					required
					className="flex-1 p-3 bg-transparent border-2 border-opacity-25 rounded-sm outline-none sm:border-0 text-neutral-100 dark:text-neutral-900 border-neutral-100 dark:border-neutral-900 dark:border-opacity-25 focus:border-opacity-100 dark:focus:border-opacity-100"
				/>
				<button
					type="submit"
					className="px-6 py-3 rounded-sm bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
				>
					Join Waitlist
				</button>
			</div>
		</form>
	);
};

export default EmailGrabber;
