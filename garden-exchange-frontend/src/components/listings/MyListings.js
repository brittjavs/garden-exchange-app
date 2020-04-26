import React from 'react'
import {connect} from 'react-redux'
import MyListing from './MyListing'

class MyListings extends React.Component{
    render(){
        const myListingsArray = this.props.listings.filter(listing => 
            listing.user.username === this.props.currentUser.username)
            console.log("my listings", myListingsArray)

        const myListing = myListingsArray.map(listing => {
            return <MyListing key={listing.id} listing={listing} />
        })
        
        return(
            <div className="my-listings">
                {myListing}
            </div>
        )    
    }

}

const mapStateToProps = state => {
    console.log("mapped listings")
    return {
        currentUser: state.currentUser,
        listings: state.listings
    }
}

export default connect(mapStateToProps)(MyListings)