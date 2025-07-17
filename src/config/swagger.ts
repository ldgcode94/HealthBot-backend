import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HealthBot API",
      version: "1.0.0",
      description: "API documentation for HealthBot backend"
    }
  },
  apis: ["./src/modules/health/infrastructure/http/routes/**/*.ts", "./src/modules/health/application/controllers/**/*.ts"]
});
