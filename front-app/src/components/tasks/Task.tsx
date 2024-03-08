import { useState } from 'react';
import { ContainerTask, DivTaskBox, HiddenCheckbox, TaskName } from './Task.component.style'
import iconDelete from '../../assets/delete_icon.svg';
import  TaskProps from '../../model/interface'


type Props = {
    item: TaskProps,
    onClickDelete: (taskId: number) => void,
    onClickCompleted: (taskId: number, taskStatus: boolean) => void
}

export const TaskItem = ({ item, onClickDelete, onClickCompleted}: Props) => {
    const [checked, setChecked] = useState(item.status);
    const handleSubmit = (event: any) => {
        // prevent default action
        event.preventDefault();
        onClickDelete(item.id)
      };
    
      const handlerUpdate = (taskId: number, taskStatus: boolean) => {
            setChecked(!checked);
            onClickCompleted(taskId, taskStatus);
      }

    return (
        <ContainerTask > 
            <DivTaskBox>
            
            <HiddenCheckbox 
                checked={checked}
                onChange={e => handlerUpdate(item.id, e.target.checked)}
            />
            <TaskName  
                status={checked}> 
                {item.task} 
            </ TaskName>
            </ DivTaskBox>
                <button>
                        <img 
                            src={iconDelete} 
                            alt="delete icon"
                            style={{ width: '15px' }}
                            onClick={handleSubmit}
                        />

                </button>
        </ContainerTask>
    )
}
