var express = require('express');
var router = express.Router();

let docs = [
  {id: 1, info: "Redeem your subscription in the app"},
  {id: 2, info: "Purchase and eligible meal and your reward will be automatically redeemed upon checkout."},
  {id: 3, info: "$0 Delivery Fee!"},
  {id: 4, info: "Enjoy unlimited refills while you're in the cafe"},
  {id: 5, info: "All subscribers enjoy $0 Delivery Fee!"},
  {id: 6, info: "An offer exclusive to Subscribers"}
]

const getDocs = async function(req, res) {
  res.json(docs);
}

/* GET home page. */
router.get('/', getDocs);

module.exports = router;
