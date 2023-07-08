import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { createToDo, deleteToDo } from "../../redux/toDoReducer";
import Button from "../assets/Button";
import s from "./TodoList.module.css"

const ToDoList = () =>{
    const todoList = useSelector((state) =>state.todoPage.todoList)
    const deleteBtnRef = useRef(null)
    const dispatch = useDispatch()
    const getAllTodos = todoList.map(task =>{
        return(
            <div className={s.taskContainer}>
                <input checked={task.isActive} type="checkbox" />
                <h3>
                    {task.title}
                </h3>
                {task.status === "pending" ? <Button text="X" handleClick={()=>{dispatch(deleteToDo(task.id))}} ref={deleteBtnRef}/> : null}
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
        {getAllTodos}
        <div className={s.addTodoForm}>
            <input className={s.addTodoInput} ref={inputTitleRef} placeholder="Write Task Title"/>
            <Button text="Add Todo" handleClick={handleBtn} ref={btnRef} className="addTodo"/>
        </div>
        </>
    )
}

export default ToDoList