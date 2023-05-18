const express = require("express")
const { testing } = require("../controllers/apiController")

const router = express.Router()

router.get("/data",testing)


module.exports = router