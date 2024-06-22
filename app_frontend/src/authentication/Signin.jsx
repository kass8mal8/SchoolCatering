/* eslint-disable react/no-unescaped-entities */
import { Button, Box, Typography } from "@mui/material";
import Inputs from "./Inputs";
import { Link } from "react-router-dom";
import usePost from "../hooks/usePost";
import { useState } from "react";

const Signin = () => {
	const url = "http://localhost:3000/api/auth/signup";
	const { post } = usePost(url);
	const [errorMessage, setErrorMessage] = useState(null);
	const [userData, setUserData] = useState(null);
	const pattern = /^[a-zA-Z]{3,4}-\d{3}-\d{3}\/\d{4}$/;

	const handleChange = (e) => {
		if (e.target.name === "admission") {
			const result = pattern.test(e.target.value);
			!result
				? setErrorMessage("Invalid admission number")
				: setErrorMessage(null);
		}
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await post(userData);
	};
	return (
		<form className="form" onSubmit={handleSubmit}>
			<Box sx={{ textAlign: "center", my: 3 }}>
				<Typography variant="h2">Sign in</Typography>
				<Typography variant="body1">Enter your details to sign in</Typography>
			</Box>
			<Inputs handleChange={handleChange} errorMessage={errorMessage} />
			<Button variant="contained" disableElevation fullWidth className="btn">
				signin
			</Button>
			<Typography sx={{ my: 3 }}>
				Don't have an account? <Link to="/signup">Sign up</Link>
			</Typography>
		</form>
	);
};

export default Signin;
