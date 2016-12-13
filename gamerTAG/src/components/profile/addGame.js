import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './profile-page.css';

var AddGame = React.createClass({
    render: function() {
        return (
            <div>
                <Col xs={12} className="singleGameStat">
                    <div>
                        <h2>Add A Game</h2>
                        <Col xs={12} md={6}>
                          <p>Name</p>
                            <p>Skill Level</p>
                            <p>Console</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src='images/league.jpg' alt="profile-pic"/>
                        </Col>
                    </div>
                </Col>
            </div>
        )
    }
});

module.exports = AddGame;
