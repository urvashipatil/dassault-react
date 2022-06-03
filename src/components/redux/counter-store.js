import { createStore } from "redux";
import { counterReducer } from "./counter-reducer";

const store = createStore(
  counterReducer,
  0,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

console.log(store.getState());

export default store;
