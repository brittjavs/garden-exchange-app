export default function listingsReducer (state = [], action){
    switch(action.type){
        case "GET_LISTINGS":
            return action.listings
        case "ADD_LISTING":
            return [...state, action.listing]
        case "UPDATE_LISTING":
            let updatedListing = state.map(listing => {
                if (listing.id === action.listing.id){
                    return action.listing
                }
                else {
                    return listing
                }
            })
            return updatedListing
        case "DELETE_LISTING":
            const listings = state.filter(listing => listing.id !== action.listingId);
            return listings
        default:
            return state
    }
}

function greet(greeting = "hello"){
    console.log(greeting, "Brittany")
}

greet()