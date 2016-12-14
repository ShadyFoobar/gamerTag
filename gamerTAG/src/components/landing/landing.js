import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import './landing.css';

var Landing = React.createClass({
    render: function() {
        return (
            <div className="account-creation all-page-layout">
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={8} xsOffset={2}>
                            <div className="app-description">
                                <p>
                                  GAMERTAG is the way to link gamers who what to share their experience of playing awesome video games they are currently into.
                                  Whether you want to casual or go balls to the walls, we will find other gamers with a similar skill level and game preferences as you.
                                </p>
                            </div>

                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6}>
                            <div className="sign-up-button">
                                <Link to='/create-account'><button type="button" className="btn btn-default">Sign Up</button></Link>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="sign-in-button">
                                <Link to='/sign-in'><button type="button" className="btn btn-default">Sign In</button></Link>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
});

module.exports = Landing;
