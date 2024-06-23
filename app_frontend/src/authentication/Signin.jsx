/* eslint-disable react/no-unescaped-entities */
import { Button, Typography, Box } from "@mui/material";
import Inputs from "./Inputs";
import { Link } from "react-router-dom";
import usePost from "../hooks/usePost";
import { useState } from "react";
import Hero from "./Hero";
import chef from "../assets/images/chef.jpg";

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
		<Box sx={{ background: "#f5672f", position: "relative" }}>
			<Box sx={{ mt: -3 }}>
				<img src={chef} alt="chef" width={"100%"} style={{ opacity: 0.7 }} />
			</Box>
			<form className="form" onSubmit={handleSubmit}>
				<Hero />
				<Inputs handleChange={handleChange} errorMessage={errorMessage} />
				<Button variant="contained" disableElevation fullWidth className="btn">
					sign in
				</Button>
				<Typography sx={{ position: "absolute", bottom: 20 }}>
					Don't have an account? <Link to="/signup">Sign up</Link>
				</Typography>
			</form>
		</Box>
	);
};

export default Signin;
