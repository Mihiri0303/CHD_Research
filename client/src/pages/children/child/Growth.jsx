import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import PageLayout from "~/layout/PageLayout";
import { SmallIconLink } from "~/components/Button";
import NewGrowthRecordModal from "./elements/NewGrowthRecordModal";

const defaultData = [
	{
		weight: 10,
		weightCondition: "N",
		weightGrowth: null,
		height: 65,
		heightCondition: "NH",
		thriposh: false,
		date: new Date().toLocaleDateString(),
		memo: "",
	},
];

const columnHelper = createColumnHelper();

const columns = [
	columnHelper.accessor("date", {
		header: () => <span>Date</span>,
	}),
	columnHelper.group({
		header: "Weight Growth",
		columns: [
			columnHelper.accessor("weight", {
				header: () => <span>Weight</span>,
			}),
			columnHelper.accessor("weightCondition", {
				header: () => <span>Condition</span>,
			}),
			columnHelper.accessor("weightGrowth", {
				header: () => <span>Growth</span>,
			}),
		],
	}),
	columnHelper.group({
		header: "Height Growth",
		columns: [
			columnHelper.accessor("height", {
				header: () => <span>Height</span>,
			}),
			columnHelper.accessor("heightCondition", {
				header: () => <span>Condition</span>,
			}),
		],
	}),
	columnHelper.accessor("thriposh", {
		header: () => <span>Thriposh</span>,
	}),
	columnHelper.accessor("memo", {
		header: () => <span>Memo</span>,
	}),
];

const Growth = () => {
	const [data, setData] = useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	return (
		<PageLayout
			withBack
			title="Growth"
			HeaderElements={
				<>
					<NewGrowthRecordModal />
				</>
			}
		>
			<div className="flex h-full w-full flex-col rounded-md bg-white p-6">
				<div className="h-full w-full max-w-full overflow-auto">
					<table className="w-full border-separate border-spacing-y-1 border-spacing-2">
						<thead className="sticky top-0 z-10">
							<tr className="absolute inset-[-2px] -z-10  bg-white"></tr>
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th
											key={header.id}
											colSpan={header.colSpan}
											className={`p-2 py-4 pt-1 ${header.colSpan > 1 ? "border-b border-gray-300" : "text-left"}`}
										>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody>
							{table.getRowModel().rows.map((row) => (
								<tr key={row.id} className="group relative rounded-md shadow-md">
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id} className="rounded-md bg-white p-3 px-4">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
									<td className="absolute left-0 z-10 flex h-full w-2/5 items-center gap-1 rounded-md bg-gradient-to-r from-gray-200 via-gray-100 px-2 opacity-0 transition-all group-hover:opacity-100">
										<SmallIconLink tooltip="Edit" Icon={<PencilSquareIcon className="m-1 h-5 w-5 text-blue-700" />} />
										<SmallIconLink tooltip="Remove" Icon={<TrashIcon className="m-1 h-5 w-5 text-red-500" />} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</PageLayout>
	);
};

export default Growth;
