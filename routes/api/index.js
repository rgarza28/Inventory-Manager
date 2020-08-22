const router = require("express").Router();
const userRoutes = require("./users");

router.use("/user", userRoutes);

module.exports = router;