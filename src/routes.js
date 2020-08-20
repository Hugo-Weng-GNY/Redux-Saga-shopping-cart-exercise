import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import App from './components/App'
import Employees from './components/employees'
import Inventory from './components/Inventory'
import Navigation from './components/navigation'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Navigation}/>
            <Route path="/cart" component={App}/>
            <Route path="/employees" component={Employees}/>
            <Route path="/inventory" component={Inventory}/>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root