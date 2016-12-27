import React from 'react';
import Navbar from './general/navbar';
import Footer from './general/footer';
import './app.css'
// import data from '../data2';

var Main = React.createClass({
    render: function() {
      var v = this;
      var childrenWithProps = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, {
              users: v.props.users,
              games: v.props.games,
              currentUser: v.props.currentUser
            });
        });
        return (
            <div>
                <Navbar currentUser={this.props.currentUser} />
                {childrenWithProps}
                <Footer/>
            </div>
        )
    }
});

module.exports = Main;
