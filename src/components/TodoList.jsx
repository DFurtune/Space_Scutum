import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
