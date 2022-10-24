import { DocumentPlusIcon, XCircleIcon, ArchiveBoxArrowDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "~/components/Button";
import Modal from "~/components/Modal";
import Input from "~/components/Input";
import Select from "~/components/Select";
import Textarea from "~/components/Textarea";

const NewParentModal = ({ triggerButton }) => {
	const onClose = () => {};

	return (
		<>
			<Modal
				title="New Parent"
				onClose={onClose}
				modalTriggerButton={({ openModal, ...props }) => (
					<>
						{triggerButton ? (
							triggerButton({ openModal, ...props })
						) : (
							<PrimaryButton Icon={DocumentPlusIcon} onClick={openModal}>
								New Parent
							</PrimaryButton>
						)}
					</>
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
							<p className="text-lg font-bold">Basic Info</p>
							<p className="text-sm text-gray-400">This is parent's basic information.</p>
						</div>
						<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-gray-100 p-6 md:col-span-8">
							<Input label={"Mother's fullname"} type="text" />
							<Input label={"Mother's NIC"} type="text" />
							<Input label={"Father's fullname"} type="text" />
							<Input label={"Father's NIC"} type="text" />
							<Textarea label={"Address"} className="col-span-2" />
							<Input label={"Contact No."} type="text" />
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default NewParentModal;
