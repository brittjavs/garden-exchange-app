import React from 'react'
import { connect } from 'react-redux'
import ListingInput from '../components/listings/ListingInput'
import Listings from '../components/listings/Listings'


class ListingsContainer extends React.Component {

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
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(ListingsContainer)