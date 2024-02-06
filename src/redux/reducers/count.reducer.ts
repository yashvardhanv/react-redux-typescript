import { counterAction } from "../actions/actions"
import { FormSchema, first } from "../store/storeSchema"

const countReducer = (store: FormSchema["counter"] = first.counter, action: counterAction) => {
    switch (action.type) {
        case "Increase": {
            return store+1
        }
        case "Decrease": {
            return store-1
        }
        default:
            return store
    }
}
export default countReducer
