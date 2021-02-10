const router = require("express").Router();
// const commentRoutes = require("./comments");
const userRoutes = require("./user");
const mainPageRoutes = require("./mainPage");

// comments routes


router.use("/main", mainPageRoutes)
// user routes
router.use("/user", userRoutes);

module.exports = router;
