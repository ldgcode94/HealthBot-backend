import "reflect-metadata";
import "./config/container";

import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import healthRoutes from "./modules/health/infrastructure/http/routes/health.routes";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();

const swaggerDocument = YAML.load("./src/docs/openapi.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/health", healthRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Swagger UI: http://localhost:3000/api-docs");
});
