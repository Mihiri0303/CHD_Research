import { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

import { DocumentPlusIcon, XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "~/components/Button";
import Modal from "~/components/Modal";
import Input from "~/components/Input";
import Select from "~/components/Select";
import Textarea from "~/components/Textarea";
import { heightConditions, weightConditions, weightGrowth } from "~/constants/dropdowns";

const NewGrowthRecordModal = ({}) => {
	const formRef = useRef(null);
	const query = useQueryClient();
	const { childId } = useParams();

	const handleSubmit = async (e, closeModal) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.target);
			const growthData = Object.fromEntries([...formData]);
			growthData.childId = childId;
			growthData.thriposha = growthData.thriposha ? 1 : 0;
			await axios.post(`/child/${childId}/growth`, growthData);
			query.invalidateQueries("parent");
			closeModal();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Modal
				title="Add Growth Record"
				modalTriggerButton={({ openModal }) => (
					<PrimaryButton Icon={DocumentPlusIcon} onClick={openModal} className={"ml-auto"}>
						New Record
					</PrimaryButton>
				)}
				modalActions={({ closeModal }) => (
					<>
						<SecondaryButton Icon={XCircleIcon} onClick={closeModal} className={"ml-auto"}>
							Cancel
						</SecondaryButton>
						<PrimaryButton onClick={() => formRef.current?.requestSubmit()} Icon={ArchiveBoxArrowDownIcon}>
							Save
						</PrimaryButton>
					</>
				)}
				containerClass={"max-w-screen-md"}
			>
				{({ closeModal }) => (
					<form ref={formRef} onSubmit={(e) => handleSubmit(e, closeModal)} className="space-y-8">
						<div className="grid grid-cols-12 gap-5">
							<div className="col-span-12 md:col-span-4">
								<p className="text-lg font-bold">Weight Info</p>
								<p className="text-sm text-gray-400">This is the weight information.</p>
							</div>
							<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-gray-100 p-6 md:col-span-8">
								<Input name="weight" label={"Weight (kg)"} type="number" />
								<Select name="weightCondition" label={"Condition"} options={weightConditions} />
								<Select name="weightGrowth" label={"Growth"} options={weightGrowth} />
							</div>
						</div>
						<div className="grid grid-cols-12 gap-5">
							<div className="col-span-12 md:col-span-4">
								<p className="text-lg font-bold">Height Info</p>
								<p className="text-sm text-gray-400">This is the height information.</p>
							</div>
							<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-gray-100 p-6 md:col-span-8">
								<Input name="height" label={"Height (cm)"} type="number" />
								<Select name="heightCondition" label={"Condition"} options={heightConditions} />
							</div>
						</div>
						<div className="grid grid-cols-12 gap-5">
							<div className="col-span-12 md:col-span-4">
								<p className="text-lg font-bold">Other Info</p>
								<p className="text-sm text-gray-400">This is other information.</p>
							</div>
							<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-gray-100 p-6 md:col-span-8">
								<div className="flex items-center gap-2">
									<input
										type="checkbox"
										name="thriposha"
										className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
									/>
									Thriposha
								</div>
								<Textarea name="memo" label={"Memo"} className="col-span-2 col-start-1" />
							</div>
						</div>
					</form>
				)}
			</Modal>
		</>
	);
};

export default NewGrowthRecordModal;
