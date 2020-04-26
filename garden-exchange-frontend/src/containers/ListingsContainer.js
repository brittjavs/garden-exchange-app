import React from 'react'
import { connect } from 'react-redux'
// import { fetchListings } from '../actions/listings'
import ListingInput from '../components/listings/ListingInput'
import Listings from '../components/listings/Listings'


class ListingsContainer extends React.Component {
   
    // componentDidMount(){
    //     this.props.fetchListings()
    // }

    render() {
        return (
            <div className="ListingsContainer">
                <ListingInput />
                <Listings listings={this.props.listings}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapped listings")
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(ListingsContainer)