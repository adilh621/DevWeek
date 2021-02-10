const router = require("express").Router();
const mainPageController = require("../../controllers/mainPageController");


router.route("/main")
  .get(mainPageController.response)

  module.exports = router