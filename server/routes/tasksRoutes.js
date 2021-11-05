import { Router } from 'express';
import taskControllers from '../controllers/tasksController.js';

const taskRouter = Router();

taskRouter.get('/', taskControllers.getAllTasks);
taskRouter.post('/', taskControllers.createTask);

export default taskRouter;