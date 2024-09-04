const { Router } = require("express");
const { addToCart, getProductCart } = require("../controller/cart");
const router = Router();

router.post("/add/:userId", addToCart);
router.get("/:userId", getProductCart);

module.exports = router;
