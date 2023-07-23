import s from "./TodoListItem.module.css"
import Button from "../assets/Button"
import { useRef } from "react";

const TodoListItem = (props) => {
    const deleteBtnRef = useRef(null)

    return(
        <div className={s.taskContainer}>
        <input checked={props.isActive === false} type="checkbox" />
        <h3>
            {props.text}
        </h3>
        {props.status === "Active" ? <Button text="X" handleClick={()=>{props.deleteToDo(props.id)}} ref={deleteBtnRef}/> : null}
    </div>
    )
}

export default TodoListItem