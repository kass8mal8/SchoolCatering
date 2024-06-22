import Signup from "./authentication/Signup";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./styles/css/index.css";
import Signin from "./authentication/Signin";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: "rubik",
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Box className="container">
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
				</Routes>
			</Box>
		</ThemeProvider>
	);
}

export default App;
