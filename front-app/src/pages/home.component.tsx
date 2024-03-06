import { Container, Section } from './home.styles'
import { TaskContainer } from '../components/tasks/TaskList';

export default function Home() {
    return (
        <Section>
            <Container>
                <TaskContainer  />
            </Container>
        </Section>  
    )
}