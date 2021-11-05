import { ObjectId } from 'mongodb';
import tasksModel from '../models/tasksModel.js';
import { stringValidation } from '../helpers/validations.js';
import CustomError from '../errors/CustomError.js';

const createTask = async (task) => {
  try {
    const { title, status } = task;
    if (!title || !status) {
      throw new CustomError(
        'Title and status can not be empty',
        422,
    );
    }
  
    if (!stringValidation(title) || !stringValidation(status)) {
      throw new CustomError(
        'Title and status must be of type "string"',
        422,
      ); 
    }
  
    return await tasksModel.createTask(task);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const findTasks = async (id) => {
  if (id) {
    if (!ObjectId.isValid(id)) {
      throw new CustomError('invalid Id', 404);
    }

    const result = await tasksModel.findTasks({ _id: id });
    return result;
  }

  const result = tasksModel.findTasks();
  return result;
}; 

const taskServices = {
  createTask,
  findTasks,
};

export default taskServices;
