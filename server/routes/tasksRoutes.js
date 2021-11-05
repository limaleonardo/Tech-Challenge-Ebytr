import { Router } from 'express';
import taskControllers from '../controllers/tasksController.js';

const taskRouter = Router();

taskRouter.get('/', taskControllers.getAllTasks);
taskRouter.post('/', taskControllers.createTask);
taskRouter.put('/:id', taskControllers.updateTask);
taskRouter.delete('/:id', taskControllers.removeTask);

export default taskRouter;