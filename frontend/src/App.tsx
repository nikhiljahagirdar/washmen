/** @format */

import React from "react";
import "./App.css";
import Partner from "./pages/partners";
import ErrorBoundary from "./components/errorboundary";
function App() {
	return (
		<ErrorBoundary>
			<Partner />
		</ErrorBoundary>
	);
}

export default App;
