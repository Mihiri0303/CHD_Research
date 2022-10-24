import { useRef, useCallback } from "react";
import { XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";

import { PrimaryButton, SecondaryButton } from "~/components/Button";
import PageLayout from "~/layout/PageLayout";
import Select from "~/components/Select";
import Input from "~/components/Input";
import Textarea from "~/components/Textarea";

const NewBornReport = () => {
	const formRef = useRef(null);

	const onSave = useCallback(
		(event) => {
			event.preventDefault();
			const myFormData = new FormData(event.target);
			console.dir([...myFormData]);
		},
		[formRef.current]
	);
	return (
		<PageLayout
			withBack
			title="New Born Report"
			HeaderElements={
				<>
					<SecondaryButton Icon={XCircleIcon} className={"ml-auto"}>
						Cancel
					</SecondaryButton>
					<PrimaryButton Icon={ArchiveBoxArrowDownIcon}>Save</PrimaryButton>
				</>
			}
		>
			<form ref={formRef} onSubmit={onSave} className="flex h-full w-full flex-col rounded-md bg-white p-6">
				<div className="h-full w-full max-w-full overflow-auto">
					<table className="w-max min-w-full table-fixed border-separate border-spacing-1">
						<thead className="sticky top-0 z-10">
							<tr className="absolute inset-[-2px] -z-10  bg-white"></tr>
							<tr>
								<th rowSpan={2} className="px-3 py-2 text-left"></th>
								<th colSpan={2} className="px-3 py-2">
									First 10 days from Birth
								</th>
								<th className="px-3 py-2 ">11-28 Days</th>
								<th className="px-3 py-2 ">Around 42 Days</th>
							</tr>
							<tr>
								<th className="py-2 text-left">
									<Input name="hi" placeholder="Date" type="date" />
								</th>
								<th className="py-2 text-left">
									<Input name="hi" placeholder="Date" type="date" />
								</th>
								<th className="py-2 text-left">
									<Input name="hi" placeholder="Date" type="date" />
								</th>
								<th className="py-2 text-left">
									<Input name="hi" placeholder="Date" type="date" />
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white px-3 py-2">Skin Color</td>
								<td className="bg-white py-2">
									<Input name="hi" placeholder="Color" type="text" />
								</td>
								<td className="bg-white py-2">
									<Input name="hi" placeholder="Color" type="text" />
								</td>
								<td className="bg-white py-2">
									<Input name="hi" placeholder="Color" type="text" />
								</td>
								<td className="bg-white py-2">
									<Input name="hi" placeholder="Color" type="text" />
								</td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white px-3 py-2">Eyes</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Clarity" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Clarity" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Clarity" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Clarity" type="text" />
								</td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white px-3 py-2">Birth Code</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white px-3 py-2">Breastfeeding only</td>
								<td className="bg-white py-2 px-1">
									<input
										type="checkbox"
										className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
									/>
								</td>
								<td className="bg-white py-2 px-1">
									<input
										type="checkbox"
										className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
									/>
								</td>
								<td className="bg-white py-2 px-1">
									<input
										type="checkbox"
										className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
									/>
								</td>
								<td className="bg-white py-2 px-1">
									<input
										type="checkbox"
										className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
									/>
								</td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white px-3 py-2">
									<div className="flex items-center gap-2">
										Breastfeeding
										<div className="flex flex-col divide-y ">
											<div className="flex items-center p-2">Position</div>
											<div className="flex items-center p-2">Contact</div>
										</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
								<td className="bg-white py-2">
									<Select name="hi" placeholder="Condition" type="text" />
									<Select name="hi" placeholder="Condition" type="text" />
								</td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white px-3 py-2">Other</td>
								<td className="bg-white py-2">
									<Textarea name="hi" placeholder="Other" type="text" />
								</td>
								<td className="bg-white py-2">
									<Textarea name="hi" placeholder="Other" type="text" />
								</td>
								<td className="bg-white py-2">
									<Textarea name="hi" placeholder="Other" type="text" />
								</td>
								<td className="bg-white py-2">
									<Textarea name="hi" placeholder="Other" type="text" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</form>
		</PageLayout>
	);
};

export default NewBornReport;
