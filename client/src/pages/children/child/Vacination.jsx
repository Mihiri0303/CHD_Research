import { useRef, useCallback } from "react";
import { XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";

import { PrimaryButton, SecondaryButton } from "~/components/Button";
import PageLayout from "~/layout/PageLayout";
import Input from "../../../components/Input";

const Vacination = () => {
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
			title="Vacination"
			HeaderElements={
				<>
					<SecondaryButton Icon={XCircleIcon} className={"ml-auto"}>
						Cancel
					</SecondaryButton>
					<PrimaryButton onClick={() => formRef.current?.requestSubmit()} Icon={ArchiveBoxArrowDownIcon}>
						Save
					</PrimaryButton>
				</>
			}
		>
			<form ref={formRef} onSubmit={onSave} className="flex h-full w-full flex-col rounded-md bg-white p-6">
				<div className="h-full w-full max-w-full overflow-auto">
					<table className="w-max min-w-full table-fixed border-separate border-spacing-1">
						<thead className="sticky top-0 z-10">
							<tr className="absolute inset-[-2px] -z-10  bg-white"></tr>
							<tr>
								<th className="px-3 py-2 text-left">Age</th>
								<th className="px-3 py-2 text-left">Type of Vacination</th>
								<th className="px-3 py-2 text-left">Date</th>
								<th className="px-3 py-2 text-left">Batch No.</th>
								<th className="px-3 py-2 text-left">Following Immunization</th>
								<th className="px-3 py-2 text-left">B.C.G Scar</th>
							</tr>
						</thead>
						<tbody>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white px-3 py-2">At Birth</td>
								<td className="bg-white px-3 py-2">B.C.G</td>
								<td className="bg-white py-2">
									<Input name="hi" placeholder="Date" type="date" />
								</td>
								<td className="bg-white py-2">
									<Input name="hi" placeholder="Batch No." type="text" />
								</td>
								<td className="bg-white py-2">
									<Input name="hi" placeholder="Following Immunization" type="text" />
								</td>
								<td className="rounded-md bg-white px-3 py-2">
									<div className="flex flex-col">
										<div className="flex items-center justify-between">
											Precent
											<input type="radio" name="scar" />
										</div>
										<div className="flex items-center justify-between">
											Abcent
											<input type="radio" name="scar" />
										</div>
									</div>
								</td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td colSpan={2} className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col">
										<span>
											B.C.G - 2<sup>nd</sup> Dose
										</span>
										<span className="text-xs">
											( If No scar even at 6<sup>th</sup> month )
										</span>
									</div>
								</td>
								<td className="bg-white py-2">
									<Input placeholder="Date" type="date" />
								</td>
								<td className="bg-white py-2">
									<Input placeholder="Batch No." type="text" />
								</td>
								<td className="bg-white py-2">
									<Input placeholder="Following Immunization" type="text" />
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">2</span>
										<span className="mb-auto text-xs">nd</span>
										<span className="ml-1 text-xs"> Month completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Pentavalent I</div>
										<div className="flex items-center p-2">OPV I</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">4</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Month completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Pentavalent II</div>
										<div className="flex items-center p-2">OPV II</div>
										<div className="flex items-center p-2">IPV</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
										<Input placeholder="Date" type="date" />
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
										<Input placeholder="Batch No." type="text" />
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
										<Input placeholder="Following Immunization" type="text" />
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">6</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Month completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Pentavalent III</div>
										<div className="flex items-center p-2">OPV III</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">9</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Month completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Measles, Mumps, Rubella I (MMR I)</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">12</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Month completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Live JE</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">12</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Month completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Live JE</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">18</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Month completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">DPT</div>
										<div className="flex items-center p-2">OPV IV</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">3</span>
										<span className="mb-auto text-xs">rd</span>
										<span className="ml-1 text-xs"> Year completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Measles & Rubella (MR) / MMR II</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">5</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Year completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">D.T</div>
										<div className="flex items-center p-2">OPV V</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex items-end">
										<span className="text-3xl leading-none">11</span>
										<span className="mb-auto text-xs">th</span>
										<span className="ml-1 text-xs"> Year completed</span>
									</div>
								</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<div className="flex items-center p-2">Adult Tetanus & diphtheria (aTd)</div>
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2">Others</td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<Input placeholder="Type of Vacination" type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2"></td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<Input placeholder="Type of Vacination" type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
							<tr className="rounded-md shadow-md">
								<td className="rounded-md bg-white  px-3 py-2"></td>
								<td className="rounded-md bg-white  px-3 py-2">
									<div className="flex flex-col divide-y ">
										<Input placeholder="Type of Vacination" type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Date" type="date" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Batch No." type="text" />
									</div>
								</td>
								<td className="bg-white py-2">
									<div className="flex flex-col gap-1">
										<Input placeholder="Following Immunization" type="text" />
									</div>
								</td>
								<td colSpan={2} className="rounded-md bg-white px-3 py-2 "></td>
							</tr>
						</tbody>
					</table>
				</div>
			</form>
		</PageLayout>
	);
};

export default Vacination;
