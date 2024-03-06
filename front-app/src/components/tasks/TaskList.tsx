import { useEffect, useState } from 'react';
import { TaskItem } from './Task';
import { NewTask } from './newTask';
import  TaskProps from '../../model/interface'
import api from '../../service/api';

export const TaskContainer = () => {

    const [tasks, setTasks] = useState<TaskProps[]>([]);

    /**
     * Código que roda toda vez que a página é renderizada
     */
    useEffect(() => {
        api.get('tasks/').then(response => {
            setTasks(response.data); 
        });
    }, [])

    /**
     * Método que recebe via ImitData o nome da atividade
     * Cria o objeto e envia os parametros necessarios para o serviço que se comunica com a API
     * 
     * @param taskName 
     */
    const handleAddTask = (taskName: string) => {
        let newList = [...tasks];
        newList.push({
            task: taskName,
            id: tasks.length + 1,
            status: false
        });
        setTasks(newList);
        handlerCreateItem(taskName, tasks.length + 1);
      }

    /**
     * Método que recebe via ImitData o ID da atividade
     * Cria uma lista provisória da LIST que veio da API para atualizar para o usuário
     * Envia o ID para o serviço que se comunica com a API
     * 
     * 
     * @param taskId 
     */ 
    const handDeleteTask = (taskId: number) => {
        let newList = [...tasks];
        for (var i = 0; i < newList.length; i++) {
            if (newList.hasOwnProperty(i)) {
                if (newList[i].id === taskId) {
                    newList.splice(i, 1);
                    setTasks(newList);
                    handlerDeleteItem(taskId);
                    break;
                }
            }
        }
    }

    /**
     * Método que recebe o ID e Status da atividade que está sendo atualizada <Completa ou Imcompleta>
     * Envia o ID e Status para o serviço que se comunica com a API
     * 
     * @param taskId 
     * @param taskStatus 
     */
    const handleUpdate = (taskId: number, taskStatus: boolean) => {
        handlerUpdateItem(taskId, taskStatus);
    }

    return (
        <>  
            <NewTask onEnter={handleAddTask}/>
            {tasks.map((item) => (
                <TaskItem 
                    key={item.id}
                    item={item}
                    onClickDelete={handDeleteTask}
                    onClickCompleted={handleUpdate}
                />
                ))
            }
        </>
)};






/**
 * Metodo que deleta uma tarefa na API;
 * 
 * @param id 
 */
function handlerDeleteItem(id: number) {
    api.delete(`deletetask/`, {
        params: { id: id },
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 * Metodo que atualiza uma tarefa na API
 * 
 * @param id 
 * @param status 
 * @param description 
 */
function handlerUpdateItem(id: number, status: boolean) {

    api.put(`updatetask/`, {
        id: id,
        status: status
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

}



/**
 * metodo que cria uma tarefa na API
 * 
 * @param description 
 * @param id 
 */
function handlerCreateItem(description: string, id: number) {
  api.post(`newtask/`, {
      task: description,
      status: false,
  })
      .then(response => {
          console.log(response);
      })
      .catch(error => {
          console.log(error);
      });
}

