import Signup from "./components/authentication/Signup";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./styles/css/index.css";
import Signin from "./components/authentication/Signin";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/AuthProvider";
import Home from "./components/home/Home";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: "rubik",
		},
	});

	const { setUser } = useContext(AuthContext);
	useEffect(() => {
		const jwt = localStorage.getItem("jwt");
		const authToken = jwt.split(":");
		const decoded = jwtDecode(authToken[0]);

		setUser(decoded);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box className="wrapper">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
				</Routes>
			</Box>
		</ThemeProvider>
	);
}

export default App;
