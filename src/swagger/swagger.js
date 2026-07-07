const swaggerJsdoc = require("swagger-jsdoc");

const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "REST API for Task Management with JWT Authentication",
    },

    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};