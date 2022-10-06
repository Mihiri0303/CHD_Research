import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./reducers";

const initialState = {};

const store = configureStore({
	devTools:
		process.env.NODE_ENV !== "production"
			? {
					shouldHotReload: true,
					shouldCatchErrors: true,
			  }
			: false,
	reducer: Reducers,
	middleware: [thunk],
	preloadedState: initialState,
});

export default store;
