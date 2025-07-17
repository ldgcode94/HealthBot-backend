import { Router } from "express";
import { container } from "tsyringe";
import { HealthController } from "../../../application/controllers/healthController";

const router = Router();
const controller = container.resolve(HealthController);

router.post("/ask", (req: any, res: any) => controller.askQuestion(req, res));

export default router;
