export default function listingsReducer (state = [], action){
    switch(action.type){
        case "GET_LISTINGS":
            return action.listings
        case "ADD_LISTING":
            return [...state, action.listing]
        case "DELETE_LISTING":
            const listings = state.filter(listing => listing.id !== action.id);
            console.log(listings)
        default:
            return state
    }
}