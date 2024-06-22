const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	name: String,
	admission: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

// Hash user password before saving it to DB
userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);

	next();
});

userSchema.statics.login = async function (admission, password) {
	try {
		const user = await this.findOne({ admission });
		const auth = await bcrypt.compare(password, user.password);

		if (auth) return user;
		else throw new Error("Incorrect creadentials");
	} catch (error) {
		throw error;
	}
};

const User = model("user", userSchema);
module.exports = User;
