import React from 'react'
import {connect} from 'react-redux'
import {updateStatus} from '../../actions/offers'

class ReceivedOffer extends React.Component {
    state = {
        status: ''
    }
    
        handleClick = (event) => {
            this.setState({
                status: event.target.value
            }, () => {
                let offer = {...this.state, id: this.props.receivedOffer.id}
                console.log(offer)
                this.props.updateStatus(offer)
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
                {receivedOffer.sender.username} is offering you {receivedOffer.qty} {receivedOffer.item}.
                <br />
                Details: {receivedOffer.details}
                <br />
                category:{receivedOffer.category}
                <br />
                Status: {receivedOffer.status}
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

export default connect(null, {updateStatus})(ReceivedOffer)