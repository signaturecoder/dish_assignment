import { IUser } from './../models/users';
import { AnyAction } from "redux"
import { LOAD_USER, USER_LOGIN, USER_LOGOUT } from "../actions/loginActions"

const initialState = {
    users: [],
    isLoggedIn: false,
    
}

export const loginReducer = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case LOAD_USER : {
                   return {...state, users: action.payload};
        }
        // users: state.users.find((user: IUser) => (user.uname === action.payload.uname && user.password === action.payload.password)),
        case USER_LOGIN: {
            return {...state, users: state.users.find((user: IUser) => (user.uname === action.payload.uname && user.password === action.payload.password)),  isLoggedIn: true }
        }

        case USER_LOGOUT: {
            return {...state, isLoggedIn: false }
        }

        default: return state;
    }
}
