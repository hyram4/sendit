import axios from "axios"
const Api_Url = "http://localhost:4000/parcels/";
class ParcelService{
    createparcel(description,sender_number,receiver_number,start_location,end_location,sender_id){
        return axios.post(Api_Url + "createparcel",{
            description,
            sender_number,
            receiver_number,
            start_location,
            end_location,
            sender_id
        })
    }
}
export default new ParcelService();