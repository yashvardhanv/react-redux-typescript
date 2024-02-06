import { idAction } from "../actions/actions"
import { FormSchema, } from "../store/storeSchema"

const idReducer = (store: FormSchema["id"] = 0, action: idAction) => {
    switch (action.type) {
        case "UPDATE": {
            return store + 1
        }
        
        default:
            return store
    }
}
export default idReducer
