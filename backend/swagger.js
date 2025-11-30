import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pet Adoption API",
      version: "1.0.0",
      description: "API documentation for Pet Adoption ITEL final project",
    },
    servers: [
      {
        url: "http://localhost:3000"
      },
      {
        // USE JUST THE MAIN DOMAIN HERE:
        url: "https://pet-adoption-itel.vercel.app" 
      }
    ]
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerUi, swaggerSpec };