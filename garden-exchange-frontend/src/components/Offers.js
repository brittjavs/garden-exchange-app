import React from 'react'
import Offer from './Offer'

const Offers = ({ offers }) => {
    
    const offersList = offers.map(offer => {
        return <Offer key={offer.id} offer={offer}/>
    })

    return(
        <div className="listings">
            {offersList}
        </div>
    )    
}



export default Offers

