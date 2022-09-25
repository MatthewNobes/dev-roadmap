import { Box, Typography } from "@mui/material";
import PageHeading from "../../components/PageHeading";

export const Home = () => {
	return (
		<Box mx={2}>
			<PageHeading pageHeading="Dev skills roadmap" />
			<Typography variant="body1" paragraph>
				explain roadmap here
			</Typography>
		</Box>
	);
};
