export default function currentUserReducer (state = null, action){
    switch(action.type){
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return state
        default:
            return state
    }
}