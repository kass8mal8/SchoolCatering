const ProductCart = require("../model/productCart");

const addToCart = async (req, res) => {
	const { products, total } = req.body;
	const userId = req.params;

	try {
		const productCart = await ProductCart.create(products, total, userId);
		res
			.json(
				productCart.products[products.length - 1].title,
				"Added successfully"
			)
			.status(201);
	} catch (error) {
		res.json("Error adding product").status(400);
		console.log(error.message);
	}
};

const getProductCart = async (req, res) => {
	const { userId } = req.params;

	try {
		const productCart = await ProductCart.find({ userId: userId });
		if (productCart) {
			res.json(productCart).status(201);
		}
	} catch (error) {
		res
			.json("Unable to retrieve product cart information", error.message)
			.status(400);
	}
};

module.exports = {
	addToCart,
	getProductCart,
};
