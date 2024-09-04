const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
	item: String,
	quantity: Number,
	price: Number,
	userId: String,
});

const Order = model("order", orderSchema);
module.exports = Order;
