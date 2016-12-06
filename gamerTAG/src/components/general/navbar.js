import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router';

var Navbar = React.createClass({
    render: function() {
        return (
            <div className="header">
                <header>
                    <nav className="navbar navbar-inverse navbar-fixed-top cbp-af-header">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#social">
                                    <img src="Images/MDlogo.png" alt="companyLogo" className="headerLogo"/>
                                </a>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'>Profile Page</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
          )
      }
  });

  module.exports = Navbar;
