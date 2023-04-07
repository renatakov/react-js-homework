const Note = (props) => {
    // console.log(props)
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p>{props.time}</p>

        </div>
    )
}

export default Note;