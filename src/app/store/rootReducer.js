import { combineReducers } from "redux";
import testReducer from "../../features/sandbox/testReducer";
import todoListReducer from "../../features/todoList/todoListReducer";

const rootReducer = combineReducers({
    todoList: todoListReducer,
    test: testReducer,
});

export default rootReducer;