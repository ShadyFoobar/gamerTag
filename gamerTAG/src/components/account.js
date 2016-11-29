import React from 'react';
import CreateTagInfo from './createTagInfo';

var Account = React.createClass({
    render: function() {
        return (
            <div className="account-creation">
                <h1>Account Information</h1>
                <form className="account-information">
                  <CreateTagInfo />
                  <CreateTagInfo />
                  <CreateTagInfo />
                  <CreateTagInfo />
                  <CreateTagInfo />
                </form>
            </div>
        )
    }
});

module.exports = Account;
