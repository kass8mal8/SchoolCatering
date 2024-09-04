const Order = require("../model/order");

const addOrder = async (req, res) => {
	const { item, quantity, price } = req.body;
	const { userId } = req.params;

	try {
		const order = await Order.create({ item, quantity, price, userId });
		if (order) {
			res.json({ message: "Order placed successfully" }).status(201);
		}
	} catch (error) {
		console.log(error.message);
		res.json({ message: "Unable to place order" }).status(400);
	}
};

const getOrder = async (req, res) => {
	const { userId } = req.params;

	try {
		const order = await Order.find({ userId: userId });
		order.length > 0
			? res.json(order).status(201)
			: res.json("Not Found").status(404);
	} catch (error) {
		res.json({ message: "Unable to get order" }).status(400);
	}
};

module.exports = {
	addOrder,
	getOrder,
};
