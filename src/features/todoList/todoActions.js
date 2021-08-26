import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "./todoConstants";

export function createTodo(data){
    return {
        type: CREATE_TODO,
        payload: data,
    }
}

export function updateTodo(data){
    return{
        type: UPDATE_TODO,
        payload: data,
    }
}

export function deleteTodo(id){
    return{
        type: DELETE_TODO,
        payload: id,
    }
}