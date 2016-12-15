import React from 'react';
import Friend from './friend';
import 'react-bootstrap';
import data from '../../data.js';
import {Row, Col, Grid} from 'react-bootstrap';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './friend.css';
import {sortFriends} from '../general/sortingFunctions';

var FriendsList = React.createClass({
    getInitialState: function() {
        return data;
    },
    componentDidMount: function() {
        this.props.changeLogIn();
    },
    handleChange: function(event, index, value) {
        this.setState({
          value: value
        });
        this.sortBy(value);
    },
    sortBy: function(value) {
        var sorted = this.state.user.friends;
        sortFriends(sorted, value);
        this.setState({
            user: {
                friends: sortFriends(sorted, value)
            }
        });
    },
    render: function() {
        const styles = {
            customWidth: {
                width: 150
            }
        };
        return (
            <div >
                <Grid className="all-page-layout">
                    <Row className="show-grid">
                        <Col xs={12} className="friendsPageHeader">
                            <h1>- FRIENDS LIST -</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="friendMenu">
                            <SelectField floatingLabelText="Name" value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
                                <MenuItem value={5} primaryText="A-Z"/>
                                <MenuItem value={6} primaryText="Z-A"/>
                            </SelectField>
                        </Col>
                        <Col xs={6} className="friendMenu">
                            <SelectField floatingLabelText="Status" value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
                                <MenuItem value={7} primaryText="Online"/>
                                <MenuItem value={8} primaryText="Offline"/>
                            </SelectField>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <div>
                                {this.state.user.friends.map(function(user, index) {
                                    return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                                })}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = FriendsList;
