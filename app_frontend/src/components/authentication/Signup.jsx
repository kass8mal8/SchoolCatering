import { Box, TextField } from "@mui/material";
import Inputs from "./Inputs";
import usePost from "../hooks/usePost";
import { useState } from "react";
import chef from "../../assets/images/chef.jpg";
import Hero from "./Hero";
import AuthButton from "./AuthButton";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";

const Signup = () => {
	const url = "http://localhost:3000/api/auth/signup";
	const { post, isLoading } = usePost(url);
	const pattern = /^[a-zA-Z]{3,4}-\d{3}-\d{3}\/\d{4}$/;
	const [errorMessage, setErrorMessage] = useState(null);
	const [userData, setUserData] = useState(null);
	const [open, setOpen] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [isError, setIsError] = useState(null); // to be used if error arises
	const navigate = useNavigate();

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

		try {
			const res = await post(userData);
			localStorage.setItem("jwt", res?.data);
			navigate("/signin");
		} catch (error) {
			setOpen(true);
			setIsError(error.message);
		}
	};

	const handleClose = (e, direction) => {
		if (direction === "clickaway") return;
		setOpen(false);
	};

	return (
		<Box sx={{ background: "#f5672f" }}>
			<Toast
				data={null}
				open={open}
				error={isError}
				handleClose={handleClose}
			/>
			<Box sx={{ mt: -3 }}>
				<img src={chef} alt="chef" width={"100%"} style={{ opacity: 0.7 }} />
			</Box>
			<form className="form" onSubmit={handleSubmit}>
				<Hero />
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
						"&:focus-within fieldset, &:focus-visible fieldset": {
							border: "2px solid #f5672f!important",
						},
						my: 2,
						"& .MuiOutlinedInput-root": {
							borderRadius: "1em", // Change the border radius here
						},
					}}
				/>
				<Inputs handleChange={handleChange} errorMessage={errorMessage} />

				<AuthButton isLoading={isLoading} />
			</form>
		</Box>
	);
};

export default Signup;
