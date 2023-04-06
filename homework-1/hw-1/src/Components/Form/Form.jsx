import  "../Form/Form.module.css"
const Form =  (props) => {
    return (
        <form>
            <img src={props.src} alt={props.alt}/>
            <input placeholder="Write your name" type="text"/>
            <input type="email" placeholder="Write your email"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form