import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataReducer';

const reducer={
    data:dataReducer
}
export const store = configureStore({
 reducer:reducer,
  devTools:true
})
export default store;