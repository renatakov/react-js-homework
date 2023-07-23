import Button from "../../assets/Button"
import s from "./Filter.module.css"
const Filter = (props) =>{
    const handleClick = (newFilter) =>{
        props.changeFilter(newFilter)
    }
    return(
        <div className={s.filter}>
            <Button
            handleClick={()=>{handleClick('all')}}
            isActive={props.filter === 'all'} 
            text="All"/>
            <Button
            handleClick={()=>{handleClick('completed')}}
            isActive={props.filter === 'completed'} 
            text="Completed"/>
            <Button
            handleClick={()=>{handleClick('active')}}
            isActive={props.filter === 'active'} 
            text="Active"/>
        </div>
    )
}

export default Filter