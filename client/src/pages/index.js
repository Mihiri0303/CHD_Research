import { lazy } from "react";
import {
	Cog8ToothIcon,
	PresentationChartLineIcon,
	RectangleGroupIcon,
	UserGroupIcon,
	UsersIcon,
} from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";

const pages = [
	{
		title: "Dashboard",
		icon: RectangleGroupIcon,
		component: lazy(
			() =>
				new Promise((resolve) => {
					setTimeout(() => resolve(import("./dashboard/Dashboard")), 600);
				})
		),
	},
	{
		title: "Children Management",
		icon: UsersIcon,
		link: "children-management",
		component: Outlet,
		children: [
			{
				component: lazy(() => import("./children/ChildrenDashboard")),
			},
			{
				link: "profile",
				component: lazy(() => import("./children/ChildrenProfile")),
			},
			{
				link: ":child_id",
				component: Outlet,
				children: [
					{
						link: "profile",
						component: lazy(() => import("./children/ChildrenProfile")),
					},
					{
						link: "growth",
						component: lazy(() => import("./children/child/Growth")),
					},
					{
						link: "vacination",
						component: lazy(() => import("./children/child/Vacination")),
					},
					{
						link: "new-born-report",
						component: lazy(() => import("./children/child/NewBornReport")),
					},
					{
						link: "reports",
						component: lazy(() => import("./children/child/Reports")),
					},
					{
						link: "clinic-date",
						component: lazy(() => import("./children/child/Reports")),
					},
				],
			},
		],
	},
	{
		title: "Parent Management",
		icon: UserGroupIcon,
		link: "parent-management",
		component: lazy(() => import("./parent/ParentDashboard")),
	},
	// {
	// 	title: "Reports",
	// 	icon: PresentationChartLineIcon,
	// 	link: "reports",
	// 	component: lazy(
	// 		() =>
	// 			new Promise((resolve) => {
	// 				setTimeout(() => resolve(import("./dashboard/Dashboard")), 600);
	// 			})
	// 	),
	// },
	// {
	// 	title: "Settings",
	// 	icon: Cog8ToothIcon,
	// 	link: "settigns",
	// 	component: lazy(
	// 		() =>
	// 			new Promise((resolve) => {
	// 				setTimeout(() => resolve(import("./dashboard/Dashboard")), 600);
	// 			})
	// 	),
	// },
];

export default pages;
