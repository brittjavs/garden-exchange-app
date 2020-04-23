import React from 'react'
import {connect} from 'react-redux'
import { login } from '../actions/currentUser.js'

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        city: '',
        state: ''
    }

    handleChange = (event) => {
        this.setState({
            
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label>Password</label>
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        )
    }

}
export default connect(null, { login })(Login)