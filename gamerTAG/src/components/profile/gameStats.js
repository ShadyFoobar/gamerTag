import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import SingleGameStat from './singleGameStat';

var GameStats = React.createClass({
    render: function() {
        return (
            <div className="allGameStat">
                    <SingleGameStat/>
                    <SingleGameStat/>
                    <SingleGameStat/>
                    <SingleGameStat/>
                    <SingleGameStat/>
                    <SingleGameStat/>
            </div>
        )
    }
});

module.exports = GameStats;
