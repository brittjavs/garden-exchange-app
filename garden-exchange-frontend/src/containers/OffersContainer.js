import React from 'react'
import { connect } from 'react-redux'
// import { fetchOffers } from '../actions/offers'
import Offers from '../components/offers/Offers'

class OffersContainer extends React.Component {
   
    // componentDidMount(){
    //     console.log("Did Mount")
    //     this.props.fetchOffers()
    // }

    render() {
        return (
            <div className="OffersContainer">
                <Offers offers={this.props.offers} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("Mapped Offers")
    return {
        
        offers: state.offers,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(OffersContainer)