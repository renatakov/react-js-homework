import s from './Note.module.css'

const Note = (props) => {
    return (
        <div className={s.noteItem}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p>{props.time}</p>
        </div>
    )
}

export default Note;