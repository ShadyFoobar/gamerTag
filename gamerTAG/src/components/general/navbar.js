import React from 'react';
import {Link} from 'react-router';
import ToggleDisplay from 'react-toggle-display';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
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
          backgroundColor: '#393939'
         }
        }
        return (
            // <div className="header">
            //     <header>
            //         <nav className="navbar navbar-inverse navbar-fixed-top cbp-af-header">
            //             <div className="container-fluid">
            //                 <div className="navbar-header">
            //                     <ToggleDisplay show={this.props.isLoggedIn}>
            //                         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            //                             <span className="sr-only">Toggle navigation</span>
            //                             <span className="icon-bar"></span>
            //                             <span className="icon-bar"></span>
            //                             <span className="icon-bar"></span>
            //                         </button>
            //                     </ToggleDisplay>
            //                     <a className="navbar-brand">
            //                         <Link to={this.logoRouting(this.props.isLoggedIn)}><img src="Images/MDlogo.png" alt="companyLogo" className="headerLogo"/></Link>
            //                     </a>
            //                 </div>
            //                 <ToggleDisplay show={this.props.isLoggedIn}>
            //                     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            //                         <ul className="nav navbar-nav navbar-right">
            //                             <li>
            //                                 <Link to='/dashboard'>Dashboard</Link>
            //                             </li>
            //                             <li>
            //                                 <Link to='/profile-page'>Profile Page</Link>
            //                             </li>
            //                         </ul>
            //                     </div>
            //                 </ToggleDisplay>
            //             </div>
            //         </nav>
            //     </header>
            // </div>\
            <div>
              <div className="logoBar">
                <img src={require('../../img/blackSquare.png')} alt="profile-pic" />
              </div>
              <ToggleDisplay show={this.props.isLoggedIn}>
                <Tabs style={styles.tabs}>
                  <Tab label="Profile" containerElement={<Link to="/profile-page"/>} style={styles.tab}/>
                  <Tab label="Friends" containerElement={<Link to="/friends-list"/>} style={styles.tab}/>
                  <Tab label="AddFriends" containerElement={<Link to="/add-friends"/>} style={styles.tab}/>
                </Tabs>
              </ToggleDisplay>
            </div>

        )
    }
});

module.exports = Navbar;
