import React from 'react';
import Navbar from './general/navbar';
import Footer from './general/footer';

var App = React.createClass({
    getInitialState: function() {
        return {isLoggedIn: false};
    },
    changeLogIn: function() {
        this.setState({
            isLoggedIn: true
        });
    },
    render: function() {
      var v = this;
      var childrenWithProps = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, { changeLogIn: v.changeLogIn, isLoggedIn: v.state.isLoggedIn});
        });
        return (
            <div>
                <Navbar isLoggedIn={this.state.isLoggedIn} changeLogIn={this.changeLogIn}/>
                {childrenWithProps}
                <Footer/>
            </div>
        )
    }
});

module.exports = App;
