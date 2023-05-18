const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

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

export const deleteNoteAC = (idToDelete) =>({
    type: DELETE_NOTE,
    idToDelete
}) 

export const addNoteAC = (noteTitle, noteDescription) =>({
    type: ADD_NOTE,
    noteTitle,
    noteDescription
})