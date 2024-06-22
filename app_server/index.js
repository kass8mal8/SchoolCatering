const app = require("./app");
const { API_PORT, MONGO_URI } = process.env;
const port = process.env.PORT || API_PORT;
const { connect } = require("mongoose");

const connection = async () => {
	try {
		const res = await connect(MONGO_URI);
		res && console.log("DB connection established!");

		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	} catch (error) {
		console.log(error.message);
	}
};

connection();
