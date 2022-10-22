import { useState } from "react";
import {
	UserPlusIcon,
	MagnifyingGlassIcon,
	ArrowTrendingUpIcon,
	EyeDropperIcon,
	ShieldCheckIcon,
	UserCircleIcon,
	WalletIcon,
} from "@heroicons/react/24/outline";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { PrimaryButton, SmallIconLink } from "~/components/Button";
import Input from "~/components/Input";
import { Link } from "react-router-dom";
import PageLayout from "~/layout/PageLayout";

const defaultData = [
	{
		firstName: "tanner",
		lastName: "linsley",
		age: 24,
		visits: 100,
		status: "In Relationship",
		progress: 50,
	},
	{
		firstName: "tandy",
		lastName: "miller",
		age: 40,
		visits: 40,
		status: "Single",
		progress: 80,
	},
	{
		firstName: "joe",
		lastName: "dirte",
		age: 45,
		visits: 20,
		status: "Complicated",
		progress: 10,
	},
];

const columnHelper = createColumnHelper();

const columns = [
	columnHelper.accessor("firstName", {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor((row) => row.lastName, {
		id: "lastName",
		cell: (info) => <i>{info.getValue()}</i>,
		header: () => <span>Last Name</span>,
	}),
	columnHelper.accessor("age", {
		header: () => "Age",
		cell: (info) => info.renderValue(),
	}),
	columnHelper.accessor("visits", {
		header: () => <span>Visits</span>,
	}),
	columnHelper.accessor("status", {
		header: "Status",
	}),
	columnHelper.accessor("progress", {
		header: "Profile Progress",
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
			<div className="rounded-md bg-white p-6">
				<table className="w-full border-separate border-spacing-y-1">
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id} className="p-2 py-4 pt-1">
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
								<td className="absolute left-0 flex h-full w-2/5 items-center gap-1 rounded-md bg-gradient-to-r from-gray-200 via-gray-100 px-2 opacity-0 transition-all group-hover:opacity-100">
									<SmallIconLink
										to="profile"
										tooltip="Profile"
										Icon={<UserCircleIcon className="m-1 h-5 w-5 text-blue-700" />}
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
										Icon={<WalletIcon className="m-1 h-5 w-5 text-orange-500" />}
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
