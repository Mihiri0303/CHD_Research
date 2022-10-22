import { SecondaryButton } from "~/components/Button";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const PageLayout = ({ HeaderElements, withBack, title, children }) => {
	return (
		<>
			<div className="flex h-full max-h-full min-h-0 w-full flex-col">
				<div className="flex items-center gap-3 border-b pb-5 font-medium">
					{withBack && (
						<SecondaryButton to={-1} Icon={ChevronLeftIcon}>
							Back
						</SecondaryButton>
					)}
					{title && <span className="font-bold uppercase">{title}</span>}
					{HeaderElements}
				</div>
				<div className=" flex-1 overflow-hidden pt-5">
					<div className="no-scroll-bar h-full overflow-y-auto">{children}</div>
				</div>
			</div>
		</>
	);
};

export default PageLayout;
