import React from 'react'
import {connect} from 'react-redux'
import { login } from '../actions/currentUser.js'

class Login extends React.Component {
    
    state = {
        username: '',
        password: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
        this.setState({
            username: '',
            password: ''
        })
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.handleSubmit}> 
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
                    <br />
                    <label>Password: </label>
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <br />
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { login })(Login)