export default function listingsReducer (state = [], action){
    switch(action.type){
        case "GET_LISTINGS":
            return action.listings
        case "ADD_LISTING":
            return [...state, action.listing]
        default:
            return state
    }
}