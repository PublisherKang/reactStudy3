import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </TodoListBlock>
  );
  // const TodoList = () => {
  //   return (
  //     <TodoListBlock>
  //       <TodoItem text="프로젝트 생성하기" done />
  //       <TodoItem text="컴포넌트 스타일링하기" done />
  //       <TodoItem text="Context 만들기" done={false} />
  //       <TodoItem text="기능 구현하기" done={false} />
  //     </TodoListBlock>
  //   );
};

export default TodoList;
