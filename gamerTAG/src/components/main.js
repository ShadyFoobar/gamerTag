import React from 'react';
import Navbar from './general/navbar';
import Footer from './general/footer';
import './app.css'

var Main = React.createClass({
    getInitialState : function(){
      if(this.isCurrentUserInLocal()){
        var currentUser = JSON.parse(localStorage.getItem("currentUser"))
      }
      return {
        currentUser: currentUser,
        setCurrentUser : (user) => {
          this.setState({
            currentUser: user
          })
        },
      }
    },
    isCurrentUserInLocal: function(){
      if(localStorage.getItem("currentUser")){
        return true;
      } else {
        return false;
      }
    },
    render: function() {
      var v = this;
      var childrenWithProps = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, {
              users: v.props.users,
              games: v.props.games,
              currentUser: v.state.currentUser,
              setCurrentUser: v.state.setCurrentUser,
              addUser: v.props.addUser,
              addFriend: v.props.addFriend
            });
        });
        return (
            <div>
                <Navbar currentUser={this.state.currentUser} />
                {childrenWithProps}
                <Footer/>
            </div>
        )
    }
});

module.exports = Main;
