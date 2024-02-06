import { applyMiddleware,createStore} from 'redux'
import {reducer} from '../reducers/index'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'



const persistConfig = {
    key: "persist-store",
    storage
}

// const middlewares = [thunk, logger]
const p_reducer = persistReducer(persistConfig,reducer)
export const store = createStore(p_reducer,applyMiddleware(thunk))
const persist = persistStore(store)
export type storeType = typeof store
export default persist
export type appDispatch = typeof store.dispatch

