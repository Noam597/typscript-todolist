
import { DarkTheme, TodoList } from './components/context';
import './App.css';
import Todo from './components/todo-list/Todo';
import Header from './components/header/Header';



function App() {
  const {dark} = DarkTheme();
  const { todoList } =TodoList()
  
  const screenHeightStyle = {
  height:todoList.length > 4?"100%":"100vh"
}
console.log(todoList.length)
  return (
    <div className={dark?"applight":"App"}  style={screenHeightStyle}>  
      <Header/>
      <Todo/>
      </div>
    
  );
}

export default App;
