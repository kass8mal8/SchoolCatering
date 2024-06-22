const jwt = require("jsonwebtoken");
const User = require("../model/users");
const { SECRET_KEY } = process.env;

const createToken = (payload) => {
	return jwt.sign(payload, SECRET_KEY, {
		expiresIn: "1h",
		algorithm: "HS256",
	});
};

const signup = async (req, res) => {
	const { name, admission, password } = req.body;

	try {
		const user = await User.create({ name, admission, password });
		const token = createToken({ name: user.name, admission: user.admission });
		res.json({ token, message: `Account created successfully` });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const signin = async (req, res) => {
	const { admission, password } = req.body;

	try {
		const user = await User.login(admission, password);

		const token = createToken(user.name, user.admission);

		res.json({ token, message: "Signin was successful" }).status(200);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	signup,
	signin,
};
