const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Secure Task API",
      version: "1.0.0",
      description: "Backend Internship Assignment API"
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};

module.exports = swaggerJsdoc(options);