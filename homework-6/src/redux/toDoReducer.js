import {createAction, createReducer, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todoList:[
        {
            id: nanoid(),
            title: "Go shopping",
            status: "pending"
        }
    ],
    count: 1
}

export const createToDo = createAction("toDo/createToDo", title =>({
    payload:{
        id: nanoid(),
        status: "pending",
        title
    }
}))

export const updateToDoStatus = 


export const deleteToDo = createAction("toDo/deleteToDo", idToDelete =>({
    payload:{
        idToDelete,
    }
}))

const toDoReducer = createReducer(initialState, builder =>{
    builder.addCase(createToDo, (state, action)=>{
        state.todoList.push(action.payload)
        state.count += 1
    })
    builder.addCase(deleteToDo, (state, action)=>{
        let filtredTodos = state.todoList.filter(todo=>todo.id !== action.payload.idToDelete)
        state.todoList = filtredTodos
        state.count-=1
    })
})

export default toDoReducer