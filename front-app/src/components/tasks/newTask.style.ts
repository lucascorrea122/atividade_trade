import styled from 'styled-components'

export const ContainerTasks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #8758ff;
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
`

export const TaskName = styled.p`
    color: #c5aeff;
    cursor: pointer;
`

export const Container = styled.form`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 6rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  header {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition : filter 0.2s;

    &:hover{
      filter: brightness(0.7);
    }
  }
  input {
    width: 60%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
     color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
`;
