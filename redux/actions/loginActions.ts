import { IUser } from './../models/users';

export const LOAD_USER = 'LOAD_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const loadUser = (users: IUser[]) => {
    return { type: LOAD_USER, payload: users}
}

export const userLogin = (user: IUser) => {
    return { type: USER_LOGIN, payload: user}
}

export const userLogout = () => {
    return { type: USER_LOGOUT}
}
