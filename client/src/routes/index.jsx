import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "~/layout/BaseLayout";
import PageNotFound from "~/components/Errors/PageNotFound";
import pages from "~/pages/index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: pages.map((page) => {
			if (!page.link)
				return {
					index: true,
					element: <page.component />,
					errorElement: <PageNotFound />,
				};
			return {
				path: page.link,
				element: <page.component />,
				errorElement: <PageNotFound />,
			};
		}),
		errorElement: <PageNotFound />,
	},
]);

export default router;
