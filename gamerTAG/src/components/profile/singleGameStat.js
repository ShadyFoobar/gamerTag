import React from 'react';
import './profile-page.css';

var SingleGameStat = React.createClass({
    render: function() {
        return (
            <div className="singleGameStat">
              <img src='/images/league.jpg' alt="profile-pic" />
              <p>Skill Level</p>
              <p>Rank</p>
            </div>
        )
    }
});

module.exports = SingleGameStat;
