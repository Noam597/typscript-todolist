
import { DarkTheme } from './components/context';
import './App.css';
import Todo from './components/todo-list/Todo';
import Header from './components/header/Header';



function App() {
  const {dark} = DarkTheme();

  return (
    <div className={dark?"applight":"App"}  >  
      <Header/>
      <Todo/>
      </div>
    
  );
}

export default App;
