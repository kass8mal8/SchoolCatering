const ProductCart = require("../model/productCart");

const addToCart = async (req, res) => {
	const { productName, productPrice, productQuantity } = req.body;
	const { userId } = req.params;

	try {
		const productCart = await ProductCart.create({
			productName,
			productPrice,
			userId,
			productQuantity,
		});
		res
			.status(201)
			.json({ message: `${productCart.productName} added successfully` });
	} catch (error) {
		res.json({ message: "Error adding product" }).status(400);
		console.log(error.message);
	}
};

const getProductCart = async (req, res) => {
	const { userId } = req.params;

	try {
		const productCart = await ProductCart.find({ userId: userId });
		if (productCart) {
			const totalPrice = productCart.reduce((a, b) => {
				return a + b.productPrice * b.productQuantity;
			}, 0);
			res.json({ productCart, totalPrice }).status(201);
		}
	} catch (error) {
		res
			.json({ message: "Unable to retrieve product cart information" })
			.status(400);
	}
};

module.exports = {
	addToCart,
	getProductCart,
};
