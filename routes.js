import express from "express";
import { accountsController } from './controllers/accounts-controller.js';
import { dashboardController } from "./controllers/dashboard-controller.js";
import { stationController } from "./controllers/station-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { detailController } from "./controllers/det.js";



export const router = express.Router();


router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/adddetail", stationController.addDetail);
router.get("/about", aboutController.index);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);
router.get("/station/:stationId/deletedetail/:detailId", stationController.deleteDetail);
router.get("/station/:stationId/editdetail/:detailId", detailController.index);
router.post("/station/:stationId/updatedetail/:detailId", detailController.update);


