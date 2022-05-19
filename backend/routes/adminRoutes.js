const express = require("express");
const adminRoutes = express.Router();
const adminControllers = require("../controllers/adminControllers");

adminRoutes.post('/api/admin-login/:email/:accountAddress',adminControllers.loginAdmin);
adminRoutes.post('/api/admin-login/createJackpot',adminControllers.createJackpot);
adminRoutes.post('/api/admin-login/pickWinner',adminControllers.pickWinner);
adminRoutes.post('/api/admin-login/adminApprovalForWinner',adminControllers.adminApproveForWinner);
adminRoutes.post('/api/admin-login/getParticipants',adminControllers.getParticipants);




module.exports=adminRoutes;