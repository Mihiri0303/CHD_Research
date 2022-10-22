import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "~/layout/BaseLayout";
import PageNotFound from "~/components/errors/PageNotFound";
import pages from "~/pages/index";

const children = (elements) => {
	if (!elements) return [];
	return elements.map((child) => {
		const route = {
			element: <child.component />,
			errorElement: <PageNotFound />,
			children: children(child.children),
		};
		if (!child.link) route.index = true;
		else route.path = child.link;

		return route;
	});
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: pages.map((page) => {
			const route = {
				element: <page.component />,
				errorElement: <PageNotFound />,
				children: children(page.children),
			};

			if (!page.link) route.index = true;
			else route.path = page.link;
			return route;
		}),
		errorElement: <PageNotFound />,
	},
]);

export default router;
