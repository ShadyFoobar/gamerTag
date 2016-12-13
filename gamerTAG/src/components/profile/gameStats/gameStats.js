import React from 'react';
import SingleGameStat from './singleGameStat';
import {Row, Col} from 'react-bootstrap';

var GameStats = React.createClass({
    render: function() {
        return (
            <div>
                <Col xs={12}>
                    <div>
                        <h2>My Games</h2>
                    </div>
                    <div className="allGameStat">
                        <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/>
                    </div>
                </Col>
            </div>
        )
    }
});

module.exports = GameStats;
