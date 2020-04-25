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
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(offerInfo)
        })
            .then(resp => resp.json())
            .then(offer => dispatch(addOffer(offer)))
    }
}