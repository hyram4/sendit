import axios from "axios"
const Api_Url = "http://localhost:4000/users/";

class AuthService{
    login(email,password){
        return axios.post(Api_Url + "Login",{email,password})
        .then((response)=>{
            if(response.data.accessToken){
                localStorage.setItem("User",JSON.stringify(response.data))
            }
            return response.data
        });
        
    }
logout(){
    localStorage.removeItem("User")
}
signup(username,fullname,phone_number,email,password){
    return axios.post(Api_Url + "",{
        username,
        fullname,
        phone_number,
        email,
        password
    })
}

}


export default new AuthService();