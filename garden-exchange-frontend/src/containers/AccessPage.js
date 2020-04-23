import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { Route } from 'react-router-dom'

class AccessPage extends React.Component {
    render(){
        return(
            <div className="LoginSignup">
                Welcome!
                <br />
                Please Signup 
                <Login />
                Or 
                <Signup />
            </div>
        )
    }
}
export default AccessPage