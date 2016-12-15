import React from 'react';
import RecommendedFriend from './../addFriends/recommendedFriend';
import {Row, Col, Grid} from 'react-bootstrap';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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
    },
    render: function() {
        const styles = {
            customWidth: {
                width: 150
            }
        };
        return (
            <div>
                <Grid className="all-page-layout">
                    <Row>
                        <Col xs={12} className="recommendedFriendPageHeader">
                            <h1>- FIND A FRIEND -</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Console" value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
                                    <MenuItem value={1} primaryText="Xbox"/>
                                    <MenuItem value={2} primaryText="PC"/>
                                    <MenuItem value={3} primaryText="PlayStation"/>
                                    <MenuItem value={4} primaryText="Nintendo"/>
                            </SelectField>
                        </Col>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Name" value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
                                    <MenuItem value={5} primaryText="Ascending"/>
                                    <MenuItem value={6} primaryText="Descending"/>
                            </SelectField>
                        </Col>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Status" value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
                                    <MenuItem value={7} primaryText="Online"/>
                                    <MenuItem value={8} primaryText="Offline"/>
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
                </Grid>
            </div>
        )
    }
});

module.exports = addFriends;
