import { Router } from "express";
import { login } from "../../../application/controllers/authController";

const router = Router();

router.post("/login", login);

export { router as authRoutes };
