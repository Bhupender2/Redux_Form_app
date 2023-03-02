import { legacy_createStore as createStore } from "redux";
import { StoreInputReducer } from "./Reducers/StoreInputReducer";

export const Store = createStore(
    StoreInputReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
