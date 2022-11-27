import { createStore } from "redux";
import {reducerCounter} from "./reducer"
// 1 create store
export const storeCounter =createStore(reducerCounter);