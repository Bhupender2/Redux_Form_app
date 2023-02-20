import { legacy_createStore as createStore } from "redux";
import { StoreInputReducer } from "./Reducers/StoreInputReducer";

export const store= createStore(StoreInputReducer)