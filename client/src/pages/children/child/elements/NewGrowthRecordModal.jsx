import { DocumentPlusIcon, XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "~/components/Button";
import Modal from "~/components/Modal";
import Input from "~/components/Input";
import Select from "~/components/Select";
import Textarea from "~/components/Textarea";

const NewGrowthRecordModal = ({}) => {
	const onClose = () => {};

	return (
		<>
			<Modal
				title="Add Growth Record"
				onClose={onClose}
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
						<PrimaryButton Icon={ArchiveBoxArrowDownIcon}>Save</PrimaryButton>
					</>
				)}
				containerClass={"max-w-screen-md"}
			>
				<div className="space-y-8">
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 md:col-span-4">
							<p className="text-lg font-bold">Weight Info</p>
							<p className="text-sm text-gray-400">This is the weight information.</p>
						</div>
						<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-gray-100 p-6 md:col-span-8">
							<Input label={"Weight (kg)"} type="number" />
							<Select label={"Condition"} />
							<Select label={"Growth"} />
						</div>
					</div>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 md:col-span-4">
							<p className="text-lg font-bold">Height Info</p>
							<p className="text-sm text-gray-400">This is the height information.</p>
						</div>
						<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-gray-100 p-6 md:col-span-8">
							<Input label={"Height (cm)"} type="number" />
							<Select label={"Condition"} />
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
									name="breastfed_in_first_hour"
									className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
								/>
								Thriposha
							</div>
							<Textarea label={"Memo"} className="col-span-2 col-start-1" />
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default NewGrowthRecordModal;
