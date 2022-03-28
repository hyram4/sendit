import { combineReducers } from "redux";
import Auth from './Auth'
import Parcel from './Parcel'
import message from "./Message";
export default combineReducers({
   
    Auth,
    Parcel,
    message
});
