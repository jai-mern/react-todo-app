// TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete, onUpdateStatus }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onUpdateStatus={onUpdateStatus} />
      ))}
    </div>
  );
};

export default TodoList;
