import React from 'react';
import CreateTagInfo from './createTagInfo';

var CreateAccount = React.createClass({
    render: function() {
        return (
            <div className="account-creation">
                <h1>Create Account</h1>
                <form className="account-information">
                  <CreateTagInfo tagName="Battle.net Tag"/>
                  <CreateTagInfo tagName="Leauge of Legends Summoner Name"/>
                  <CreateTagInfo tagName="Xbox Gamertag"/>
                  <CreateTagInfo tagName="PlayStation Profile"/>
                </form>
            </div>
        )
    }
});

module.exports = CreateAccount;
