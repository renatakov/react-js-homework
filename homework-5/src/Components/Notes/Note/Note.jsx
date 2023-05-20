const Note = (props) =>{
    return(
        <div className="noteContainer">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <button onClick={()=>{props.deleteNote(props.id)}}>Delete</button>
        </div>
    )
}

export default Note;