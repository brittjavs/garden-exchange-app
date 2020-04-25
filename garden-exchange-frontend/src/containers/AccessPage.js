import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { Switch, Route, Link } from 'react-router-dom'

class AccessPage extends React.Component {
    render(){
        return(
            <div className="LoginSignup">
                <div>
                    Welcome!
                     <br />
                    <Link to='/login'>Login</Link>
                    <br />
                    <Link to='/signup'>Signup</Link>
                </div>
                
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                </Switch>
            </div>
        )
    }
}
export default AccessPage