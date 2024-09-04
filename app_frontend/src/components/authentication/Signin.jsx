/* eslint-disable react/no-unescaped-entities */
import { Typography, Box } from "@mui/material";
import Inputs from "./Inputs";
import { Link, useNavigate } from "react-router-dom";
import usePost from "../hooks/usePost";
import { useState } from "react";
import Hero from "./Hero";
import chef from "../../assets/images/chef.jpg";
import AuthButton from "./AuthButton";
import Toast from "../Toast";

const Signin = () => {
	const url = "http://localhost:3000/api/auth/signin";
	const { post, isLoading } = usePost(url);
	const [errorMessage, setErrorMessage] = useState(null);
	const [userData, setUserData] = useState(null);
	const pattern = /^[a-zA-Z]{3,4}-\d{3}-\d{3}\/\d{4}$/;
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(null);
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

	const handleClose = (e, direction) => {
		if (direction === "clickaway") return;
		setOpen(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await post(userData);

			if (res) {
				localStorage.setItem("jwtToken", res.token);
				navigate("/");
			}
		} catch (error) {
			setOpen(true);
			setError(error.message);
		}
	};
	return (
		<Box sx={{ background: "#f5672f", position: "relative" }}>
			<Toast data={null} error={error} open={open} handleClose={handleClose} />
			<Box sx={{ mt: -3 }}>
				<img src={chef} alt="chef" width={"100%"} style={{ opacity: 0.7 }} />
			</Box>
			<form className="form" onSubmit={handleSubmit}>
				<Hero />
				<Inputs handleChange={handleChange} errorMessage={errorMessage} />
				<AuthButton isLoading={isLoading} />
				<Typography sx={{ position: "absolute", bottom: 20 }}>
					Don't have an account? <Link to="/signup">Sign up</Link>
				</Typography>
			</form>
		</Box>
	);
};

export default Signin;
