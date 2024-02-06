import { UnknownAction } from "redux"

export type formData = {
    id: number,
    email: string,
    password: string,
    username: string
}

export const INCREMENT = "Increase"
export const DECREMENT = "Decrease"
export const ADD_INTO_FORM = "ADD_DATA"
export const DELETE_FROM_FORM = "REMOVE_DATA"
export const UPDATE_FROM_FORM = "UPDATE_DATA"
export const SET_FETCHED_DATA = "FETCH_DATA"
export const INCREMENT_ID_BY_ONE = "UPDATE"

export interface Increase_Interface extends UnknownAction {
    type: typeof INCREMENT,
    payload: number
}

export interface Decrease_Interface extends UnknownAction {
    type: typeof DECREMENT,
    payload: number
}
export interface ID_interface extends UnknownAction {
    type: typeof INCREMENT_ID_BY_ONE,
    payload: number
}
export interface ADD_Interface extends UnknownAction {
    type: typeof ADD_INTO_FORM,
    payload: formData
}
export interface REMOVE_Interface extends UnknownAction {
    type: typeof DELETE_FROM_FORM,
    payload: number
}
export interface UPDATE_Interface extends UnknownAction {
    type: typeof UPDATE_FROM_FORM,
    payload: formData
}

export interface FETCH_Interface extends UnknownAction {
    type: typeof SET_FETCHED_DATA,
    payload: formData[]
}





