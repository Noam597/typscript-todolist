import React,{FormEvent} from "react"


export interface Tasks  {
    id:number,
    newTask:string 
    isDone:boolean
};



export interface InputProps {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    addTask:(e:FormEvent)=> void;
}