
import { DarkTheme, TodoList } from './components/context';
import './App.css';
import Todo from './components/todo-list/Todo';
import Header from './components/header/Header';



function App() {
  const {dark} = DarkTheme();
  const { todoList } =TodoList()
  

console.log(todoList.length)
  return (
    <div className={dark?"applight":"App"}  >  
      <Header/>
      <Todo/>
      </div>
    
  );
}

export default App;
