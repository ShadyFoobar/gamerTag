import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';

var SignIn = React.createClass({
    render: function() {
        return (
            <div className="account-sign-in all-page-layout">
                <h1>Sign In </h1>
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={12}>
                            <div className="sign-in-info">
                                <p>Email</p>
                                <input type="text"/>
                                <p>Password</p>
                                <input type="text"/>
                                <Link to='/profile-page'><p>Forgot Password</p></Link>
                                <Link to='/create-account'><p>Don't got a Tag</p></Link>
                                <Link to='/profile-page'><button type="submit" form="form1" value="Submit">Submit</button></Link>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
});

module.exports = SignIn;
