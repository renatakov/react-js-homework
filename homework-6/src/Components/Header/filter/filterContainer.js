import {changeFilterAC} from "../../../redux/toDoReducer"
import {connect} from "react-redux"
import Filter from "./Filter"
const mapStateToProps = (state)=>({
    filter: state.todoPage.filterStatus
})

const mapDispatchToProps = {
    changeFilter: changeFilterAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)