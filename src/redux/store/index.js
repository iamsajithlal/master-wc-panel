import { configureStore } from '@reduxjs/toolkit';
import { 
  counterReducer, 
  loginReducer 
} from '../slices/idex';

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
})
