import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Hero = () => {
	const location = useLocation();
	return (
		<Box sx={{ textAlign: "center", my: 3 }}>
			<Typography
				sx={{
					background: "lightgray",
					borderRadius: "20px",
					p: 0.3,
					width: "4em",
					ml: "42%",
					mt: "-15px",
					mb: "10px",
				}}
			>
				{""}
			</Typography>
			{/* <Typography variant="h2">Sign up</Typography> */}
			<Typography variant="body1">
				Enter your details to sign{" "}
				{location.pathname === "/signin" ? "in" : "up"}
			</Typography>
		</Box>
	);
};

export default Hero;
