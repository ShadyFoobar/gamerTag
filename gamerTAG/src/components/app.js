import React from 'react';
import Dashboard from './dashboard/dashboard';
import CreateAccount from './createAccount/createAccount';
import Landing from './landing/landing';
import Navbar from './general/navbar';
import Footer from './general/footer';
import {Router, Route, browserHistory} from 'react-router'

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
});

module.exports = App;
