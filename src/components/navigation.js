import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render(){
        return(
            <div>
                <dl>
                    <dt><Link to="/">Home Page</Link></dt>
                    <dt><Link to="/cart">Shopping Cart</Link></dt>
                    <dt><Link to="/employees">Employees</Link></dt>
                    <dt><Link to="/inventory">Inventory</Link></dt>
                </dl>
            </div>
        )
    }
}