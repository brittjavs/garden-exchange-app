export default function offersReducer (state = [], action){
    switch(action.type){
        case "GET_OFFERS":
            return action.offers
        case "ADD_OFFER":
            return [...state, action.offer]
        default:
            return state
    }
}