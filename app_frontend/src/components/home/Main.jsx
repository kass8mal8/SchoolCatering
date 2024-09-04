import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<Box mt={4}>
			<Stack
				direction="row"
				spacing={2}
				sx={{ justifyContent: "space-between" }}
				className="intro"
			>
				<Link to="#" className="link">
					Breakfast
				</Link>
				<Link to="#" className="link">
					Lunch
				</Link>
				<Link to="#" className="link">
					Supper
				</Link>
			</Stack>
		</Box>
	);
};

export default Main;
