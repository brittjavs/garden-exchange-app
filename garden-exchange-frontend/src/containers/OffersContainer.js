import React from 'react'
import { connect } from 'react-redux'
import { fetchOffers } from '../actions/offers'
import OfferInput from '../components/OfferInput'
import Offers from '../components/Offers'


class OffersContainer extends React.Component {
   
    componentDidMount(){
        this.props.fetchOffers()
    }

    render() {
        return (
            <div className="OffersContainer">
                <OfferInput />
                <Offers offers={this.props.offers}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        offers: state.offers
    }
}

export default connect(mapStateToProps, { fetchOffers })(OffersContainer)