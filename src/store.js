export const userstoredata=(data)=>{

    localStorage.setItem('idToken',data )
    
}
export const getuser=()=>{
 return   localStorage.getItem('idToken')
 
}
export const removeuser=()=>{
    localStorage.removeItem('idToken')
}