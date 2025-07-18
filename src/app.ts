import "reflect-metadata";
import "./config/container";

import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import healthRoutes from "./modules/health/infrastructure/http/routes/health.routes";
import dotenv from "dotenv";
import { connecToMongoDB } from "./modules/health/infrastructure/database/mongoDB/mongoDB";

const app = express();
app.use(express.json());
dotenv.config();

// Database
connecToMongoDB(process.env.MONGODB_URI || '');

// Docs
const swaggerDocument = YAML.load("./src/docs/openapi.yaml");

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/health", healthRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Swagger UI: http://localhost:3000/api-docs");
});
