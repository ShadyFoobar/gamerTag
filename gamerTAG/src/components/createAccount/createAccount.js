import React from 'react';
import CreateTagInfo from './createTagInfo';
import {Grid, Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import {orange600} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './create.css';

var CreateAccount = React.createClass({
  render: function() {
    var styles = {
      underlineStyle: {
        borderColor: orange600,
      },
      floatingLabel: {
        color: orange600
      },
      card: {
        maxWidth: '768px',
        margin: '0 auto',
        padding: '10px 0',
        backgroundColor: '#eee'
      }
    };
        return (
            <Grid className="account-creation">
              <Card style={styles.card}>
                <h1>Create Account</h1>
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={12} sm={6}>
                            <div className="user-info">
                                <h2>User Info</h2>
                                <TextField
                                  className=""
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="gamerTAG"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter gamerTAG"
                                />
                                <TextField
                                  className=""
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Name"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter name"
                                />
                                <TextField
                                  className=""
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Age"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter age"
                                />
                                <TextField
                                  className=""
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Location"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter location"
                                />
                                <TextField
                                  className=""
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Password"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter Password"
                                />
                                <TextField
                                  className=""
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Retype Password"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Retype Password"
                                />
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="tag-info">
                                <h2>Tag Info</h2>
                                <CreateTagInfo tagName="Battle.net Tag"/>
                                <CreateTagInfo tagName="LoL Summoner Name"/>
                                <CreateTagInfo tagName="Xbox Gamertag"/>
                                <CreateTagInfo tagName="PlayStation Profile"/>
                            </div>
                        </Col>
                    </Row>
                </form>
                <br/>
                <Link to='/profile-page'>
                  <RaisedButton type="submit" form="form1" value="Submit" label="Submit" primary={true}/>
                </Link>
                <br/>
                <Link to='/sign-in'>
                  <FlatButton label="Got a Tag?" />
                </Link>
              </Card>
            </Grid>
        )
    }
});

module.exports = CreateAccount;
