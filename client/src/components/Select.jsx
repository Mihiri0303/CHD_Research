import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useMemo, useState, Fragment, useRef } from "react";

function Select(props) {
	const {
		label,
		name,
		placeholder,
		containerclasses,
		labelclasses,
		inputclasses,
		options = [],
		nullable = true,
		required,
	} = props;
	const buttonRef = useRef(null);
	const [query, setQuery] = useState("");
	const [selected, setSelected] = useState();
	const id = "select_" + name;

	const handleSelected = (event) => {
		setSelected(event);
	};

	const filteredOptions = useMemo(() => {
		return options.filter((option) =>
			option.label.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
		);
	}, [query, options]);

	return (
		<div className={`flex w-full flex-col space-y-1 ${containerclasses || ""}`}>
			{label && (
				<label htmlFor={id} className={`font-medium ${labelclasses || ""}`}>
					{label || name} {required && <span className="text-red-500">*</span>}
				</label>
			)}
			<div className="relative">
				<Combobox value={selected} onChange={handleSelected} nullable={nullable}>
					{({ open }) => (
						<div className="relative">
							<div className="">
								<Combobox.Input
									className={`w-full rounded-md border-gray-300 pr-8 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 ${
										props.error && "border-red-500 pr-16 focus:border-red-500 focus:ring-red-500"
									} ${inputclasses || ""}`}
									{...props}
									placeholder={placeholder || `Enter ${label || name}`}
									displayValue={(option) => option?.label || ""}
									onFocus={(event) => {
										!open && buttonRef.current.click();
									}}
									onChange={(event) => setQuery(event.target.value)}
								/>
								<Combobox.Button ref={buttonRef} className="absolute inset-y-0 right-0 flex items-center pr-2">
									<ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
								</Combobox.Button>
								{props.error && (
									<div className="group absolute bottom-1/2 right-8 z-0 h-5 w-5 translate-y-1/2 transform cursor-pointer rounded-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-red-500"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<div className="absolute top-1/2 -left-1 z-50 w-max max-w-0 origin-left -translate-y-1/2 -translate-x-full transform rounded bg-red-200 opacity-0  shadow-md transition-opacity duration-300 ease-in-out line-clamp-2 group-hover:max-w-sm group-hover:opacity-100">
											<div className="py-1 px-2 text-base font-semibold text-red-500 sm:text-sm">{props.error}</div>
										</div>
									</div>
								)}
							</div>
							<Transition
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
								afterLeave={() => setQuery("")}
							>
								<Combobox.Options className="absolute z-50 mt-1  max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-blue-600 ring-opacity-5 focus:outline-none sm:text-sm">
									{(filteredOptions.length === 0 && query !== "") || options.length === 0 ? (
										<div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
									) : (
										filteredOptions.map((option, idx) => (
											<Combobox.Option
												key={idx}
												className={({ active }) =>
													` relative cursor-default select-none py-2 px-4 ${active ? "bg-blue-600 text-white" : ""}`
												}
												value={option}
											>
												{({ active }) => (
													<>
														<span
															className={`block truncate ${
																selected?.label == option.label ? "font-medium" : "font-normal"
															}`}
														>
															{option.label}
														</span>
														{selected?.label == option.label ? (
															<span
																className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
																	active ? "text-white" : "text-blue-600"
																}`}
															>
																<CheckIcon className="h-5 w-5" aria-hidden="true" />
															</span>
														) : null}
													</>
												)}
											</Combobox.Option>
										))
									)}
								</Combobox.Options>
							</Transition>
						</div>
					)}
				</Combobox>
			</div>
		</div>
	);
}

export default Select;
