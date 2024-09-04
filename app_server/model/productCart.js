const { Schema, model } = require("mongoose");

const options = {
	type: String,
	required: true,
};

const productCartSchema = new Schema({
	productName: String,
	productPrice: Number,
	userId: options,
	productQuantity: Number,
});

const ProductCart = model("productCart", productCartSchema);
module.exports = ProductCart;
