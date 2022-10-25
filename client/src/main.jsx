import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "~/styles/index.scss";

import App from "./App";

axios.defaults.baseURL = "http://localhost:4000/";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
