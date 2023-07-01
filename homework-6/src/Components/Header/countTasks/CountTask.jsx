import { useSelector } from "react-redux"

const CountTask = () => {
    const countInfo = useSelector(state=>state.todoPage.count)
    return(
        <div>
            <h3>Tasks</h3>
            <p>Active: {countInfo.pending}</p>
            <p>Completed: {countInfo.completed}</p>
        </div>
    )
}
export default CountTask