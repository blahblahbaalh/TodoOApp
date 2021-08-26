import { sampleData } from "../../app/api/sampleData";
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "./todoConstants";

const initialState = {
    todo: sampleData
}
// console.log("initial state", initialState);

//Reducers 2 argument: state and action(destructured to type and payload)
export default function todoListReducer(state=initialState, {type, payload}){
    switch (type){
        case CREATE_TODO: return{
            ...state,
            todo: [...state.todo, payload],
        }
        case UPDATE_TODO: return{
            ...state,
            todo: [...state.todo.filter(each => each.id !== payload.id), payload]
        }
        case DELETE_TODO: return{
            ...state,
            todo: [...state.todo.filter(each => each.id !== payload)]
        }
        default: return state;
    }
}