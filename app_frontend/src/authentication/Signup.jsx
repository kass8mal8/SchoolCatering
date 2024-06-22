import { Box, Button, TextField, Typography } from "@mui/material";
import Inputs from "./Inputs";
import usePost from "../hooks/usePost";
import { useState } from "react";

const Signup = () => {
	const url = "http://localhost:3000/api/auth/signup";
	const { post } = usePost(url);
	const pattern = /^[a-zA-Z]{3,4}-\d{3}-\d{3}\/\d{4}$/;
	const [errorMessage, setErrorMessage] = useState(null);

	const [userData, setUserData] = useState(null);

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
				<Typography variant="h2">Sign up</Typography>
				<Typography variant="body1">Enter your details to sign up</Typography>
			</Box>
			<TextField
				name="name"
				fullWidth
				placeholder="Your Name"
				required
				onChange={handleChange}
				sx={{
					"& fieldset": {
						borderWidth: "2px", // Change the border width here
					},
					my: 2,
					"& .MuiOutlinedInput-root": {
						borderRadius: "1em", // Change the border radius here
					},
				}}
			/>
			<Inputs handleChange={handleChange} errorMessage={errorMessage} />

			<Button
				variant="contained"
				type="submit"
				disableElevation
				fullWidth
				className="btn"
			>
				sign up
			</Button>
		</form>
	);
};

export default Signup;
