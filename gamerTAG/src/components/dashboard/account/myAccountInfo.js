import React from 'react';

var MyAccountInfo = React.createClass({
    render: function() {
        return (
            <div className="myAccountInfo">
              <p>gamerTAG: {this.props.gamerTAG}</p>
              <p>Name: {this.props.name}</p>
              <p>Location: {this.props.location}</p>
              <p>Status: {this.props.status}</p>
              <p>Recent Game: {this.props.recentGame}</p>
            </div>
        )
    }
});

module.exports = MyAccountInfo;
