const { Router } = require("express");
const { signin, signup } = require("../controller/authentication");
const router = Router();

router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
