import {createAction, createReducer, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todoList:[
        {
            id: nanoid(),
            title: "Learn React",
            isActive: false,
            status: "pending",
            
        },
        {
            id: nanoid(),
            title: "Learn HTML & CSS",
            status: "completed",
            isActive: true,

        }
    ],
    
    count: {
        pending: 1,
        completed: 1
    },
    filterStatus: "All",
    filterList:[]
}

// actions
//update input new task -> newText
//create new task -> null
//check task status -> id
//check filter status -> status

export const createToDo = createAction("toDo/createToDo", title =>({
    payload:{
        id: nanoid(),
        status: "pending",
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