import { XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";

import { PrimaryButton, SecondaryButton } from "~/components/Button";
import PageLayout from "~/layout/PageLayout";

const NewBornReport = () => {
	return (
		<PageLayout
			withBack
			title="New Born Health Report"
			HeaderElements={
				<>
					<SecondaryButton Icon={XCircleIcon} className={"ml-auto"}>
						Cancel
					</SecondaryButton>
					<PrimaryButton Icon={ArchiveBoxArrowDownIcon}>Save</PrimaryButton>
				</>
			}
		>
			Hi I'm NewBornReport
		</PageLayout>
	);
};

export default NewBornReport;
