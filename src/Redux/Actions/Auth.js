
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from './Types'
import AuthService from '../../AuthServices/AuthService'
import { useDispatch } from 'react-redux'
export const signup =(username,fullname,phone_number,email,password)=>(dispatch=useDispatch(""))=>{
    return AuthService.signup(username,fullname,phone_number,email,password).then(
        (response)=>{
            dispatch({
                type:REGISTER_SUCCESS,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error)=>{
            const message = 
            (error.response &&
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString();

                dispatch({
                    type: REGISTER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload:message,
                });
                return Promise.reject();
        }
    )
}

export  const login =(email,password)=> (dispatch)=>{
    return AuthService.login(email,password).then(
        (data)=>{
            dispatch({
                type:LOGIN_SUCCESS,
                payload: {User:data},
            });
            return Promise.resolve();
        },
        (error) =>{
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            dispatch({
                type: LOGIN_FAIL,
                payload: message,
            });
            return Promise.reject();
        }
    )
}

export const Logout=() =>(dispatch)=>
{
    return AuthService.logout();
    dispatch({
        type: LOGOUT
    })
}