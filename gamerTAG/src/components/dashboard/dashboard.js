import React from 'react';
import FriendsList from './friendsList/friendsList';
import MyAccountInfo from './account/myAccountInfo';

var Dashboard = React.createClass({
    getInitialState: function() {
        return {
            user: {
                gamerTAG: "Shady Foobar",
                name: "Nic T",
                location: "STL",
                status: "Online",
                recentGame: "Overwatch"
            },
            friends: [
                {
                    gamerTAG: "THE NAME",
                    name: "Nic T",
                    location: "STL",
                    status: "Online",
                    recentGame: "Overwatch"
                }, {
                    gamerTAG: "BLITZMAN",
                    name: "Nic R",
                    location: "LA",
                    status: "Online",
                    recentGame: "Cod"
                }, {
                    gamerTAG: "RUNNEDED",
                    name: "Nic P",
                    location: "CHI",
                    status: "Offline",
                    recentGame: "Halo"
                }
            ]
        };
    },

    render: function() {
        return (
            <div>
                <MyAccountInfo gamerTAG={this.state.user.gamerTAG} name={this.state.user.name} location={this.state.user.location} status={this.state.user.status} recentGame={this.state.user.recentGame}/>
                <FriendsList friends={this.state.friends}/>

            </div>
        )
    }
});

module.exports = Dashboard;
