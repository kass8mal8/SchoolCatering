/* eslint-disable react/prop-types */
import { TextField, IconButton } from "@mui/material";
import { VisibilityOffOutlined, Visibility } from "@mui/icons-material";
import { useState } from "react";

const Inputs = ({ handleChange, errorMessage }) => {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<>
			<TextField
				name="admission"
				fullWidth
				placeholder="SCT-102-290/2000"
				required
				onChange={handleChange}
				helperText={errorMessage}
				sx={{
					"& fieldset": {
						borderWidth: "2px",
					},
					"&:focus-within fieldset, &:focus-visible fieldset": {
						border: "2px solid #f5672f!important",
					},
					"& .MuiOutlinedInput-root": {
						borderRadius: "1em", // Change the border radius here
					},
				}}
			/>
			<TextField
				name="password"
				type={isVisible ? "text" : "password"}
				placeholder="password"
				required
				fullWidth
				onChange={handleChange}
				sx={{
					my: 2,
					"& fieldset": {
						borderWidth: "2px", // Change the border width here
					},
					"& .MuiOutlinedInput-root": {
						borderRadius: "1em",
					},
					"&:focus-within fieldset, &:focus-visible fieldset": {
						border: "2px solid #f5672f!important",
					},
				}}
				InputProps={{
					endAdornment: (
						<IconButton onClick={() => setIsVisible((prev) => !prev)}>
							{isVisible ? <Visibility /> : <VisibilityOffOutlined />}
						</IconButton>
					),
				}}
			/>
		</>
	);
};

export default Inputs;
