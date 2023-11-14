import React, { useState } from "react";
import { useToDos } from "../context/ToDoContext";

function ToDoForm() {
    const [task, setTask] = useState("");
    const {addToDo} = useToDos();
    function addTask(e){
        e.preventDefault();
        if(task!==""){
            addToDo({task,completed:false});
            setTask("")
        }else{
            return;
        }
    }
  return (
    <form className="mx-auto py-3"
    onSubmit={(e)=>addTask(e)}
    >
      <h1 className="text-xl text-center p-2 font-semibold">To Do List</h1>
      <input
        className="p-2 bg-gray-300 rounded-r-none text-black outline-none rounded-md w-[300px]"
        placeholder="Add Task here.."
        type="text"
        onChange={(e)=>setTask(e.target.value)}
        value={task}
      />
      <button className="p-2 bg-blue-600 rounded-l-none duration-200 hover:bg-sky-500 rounded-lg">
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;
