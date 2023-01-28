import { createStore } from "redux";
import ProductReducer from "./reducers/ProductReducer";

const store = createStore(ProductReducer);

export default store;
