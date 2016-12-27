import React from 'react';
import {Link} from 'react-router';
import ToggleDisplay from 'react-toggle-display';
import {Tabs, Tab} from 'material-ui/Tabs';
import './navbar.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var Navbar = React.createClass({
    ifLogged: function(){
      if(this.props.currentUser){
        return true;
      } else {
        return false;
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
            <div className="navbar">
              <div className="logoBar">
                <Link to="/">
                  <img src='/images/gamerTAG.png' alt="profile-pic" />
                </Link>
              </div>
              <ToggleDisplay show={this.ifLogged()}>
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
