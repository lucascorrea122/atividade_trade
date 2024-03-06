import React, { useEffect, useState } from 'react';
import { ContainerTasks, TaskName } from './newTask.style'
// import { Container, Section } from './home.styles'
// import { NewTask } from '../components/tasks/newTask';

// import Header from '../../components/header/header.component';
// import Tasks from '../../components/tasks/tasks.components';
// import iconDelete from '../../assets/delete_icon.svg';
import { Task_Item } from './Task';
import api from '../../service/api';


interface Task {
    "id": number,
    "task": string,
    // "completed": boolean
} 



export const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        api.get('tasks/').then(response => {
            setTasks(response.data);
            console.log(response.data);
        });
    }, [])

      const handleAddTask = (taskName: string) => {
        let newList = [...tasks];
        newList.push({
            id: tasks.length + 1,
            task: taskName,
            // description: taskName
        });
        setTasks(newList);
        handlerCreateItem(taskName, tasks.length + 1);
    }

    const handDeleteTask = (taskId: number) => {
        let newList = [...tasks];
        console.log(taskId);
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

    // const handleUpdate = (taskId: number, taskStatus: boolean, taskDescription: string) => {
    //     handlerUpdateItem(taskId, taskStatus, taskDescription);
    // }

    // const [filtro, setFiltro] = useState(0);
    
    return (
        <>  
              {tasks.map((item) => (
                    
             <Task_Item 
                    key={item.id}
                    item={item}
            />
            ))}
        </>
)};




/**
 * method that creates a task in the API
 * 
 * @param description 
 * @param id 
 */
function handlerCreateItem(description: string, id: number) {
    api.post(`tasks/`, {
        description: description,
        state: false,
        id: id
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

}

/**
 * Method that delete a task;
 * 
 * @param id 
 */
function handlerDeleteItem(id: number) {
    api.delete(`tasks/${id}`, {
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 * Method that update a task;
 * 
 * @param id 
 * @param status 
 * @param description 
 */
function handlerUpdateItem(id: number, status: boolean, description: string) {

    api.put(`tasks/${id}`, {
        description: description,
        state: !status,
        id: id
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

}





