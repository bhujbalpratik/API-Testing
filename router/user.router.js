import express from "express";
import { getAllUser, getUser, login, register, userhome } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/', userhome);

router.post("/register", register);
router.post("/login", login);
router.get("/getAll", getAllUser);


router.get("/:name", getUser);
export default router;