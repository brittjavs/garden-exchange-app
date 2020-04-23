import React from 'react'
import { connect } from 'react-redux'
import { fetchOffers } from '../actions/Offers'
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
                <Offers Offers={this.props.Offers}/>
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