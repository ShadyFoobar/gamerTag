import React from 'react';
import CreateTagInfo from './createTagInfo';
import {Grid, Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import {orange600} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import './create.css';

var CreateAccount = React.createClass({
    render: function() {
      var styles = {
        underlineStyle: {
          borderColor: orange600,
        },
        floatingLabel: {
          color: '#393939'
        },
      };
        return (
            <Grid className="account-creation all-page-layout">
                <h1>Create Account</h1>
                <p><Link to='/sign-in'>
                    Already got a Tag?
                </Link></p>
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={12} sm={4}>
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
                            </div>
                        </Col>
                        <Col xs={12} sm={8}>
                            <div className="game-info">
                                <h2>Game Info</h2>
                                <CreateTagInfo tagName="Battle.net Tag"/>
                                <CreateTagInfo tagName="Leauge of Legends Summoner Name"/>
                                <CreateTagInfo tagName="Xbox Gamertag"/>
                                <CreateTagInfo tagName="PlayStation Profile"/>
                            </div>
                        </Col>
                    </Row>
                </form>
                <div className="join-button">
                    <Link to='/profile-page'>
                        <button type="button" className="btn btn-primary">Join!</button>
                    </Link>
                </div>
            </Grid>
        )
    }
});

module.exports = CreateAccount;
