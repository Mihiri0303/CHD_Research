import { ArchiveBoxArrowDownIcon, XCircleIcon, PlusIcon } from "@heroicons/react/24/outline";

import { SecondaryButton, PrimaryButton } from "~/components/Button";
import { healthStatus, reasonsForSpecialAttention } from "~/constants/dropdowns";
import Input from "~/components/Input";
import Select from "~/components/Select";
import Textarea from "~/components/Textarea";
import PageLayout from "~/layout/PageLayout";
import NewParentModal from "../parent/NewParentModal";

const ChildrenProfile = () => {
	return (
		<PageLayout
			withBack
			title="New child health profile"
			HeaderElements={
				<>
					<SecondaryButton Icon={XCircleIcon} className={"ml-auto"}>
						Cancel
					</SecondaryButton>
					<PrimaryButton Icon={ArchiveBoxArrowDownIcon}>Save</PrimaryButton>
				</>
			}
		>
			<div className="space-y-8">
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">Basic Info</p>
						<p className="text-sm text-gray-400">This is the basic information.</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						<Input label={"Full name"} type="text" className="col-span-2" />
						<Select label={"Parent"} type="text" />
						<NewParentModal
							triggerButton={({ openModal }) => (
								<PrimaryButton Icon={PlusIcon} onClick={openModal} className="mt-auto h-[2.6rem] w-max"></PrimaryButton>
							)}
						/>

						<Select label={"Gender"} options={[{ value: "male", label: "Male" }]} />
						<Input label={"Total siblings"} type="text" />
						<Input label={"Birth date"} type="date" className="col-start-1" />
						<Input label={"Birth time"} type="time" />
					</div>
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">Birth Location Info</p>
						<p className="text-sm text-gray-400">This is the Birth Location Info information.</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						<Select label={"District"} />
						<Select label={"Region"} />
						<Input label={"Hospital"} type="text" />
					</div>
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">Breast feeding</p>
						<p className="text-sm text-gray-400">This is the all about the method of mother's Brest feeding.</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						<Select label={"Feeding Position"} />
						<Select label={"Feeding Contact"} />
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								name="breastfed_in_first_hour"
								className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
							/>
							Breastfed within an hour of born
						</div>
						<div className="col-start-1 flex items-center gap-2">
							<input
								type="checkbox"
								name="congenital_hypothyroidism_test"
								className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
							/>
							Congenital hypothyroidism test
						</div>
						<Textarea label={"Congenital hypothyroidism test results"} className="col-span-2 col-start-1" />
					</div>
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">New Born Health Info</p>
						<p className="text-sm text-gray-400">
							This is the basic information about the condition of the child on birth.
						</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						<Input label={"APGA value"} type="text" />
						<Input label={"Birth weight"} type="text" className="col-start-1" />
						<Input label={"Birth length"} type="text" />
						<Input label={"Head Circumference (cm) on birth"} type="text" />
						<Select label={"Health Status"} containerclasses="col-start-1" options={healthStatus} />
						<div className="mt-7 flex items-center gap-2">
							<input
								type="checkbox"
								name="vitaminK"
								className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
							/>
							Vitamin K Injected
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">Reasons for special attention</p>
						<p className="text-sm text-gray-400">These are all reasons that child to have special attention.</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						{reasonsForSpecialAttention.map(({ value, label }, idx) => (
							<div key={idx} className="col-start-1 flex items-center gap-2">
								<input
									type="checkbox"
									name={value}
									className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
								/>
								{label}
							</div>
						))}
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default ChildrenProfile;
