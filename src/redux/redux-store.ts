import {createStore,combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})


export type StoreType = typeof store

let store  = createStore(reducers)


export default store
