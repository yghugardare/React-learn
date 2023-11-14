import { useEffect, useState } from "react";
import { ToDoContextProvider } from "./context/ToDoContext";
import ToDoForm from "./Components/ToDoForm";
import ToDoItem from "./Components/ToDoItem";

function App() {
  const [toDoList, setToDoList] = useState([]);
  function addToDo(todoObj) {
    setToDoList((prevToDoObj) => [
      { id: Date.now(), ...todoObj },
      ...prevToDoObj,
    ]);
  }
  function deleteTodo(id) {
    setToDoList(toDoList.filter((todoObj) => todoObj.id !== id));
  }
  function updateTodo(id, task) {
    setToDoList(
      toDoList.map((todoObj) =>
        todoObj.id === id ? { ...todoObj, task } : todoObj
      )
    );
  }
  function toggleCompleted(id) {
    setToDoList((prevList) =>
      prevList.map((todoObj) =>
        todoObj.id === id
          ? { ...todoObj, completed: !todoObj.completed }
          : todoObj
      )
    );
  }
  // to fetch all to do items
  useEffect(()=>{
    const toDos = JSON.parse(localStorage.getItem('todo'))
    if (toDos && toDos.length>0){
      setToDoList(toDos);
    }
  },[])
  // second we store it, for storing we use another useEffect, because 
  //  if we add the logic in the first useEffect then the fetching will
  // also happen for every creation, updation and deletion, so to prevcent 
  // it , we use another useEffect hook.
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(toDoList));
  },[toDoList])
  return (
    <ToDoContextProvider
      value={{ toDoList, addToDo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <div className="w-full flex flex-col h-screen bg-slate-700 text-white">
        <ToDoForm />
        {toDoList.map((todoObj) => (
          <ToDoItem key={todoObj.id} todoObj={todoObj} />
        ))}
      </div>
    </ToDoContextProvider>
  );
}

export default App;
