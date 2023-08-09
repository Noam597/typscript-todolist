import {FormEvent,FC,useState,useEffect, useCallback} from 'react';
import { DarkTheme} from '../context';
import { Tasks } from '../interface';
import InputTask from '../input/Input';
import ListItem from '../listItem/ListItem';
import styles from './todo.module.css';

const LOCAL_STORAGE = "todos"

const Todo:FC = () => {

    const [task, setTask] = useState<string>('')

    const [error, setError] = useState<string>("");
    
    const { dark } = DarkTheme()
    
    const [todoList, setTodoList] = useState<Tasks[]>([]);


    const savedToDoItems = useCallback(()=>{
          const savedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE)!)
          if(savedItems){
              setTodoList(savedItems)
                      }
                      else{
                        setTodoList([])
                      }
  },[setTodoList]);


  useEffect(() => { 
    savedToDoItems()
    }
    
  , [savedToDoItems]);
  

    const addTask = (e:FormEvent) =>{
      e.preventDefault()
      if(!task){
       return   setError("Please fill in task")
      }
      else{
        const newList = {
          id:Date.now(),
          newTask:task,
          isDone:false}
        setTodoList([...todoList,newList])
           localStorage.setItem(LOCAL_STORAGE,JSON.stringify([...todoList,newList]))
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
          {todoList?.map((list,i)=>{
            return <div key={list.id} data-testid="task id">
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