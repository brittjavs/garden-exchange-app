import React from 'react'
import {connect} from 'react-redux'
import { createListing } from '../../actions/listings'

class ListingInput extends React.Component {

    state = {
        category: '',
        item: '',
        details: '',
        qty: '',
        wants: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createListing(this.state)
        this.setState({
            category: '',
            item: '',
            details: '',
            qty: '',
            wants: ''
          });
    }

    render(){
        return(
            <div className="new-listing-form">
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
                    <label>Item Name</label>
                    <input type="text" value={this.state.item} name="item" onChange={this.handleOnChange}/>
                    <br />
                    <label>Item Details</label>
                    <input type="text" value={this.state.details} name="details" placeholder="optional" onChange={this.handleOnChange}/>
                    <br />
                    <label>I'm Looking For:</label>
                    <input type="text" placeholder="optional" value={this.state.wants} name="wants" onChange={this.handleOnChange}/>
                    <br />
                    <input type="submit" value="Post Listing"/>
                </form>
            </div>
        )
    }

}

export default connect(null, { createListing })(ListingInput)