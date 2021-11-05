import { ObjectId } from 'mongodb';
import CustomError from '../errors/CustomError.js';
import connection from './connections.js';

const COLLECTION_NAME = 'tasks';
const serverErrorMsg = 'server misbehavior';

const createTask = async (task) => {
  try {
    const date = new Date().toLocaleDateString('pt-br', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const db = await connection();
    const createdTask = await db
      .collection(COLLECTION_NAME)
      .insertOne({ ...task, date });

    const result = { _id: createdTask.insertedId, ...task, date };
    return result;
  } catch (error) {
    console.log(error.message);
    throw new CustomError(serverErrorMsg, 500);
  }
};

const findTasks = async (query = {}) => {
  try {
    const db = await connection();
    const tasks = db.collection(COLLECTION_NAME).find(query).toArray() || [];
    return tasks;
  } catch (error) {
    console.log(error.message);
    throw new CustomError(serverErrorMsg, 500);
  }
};

const updateTask = async (id, task) => {
  try {
    const date = new Date().toLocaleDateString('pt-br', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const db = await connection();
    const updatedTask = await db
      .collection(COLLECTION_NAME)
      .replaceOne({ _id: ObjectId(id) }, { ...task, date });

    if (updatedTask.matchedCount === 0) {
      throw new CustomError('task not found', 404);
    }

    const result = { _id: id, ...task, date };
    return result;
  } catch (error) {
    console.log(error.message);
    throw new CustomError(serverErrorMsg, 500);
  }
};

const removeTask = async (id) => {
  try {
    const db = await connection();
    const deletedTask = await db
      .collection(COLLECTION_NAME)
      .findOneAndDelete({ _id: ObjectId(id) });
    return deletedTask.value;
  } catch (error) {
    throw new CustomError(serverErrorMsg, 500);
  }
};

const tasksModel = {
  createTask,
  findTasks,
  updateTask,
  removeTask,
};
export default tasksModel;