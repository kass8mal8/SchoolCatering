import axios from "axios";
import { useState } from "react";

const usePost = (url) => {
	const [isLoading, setIsLoading] = useState(false);
	const post = async (data) => {
		setIsLoading(true);
		try {
			const response = await axios.post(url, data, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
		setIsLoading(false);
	};
	return { post, isLoading };
};

export default usePost;
