export const getOffers = offers => {
    return{
        type: "GET_OFFERS",
        offers
    }
}
export const addOffer = offer => {
    return {
        type: "ADD_OFFER",
        offer
    }
}

export const completeDeleteOffer = offerId => {
    return {
        type: "DELETE_OFFER",
        offerId
    }
}

//async functions

export const fetchOffers = () => {
    return dispatch => {
        return fetch ('http://localhost:3001/api/v1/offers', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(offers => {
            if (offers.error){
                alert(offers.error)
            }
            else {
                dispatch(getOffers(offers))
            }
        })
    }
}

export const createOffer = (offerInfo) => {
    console.log(offerInfo)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/offers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            credentials: "include",
            body: JSON.stringify(offerInfo)
        })
            .then(resp => resp.json())
            .then(offer => dispatch(addOffer(offer)))
    }
}

export const deleteOffer = (offerId) => {
    console.log(offerId)
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/offers/${offerId}`, {
          credentials: "include",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(resp => dispatch(completeDeleteOffer(offerId)))
        .then(alert("Offer Rescinded"))
    }
}