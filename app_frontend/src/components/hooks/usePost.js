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
			response.status === 200 && setIsLoading(false);
			return response.data;
		} catch (error) {
			setIsLoading(false);
			throw error.response.data;
		}
	};
	return { post, isLoading };
};

export default usePost;
