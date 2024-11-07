import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";
import { fetchTodos } from "./services/todoService";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    const loadTodos = async () => {
      const todosData = await fetchTodos();
      setTodos(todosData);
    };
    loadTodos();
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <TodoList todos={currentTodos} setTodos={setTodos} />
      <Pagination
        totalItems={todos.length}
        itemsPerPage={todosPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
