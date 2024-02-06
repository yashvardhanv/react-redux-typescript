import { formData } from "../actions/action.types"
import { formAction } from "../actions/actions"
import { FormSchema, first } from "../store/storeSchema"


const formReducer = (store: FormSchema["data"] = first.data, action: formAction) => {
    switch (action.type) {

        case "ADD_DATA": {

            return [...store, action.payload] 
        }
        case "REMOVE_DATA": {
            const y = store.filter((x) => { return x.id != action.payload })
            return y
        }
        case "UPDATE_DATA": {
            const x = <formData>store.find((item) => {
                return item.id == action.payload.id
            })
            const i = store.indexOf(x)
            const y = store.filter((x) => { return x.id != action.payload.id })
            y.splice(i, 0, action.payload)
            return y
        }
        case "FETCH_DATA": {

            const lastID =  store[store.length-1]?.id|| 0
            action.payload.map((item:formData)=>{
                item["id"] = parseInt((parseInt(item["id"].toString()) + parseInt(lastID.toString())).toString())
            })
            const concated = store.concat(action.payload)
            return concated
        }
        default:
            return store
    }
}
export default formReducer
