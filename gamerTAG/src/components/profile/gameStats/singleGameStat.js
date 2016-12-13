import React from 'react';
import './singleGameStat.css'

var SingleGameStat = React.createClass({
    render: function() {
        return (
            <div className="singleGameStat">
              <img src='/images/league.jpg' alt="profile-pic" />
              <p>Skill Level</p>
              <p>Console</p>
            </div>
        )
    }
});

module.exports = SingleGameStat;
