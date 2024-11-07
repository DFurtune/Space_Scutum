import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => action.payload,
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].title = action.payload.title;
      }
    },
  },
});

export const { setTodos, addTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
