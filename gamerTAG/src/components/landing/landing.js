import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';

var Landing = React.createClass({
    render: function() {
        return (
            <div className="account-creation">
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={12}>
                            <div className="app-description">
                                <p>About App</p>
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
