export default function searchBarReducer (state = "", action){
    switch(action.type){
        case "CHANGE_SEARCH_TERM":
            return action.value
        default:
            return state
    }
}