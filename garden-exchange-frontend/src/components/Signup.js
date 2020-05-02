import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/currentUser.js'

class Signup extends React.Component {
   
    state = {
        username: '',
        password: '',
        city: '',
        state: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signup(this.state)
        this.setState({
            username: '',
            password: '',
            city: '',
            state: ''
        })
        this.props.history.push('/')

    }

    render(){
        return(
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}> 
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
                    <br />
                    <label>Password: </label>
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <br />
                    <label>City: </label>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleChange} required/>
                    <br />
                    <label>State: </label>
                    <input type="text" name="state" value={this.state.state} onChange={this.handleChange} required/>
                    <br />
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {signup})(Signup)