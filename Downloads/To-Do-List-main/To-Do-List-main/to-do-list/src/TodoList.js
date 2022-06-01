import React from 'react';
import Todo from './Todo.js';

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map((todo) => <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />)
  );
}
