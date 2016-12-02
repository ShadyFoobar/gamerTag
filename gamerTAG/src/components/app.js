import React from 'react';
import Dashboard from './dashboard/dashboard';

var App = React.createClass({
  getInitialState: function() {
      return {
          user: {
              gamerTAG: "Shady Foobar",
              name: "Nic T",
              location: "STL",
              status: "Online",
              recentGame: "Overwatch",
              gameData: {
                  battlenet: "Prodigy",
                  league: "Shady Foobar",
                  xbox: "TOPGUNCHIEF14",
                  playstation: ""
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
          },
          allUsers: [
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
                  }, {
                      gamerTAG: "Cool Buy",
                      name: "Nic T",
                      location: "STL",
                      status: "Online",
                      recentGame: "Overwatch"
                  }, {
                      gamerTAG: "RACE car",
                      name: "Nic R",
                      location: "LA",
                      status: "Online",
                      recentGame: "Cod"
                  }, {
                      gamerTAG: "T bird",
                      name: "Nic P",
                      location: "CHI",
                      status: "Offline",
                      recentGame: "Halo"
                  }, {
                      gamerTAG: "the one dude austin",
                      name: "Nic T",
                      location: "STL",
                      status: "Online",
                      recentGame: "Overwatch"
                  }, {
                      gamerTAG: "ahse",
                      name: "Nic R",
                      location: "LA",
                      status: "Online",
                      recentGame: "Cod"
                  }, {
                      gamerTAG: "Jaximus",
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
              <Dashboard allUsers={this.state.allUsers} user={this.state.user}/>
            </div>
        )
    }
});

module.exports = App;
