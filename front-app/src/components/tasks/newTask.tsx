
import { Container, Content } from './Task.component.style'
import { useState } from 'react';

type Props = {
  onEnter: (taskName: string) => void
}

export const NewTask = ({ onEnter }: Props) => {

const [inputText, setInputText] = useState('');

const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {

  if(event.code === 'Enter' && inputText !== '') {
    // add task
    onEnter(inputText);
    // clear form after submission
    setInputText('');
  }
};

const handleSubmit = (event: any) => {
  // prevent default action
  event.preventDefault();
  if (inputText) {
    // add task
    onEnter(inputText);
    // clear form after submission
    setInputText('');
  }
};

  return (
    <Container >
      <Content>
        <header>Task System</header>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={inputText}
            onChange={e=>setInputText(e.target.value)}
            onKeyUp={handleKeyDown}
          />
          <button onClick={handleSubmit}> Add Task </button>
      </Content>
     </Container>
  )
}


