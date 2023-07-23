import {connect} from "react-redux"
import ToDoList from "./TodoList"
import { createToDo, deleteToDo } from "../../redux/toDoReducer";

const mapStateToProps = (state)=>({
    filter: state.todoPage.filterStatus,
    tasks: state.todoPage.todoList
})

const mapDispatchToProps = {
createToDo: createToDo,
deleteToDo: deleteToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)