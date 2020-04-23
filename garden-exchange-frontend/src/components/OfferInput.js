import React from 'react'
import {connect} from 'react-redux'
import { createOffer } from '../actions/offers.js'

class OfferInput extends React.Component {

    state = {
        date: '',
        category: '',
        item: '',
        details: '',
        qty: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createOffer(this.state)
        this.setState({
            date: '',
            category: '',
            item: '',
            details: '',
            qty: ''
          });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Category</label>
                    <input type="text" value={this.state.category} name="category" onChange={this.handleOnChange}/>
                    <br />
                    <label>Qty:</label>
                    <input type="text" value={this.state.qty} name="qty" onChange={this.handleOnChange}/>
                    <br />
                    <label>Item</label>
                    <input type="text" value={this.state.item} name="item" onChange={this.handleOnChange}/>
                    <br />
                    <label>Item Details</label>
                    <input type="text" value={this.state.details} name="details" placeholder="optional" onChange={this.handleOnChange}/>
                    <br />
                    <input type="submit" value="Post Listing"/>
                </form>
            </div>
        )
    }

}

export default connect(null, { createOffer })(ListingInput)