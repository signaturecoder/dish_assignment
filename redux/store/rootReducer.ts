import { combineReducers } from "redux";
import { loginReducer } from "../reducers/loginReducer";


const rootReducer = combineReducers({
    loginState: loginReducer,
   
  });
  export type AppState = ReturnType<typeof rootReducer>;
  export default rootReducer;