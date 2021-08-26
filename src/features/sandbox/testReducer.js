import { DECREMENT, INCREMENT } from "./testAction";

const initialState= {
    data: 13,
}

//Reducer - 2 para: state and action(destructure: type and payload)
export default function testReducer(state=initialState,{type, payload}){
    switch (type){
        case INCREMENT: return{
            ...state,
            data: state.data + payload,
        }
        case DECREMENT: return{
            ...state,
            data: state.data - payload,
        }
        default: return state;
    }
}