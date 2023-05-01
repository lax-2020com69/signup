
import{getuser} from'./store.js'
import axios from "axios";
axios.defaults.baseURL="https://identitytoolkit.googleapis.com/v1";
const API_KEY="AIzaSyB6jfk109wNj2MNrCmk-UTgycG_3VmQoc8";
const register_url=`/accounts:signUp?key=${API_KEY}`;
const login_url=`/accounts:signInWithPassword?key=${API_KEY}`;
const user_url=`/accounts:lookup?key=${API_KEY}`
export const apirequst=(inputs)=>{
let data={displayName:inputs.name,
    email:inputs.email,
    password:inputs.password}
return axios.post(register_url,data)
} 
export const loginrequst=(inputs)=>{
    let data={
        email:inputs.email,
        password:inputs.password}
    return axios.post(login_url,data)
    } 

 export const userapi=()=>{
    let data={ idToken: getuser()}
    return axios.post(user_url,data)
 }   