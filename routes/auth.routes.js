import express from "express";
import { login, logout, signup } from "../controllers/authcontroller.js";
import protectRoutes from "../Middlewares/protectRoutes.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", protectRoutes, logout);

export default router;
