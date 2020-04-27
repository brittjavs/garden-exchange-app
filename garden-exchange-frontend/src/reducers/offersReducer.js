export default function offersReducer (state = [], action){
    switch(action.type){
        case "GET_OFFERS":
            return action.offers
        case "ADD_OFFER":
            return [...state, action.offer]
        case "DELETE_OFFER":
            const offers = state.filter(offer => offer.id !== action.offerId);
            return offers
        case "UPDATE_OFFER":
            let updatedOffers = state.map(offer => {
                if (offer.id === action.offer.id){
                    return action.offer
                }
                else {
                    return offer
                }
            })
            return updatedOffers
        default:
            return state
    }
}