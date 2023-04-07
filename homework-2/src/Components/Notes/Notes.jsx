import Note from "./Note/Note"
const Notes = (props)=>{
    console.log(props)
    const newNotes = props.store.map((note, i)=>{
        return <Note
        key={i} 
        time={note.time}
        text={note.text}
        title={note.title}
        />
    })
    return(
        <div>
            <h1>Notes</h1>
        </div>
    )
}

export default Notes