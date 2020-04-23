export const getListings = listings => {
    return{
        type: "GET_LISTINGS",
        listings
    }
}
export const fetchListings = () => {
    return dispatch => {
        return fetch ('http://localhost:3001/api/v1/listings', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(listings => console.log(listings))
    }
}