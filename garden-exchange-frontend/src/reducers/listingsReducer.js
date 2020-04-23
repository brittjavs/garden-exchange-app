export default function currentUserReducer (state = [], action){
    switch(action.type){
        case "GET_TRIPS":
            return action.listings
        default:
            return state
    }
}