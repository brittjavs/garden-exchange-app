export const getListings = listings => {
    return{
        type: "GET_LISTINGS",
        listings
    }
}
export const addListing = listing => {
    return {
        type: "ADD_LISTING",
        listing
    }
}

export const completeDeleteListing = listingId => {
    return {
        type: "DELETE_LISTING",
        listingId
    }
}


//async functions

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
        .then(listings => {
            if (listings.error){
                alert(listings.error)
            }
            else {
                dispatch(getListings(listings))
            }
        })
    }
}

export const createListing = (listingInfo) => {
    console.log(listingInfo)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/listings", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(listingInfo)
        })
            .then(resp => resp.json())
            .then(listing => dispatch(addListing(listing)))
    }
}

export const deleteListing = (listingId) => {
    console.log(listingId)
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/listings/${listingId}`, {
          credentials: "include",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(resp => dispatch(completeDeleteListing(listingId)))
        .then(alert("Listing Removed"))
    }
}