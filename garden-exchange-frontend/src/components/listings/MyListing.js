import React from 'react'

class MyListing extends React.Component {
    
    render(){
        const { myListing } = this.props;
        return(
            <div className="myListing" key={myListing.id}>
                <h5>
                {myListing.date}
                <br />
                Qty: {myListing.qty}
                <br />
                Item: {myListing.item}
                <br />
                Details: {myListing.details}
                <br />
                category:{myListing.category}
                <br />
                status:{myListing.status}
                </h5>
                <button>Remove Listing</button>
            </div>
        )
    }

}

export default MyListing