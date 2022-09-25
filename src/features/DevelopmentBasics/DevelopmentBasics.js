import { Box } from "@mui/material";
import PageHeading from "../../components/PageHeading";
import BasicsTree from "./BasicsTree";

export const DevelopmentBasics = () => {
	return (
		<Box mx={2}>
			<PageHeading pageHeading="Development Basics" />
			<BasicsTree />
		</Box>
	);
};
