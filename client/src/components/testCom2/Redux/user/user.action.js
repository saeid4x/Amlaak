//action: actions actually is a function that get an object[state that related to user] as parameter and 
//        return an object
export const setCurrentUser=user=>({
    type:'SET_CURRENT_USER',
    payload:user
})