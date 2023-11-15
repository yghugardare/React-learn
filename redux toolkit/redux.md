# Redux toolkit
in redux we have store,this store can be changed via reducers which are nothing bout objects having functionality to make changes in the store.
We have two hooks- useSelector -> to select value from a store , useDispatch->to send value to store by making use of reducers

## Redux Steps

1. Installation
```bash
npm install @reduxjs/toolkit
npm install react-redux
```
2. Create Store
```bash
touch ./src/app/store.js
```
```javascript
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({})
```
3. Create reducers(slice)
```bash
touch ./src/features/todo/todoSlice.js
```
```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";
//create initial state for todo
const initialState = {
  todos: [{ id: 1, text: "Hello" }],
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
    }
    
  },
});
// extract individual functionality
export const {addTodo,removeTodo} = todoSlice.actions;
// export all the reducers for the store to configure
export default todoSlice.reducer;
```
4. Add todoSlice reducer to configure store
```javascript
import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../features/todo/todoSlice";
export const store = configureStore({
    reducer: todoSliceReducer
})
```