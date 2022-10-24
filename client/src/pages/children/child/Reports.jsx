import { XCircleIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { Line } from "react-chartjs-2";

import { PrimaryButton, SecondaryButton } from "~/components/Button";
import PageLayout from "~/layout/PageLayout";

const options = {
	responsive: false,
	plugins: {
		legend: {
			position: "top",
			fullSize: true,
		},
	},
};

const Reports = () => {
	return (
		<PageLayout
			withBack
			title="Reports"
			HeaderElements={
				<>
					<SecondaryButton Icon={XCircleIcon} className={"ml-auto"}>
						Cancel
					</SecondaryButton>
					<PrimaryButton Icon={ArchiveBoxArrowDownIcon}>Save</PrimaryButton>
				</>
			}
		>
			<div className="w-full overflow-auto rounded-md bg-white p-6">
				<p className="mb-4 text-lg font-bold">Children weight growth Chart</p>
				<Line
					className="w-max"
					options={{
						responsive: true,
						chartArea: {
							backgroundColor: "rgba(255, 147, 147, 0.166)",
						},
						plugins: {
							legend: {
								position: "bottom",
								labels: {
									filter: function (item, chart) {
										return !item.text.includes("exist");
									},
								},
								onClick: () => {},
							},
						},
						scales: {
							y: {
								grid: {
									z: 10,
								},
								ticks: {
									autoSkip: false,
								},
								min: 0,
							},
							x: {
								grid: {
									z: 10,
								},
								ticks: {
									autoSkip: false,
								},
							},
							xAxis2: {
								grid: {
									drawOnChartArea: false,
								},
								ticks: {
									callback: function (label) {
										if (label === 0 || label % 12 === 11) {
											return "";
										}
										if (label % 6 === 5 && Math.floor(label / 6) % 2 !== 1) {
											return Math.floor(label / 6) / 2 + 1 + "Year";
										} else {
											return null;
										}
									},
								},
							},
						},
					}}
					data={{
						labels: Array(60)
							.fill(1)
							.map((a, idx) => a + idx),
						datasets: [
							{
								fill: false,
								id: 2,
								label: "Growth",
								borderWidth: 1,
								data: [3.5, 4, 5, 5.4],
								borderColor: "rgb(0,0,0)",
								backgroundColor: "rgb(0,0,0)",
								pointBackgroundColor: "rgb(0,0,0)",
							},
							{
								fill: true,
								id: 1,
								label: "Severe under weight",
								data: Array(60)
									.fill(1)
									.map((a, idx) => {
										return 1.65 * Math.log((0.5 * idx + 1.6) ** 2);
									}),
								pointBackgroundColor: "rgba(255, 255, 235,0)",
								borderColor: "rgba(255, 255, 235,0)",
								backgroundColor: "rgb(235, 114, 53)",
							},
							{
								fill: true,
								id: 1,
								label: "Under weight",
								data: Array(60)
									.fill(1)
									.map((a, idx) => {
										return 1.85 * Math.log((0.5 * idx + 1.9) ** 2);
									}),
								pointBackgroundColor: "rgba(255, 255, 235,0)",
								borderColor: "rgba(255, 255, 235,0)",
								backgroundColor: "rgb(235, 196, 53)",
							},
							{
								fill: true,
								id: 1,
								label: "Risk of being under weight",
								data: Array(60)
									.fill(1)
									.map((a, idx) => {
										return 2.07 * Math.log((0.5 * idx + 2) ** 2);
									}),
								pointBackgroundColor: "rgba(255, 255, 235,0)",
								borderColor: "rgba(0, 0, 0,0.1)",
								borderWidth: 1,
								pointBorderWidth: 0,
								backgroundColor: "rgb(255, 255, 255)",
							},
							{
								fill: true,
								id: 1,
								label: "exist",
								data: Array(60)
									.fill(1)
									.map((a, idx) => {
										return 2.35 * Math.log((0.5 * idx + 2.05) ** 2);
									}),
								pointBackgroundColor: "rgba(255, 255, 235,0)",
								pointBorderColor: "rgba(255, 255, 235,0)",
								borderColor: "#7dc49182",
								borderWidth: 1,
								backgroundColor: "rgb(179, 255, 192)",
							},
							{
								fill: true,
								id: 1,
								label: "exist",
								data: Array(60)
									.fill(1)
									.map((a, idx) => {
										return 2.6 * Math.log((0.5 * idx + 2.12) ** 2);
									}),
								pointBackgroundColor: "rgba(255, 255, 235,0)",
								pointBorderColor: "rgba(255, 255, 235,0)",
								borderColor: "#7dc49182",
								borderWidth: 1,
								backgroundColor: "rgb(179, 255, 192)",
							},
							{
								fill: true,
								id: 1,
								label: "Normal Weight",
								data: Array(60)
									.fill(1)
									.map((a, idx) => {
										return 2.89 * Math.log((0.5 * idx + 2.2) ** 2);
									}),
								pointBackgroundColor: "rgba(255, 255, 235,0)",
								pointBorderColor: "rgba(255, 255, 235,0)",
								borderColor: "#7dc49182",
								borderWidth: 1,
								backgroundColor: "rgb(179, 255, 192)",
							},
							{
								fill: true,
								id: 1,
								label: "Over Weight",
								data: Array(60)
									.fill(1)
									.map((a, idx) => {
										return 3.3 * Math.log((0.5 * idx + 2.15) ** 2);
									}),
								pointBackgroundColor: "rgba(255, 255, 235,0)",
								pointBorderColor: "rgba(255, 255, 235,0)",
								borderColor: "rgba(255,255,255,0)",
								backgroundColor: "rgb(237, 179, 255)",
							},
						],
					}}
				/>
			</div>
		</PageLayout>
	);
};

export default Reports;
