import React from 'react'
import {connect} from 'react-redux'
import {updateStatus} from '../../actions/offers'
import {markComplete} from '../../actions/listings'

class ReceivedOffer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: '',
            completed: false
        }
    }

    // state = {
    //     status: '',
    //     completed: ''
    // }
    
        handleClick = (event) => {
            this.setState({
                status: event.target.value
            }, () => {
                let offer = {status: this.state.status , id: this.props.receivedOffer.id}
                console.log(offer)
                this.props.updateStatus(offer)
                if (this.state.status === "accepted"){
                    let listing = {completed: !this.state.completed, id: this.props.receivedOffer.id}
                    this.props.markComplete(listing)
                }
            })
        }
    
    render(){
        const { receivedOffer } = this.props;
        const date = new Date(receivedOffer.created_at).toLocaleDateString()
        return(
            <div className="received-offer" key={receivedOffer.id}>
                
                <h5>
                {date}
                <br />
                {receivedOffer.sender.username} is offering you {receivedOffer.qty} {receivedOffer.item} in exchange for your {receivedOffer.listing.qty} {receivedOffer.listing.item}.
                <br />
                Offer Details: {receivedOffer.details}
                <br />
                category: {receivedOffer.category}
                <br />
                Offer Status: {receivedOffer.status}
                </h5>

                {receivedOffer.status === "pending" ?
                <div>
                    <button value="accepted" onClick={this.handleClick}>Accept</button> 
                    <button value="denied" onClick={this.handleClick}>Deny</button>
                </div> : ""
                }
                
            </div>
        )
    }
}

export default connect(null, {updateStatus, markComplete})(ReceivedOffer)