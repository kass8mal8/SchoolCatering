import { Box, IconButton } from "@mui/material";
import { AccountCircleOutlined, HomeOutlined } from "@mui/icons-material";
import cutlery from "../../assets/images/cutlery.png";

const BottomNav = () => {
	return (
		<Box className="bottom-nav">
			<IconButton>
				<HomeOutlined />
			</IconButton>
			<IconButton>
				<img src={cutlery} alt="cutlery" width={40} />
			</IconButton>
			<IconButton>
				<AccountCircleOutlined />
			</IconButton>
		</Box>
	);
};

export default BottomNav;
