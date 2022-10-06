import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "~/layout/BaseLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [],
	},
]);

export default router;
