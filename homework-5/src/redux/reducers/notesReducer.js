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

export const notesReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_NOTE: {
            return console.log('note added')
        }
        case UPDATE_NOTE: {
            return console.log('note updated')
        }
        case DELETE_NOTE: {
            return console.log('note deleted')
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