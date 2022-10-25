import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ modalTriggerButton, title, containerClass, children, modalActions, onClose }) => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
		onClose?.();
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			{modalTriggerButton?.({ openModal, isOpen })}

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 h-screen p-4 ">
						<div className="flex h-full items-center justify-center text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel
									className={`flex h-max max-h-full w-full transform flex-col overflow-hidden rounded-md bg-white p-6  text-left align-middle shadow-xl transition-all ${containerClass}`}
								>
									<Dialog.Title
										as="div"
										className="flex items-center justify-between border-b border-gray-200 pb-4 text-lg text-lg font-bold font-medium leading-6 text-gray-900"
									>
										{title || "Modal"}
										<button onClick={closeModal} className="rounded-md p-1.5 transition-all hover:bg-gray-200">
											<XMarkIcon className="h-5 w-5"></XMarkIcon>
										</button>
									</Dialog.Title>
									<div className="flex-1 overflow-y-auto py-4">
										{typeof children === "function" ? children({ open, closeModal }) : children}
									</div>

									<div className="flex items-center gap-3 border-t border-gray-200 pt-4 font-medium">
										{modalActions?.({ open, closeModal })}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Modal;
