import { XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";

import { PrimaryButton, SecondaryButton } from "~/components/Button";
import PageLayout from "~/layout/PageLayout";

const Growth = () => {
	return (
		<PageLayout
			withBack
			title="Growth"
			HeaderElements={
				<>
					<SecondaryButton Icon={XCircleIcon} className={"ml-auto"}>
						Cancel
					</SecondaryButton>
					<PrimaryButton Icon={ArchiveBoxArrowDownIcon}>Save</PrimaryButton>
				</>
			}
		>
			Hi I'm Growth
		</PageLayout>
	);
};

export default Growth;
