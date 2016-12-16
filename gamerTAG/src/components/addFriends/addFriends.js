import React from 'react';
import RecommendedFriend from './../addFriends/recommendedFriend';
import {Row, Col, Grid} from 'react-bootstrap';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {sortFriends} from '../general/sortingFunctions';
import {Card} from 'material-ui/Card';
import {orange600} from 'material-ui/styles/colors';
import data from '../../data.js';

var addFriends = React.createClass({
    getInitialState: function() {
        return data;
    },
    componentDidMount: function() {
        this.props.changeLogIn();
    },
    handleChange: function(event, index, value) {
        this.setState({value});
        this.sortBy(value);
    },
    sortBy: function(value) {
        var sorted = this.state.allUsers;
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
            },
            card: {
                maxWidth: '10000px',
                margin: '0 auto',
                padding: '10px 0',
                backgroundColor: '#eee'
            },
            floatingLabel: {
              color: orange600
            },
        };
        return (
            <Grid>
                <Card style={styles.card}>
                    <Row>
                        <Col xs={12} className="recommendedFriendPageHeader">
                            <h1>- FIND A FRIEND -</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Game" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} floatingLabelStyle={styles.floatingLabel}>
                                <MenuItem value={"gameAZ"} primaryText="A-Z"/>
                                <MenuItem value={"gameZA"} primaryText="Z-A"/>
                            </SelectField>
                        </Col>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Name" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} floatingLabelStyle={styles.floatingLabel}>
                                <MenuItem value={"alphAZ"} primaryText="A-Z"/>
                                <MenuItem value={"alphZA"} primaryText="Z-A"/>
                            </SelectField>
                        </Col>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Status" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} floatingLabelStyle={styles.floatingLabel}>
                                <MenuItem value={"online"} primaryText="Online"/>
                                <MenuItem value={"offline"} primaryText="Offline"/>
                            </SelectField>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={6}>
                            {this.state.allUsers.filter(function(user, index) {
                                if (index % 2 === 0) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }).map(function(user, index) {
                                return (<RecommendedFriend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                            })}
                        </Col>
                        <Col xs={12} sm={6}>
                            {this.state.allUsers.filter(function(user, index) {
                                if (index % 2 !== 0) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }).map(function(user, index) {
                                return (<RecommendedFriend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                            })}
                        </Col>
                    </Row>
                </Card>
            </Grid>
        )
    }
});

module.exports = addFriends;
