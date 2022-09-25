import { Routes, Route } from "react-router-dom";

/** Page imports go here */
import Home from "./Home";
import DevelopmentBasics from "./DevelopmentBasics";

export const RoutesBlock = () => (
	<Routes>
		<Route path="/DevelopmentBasics" element={<DevelopmentBasics />} />
		<Route path="/" element={<Home />} />
	</Routes>
);
