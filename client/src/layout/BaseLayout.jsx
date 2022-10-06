import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const BaseLayout = () => {
	return (
		<div className="mx-auto w-full max-w-screen-2xl text-base">
			<Outlet />
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default BaseLayout;
