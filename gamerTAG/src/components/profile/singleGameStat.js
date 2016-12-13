import React from 'react';

var SingleGameStat = React.createClass({
    render: function() {
        return (
            <div className="singleGameStat">
              <img src={require('../../img/league.jpg')} alt="profile-pic" />
              <p>Skill Level</p>
              <p>Rank</p>
            </div>
        )
    }
});

module.exports = SingleGameStat;
