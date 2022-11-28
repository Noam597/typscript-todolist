import React,{FC} from 'react'
import { InputProps } from '../interface';
import styles from './input.module.css';
import { DarkTheme } from '../context';



const InputTask:FC<InputProps> = ({todo,setTodo,addTask}) => {

  const{dark} = DarkTheme()
  return (
    <>
    <form className={styles.inputField}>
        <input type='text'
         name='task'
          value={todo}
           onChange={(e)=>setTodo(e.target.value)}
           placeholder="Add New Task.."/>
        <button 
        className={`${styles.button} `+ (dark ?`${styles.btn_light}`:`${styles.btn_dark}`)} 
        onClick={addTask} 
        type='submit'>ADD TASK</button>
    </form>
    </>
  )
}

export default InputTask