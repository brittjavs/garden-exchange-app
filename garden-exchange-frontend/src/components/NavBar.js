import React from 'react'
import Logout from './Logout.js'
import { NavLink, Route } from 'react-router-dom'
import HomePageContainer from '../containers/HomePageContainer.js'
import Offers from './Offers.js'


const NavBar = () => {
    return(
        <div className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/offers">My Offers</NavLink>
            <NavLink to="/listings">My Listings</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    )
}
export default NavBar