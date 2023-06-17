import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { createToDo, deleteToDo } from "../../redux/toDoReducer";
const ToDoList = () =>{
    const todoList = useSelector((state) =>state.todoPage.todoList)
    const deleteBtnRef = useRef(null)
    
    const dispatch = useDispatch()
    const getAllTodos = todoList.map(task =>{
        return(
            <div className="task-container">
                <h3>
                    {task.title}
                </h3>
                <p>Status: {task.status}</p>
                {task.status === "pending" ? <button onClick={()=>{dispatch(deleteToDo(task.id))}} ref={deleteBtnRef}>X</button> : null}
                
            </div>
        )
    })
    console.log(todoList)
    const inputTitleRef = useRef(null)
    const btnRef = useRef(null)

    const handleBtn = () => {
        dispatch(createToDo(inputTitleRef.current.value))
        inputTitleRef.current.value = ""
    }
    return(
        <>
        <h1>ToDoList</h1>
        {getAllTodos}
        <div className="addTodoForm">
            <input ref={inputTitleRef} placeholder="Write Task Title"/>
            <button onClick={()=>{handleBtn()}} ref={btnRef} className="addTodo">Add Todo</button>
        </div>
        </>
    )
}

export default ToDoList