const Task = require("../models/Task");

/** Create a Task */

const createTask = async (userId, taskData) => {
  return await Task.create({
    ...taskData,
    user: userId,
  });
};

/** Get all Tasks */

const getTasks = async (userId) => {
  return await Task.find({ user: userId }).sort({ createdAt: -1 });
};

/** Get a Task by ID */

const getTaskById = async (taskId, userId) => {
  const task = await Task.findOne({
    _id: taskId,
    user: userId,
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

/** Update a Task */

const updateTask = async (taskId, userId, taskData) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: taskId,
      user: userId,
    },
    taskData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

/** Delete a Task */

const deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({
    _id: taskId,
    user: userId,
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};