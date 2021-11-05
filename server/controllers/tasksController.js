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

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = req.body;
    const updatedTask = await taskServices.updateTasks(id, task);
    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(error.name).json({ message: error.message });
  }
};

const removeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await taskServices.deleteTask(id);

    return res.status(200).json(deletedTask);
  } catch (error) {
    return res.status(error.name).json({ message: error.message });    
  }
};

const taskControllers = {
  createTask,
  getAllTasks,
  updateTask,
  removeTask,
};

export default taskControllers;