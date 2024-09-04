const { Router } = require("express");
const { addOrder, getOrder } = require("../controller/order");
const router = Router();

router.post("/create/:userId", addOrder);
router.get("/:userId", getOrder);

module.exports = router;
