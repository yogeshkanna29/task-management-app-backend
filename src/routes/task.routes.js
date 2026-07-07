const express = require("express");

const protect = require("../middleware/auth.middleware");

const taskController = require("../controllers/task.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management APIs
 */


/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Learn Node.js
 *               description:
 *                 type: string
 *                 example: Complete backend project
 *               status:
 *                 type: string
 *                 enum:
 *                   - Pending
 *                   - In Progress
 *                   - Completed
 *                 example: Pending
 *     responses:
 *       201:
 *         description: Task created successfully
 */

router.post("/", protect, taskController.createTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks of logged-in user
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Tasks fetched successfully
 *       401:
 *         description: Unauthorized
 */

router.get("/", protect, taskController.getTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get task by ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 64f1a123456789
 *     responses:
 *       200:
 *         description: Task fetched successfully
 *       404:
 *         description: Task not found
 */

router.get("/:id", protect, taskController.getTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Task
 *               description:
 *                 type: string
 *                 example: Updated description
 *               status:
 *                 type: string
 *                 example: Completed
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 */

router.put("/:id", protect, taskController.updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */

router.delete("/:id", protect, taskController.deleteTask);

module.exports = router;