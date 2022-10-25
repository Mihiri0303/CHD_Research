import { useState } from "react";
import {
	UserPlusIcon,
	MagnifyingGlassIcon,
	ArrowTrendingUpIcon,
	EyeDropperIcon,
	ShieldCheckIcon,
	UserCircleIcon,
	WalletIcon,
	PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { PrimaryButton, SmallIconLink } from "~/components/Button";
import Input from "~/components/Input";
import { NavLink } from "react-router-dom";
import PageLayout from "~/layout/PageLayout";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const defaultData = [
	{
		id: 1,
		parent: {
			id: 22233,
			name: "Richard Silva",
			nic: "9234839843v",
		},
		name: "Mihiri Sulochana",
		birthdate: new Date().toLocaleString(),
		hso: "Kalutara",
		regionalHso: "Koholana",
		condition: "Good Health",
	},
	{
		id: 1,
		parent: {
			id: 22233,
			name: "Richard Silva",
			nic: "9234839843v",
		},
		name: "Mihiri Sulochana",
		birthdate: new Date().toLocaleString(),
		hso: "Kalutara",
		regionalHso: "Koholana",
		condition: "Good Health",
	},
	{
		id: 1,
		parent: {
			id: 22233,
			name: "Richard Silva",
			nic: "9234839843v",
		},
		name: "Mihiri Sulochana",
		birthdate: new Date().toLocaleString(),
		hso: "Kalutara",
		regionalHso: "Koholana",
		condition: "Good Health",
	},
];

const columnHelper = createColumnHelper();

const columns = [
	columnHelper.accessor("id", {
		header: "No.",
	}),
	columnHelper.accessor("name", {
		header: "Child name",
	}),
	columnHelper.accessor("birthdate", {
		header: "Birth Date",
	}),
	columnHelper.accessor("parent", {
		cell: (cell) => (
			<div className="flex flex-col text-xs ">
				<NavLink to="/parent-management" className="text-blue-700">
					{cell.getValue().name}
				</NavLink>
				<span className="text-gray-500">{cell.getValue().nic}</span>
			</div>
		),
		header: "Parent",
	}),
	columnHelper.accessor("hso", {
		header: "HSO",
	}),
	columnHelper.accessor("regionalHso", {
		header: "Regional HSO",
	}),
	columnHelper.accessor("condition", {
		header: "Status",
		cell: (cell) => (
			<span className="whitespace-nowrap rounded-md bg-green-100 p-1 px-2 text-green-500">{cell.getValue()}</span>
		),
	}),
];

const ChildrenDashboard = ({}) => {
	const [data, setData] = useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<PageLayout
			title="Childern Dashboard"
			HeaderElements={
				<>
					<Input placeholder="Search" PrefixIcon={MagnifyingGlassIcon} className="ml-auto w-64"></Input>
					<PrimaryButton to="profile" Icon={UserPlusIcon}>
						New Profile
					</PrimaryButton>
				</>
			}
		>
			<div className="w-full max-w-full overflow-x-auto rounded-md bg-white p-6">
				<table className="w-full border-separate border-spacing-y-1">
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id} className="px-4 py-4 pt-1 text-left">
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id} className="group relative overflow-hidden  rounded-md shadow-md">
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id} className="rounded-md bg-white p-3 px-4">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
								<td className="absolute left-0 z-10 flex h-full w-2/5 items-center gap-1 rounded-md bg-gradient-to-r from-gray-200 via-gray-100 px-2 opacity-0 transition-all group-hover:opacity-100">
									<SmallIconLink
										to="2736476/profile"
										tooltip="Profile"
										Icon={<UserCircleIcon className="m-1 h-5 w-5 " />}
									/>
									<SmallIconLink
										to="2736476/growth"
										tooltip="Growth"
										Icon={<ArrowTrendingUpIcon className="m-1 h-5 w-5 text-green-500" />}
									/>
									<SmallIconLink
										to="2736476/vacination"
										tooltip="Vacination"
										Icon={<ShieldCheckIcon className="m-1 h-5 w-5 text-blue-700" />}
									/>
									<SmallIconLink
										to="2736476/new-born-report"
										tooltip="New Born Report"
										Icon={<WalletIcon className="m-1 h-5 w-5 " />}
									/>
									<SmallIconLink
										to="2736476/reports"
										tooltip="Reports"
										Icon={<PresentationChartLineIcon className="m-1 h-5 w-5 text-orange-500" />}
									/>
									<SmallIconLink
										to="2736476/clinic-date"
										tooltip="Clinic Date"
										Icon={<CalendarDaysIcon className="m-1 h-5 w-5" />}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</PageLayout>
	);
};

export default ChildrenDashboard;
