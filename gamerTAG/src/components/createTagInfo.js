import React from 'react';

var CreateTagInfo = React.createClass({
    render: function() {
        return (
            <div className="createAccount">
                <img></img>
                <p>TagName</p>
                <input type="text"/>
                <p>Play Frequencey</p>
                <input type="checkbox" name="vehicle1" value="Bike"/>Weekdays
                <input type="checkbox" name="vehicle2" value="Car"/>
                Weekends

                <p>Skill Level</p>
                <input type="radio" name="skill" value="pro"/>
                Pro
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
