import React from 'react';
import CreateTagInfo from './createTagInfo';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import './create.css';

var CreateAccount = React.createClass({
    render: function() {
        return (
            <div className="account-creation all-page-layout">
                <h1>Create Account</h1>
                <Link to='/sign-in'>
                    <p>Already got a Tag?</p>
                </Link>
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={6}>
                            <div className="user-info">
                                <h2>User Info</h2>
                                <p>gamerTAG</p>
                                <input type="text"/>
                                <p>Name</p>
                                <input type="text"/>
                                <p>Age</p>
                                <input type="text"/>
                                <p>Location</p>
                                <input type="text"/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="game-info">
                                <h2>Game Info</h2>
                                <CreateTagInfo tagName="Battle.net Tag"/>
                                <CreateTagInfo tagName="Leauge of Legends Summoner Name"/>
                                <CreateTagInfo tagName="Xbox Gamertag"/>
                                <CreateTagInfo tagName="PlayStation Profile"/>
                            </div>
                        </Col>
                    </Row>
                </form>
                <div className="join-button">
                    <Link to='/profile-page'>
                        <button type="button" className="btn btn-primary">Join!</button>
                    </Link>
                </div>
            </div>
        )
    }
});

module.exports = CreateAccount;
