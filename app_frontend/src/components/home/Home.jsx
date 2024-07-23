import { Box } from "@mui/material";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import BottomNav from "./BottomNav";

const Home = () => {
	return (
		<Box>
			<Header />

			<Box className="container">
				<Hero />
				<Main />
			</Box>
			<BottomNav />
		</Box>
	);
};

export default Home;
