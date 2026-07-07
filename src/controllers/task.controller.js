const taskService = require("../services/task.service");

/** Create a Task - start */

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.user._id, req.body);

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Create a Task - end */

/** Get all Task - start */

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks(req.user._id);

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get all Task - end */

/** Get a Task by ID - start */

const getTask = async (req, res) => {
  try {
    const task = await taskService.getTaskById(
      req.params.id,
      req.user._id
    );

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get a Task by ID - end */

/** Update a Task - start */

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(
      req.params.id,
      req.user._id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Update a Task - end */

/** Delete a Task - start */

const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id, req.user._id);

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/** Delete a Task - end */

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};