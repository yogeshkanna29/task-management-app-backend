/** Default imports */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { swaggerUi, swaggerSpec } = require("./swagger/swagger");

/** Route imports */

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://task-management-app-frontend-djop.onrender.com/",
    ],
    credentials: true,
  }),
);
app.use(morgan("dev"));
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Home
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Task Manager Home API Running",
  });
});

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // Invoking Auth Routes

app.use("/api/tasks", taskRoutes); // Invoking Task Routes

module.exports = app;
