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
					setTimeout(() => resolve(import("./dashboard")), 600);
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
				component: lazy(() => import("./children-management/ChildrenDashboard")),
			},
			{
				link: "profile",
				component: lazy(() => import("./children-management/ChildrenProfile")),
			},
			{
				link: ":child_id",
				component: Outlet,
				children: [
					{
						link: "growth",
						component: lazy(() => import("./children-management/child/Growth")),
					},
					{
						link: "vacination",
						component: lazy(() => import("./children-management/child/Vacination")),
					},
					{
						link: "new-born-report",
						component: lazy(() => import("./children-management/child/NewBornReport")),
					},
				],
			},
		],
	},
	{
		title: "User Management",
		icon: UserGroupIcon,
		link: "user-management",
		component: lazy(
			() =>
				new Promise((resolve) => {
					setTimeout(() => resolve(import("./dashboard")), 600);
				})
		),
	},
	{
		title: "Reports",
		icon: PresentationChartLineIcon,
		link: "reports",
		component: lazy(
			() =>
				new Promise((resolve) => {
					setTimeout(() => resolve(import("./dashboard")), 600);
				})
		),
	},
	{
		title: "Settings",
		icon: Cog8ToothIcon,
		link: "settigns",
		component: lazy(
			() =>
				new Promise((resolve) => {
					setTimeout(() => resolve(import("./dashboard")), 600);
				})
		),
	},
];

export default pages;
