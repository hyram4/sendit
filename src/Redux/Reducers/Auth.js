import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../Actions/Types"

const User = JSON.parse(localStorage.getItem("User"));
const initialState = User
? {isLoggedIn: true, User} : {isLoggedIn: false, User: null};

export default function (state = initialState,action){
    const {type,payload} =action;
    switch(type){
        case REGISTER_SUCCESS:
            return {
                ...state,isLoggedIn: false,
            };
            case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
            case LOGIN_SUCCESS: 
            return{
                ...state,
                isLoggedIn: true,
                User: payload.User,
            };

            case LOGIN_FAIL: 
            return{
                ...state,
                isLoggedIn: false,
                User: null,
            };

            case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                 user: null,
                };

            default: 
            return state;
    }
}
