import React from 'react';
import { ContainerTasks, TaskName } from './newTask.style'
// import { Container, Section } from './home.styles'
// import { NewTask } from '../components/tasks/newTask';

// import Header from '../../components/header/header.component';
// import Tasks from '../../components/tasks/tasks.components';
import iconDelete from '../../assets/delete_icon.svg';


interface Task {
    "id": number,
    "task": string,
    // "completed": boolean
} 

type Props = {
    item: Task,
   
}

export const Task_Item = ({ item}: Props) => {
    
    return (
        <ContainerTasks > 
            <TaskName> {item.task}</TaskName>
            <>
                <button>
                        <img 
                            src={iconDelete} 
                            alt="delete icon"
                            style={{ width: '15px' }}
                        />

                </button>
            </>

        </ContainerTasks>
    )
}