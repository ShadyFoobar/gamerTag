import React from 'react';
import CreateTagInfo from './createTagInfo';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import './create.css';

var CreateAccount = React.createClass({
    render: function() {
        return (
            <Grid className="account-creation all-page-layout">
                <h1>Create Account</h1>
                <p><Link to='/sign-in'>
                    Already got a Tag?
                </Link></p>
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={12} sm={4}>
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
                        <Col xs={12} sm={8}>
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
            </Grid>
        )
    }
});

module.exports = CreateAccount;
