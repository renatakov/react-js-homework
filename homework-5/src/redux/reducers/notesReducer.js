const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";

let initialState = {
    notes: [
        {
            id: 1,
            title: 'Note 1',
            text: 'This is first note'
        },
        {
            id: 2,
            title: 'Note 2',
            text: 'This is second note'
        }
    ],
    newNote: {
        id: null,
        title: null,
        text: null
    }
}

const createNote = (state) =>{
    return{
        ...state,
        notes: [
            ...state.notes,
            {...state.newNote}
        ],
        newNote: {
            id: null,
            name: null,
        },

    }
}

const updateNote = (state, action) =>{
    if(action.inputForm === "title"){
        return {
            ...state,
            notes:[
                ...state.notes,
            ],
            newNote: {
                id: state.notes[state.notes.length - 1].id + 1,
                title: action.inputValue,
            }
        }
    }
    if(action.inputForm === "text"){
        return{
            ...state,
            notes: [
                ...state.notes,
            ],
            newNote: {
                id: state.notes[state.notes.length - 1].id + 1,
                text: action.inputValue,
            }
        }
    }
}

const deleteNote = (state, action) =>{
    let updatedNote = state.notes.filter((note) =>{
        if(note.id !== action.idToDelete){
            return note;
        }
    })

    return{
        ...state,
        notes: [
            ...updatedNote
        ]
    }
}

export const notesReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_NOTE: {
            return createNote(state)
        }
        case UPDATE_NOTE: {
            return updateNote(state, action)
        }
        case DELETE_NOTE: {
            return deleteNote(state, action)
        }
        default:{
            return state
        }
    }
}


export const updateNoteAC = (inputForm, inputValue) => ({
    type: UPDATE_NOTE,
    inputForm,
    inputValue
})

export const deleteNoteAC = (idToDelete) =>({
    type: DELETE_NOTE,
    idToDelete
}) 

export const addNoteAC = (noteTitle, noteDescription) =>({
    type: ADD_NOTE,
    noteTitle,
    noteDescription
})