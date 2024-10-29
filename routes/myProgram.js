var express = require('express');
var myProgramRouter = express.Router();

let myProgram = [
    {id: 1, info: "Join our loyalty program for your chance to instantly win one of 250,000 prizes."},
    {id: 2, info: "Sign Up is easy and free!"},
    {id: 3, info: "1. Download the App"},
    {id: 4, info: "2. Sign up for Texts"},
    {id: 5, info: "3. Check Your Email"}
  ]

const getmyProgram = async function(req, res) {
  res.json(myProgram);
}
/* GET home page. */

myProgramRouter.get('/', getmyProgram)

module.exports = myProgramRouter;
