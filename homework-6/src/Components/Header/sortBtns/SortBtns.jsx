import Button from "../../assets/Button"
import s from "./SortBtns.module.css"
import {useSelector, useDispatch} from "react-redux"
import { changeFilterAC } from "../../../redux/toDoReducer"

const SortBtns = () => {
    const dispatch = useDispatch()
    const handleClick = (newFilter) => {
        dispatch(changeFilterAC(newFilter))
    }
    const statusType = useSelector(state => state.todoPage.filterStatus)
    const sortTypes = ["All", "Active", "Completed"]
    const btnsCollection = sortTypes.map(type => {
        return <Button handleClick={()=>{handleClick({type})}} isActive={type === statusType} key={type} text={type}/>
    })
    return (
        <div>
            <h3>Filter by status</h3>
            <div className={s.btnsContainer}>
                {btnsCollection}
            </div>
        </div>
    )
}
export default SortBtns