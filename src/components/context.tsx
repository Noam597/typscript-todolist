
import React,{useState,useContext,createContext} from 'react'
import { Tasks } from './interface'

interface ContextProps  {
    dark:boolean,
    setDark:React.Dispatch<React.SetStateAction<boolean>>
}
type DarkThemeProps = {
    children:React.ReactNode
}

interface TodoListScreenProps {
  todoList:Tasks[],
  setTodoList:React.Dispatch<React.SetStateAction<Tasks[]>>

}

const DarkThemeContext = createContext({} as ContextProps)

const ListLengthContext = createContext({} as TodoListScreenProps) 

export const TodoThemeContext = ({children}:DarkThemeProps) => {

    const [dark, setDark] = useState<boolean>(false)

    const [todoList, setTodoList] = useState<Tasks[]>(JSON.parse(localStorage.getItem("todos")!));
   
  return (
    <DarkThemeContext.Provider value={{dark,setDark}}>
      <ListLengthContext.Provider value={{todoList, setTodoList}}>
       {children}
       </ListLengthContext.Provider>
    </DarkThemeContext.Provider>
  )
}


export const DarkTheme =()=>{
    return useContext(DarkThemeContext)
}

export const TodoList = ()=>{
  return useContext(ListLengthContext) 
}