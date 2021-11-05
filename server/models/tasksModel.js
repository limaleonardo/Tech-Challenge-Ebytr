import CustomError from '../errors/CustomError.js';
import connection from './connections.js';

const COLLECTION_NAME = 'tasks';

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
    throw new CustomError('server misbehavior', 500);
  }
};

const findTasks = async (query = {}) => {
  try {
    const db = await connection();
    const tasks = db.collection(COLLECTION_NAME).find(query).toArray() || [];
    return tasks;
  } catch (error) {
    console.log(error.message);
    throw new CustomError('server misbehavior', 500);
  }
};
const tasksModel = {
  createTask,
  findTasks,
};
export default tasksModel;