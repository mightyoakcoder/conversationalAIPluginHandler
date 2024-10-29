var express = require('express');
var vegOptionsRouter = express.Router();

let vegOptions = [
    {id: 1, info: "Nutritious and meatless."},
    {id: 2, info: "Vegetarian? This menu is for you."},
    {id: 3, info: "Enjoy meatless sandwiches!"},
    {id: 4, info: "While some of these options are vegan, many vegetarian option items can be made vegan!"}
  ]

const getVegOptions = async function(req, res) {
  res.json(vegOptions);
}
/* GET home page. */

vegOptionsRouter.get('/', getVegOptions);

module.exports = vegOptionsRouter;
