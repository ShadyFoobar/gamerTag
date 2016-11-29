import React from 'react';

var CreateTagInfo = React.createClass({
    render: function() {
        return (
            <div className="createAccount">
                <img src={require('../img/gamertag.jpg')} height="42" width="42"/>
                <p>{this.props.tagName}</p>
                <input type="text"/>
                <p>Play Frequencey</p>
                <input type="checkbox" name="frequencey" value="weekday"/>Weekdays
                <input type="checkbox" name="frequencey" value="weekend"/>
                Weekends

                <p>Skill Level</p>
                <input type="radio" name="skill" value="skilled"/>
                Skilled
                <input type="radio" name="skill" value="average"/>
                Average
                <input type="radio" name="skill" value="newbie"/>
                Newbie


            </div>
        )
    }
});

module.exports = CreateTagInfo;
