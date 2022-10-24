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
								<div className="absolute top-0 left-0 h-full rounded-full bg-violet-500" style={{ width: "80%" }}></div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Healthy : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-green-500" style={{ width: "80%" }}></div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Malnutrition : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-red-500" style={{ width: "80%" }}></div>
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
								<div className="absolute top-0 left-0 h-full rounded-full bg-violet-500" style={{ width: "80%" }}></div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="w-1/2 flex-shrink-0">Shortness : </div>
							<div className="relative h-3 w-1/2 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
								<div className="absolute top-0 left-0 h-full rounded-full bg-red-500" style={{ width: "80%" }}></div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between space-y-3 rounded-md bg-white p-6">
					<p className="text-lg font-bold">Vaccination</p>
					<div className="flex items-end justify-between gap-2 font-medium">
						<div className=" flex flex-col gap-1 text-gray-400">
							<span>Remaining: 101</span>
							<span>Vacinated: 149</span>
						</div>
						<div className=" text-2xl text-blue-700">
							<span>Total: 250</span>
						</div>
					</div>
				</div>
				<div className="col-span-3 rounded-md bg-white p-6">
					<Line
						options={options}
						data={{
							labels: ["Jun", "Jul", "Aug"],
							datasets: [
								{
									id: 1,
									label: "",
									data: [5, 6, 7],
								},
								{
									id: 2,
									label: "",
									data: [3, 7, 1],
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
