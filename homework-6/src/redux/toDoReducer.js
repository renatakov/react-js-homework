import {createAction, createReducer, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todoList:[
        {
            id: nanoid(),
            title: "Learn React",
            isActive: true,
            status: "Active",
            
        },
        {
            id: nanoid(),
            title: "Learn HTML & CSS",
            status: "Completed",
            isActive: false,

        }
    ],
    
    count: {
        active: 1,
        completed: 1
    },
    filterStatus: "All",
}

// actions
//update input new task -> newText
//create new task -> null
//check task status -> id
//check filter status -> status

export const createToDo = createAction("toDo/createToDo", title =>({
    payload:{
        id: nanoid(),
        status: "Active",
        title
    }
}))

export const updateTodoStatus = createAction("toDo/updateTodoStatus", todoId=>({
    payload:{
        todoId
    }
}))

export const filterTodosByStatus = createAction("toDo/filterTodosByStatus", todoStatus=>({
    payload:{
        todoStatus
    }
}))

export const changeFilterAC = createAction("task/change-filter", (newStatus)=>({
    payload: newStatus
}))

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
        console.log(action)
        state.todoList = state.todoList.filter(todo=>todo.id !== action.payload.idToDelete)
        state.count-=1
    })
    builder.addCase(changeFilterAC, (state, action)=>{
        state.filterStatus = action.payload
    })
})

export default toDoReducer