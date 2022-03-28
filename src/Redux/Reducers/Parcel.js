import {
    PARCEL_CREATION_SUCCESS,
    PARCEL_CREATION_FAIL,
    SET_MESSAGE
} from '../Actions/Types'
const Parcel = JSON.parse(localStorage.getItem("Parcel"));
const initialState = Parcel
? {isParcelCreated: true, Parcel} : {isParcelCreated: false, Parcel: null};

export default function (state = initialState,action){
    const {type,payload} =action;
    switch(type){
        case PARCEL_CREATION_SUCCESS:
            return {
                ...state,isParcelCreated: true,
            };
            case PARCEL_CREATION_FAIL:
            return {
                ...state,isParcelCreated: false,
            };
            default: 
            return state;
        }
    }