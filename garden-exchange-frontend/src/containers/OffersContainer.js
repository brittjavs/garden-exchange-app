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
                <Offers offers={this.props.offers} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        offers: state.offers,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { fetchOffers })(OffersContainer)