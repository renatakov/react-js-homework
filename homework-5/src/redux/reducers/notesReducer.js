import { createStore } from 'redux';

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
    ]
}

const notesReducer = (state = initialState, action) => {
    return state;
}

export const store = createStore(notesReducer);