/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const AuthButton = ({ isLoading }) => {
	const location = useLocation();
	return (
		<Button
			variant="contained"
			type="submit"
			disabled={isLoading ? true : false}
			disableElevation
			fullWidth
			className="btn"
		>
			{isLoading
				? "processing..."
				: `sign ${location.pathname === "/signin" ? "in" : "up"}`}
		</Button>
	);
};

export default AuthButton;
