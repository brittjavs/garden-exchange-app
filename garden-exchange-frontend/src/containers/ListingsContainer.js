import React from 'react'
import { connect } from 'react-redux'
import Listings from '../components/listings/Listings'
import SearchBar from '../components/SearchBar'


class ListingsContainer extends React.Component {

    render() {
        return (
            <div className="ListingsContainer">
                <SearchBar />
                <Listings listings={this.props.listings}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.searchTerm)
    return {
        listings: state.listings.filter(
            listing => listing.item.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            listing.category.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    }
}

export default connect(mapStateToProps)(ListingsContainer)