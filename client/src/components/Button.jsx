import { NavLink } from "react-router-dom";

const Button = ({ children, ...props }) => <button {...props}>{children}</button>;

export const SecondaryButton = ({ Icon, className, children, to, ...props }) => {
	const ButtonElm = !to ? Button : NavLink;
	return (
		<ButtonElm
			to={to}
			{...props}
			className={`flex items-center gap-2 rounded-md border border-white bg-white py-2 px-4 text-blue-700 shadow-md transition-all duration-200 hover:border-blue-700 hover:text-blue-700 ${className}`}
		>
			{Icon && <Icon className="h-5 w-5 stroke-2" />}
			{children}
		</ButtonElm>
	);
};

export const PrimaryButton = ({ Icon, className, children, to, ...props }) => {
	const ButtonElm = !to ? Button : NavLink;
	return (
		<ButtonElm
			to={to}
			{...props}
			className={`flex items-center gap-2 rounded-md border border-blue-700 bg-blue-700 py-2 px-4 text-white shadow-md transition-all duration-200 hover:border-blue-800 hover:bg-blue-800 ${className}`}
		>
			{Icon && <Icon className="h-5 w-5 stroke-2" />}
			{children}
		</ButtonElm>
	);
};

export const SmallIconLink = ({ to, Icon, tooltip }) => {
	return (
		<NavLink to={to} className="group/tooltip  relative z-10 rounded-md transition-all hover:bg-white">
			{Icon}
			<div className="absolute top-full left-0 translate-y-1 whitespace-nowrap rounded-md bg-gray-700 p-1 px-2 leading-none text-gray-100 opacity-0 group-hover/tooltip:opacity-100">
				{tooltip}
			</div>
		</NavLink>
	);
};
