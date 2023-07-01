import CountTask from "./countTasks/CountTask"
import SortBtns from "./sortBtns/SortBtns"
import s from "./Header.module.css"
const Header = (props) => {
    return(
        <header>
<CountTask/>
<SortBtns/>
        </header>
    )
    }
    
    export default Header