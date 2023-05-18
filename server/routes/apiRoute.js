const express = require("express")
const { tnxDetails,accDetails } = require("../controllers/apiController")

const router = express.Router()

router.get("/transData/:chain/:txn_id",tnxDetails)
router.get("/addressData/:chain/:address",accDetails)



module.exports = router