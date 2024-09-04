const { Schema, model } = require("mongoose");

const productCartSchema = new Schema({
	products: [],
	total: Number,
	userId: String,
});

const ProductCart = model("productCart", productCartSchema);
module.exports = ProductCart;
