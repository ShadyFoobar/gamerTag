import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

var AddGame = React.createClass({
    render: function() {
        return (
            <div className="singleGameStat">
              <img src={require('../../../img/league.jpg')} alt="profile-pic" />
              <p>Skill Level</p>
              <p>Rank</p>
            </div>
        )
    }
});

module.exports = AddGame;
