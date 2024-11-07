import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
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
