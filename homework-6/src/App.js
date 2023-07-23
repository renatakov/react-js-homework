import ToDoList from "./Components/TodoList/TodoListContainer";
import Header from "./Components/Header/Header";
import "./App.css"
const App = () =>{
  return(
    <div className="body">
      <Header/>
    <ToDoList/>
    </div>
  )
}

export default App;
