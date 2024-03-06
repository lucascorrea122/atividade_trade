import { useState } from 'react';
import { Container, Section } from './home.styles'
import { NewTask } from '../components/tasks/newTask';
import { TaskList } from '../components/tasks/TaskList';

// import Header from '../../components/header/header.component';
// import Tasks from '../../components/tasks/tasks.components';

interface Task {
    "id": number,
    "task": string,
    // "completed": boolean
} 
export default function Home() {

    const [list, setList] = useState<Task[]>([
        { id: 1, task:'atividade'},
   
      ]);
    return (
        <Section>
            <Container>
                {/* <Header/> */}
                {/* <Tasks/> */}
                <NewTask />
                <TaskList />
                <h1>teste</h1>
            </Container>
        </Section>  
    )
}