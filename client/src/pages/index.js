import { lazy } from "react";
import {
	Cog8ToothIcon,
	PresentationChartLineIcon,
	RectangleGroupIcon,
	UserGroupIcon,
	UsersIcon,
} from "@heroicons/react/24/solid";

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
		title: "Child Management",
		icon: UsersIcon,
		link: "children-management",
		component: lazy(
			() =>
				new Promise((resolve) => {
					setTimeout(() => resolve(import("./dashboard")), 600);
				})
		),
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
