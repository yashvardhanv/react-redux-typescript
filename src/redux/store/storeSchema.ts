import { formData } from "../actions/action.types"

export const first = { counter: 0, data: [] }

export interface FormSchema {
    counter: number,
    data: formData[],
    id : number
}