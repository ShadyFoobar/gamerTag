import React from 'react';

var CreateTagInfo = React.createClass({
    render: function() {
        return (
            <div className="createAccount">
                    <p>{this.props.tagName}</p>
                    <input type="text"/>
                    <p>Play Frequencey</p>
                    <input type="checkbox" name="frequencey" value="weekday"/>Weekdays
                    <input type="checkbox" name="frequencey" value="weekend"/>Weekends
                    <br/>
                    <input type="radio" name="frequencey" value="hours"/>0-3 Hours
                    <input type="radio" name="frequencey" value="hours"/>3-5 Hours
                    <input type="radio" name="frequencey" value="hours"/>5+ Hours

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
