import { Line } from "react-chartjs-2";
import PageLayout from "~/layout/PageLayout";

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
	},
};

const Dashboard = () => {
	return (
		<PageLayout title="Dashboard">
			<div className="grid grid-cols-3 gap-6">
				<div className="space-y-3 rounded-md bg-white p-6">
					<p className="text-lg font-bold">Weight Summary</p>
					<div className="space-y-1 font-medium">
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Overfeeding : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-violet-500" style={{ width: "4%" }}></div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Healthy : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-green-500" style={{ width: "60%" }}></div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Malnutrition : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-red-500" style={{ width: "36%" }}></div>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-3 rounded-md bg-white p-6">
					<p className="text-lg font-bold">Height Summary</p>
					<div className="space-y-1 font-medium">
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Proper Height : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-green-500" style={{ width: "80%" }}></div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Risk to be short : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-violet-500" style={{ width: "13%" }}></div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Shortness : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-red-500" style={{ width: "7%" }}></div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between space-y-3 rounded-md bg-white p-6">
					<p className="text-lg font-bold">Vaccination</p>
					<div className="flex items-end justify-between gap-2 font-medium">
						<div className=" flex flex-col gap-1 text-gray-400">
							<span>Remaining: 18</span>
							<span>Vacinated: 32</span>
						</div>
						<div className=" text-2xl text-blue-700">
							<span>Total: 50</span>
						</div>
					</div>
				</div>
				<div className="col-span-3 rounded-md bg-white p-6">
					<Line
						options={{
							responsive: true,
							chartArea: {
								backgroundColor: "rgba(255, 147, 147, 0.166)",
							},
							plugins: {
								legend: {
									title: {
										position: "top",
										display: true,
										text: "Avarage Weight Growth",
										font: {
											size: 20,
											weight: "bold",
										},
									},
									position: "top",
									labels: {
										filter: function (item, chart) {
											return false;
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
								.fill(0)
								.map((a, i) => i + 1),
							datasets: [
								{
									fill: false,
									id: 2,
									label: "Growth",
									borderWidth: 1,
									data: [3.23, 4, 4.6],
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
			</div>
		</PageLayout>
	);
};

export default Dashboard;
