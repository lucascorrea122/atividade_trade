import { Request, Response } from "express";

interface task {
    id: number,
    task: string,
    status: boolean
}

const tasks: task[] = [];
var id_increment = 0

/**
 * requisição que cria uma nova "task" 
 * recebe um objeto do type TASK, adiciona um ID incremental
 * adiciona no array de objeto do type TASK e retorna o array como resposta
 *  
 * @param req 
 * @param res 
 * @returns 
 */
export const createTask = (req: Request<task>, res: Response) => {
    const unique_task: task= req.body;
    unique_task.id = id_increment += 1;
    tasks.push(unique_task);

    return res.json(tasks);
};

/**
 * Método que retorna o array das tasks
 * 
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const listTasks = (req: Request<{}, {}, task>, res: Response) => {
    return res.json(tasks);
};

/**
 * Método que recebe o objeto task para atualizar e retorna o array atualizado
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const checkTask = (req: Request<{}, {}, task>, res: Response) => {
    updateTask(req.body.id, req.body.status);
    
    return res.json(tasks);
};

/**
 * Método que recebe o objeito task para excluir e retorna o array atualizado
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const removeTask = (req: Request<{}, {}, task>, res: Response) => {
    deleteTask(Number(req.query.id));
    
    return res.json(tasks);
};

/**
 * Função que recebe ID da atividade para atualizar a "task" como feita!
 * Checa qual índice essa "TASK" está e faz o update
 * 
 * @param id 
 * @returns 
 */
function updateTask(id: number, status: boolean){
    tasks.forEach((item, index) => {
        if(item.id == id){
            item.status = status
            return true;
        }
    });
    return false;
}

/**
 * Função que recebe ID da atividade para deletar!
 * Checa qual índice essa "TASK" está e deleta todo o objeto do índice
 * 
 * @param id 
 * @returns 
 */
function deleteTask(id: number){
    tasks.forEach((item, index) => {
        if(item.id == id){
            tasks.splice(index,1);
            return true;
        }
    });
    return false;
}
