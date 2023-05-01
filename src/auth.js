import { getuser, removeuser} from "./store"

 export const autho=()=>{

return getuser()!=null?true:false;


}
 export const logout=()=>{
removeuser();
 }