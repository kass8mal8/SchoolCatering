import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<Box mt={2}>
			<Stack direction="row" sx={{ justifyContent: "space-between" }}>
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
