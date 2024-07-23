import { IconButton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
	const { user } = useContext(AuthContext);
	const bgColors = [
		"#f2eed0",
		"#f5672f",
		"#da9c83",
		"#e08924",
		"lightblue",
		"orange",
	];
	const index = Math.floor(Math.random() * bgColors.length - 1) + 1;

	return (
		<Stack className="header">
			<Typography variant="body1" sx={{ fontWeight: "500", fontSize: "14pt" }}>
				Hello,{" "}
				<span style={{ color: "gray", fontSize: "12pt" }}>{user?.name}</span>
			</Typography>
			<IconButton sx={{ background: bgColors[index], width: "40px" }}>
				<Typography sx={{ fontWeight: "bold" }}>{user?.name[0]}</Typography>
			</IconButton>
		</Stack>
	);
};

export default Header;
