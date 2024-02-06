import axios from "axios";
import { ADD_Interface,INCREMENT,DECREMENT,ADD_INTO_FORM,DELETE_FROM_FORM,UPDATE_FROM_FORM,SET_FETCHED_DATA,INCREMENT_ID_BY_ONE, Decrease_Interface, FETCH_Interface, ID_interface, Increase_Interface, REMOVE_Interface, UPDATE_Interface, formData } from "./action.types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { FormSchema } from "../store/storeSchema";



export type counterAction = Increase_Interface | Decrease_Interface
export type formAction = ADD_Interface | REMOVE_Interface | UPDATE_Interface | FETCH_Interface
export type idAction = ID_interface




export const Increase = (): counterAction => ({
    type: INCREMENT,
    payload: 1
});
export const Decrease = (): counterAction => ({
    type: DECREMENT,
    payload: 1
});

export const AddData = (data: formData): formAction => ({
    type: ADD_INTO_FORM,
    payload: data
});

export const RemoveData = (id: number): formAction => ({
    type: DELETE_FROM_FORM,
    payload: id
});

export const UpdateData = (data: formData): formAction => ({
    type: UPDATE_FROM_FORM,
    payload: data
});

export const FetchData = (data: formData[]): formAction => ({
    type: SET_FETCHED_DATA,
    payload: data
});

export const UpdateId = (): idAction => ({
    type: INCREMENT_ID_BY_ONE,
    payload: 1
});


export const GetData = (): ThunkAction<void, FormSchema, unknown, Action<string>> => async (dispatch) => {
    // const status = getStatus()
    const resp = await axios.get("https://65c0b652dc74300bce8c98a7.mockapi.io/api/user")
    dispatch(FetchData(resp.data));
};



