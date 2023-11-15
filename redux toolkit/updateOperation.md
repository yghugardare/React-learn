# update operation logic

- In the slice , first define the update function reducer

```bash
cd ./src/features/todo/todoSlice.js
```

```javascript
updateTodo: (state, action) => {
  state.todos = state.todos.map((todo) =>
    todo.id === action.payload.id
      ? { ...todo, text: action.payload.text }
      : todo
  );
};
```

- In the above code , we can clearly see that we are passing an object `action` which in actual will be todo object
- Now in App.jsx, define obj using useState,

```javascript
function App() {
  // obj represents todoObj
  const [obj, setObj] = useState({ id: 1, text: "" });
  // handle edit will take the todo on which edit button was pressed
  function handleEdit(todo) {
    setObj({ ...todo });
  }

  return (
    <div className="bg-slate-800 text-white w-full h-screen">
      <h1 className="text-2xl text-center py-2">To Do list</h1>
      {/* once the object is been sent and handleEdit is called , setObj will set the obj as setObj and the component will re render , passing the new todo obj in the AddToDo component*/}
      <AddToDo obj={obj} setObj={setObj} />
      {/*to take object on which edit button is pressed we send handleEdit as prop to todoItem.*/}
      <ToDoItems onEdit={handleEdit} />
    </div>
  );
}

export default App;
```

- Inside ToDoItems component , we have to pass todoObj when clicked on edit button

```javascript
function ToDoItems({ onEdit }) {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="grid place-content-center">
      {todoList.map((todo) => (
        <li className="p-4" key={todo.id}>
          {todo.text}
          <button
            onClick={() => onEdit(todo)}
            className="px-2 py-1 bg-green-700"
          >
            Edit
          </button>
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
- In AddToDo, we aim to bring the text of selected todoObj in the input field for the user to change it.
```javascript
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,updateTodo } from "../features/todo/todoSlice";

function AddToDo({ obj,setObj }) {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if(obj.text){
        // as the value will be changed
        // when the user changes it
        if(input){obj.text = input;}
        // then passing it as aobject
        dispatch(updateTodo(obj));
    }else{
        dispatch(addTodo(input));
    }
    
    setObj({id:1,text:""})
    setInput("");
  }
  // useEffect to update the input field when todoObj text changes
  useEffect(() => {
    // this will bring the text in the input field
    setInput(obj.text)
  }, [obj.text]);
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center py-4"
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="p-2 bg-gray-300 text-black"
        type="text"
      />
      <button className="p-2 bg-blue-600">
        {obj.text ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default AddToDo;
```

# Done 🎉😉