import './Notes.module.css'
import React from "react";
import Note from "./Note/Note"
const Notes = (props)=>{
    const notesStore = props.store;
    const allNotes = notesStore.map((note, i)=>{
        return <Note
        key={i} 
        text={note.text} 
        title={note.title} 
        time={note.time}
        />
    });
    const inputRef = React.createRef()
    const inputRef1 = React.createRef()

    const createNewNote = ()=>{
            notesStore.push({
                text: inputRef.current.value,
                title: inputRef1.current.value,
                time: new Date().toLocaleString()
            })
            props.rerender(notesStore);
            console.log(notesStore);
        }
        return(
            <div>
            <h1>Notes</h1>
            {allNotes}
            <form>
                <input ref={inputRef}  placeholder="Note title" type="text" />
                <input ref={inputRef1} placeholder="Note text" type="text" />
                <button onClick={createNewNote} type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Notes