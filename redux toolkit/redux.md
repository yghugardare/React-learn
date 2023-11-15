# Redux toolkit
in redux we have store,this store can be changed via reducers which are nothing bout objects having functionality to make changes in the store.
We have two hooks- useSelector -> to select value from a store , useDispatch->to send value to store by making use of reducers

## Redux Steps

1. Installation
```bash
npm install @reduxjs/toolkit
npm install react-redux
```
2. Create Store(Single source of truth)
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
5. Wrap Provider in the parent of the child componets that you want to provide store values
```bash
cd main.jsx
```
```javascript
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store' 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```
6. Now create a component addTodo and make use of `addTodo` reducer to dispatch the `new state` values to the store by using `useDispatch`
```javascript
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'
function AddToDo() {
    const[input,setInput]=useState("");
    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <form 
    onSubmit={(e)=>handleSubmit(e)}
    className='flex justify-center py-4'>
        <input 
        onChange={(e)=>setInput(e.target.value)}
        value={input}
        className='p-2 bg-gray-300 text-black'
        type="text" />
        <button className='p-2 bg-blue-600'>Add Task</button>
    </form>
  )
}
export default AddToDo
```
7. Create a ToDoItems components and 
  - store todoList  by selecting the `todos` in the `todoSlice`, this is done using `useSelector` Hook.
  - then map through todoList and use list rendering to add todo's with delete  button.
  - and then add individual dispatch for each click event on the delete button
```javascript
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function ToDoItems() {
  // this is how we select value from store
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="grid place-content-center">
      {todoList.map((todo) => (
        <li className="p-4" key={todo.id}>
          {todo.text}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="px-2 py-1 bg-red-700"
          >
            Delete
          </button>
          
        </li>
      ))}
    </div>
  );
}

export default ToDoItems;

```
