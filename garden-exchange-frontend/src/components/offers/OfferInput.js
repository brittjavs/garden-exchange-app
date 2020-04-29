import React from 'react'
import {connect} from 'react-redux'
import { createOffer } from '../../actions/offers.js'

class OfferInput extends React.Component {
   constructor(props){
       super(props);
       this.state = { 
        category: '',
        item: '',
        details: '',
        qty: '',
        listing_id: this.props.listing.id
       }
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
            category: '',
            item: '',
            details: '',
            qty: ''
          });
        this.props.toggle()
    }

    render(){
        return(
            <div className="new-offer-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Category</label>
                    <select value={this.state.category} name="category" onChange={this.handleOnChange}>
                        <option>Vegetable</option>
                        <option>Fruit</option>
                        <option>Herb</option>
                        <option>Legume</option>
                        <option>Nut</option>
                    </select>
                    <br />
                    <label>Qty:</label>
                    <input type="number" value={this.state.qty} min="1" name="qty" onChange={this.handleOnChange}/>
                    <br />
                    <label>Item</label>
                    <input type="text" value={this.state.item} name="item" onChange={this.handleOnChange}/>
                    <br />
                    <label>Item Details</label>
                    <input type="text" value={this.state.details} name="details" placeholder="optional" onChange={this.handleOnChange}/>
                    <br />
                    <input type="submit" value="Submit Offer"/>
                </form>
            </div>
        )
    }

}

export default connect(null, { createOffer })(OfferInput)