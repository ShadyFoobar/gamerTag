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
      blurFix: {
        willChange: 'contents'
      },
      input: {
        color: '#ddd'
      },
      hint: {
        color: 'rgba(255,255,255,0.3)'
      },
      underlineStyle: {
        borderColor: orange600,
      },
      floatingLabel: {
        color: orange600
      },
      card: {
        maxWidth: '768px',
        color: '#fff',
        margin: '0 auto',
        padding: '1em 2em',
        backgroundColor: '#2f2f2f'
      },
      flatButton: {
        color: '#eee'
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
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="gamerTAG"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter gamerTAG"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Name"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter name"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Age"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter age"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Location"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter location"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Password"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter Password"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Retype Password"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Retype Password"
                                  hintStyle={styles.hint}
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
                  <FlatButton label="Got a Tag?" style={styles.flatButton} />
                </Link>
              </Card>
            </Grid>
        )
    }
});

module.exports = CreateAccount;
