import { createStore } from "redux";
import { reducerCounter } from "./reducer";

// Create the Redux store
const store = createStore(reducerCounter);

export default store;
