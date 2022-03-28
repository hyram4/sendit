import {
    PARCEL_CREATION_SUCCESS,
    PARCEL_CREATION_FAIL,
    SET_MESSAGE
} from './Types'
import ParcelService from '../../AuthServices/ParcelsServices'
import { useDispatch } from 'react-redux'
export const createparcel =(description,sender_number,receiver_number,start_location,end_location,sender_id)=>(dispatch=useDispatch(""))=>{
    return ParcelService.createparcel(description,sender_number,receiver_number,start_location,end_location,sender_id).then(
        (response)=>{
            dispatch({
                type: PARCEL_CREATION_SUCCESS,
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
                    type:   PARCEL_CREATION_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload:message,
                });
                return Promise.reject();
        }
    )
}