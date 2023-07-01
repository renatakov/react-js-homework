import s from "./Button.module.css"

const Button = (props) => {
    //isActive
    const colorType = props.isActive ? s.active : s.default; 
return(
    <button className={`${s.btn} ${colorType}`} onClick={props.handleClick}>{props.text}</button>
)
}

export default Button