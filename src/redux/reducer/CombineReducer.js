import { combineReducers } from "redux";
import CartReducer from "./Reducers";
import ProductReducer from "./Product"
import FavroitReducer from "./Favroit";

export default combineReducers({
   cart: CartReducer,
   data: ProductReducer,
   fav: FavroitReducer,
})
