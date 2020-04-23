export default function listingsReducer (state = [], action){
    switch(action.type){
        case "GET_LISTINGS":
            return action.listings
        default:
            return state
    }
}