import { configureStore } from '@reduxjs/toolkit';
import reducer from '../redux/reducer/CombineReducer';

export default configureStore({
  reducer,
  devTools: true,
});
