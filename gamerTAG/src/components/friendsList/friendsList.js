import React from 'react';
import Friend from './friend';
import 'react-bootstrap';
import {Row, Col, Grid} from 'react-bootstrap';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './friend.css';
import { Card } from 'material-ui/Card';
import {sortFriends} from '../general/sortingFunctions';
import {orange600, grey200} from 'material-ui/styles/colors';

var FriendsList = React.createClass({
    getInitialState: function() {
      return {
        value: undefined
      }

    },
    handleChange: function(event, index, value) {
        this.setState({
          value: value
        });
        this.sortBy(value);
    },

    //Sorting function cannot set state of new data file
    sortBy: function(value) {
        var sorted = this.state.users;
        this.setState({
            users: {
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
              color: '#fff',
              margin: '1em auto',
              padding: '1em 2em',
              backgroundColor: '#2f2f2f'
            },
            floatingLabel: {
              color: orange600
            },
            menuLable: {
              color: grey200
            }
        };
        return (
          <Grid>
            <Card style={styles.card}>
              <Row>
                  <Col xs={12} className="friendsPageHeader">
                      <h1>- FRIENDS LIST -</h1>
                  </Col>
              </Row>
              <Row>
                  <Col xs={6} className="friendMenu">
                      <SelectField floatingLabelText="Name" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} labelStyle={styles.menuLable} floatingLabelStyle={styles.floatingLabel}>
                          <MenuItem value={"alphAZ"} primaryText="A-Z"/>
                          <MenuItem value={"alphZA"} primaryText="Z-A"/>
                      </SelectField>
                  </Col>
                  <Col xs={6} className="friendMenu">
                      <SelectField floatingLabelText="Status" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} labelStyle={styles.menuLable} floatingLabelStyle={styles.floatingLabel}>
                          <MenuItem value={"online"} primaryText="Online"/>
                          <MenuItem value={"offline"} primaryText="Offline"/>
                      </SelectField>
                  </Col>
              </Row>
              <Row className="show-grid">
                  <Col xs={12}>
                      <div>
                          {this.props.users.filter((user, index) => {
                            for(var i = 0; i <= this.props.users[this.props.currentUser.id - 1].friends.length; i++){
                              if (this.props.users[this.props.currentUser.id - 1].friends[i] === user.id) {
                                  return true;
                              }
                            }
                          }).map((user, index) => {
                              return (<Friend key={index} friendFirstName={user.firstName} friendLastName={user.lastName} friendStatus={user.status}/>)
                          })}
                      </div>
                  </Col>
              </Row>
            </Card>
          </Grid>
        )
    }
});

module.exports = FriendsList;
