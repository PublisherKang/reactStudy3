import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHEadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .time {
    margin-top: 4px;
    color: #868e96;
    font-size: 16px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  /* 현재 날짜 설정 */
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeString = today.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

  const dayName = today.toLocaleDateString('ko-kr', { weekday: 'long' });

  return (
    <TodoHEadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="time">{timeString}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHEadBlock>
  );
};

export default TodoHead;
