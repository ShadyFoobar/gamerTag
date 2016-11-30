import React from 'react';
import Dashboard from './dashboard/dashboard';

var App = React.createClass({
    render: function() {
        return (
            <div>
              <Dashboard />
            </div>
        )
    }
});

module.exports = App;
