import { createStore } from 'redux'
import reducers from "../reduces/index";

export const store = createStore(reducers)
