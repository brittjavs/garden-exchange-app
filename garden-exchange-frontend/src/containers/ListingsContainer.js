import React from 'react'
import { connect } from 'react-redux'
import { fetchListings } from '../actions/listings'
import ListingInput from '../components/ListingInput'


class ListingsContainer extends React.Component {
   
    componentDidMount(){
        this.props.fetchListings()
    }

    render() {
        return (
            <div className="ListingsContainer">
                <ListingInput />
                {/* <Listings listings={this.props.listings}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps, { fetchListings })(ListingsContainer)