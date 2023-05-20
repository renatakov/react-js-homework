import Note from "./Note/Note"
import { useRef, useEffect } from "react"
const Notes = (props) => {
    console.log(props.notes)
    const getNotes = props.notes.map((note) => {
        return <Note
        id={note.id}
        deleteNote={props.deleteNote}
        key={note.id}
        title={note.title}
        text={note.text}
        />
    })
    const inputTitleRef = useRef(null);
    const inputTextRef = useRef(null);
    const btnCreateRef = useRef(null);
    useEffect(()=>{
        inputTextRef.current.addEventListener('input', ()=>{
            props.updateNote("text", inputTextRef.current.value)
        })
        inputTitleRef.current.addEventListener('input', ()=>{
            props.updateNote("title", inputTitleRef.current.value)
        })
        btnCreateRef.current.addEventListener('click', () => {
            props.addNote()
        })
    }, [])
    return(
        <div className="allNotes">
            <h1>Notes</h1>
            {getNotes}
            <div className="noteCreator">
                <input ref={inputTitleRef} type="text" placeholder="Write Title"/>
                <input ref={inputTextRef} type="text" placeholder="Write Text"/>
                <button ref={btnCreateRef}>Create</button>
            </div>
        </div>
    )
}

export default Notes;