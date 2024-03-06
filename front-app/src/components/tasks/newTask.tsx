// import { FormEvent, useState } from 'react';
// import { useNotes } from '../../hooks/useNotes';

import { Container, Content } from './newTask.style'

export function NewTask() {
//   const { createNote } = useNotes();

//   const [title, setTitle] = useState('');
//   const [completed, setCompleted] = useState(false);

//   async function handleCreateNewNote(event: FormEvent) {
//     event.preventDefault()
//     if (!title.trim()) return

//     await createNote({ title, completed })
//     setCompleted(false)
//     setTitle('')
//   };

  return (
    <Container >
      <Content>

        <header>toDo</header>

        <input
          placeholder="Title"
          value={'d'}
        //   onChange={event => setTitle(event.target.value)}
        />

        <button
          type="submit"
        >
          New note
        </button>

      </Content>
    </Container>
  )
}
