export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount,
    }
}

export function decrement(amount){
    return{
        type: DECREMENT,
        payload: amount,
    }
}