import React from 'react';
import {Link} from 'react-router';
import ToggleDisplay from 'react-toggle-display';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var Navbar = React.createClass({
    logoRouting: function(ifLoggedIn){
      if(ifLoggedIn){
        return "/dashboard";
      } else {
        return "/"
      }
    },


    render: function() {

        const styles = {
          tabs:{
            marginBottom: '10px'
          },
         tab: {
          backgroundColor: '#393939',
          borderBottom: 'blue'
         }
        }
        return (
            <div>
              <div className="logoBar">
                <img src={require('../../img/blackSquare.png')} alt="profile-pic" />
              </div>
              <ToggleDisplay show={this.props.isLoggedIn}>
                <Tabs style={styles.tabs}>
                  <Tab label="Profile" containerElement={<Link to="/profile-page"/>} style={styles.tab}/>
                  <Tab label="Friends" containerElement={<Link to="/friends-list"/>} style={styles.tab}/>
                  <Tab label="Add Friends" containerElement={<Link to="/add-friends"/>} style={styles.tab}/>
                </Tabs>
              </ToggleDisplay>
            </div>

        )
    }
});

module.exports = Navbar;