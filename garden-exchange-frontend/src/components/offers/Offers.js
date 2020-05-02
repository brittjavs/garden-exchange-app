import React from 'react'
import SentOffer from './SentOffer'
import ReceivedOffer from './ReceivedOffer'

const Offers = ({ offers, currentUser}) => {
    const sentOffers = offers.filter(offer=> offer.sender.username === currentUser.username);

    const receivedOffers = offers.filter(offer=> offer.recipient.username === currentUser.username);

    const sentOffersList = sentOffers.map(sentOffer => {
        return <SentOffer key={sentOffer.id} sentOffer={sentOffer}/>
      })
    
    const receivedOffersList = receivedOffers.map(receivedOffer => {
        return <ReceivedOffer key={receivedOffer.id} receivedOffer={receivedOffer}/>
    })

    return(
        <div className="my-offers">
            <div className="received-offers">
                <header>Offers Received</header>
                {receivedOffersList.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)}
            </div>
            <br />
            <div className="sent-offers">
                <header>Offers Sent</header>
                {sentOffersList.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)}
            </div>
            
        </div>
    )    
}

export default Offers

