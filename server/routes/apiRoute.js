const express = require("express")
const { tnxDetails } = require("../controllers/apiController")

const router = express.Router()

router.get("/data/:chain/:txn_id",tnxDetails)


module.exports = router