import taskServices from '../services/tasksServices.js';

const createTask = async (req, res) => {
  try {
    const result = await taskServices.createTask(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.name).json({ message: error.message });
  }
};

const getAllTasks = async (_req, res) => {
  try {
    const taskList = await taskServices.findTasks();
    return res.status(200).json(taskList);
  } catch (error) {
    return res.status(error.name).json({ message: error.message });
  }
};

const taskControllers = {
  createTask,
  getAllTasks,
};

export default taskControllers;