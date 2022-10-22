import { XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";

import { PrimaryButton, SecondaryButton } from "~/components/Button";
import PageLayout from "~/layout/PageLayout";

const Vacination = () => {
	return (
		<PageLayout
			withBack
			title="Vacination"
			HeaderElements={
				<>
					<SecondaryButton Icon={XCircleIcon} className={"ml-auto"}>
						Cancel
					</SecondaryButton>
					<PrimaryButton Icon={ArchiveBoxArrowDownIcon}>Save</PrimaryButton>
				</>
			}
		>
			Hi I'm Vacination
		</PageLayout>
	);
};

export default Vacination;
