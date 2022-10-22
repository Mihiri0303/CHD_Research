import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const PageNotFound = () => {
	return (
		<div className="absolute top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-3 ">
			<ExclamationTriangleIcon className="h-10 w-10 text-red-700"></ExclamationTriangleIcon>
			<p>
				Page Not Found,{" "}
				<Link to="/">
					<span className="cursor-pointer text-blue-700 underline">Go Home</span>
				</Link>
			</p>
		</div>
	);
};

export default PageNotFound;
