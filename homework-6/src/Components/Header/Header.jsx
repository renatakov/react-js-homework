import CountTask from "./countTasks/CountTask"
import Filter from "./filter/filterContainer"
import s from "./Header.module.css"
const Header = (props) => {
    return(
        <header>
<CountTask/>
<Filter/>
        </header>
    )
    }
    
    export default Header