const express = require("express");
const users = express.Router();
const usersController = require("../controllers/userControllers");

users.post('/api/login/:email/:name/:accountAddress',usersController.registerUser);
users.post('/api/user-login/pariticipate',usersController.participateInJackpot);
users.post('/api/user-login/approve',usersController.approve);


module.exports=users;