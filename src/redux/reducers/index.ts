import { combineReducers } from "redux";
import countReducer from "./count.reducer";
import formReducer from "./form.reducer";
import idReducer from "./id.reducer";

export const reducer = combineReducers({
    countReducer,
    formReducer,
    idReducer

})

export type typeReducer = ReturnType<typeof reducer>