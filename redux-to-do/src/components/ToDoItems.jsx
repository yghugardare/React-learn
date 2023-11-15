import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo} from "../features/todo/todoSlice";

function ToDoItems({onEdit}) {
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
