import Button from "../assets/Button";
// import TodoListItem from "./TodoListItem"
import s from "./TodoList.module.css"
import { useRef } from "react";

const ToDoList = (props) =>{
    const deleteBtnRef = useRef(null)
    
    // let listInfo = []
    // switch(props.filter){
    //     case 'Active': {
    //         // console.log('active')
    //         listInfo = props.tasks.filter((taskItem)=>{
    //         if(taskItem.status === "Active"){
    //             return taskItem
    //             } else{
    //                 return null
    //             }
    //         })
    //         break
    //         }
    //         case 'Completed': {
    //             listInfo = props.tasks.filter((taskItem)=>{
    //             if(taskItem.status === "Completed"){
    //                 return taskItem
    //                 } else{
    //                     return null
    //                 }
    //             })
    //             break
    //             }
    //         default: {
    //             listInfo = props.tasks
    //             break
    //         }
    //     }
        // const ListCollection = listInfo.map((listItem)=>{
        //     return <TodoListItem
        //     id={listItem.id}
        //     isActive={listItem.isActive}
        //     deleteBtn={props.deleteToDo()}
        //     key={listItem}
        //     status={listItem.status}
        //     text={listItem.title}
        //     />
        // })
    const getAllTodos = props.tasks.map(task =>{
        return(
            <div className={s.taskContainer}>
                <input checked={task.isActive === false} type="checkbox" />
                <h3>
                    {task.title}
                </h3>
                {task.status === "Active" ? <Button text="X" handleClick={()=>{props.deleteToDo(task.id)}} ref={deleteBtnRef}/> : null}
            </div>
        )
    })
    console.log(props.tasks)
    const inputTitleRef = useRef(null)
    const btnRef = useRef(null)

    const handleBtn = () => {
        props.createToDo(inputTitleRef.current.value)
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