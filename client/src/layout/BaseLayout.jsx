import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Elements/Header";
import SideBar from "./Elements/SideBar";
import PageFallback from "../components/fallbacks/PageFallback";

const BaseLayout = () => {
	return (
		<>
			<div className="flex h-screen max-h-screen w-full flex-col bg-gray-200 pb-5 text-base">
				<Header></Header>
				<div className="mx-auto grid h-full w-full max-w-screen-2xl grid-cols-4 gap-5 px-5 ">
					<div className="col-span-1 h-full max-h-[1350px] rounded-md bg-gray-100">
						<SideBar />
					</div>
					<div className="relative col-span-3 rounded-md bg-gray-100">
						<Suspense fallback={<PageFallback />}>
							<Outlet />
						</Suspense>
					</div>
				</div>
				<ToastContainer position="top-right" autoClose={2000} hideProgressBar={true} />
			</div>
		</>
	);
};

export default BaseLayout;
