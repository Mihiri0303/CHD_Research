import { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { DocumentPlusIcon, XCircleIcon, ArchiveBoxArrowDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "~/components/Button";
import Modal from "~/components/Modal";
import Input from "~/components/Input";
import Textarea from "~/components/Textarea";

const NewParentModal = ({ triggerButton }) => {
	const formRef = useRef(null);
	const query = useQueryClient();

	const onClose = () => {};

	const handleSubmit = async (e, closeModal) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.target);
			const parentData = Object.fromEntries([...formData]);
			await axios.post("/parent", parentData);
			query.invalidateQueries("parent");
			closeModal();
		} catch (error) {
			console.error(error);
		}
	};

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
						<PrimaryButton
							onClick={() => {
								formRef.current?.requestSubmit();
							}}
							Icon={ArchiveBoxArrowDownIcon}
						>
							Save
						</PrimaryButton>
					</>
				)}
				containerClass={"max-w-screen-md"}
			>
				{({ closeModal }) => (
					<div className="space-y-8">
						<form ref={formRef} onSubmit={(e) => handleSubmit(e, closeModal)} className="grid grid-cols-12 gap-5">
							<div className="col-span-12 md:col-span-4">
								<p className="text-lg font-bold">Basic Info</p>
								<p className="text-sm text-gray-400">This is parent's basic information.</p>
							</div>
							<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-gray-100 p-6 md:col-span-8">
								<Input name="motherName" label={"Mother's fullname"} type="text" />
								<Input name="fatherName" label={"Mother's NIC"} type="text" />
								<Input name="motherNIC" label={"Father's fullname"} type="text" />
								<Input name="fatherNIC" label={"Father's NIC"} type="text" />
								<Textarea name="address" label={"Address"} className="col-span-2" />
								<Input name="contact" label={"Contact No."} type="text" />
							</div>
						</form>
					</div>
				)}
			</Modal>
		</>
	);
};

export default NewParentModal;
