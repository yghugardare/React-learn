import React, { useState } from "react";
import { useToDos } from "../context/ToDoContext";

function ToDoItem({ todoObj }) {
  const [task, setTask] = useState(todoObj.task);
  
  const [isEditable, setIsEditable] = useState(false);
  const { deleteTodo, updateTodo, toggleCompleted } = useToDos();
  function edit(id) {
    if (task === "") {
      setTask("Some Task");
      updateTodo(id, task);
    }
    updateTodo(id, task);
  }
 
  return (
    <div className="flex justify-center items-center my-1 gap-x-1 ">
      <input
        
        className="w-6 p-4 h-6 cursor-pointer"
        type="checkbox"
        checked={todoObj.completed}
        onChange={()=>toggleCompleted(todoObj.id)}
      />
      <input
        className={`p-2 w-[250px]   text-black outline-none rounded-md ${todoObj.completed?"bg-green-300 line-through":"bg-gray-300"}`}
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        readOnly={!isEditable}
      />
      <button
        disabled={todoObj.completed}
        onClick={() => {
          if (isEditable) {
            edit(todoObj.id);
          }
          setIsEditable(!isEditable);
        }}
        className={`p-2 rounded-md  ${todoObj.completed?"bg-green-800 cursor-not-allowed":"bg-green-700 hover:bg-green-500"}`}
      >
        {isEditable ? "Done" : "Edit"}
      </button>
      <button
       
        onClick={() => deleteTodo(todoObj.id)}
        className="p-2 rounded-md bg-red-700 hover:bg-red-500 "
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
