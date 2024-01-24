// App.js
import React, { useState } from 'react';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: new Date().getTime().toString() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: newStatus };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <h1 style={{ backgroundColor: 'green', color: 'white' }}>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdateStatus={updateStatus} />
    </div>
  );
};

export default App;
