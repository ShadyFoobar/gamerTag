import React from 'react';
import {Link} from 'react-router';
import ToggleDisplay from 'react-toggle-display';

var Navbar = React.createClass({

    render: function() {
        return (
            <div className="header">
                <header>
                    <nav className="navbar navbar-inverse navbar-fixed-top cbp-af-header">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <ToggleDisplay show={this.props.isLoggedIn}>
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </ToggleDisplay>
                                <a className="navbar-brand" href="#social">
                                    <img src="Images/MDlogo.png" alt="companyLogo" className="headerLogo"/>
                                </a>
                            </div>
                            <ToggleDisplay show={this.props.isLoggedIn}>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <Link to='/dashboard'>Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to='/profile-page'>Profile Page</Link>
                                        </li>
                                    </ul>
                                </div>
                            </ToggleDisplay>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
});

module.exports = Navbar;
