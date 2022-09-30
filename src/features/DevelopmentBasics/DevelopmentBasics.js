import { Box } from "@mui/material";
import PageHeading from "../../components/PageHeading";
import BasicsTree from "../../components/BasicsTree";
import devData from "../../data/treeData/developmentBasics.json";

export const DevelopmentBasics = () => {
	return (
		<Box mx={2}>
			<PageHeading pageHeading="Development Basics" />
			<BasicsTree data={devData} />
		</Box>
	);
};
