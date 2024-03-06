import { Router } from "express";

import { TasksController } from "../controller/controller-index";

export const router = Router();


/**
 * Rota para saber se está OK o service!
 */
router.get('/', (req, res) => res.send('API TO TASKS - CRUD - FUNCIONANDO'))

/**
 * ROTAS
 * 
 */
router.post('/newtask', TasksController.createTask)
router.get('/tasks', TasksController.listTasks)
router.put	('/updatetask', TasksController.checkTask)
router.delete('/deletetask', TasksController.removeTask)
