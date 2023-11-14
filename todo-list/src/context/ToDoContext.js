import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDoList:[{
        id:1,
        task:"Task",
        completed:false
    }],
    addToDo:(todoObj)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,task)=>{},
    toggleCompleted:(id)=>{}
});
export const ToDoContextProvider = ToDoContext.Provider;
// custom hook
export function useToDos(){
    return useContext(ToDoContext);
}