import { useRef } from "react";
import { ArchiveBoxArrowDownIcon, XCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { SecondaryButton, PrimaryButton } from "~/components/Button";
import { feedingContact, healthStatus, reasonsForSpecialAttention } from "~/constants/dropdowns";
import Input from "~/components/Input";
import Select from "~/components/Select";
import Textarea from "~/components/Textarea";
import PageLayout from "~/layout/PageLayout";
import NewParentModal from "../parent/NewParentModal";
import { feedingPosition } from "~/constants/dropdowns";
import { useNavigate } from "react-router-dom";

const ChildrenProfile = () => {
	const formRef = useRef(null);
	const { data, loading } = useQuery(["parent"], () => axios.get("/parent"));
	const navigate = useNavigate();

	const save = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const childData = Object.fromEntries([...formData]);
		childData.feedWithinHour = childData.feedWithinHour ? 1 : 0;
		childData.CHTest = childData.CHTest ? 1 : 0;
		childData.viteminKInjected = childData.viteminKInjected ? 1 : 0;
		await axios.post("/child", childData);
		query.invalidateQueries("child");
		navigate("/children-management");
	};

	return (
		<PageLayout
			withBack
			title="New child health profile"
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
			<form ref={formRef} onSubmit={save} className="space-y-8">
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">Basic Info</p>
						<p className="text-sm text-gray-400">This is the basic information.</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						<Input name="name" label={"Full name"} type="text" className="col-span-2" />
						<Select
							name="parentId"
							label={"Parent"}
							options={data?.data?.map((a) => ({ value: a.id, label: a.motherName + "-" + a.motherNIC }))}
						/>
						<NewParentModal
							triggerButton={({ openModal }) => (
								<PrimaryButton
									type="button"
									Icon={PlusIcon}
									onClick={openModal}
									className="mt-auto h-[2.6rem] w-max"
								></PrimaryButton>
							)}
						/>

						<Select
							name="gender"
							label={"Gender"}
							options={[
								{ value: "male", label: "Male" },
								{ value: "female", label: "Female" },
							]}
						/>
						<Input name="totalSiblings" label={"Total siblings"} type="text" />
						<Input name="birthdate" label={"Birth date"} type="datetime-local" className="col-span-2" />
					</div>
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">Birth Location Info</p>
						<p className="text-sm text-gray-400">This is the Birth Location Info information.</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						<Input name="district" label={"District"} />
						<Input name="region" label={"Region"} />
						<Input name="hospital" label={"Hospital"} type="text" />
					</div>
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-12 md:col-span-4">
						<p className="text-lg font-bold">Breast feeding</p>
						<p className="text-sm text-gray-400">This is the all about the method of mother's Brest feeding.</p>
					</div>
					<div className="col-span-12 grid grid-cols-2 gap-5 gap-y-6 rounded-md bg-white p-6 md:col-span-8">
						<Select name="feedingPosition" label={"Feeding Position"} options={feedingPosition} />
						<Select name="feedingContact" label={"Feeding Contact"} options={feedingContact} />
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								name="feedWithinHour"
								className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
							/>
							Breastfed within an hour of born
						</div>
						<div className="col-start-1 flex items-center gap-2">
							<input
								type="checkbox"
								name="CHTest"
								className="h-4 w-4 cursor-pointer rounded text-blue-600 focus:outline-blue-600 focus:ring-blue-600"
							/>
							Congenital hypothyroidism test
						</div>
						<Textarea
							name="CHTestResults"
							label={"Congenital hypothyroidism test results"}
							className="col-span-2 col-start-1"
						/>
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
						<Input name="APGA" label={"APGA value"} type="text" />
						<Input name="birthWeight" label={"Birth weight"} type="number" className="col-start-1" />
						<Input name="birthHeight" label={"Birth length"} type="number" />
						<Input name="birthHeadCircumference" label={"Head Circumference (cm) on birth"} type="number" />
						<Select name="status" label={"Health Status"} containerclasses="col-start-1" options={healthStatus} />
						<div className="mt-7 flex items-center gap-2">
							<input
								type="checkbox"
								name="viteminKInjected"
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
			</form>
		</PageLayout>
	);
};

export default ChildrenProfile;
