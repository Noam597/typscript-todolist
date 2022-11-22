import {FormEvent,FC,useState,useEffect, useCallback} from 'react';
import { DarkTheme, TodoList } from '../context';
import InputTask from '../input/Input';
import ListItem from '../listItem/ListItem';
import styles from './todo.module.css';



const Todo:FC = () => {

    const [task, setTask] = useState<string>('')

    const [error, setError] = useState<string>("");
    
    const { dark } = DarkTheme()
    
    const {todoList, setTodoList} = TodoList()
    
    const savedToDoItems = useCallback(()=>{
          const savedItems = JSON.parse(localStorage.getItem("todos")!)
          if(savedItems){
              setTodoList(savedItems)
                      }
  },[setTodoList]);

  useEffect(() => { 
    savedToDoItems()
    }
  , [savedToDoItems]);
  

    const addTask = (e:FormEvent) =>{
      e.preventDefault()
      if(!task){
        setError("Please fill in task")
      }else{
        setTodoList([...todoList,{
          id:Date.now(),
          newTask:task,
          isDone:false}])
            localStorage.setItem("todos",JSON.stringify(todoList))
          setTask("")
        setError("")
      }
      
    }
    

   

 
  return (
    <div className={`${styles.todo} `+ (dark? `${styles.light}`:`${styles.dark}`)}>
    <div  className={styles.todoContainer}> 
      <InputTask todo={task} setTodo={setTask} addTask={addTask}/>
        {error && <p className={styles.error}>{error}</p>}
      <div className={styles.todoList}>
        <div>
          {todoList.map((list)=>{
            return <div key={list.id}>
                      <ListItem item={list} todos={todoList} setTodos={setTodoList}/>
                  </div>
          })}
        </div>
     
       </div>
   </div>
    </div>
  )
}

export default Todo