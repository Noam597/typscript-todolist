import React, { FC } from "react";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { BiCheckDouble } from "react-icons/bi";
import { DarkTheme } from "../context";
import { Tasks } from "../interface";
import styles from "./listItem.module.css";

type ItemProps = {
  item: Tasks;
  todos: Tasks[];
  setTodos: React.Dispatch<React.SetStateAction<Tasks[]>>;
};

const ListItem: FC<ItemProps> = ({ item, todos, setTodos }) => {
  const { dark } = DarkTheme();

  const style = {
    backgroundColor: item.isDone ? "#51d651" : undefined,
    color: item.isDone ? "black" : undefined,
    textDecoration:  item.isDone ?"line-through":undefined
  };

  const saveNewToDo =(task:Tasks[])=>{
      setTodos(task)
      localStorage.setItem("todos",JSON.stringify(task))
  }


  const completeTask = (id: number) => {
     const complete = todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    saveNewToDo(complete);
  };

  const removeToDo = (id: number) => {
    const remove = todos.filter((item) => {
        return item.id !== id; 
      })
    saveNewToDo(remove)
     
    ;
  };
  return (
    <div
      className={ `${styles.listItem} ` + (dark ? `${styles.light}` : `${styles.dark}`)} style={style}>
       <div>
      <p>{item.newTask}</p></div>
      <div className={styles.buttons}>
        <button
          className={item.isDone ? `${styles.done}` : ``}
          onClick={() => completeTask(item.id)}>
          {item.isDone ? <BiCheckDouble /> : <AiOutlineCheck />}
        </button>
        <button className={styles.delete} onClick={() => removeToDo(item.id)}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
