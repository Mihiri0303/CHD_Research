import pages from "~/pages/index";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="h-full p-3">
			<ul className="flex h-full flex-col gap-1.5">
				{pages.map((page, idx) => (
					<li key={idx} className={`${idx + 1 === pages.length ? "mt-auto" : ""}`}>
						<NavLink
							to={page.link || "/"}
							className={({ isActive }) => {
								return `${
									isActive ? "bg-blue-700 text-white" : "bg-white text-blue-700"
								}  flex cursor-pointer items-center gap-3 rounded-md  p-2 px-3 font-medium  transition-all hover:bg-blue-800 hover:text-white`;
							}}
							end={!page.link}
						>
							<page.icon className="h-5 w-5" />
							{page.title}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideBar;
