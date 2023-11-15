import { createSlice, nanoid } from "@reduxjs/toolkit";
//create initial state for todo
const initialState = {
  todos: [],
};
// create rducers aka slice
// while creating a slice , we specify its name,initialState
// then  add reducers with property and its value as function
export const todoSlice = createSlice({
  name: "todo", //name of the slice
  initialState, //state that will be passed to our reducer functions
  reducers: {
    // state represents the current state
    // action consist of all the data that is passed
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is object
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});
// extract individual functionality
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// export all the reducers for the store to configure
export default todoSlice.reducer;
