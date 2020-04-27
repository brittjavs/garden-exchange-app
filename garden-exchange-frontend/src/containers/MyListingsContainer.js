import React from 'react'
import {connect} from 'react-redux'
import MyListings from '../components/listings/MyListings'

class MyListingsContainer extends React.Component{

    render(){

        return(
            <div className="my-listings">
                <MyListings listings={this.props.listings} currentUser={this.props.currentUser}/>
            </div>
        )    
    }

}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        listings: state.listings
    }
}

export default connect(mapStateToProps)(MyListingsContainer)
