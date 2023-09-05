export const adduser = (user) =>{
    return{
        type:"ADD_USER",
        user:user,
    }
}
export const removeuser = () =>{
    return{
        type:"REMOVE_USER",
    }
}