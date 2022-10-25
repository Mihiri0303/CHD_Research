import { useState } from "react";
import {
	UserPlusIcon,
	MagnifyingGlassIcon,
	UserCircleIcon,
	TrashIcon,
	PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { PrimaryButton, SmallIconLink } from "~/components/Button";
import Input from "~/components/Input";
import PageLayout from "~/layout/PageLayout";
import NewParentModal from "./NewParentModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
	columnHelper.accessor((row, index) => index + 1, {
		header: "No.",
	}),
	columnHelper.accessor("motherName", {
		header: "Mother Name",
	}),
	columnHelper.accessor("motherNIC", {
		header: "Mother NIC",
	}),
	columnHelper.accessor("fatherName", {
		header: "Father Name",
	}),
	columnHelper.accessor("fatherNIC", {
		header: "Father NIC",
	}),
	columnHelper.accessor("contact", {
		header: "Contact",
	}),
	columnHelper.accessor("address", {
		header: "Address",
	}),
];

const ParentDashboard = ({}) => {
	const { data, loading } = useQuery(["parent"], () => axios.get("/parent"));

	const table = useReactTable({
		data: data?.data || [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<PageLayout
			title="Parent Dashboard"
			HeaderElements={
				<>
					<Input placeholder="Search" PrefixIcon={MagnifyingGlassIcon} className="ml-auto w-64"></Input>
					<NewParentModal />
				</>
			}
		>
			<div className="w-full max-w-full overflow-x-auto rounded-md bg-white p-6">
				<table className="w-full border-separate border-spacing-y-1">
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id} className="p-2 py-4 pt-1 ">
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
									<SmallIconLink tooltip="Profile" Icon={<UserCircleIcon className="m-1 h-5 w-5 " />} />
									<SmallIconLink tooltip="Edit" Icon={<PencilSquareIcon className="m-1 h-5 w-5 text-blue-700" />} />
									<SmallIconLink tooltip="Remove" Icon={<TrashIcon className="m-1 h-5 w-5 text-red-500" />} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</PageLayout>
	);
};

export default ParentDashboard;
