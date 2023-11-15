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
