import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import EnterApp from 'material-ui/svg-icons/action/exit-to-app';
import { orange400 } from 'material-ui/styles/colors';
import './landing.css';

var styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '5% 0'
  },
  signUpButton: {
    height: '200px',
    lineHeight: '200px',
    width: '300px',
    border: '1px solid #555'
  },
  signInButton: {
    height: '200px',
    lineHeight: '200px',
    width: '300px',
    border: '1px solid #555'
  }
}
var Landing = React.createClass({
    componentDidMount: function(){
      localStorage.removeItem("currentUser");
      this.props.setCurrentUser(null);
    },
    render: function() {
        return (
            <Grid className="account-creation">
                <form className="account-information">
                    <Row className="show-grid">
                      <Col xs={12}>
                        <div className="app-description">
                          <h1>Welcome to GamerTAG</h1>
                          <p>GAMERTAG is the way to link gamers who what to share their experience of playing awesome video games they are currently into. Whether you want to casual or go balls to the walls, we will find other gamers with a similar skill level and game preferences as you.</p>
                        </div>
                      </Col>
                    </Row>
                    <div style={styles.buttonContainer}>
                        <Link to='/create-account'>
                        <RaisedButton
                          style={styles.signUpButton}
                          backgroundColor={orange400}
                          label="Sign Up"
                          icon={<PersonAdd />}
                          />
                        </Link>
                        <Link to='/sign-in'>
                        <RaisedButton
                          style={styles.signInButton}
                          backgroundColor={orange400}
                          label="Sign In"
                          icon={<EnterApp />}
                          />
                        </Link>
                    </div>
                </form>
            </Grid>
        )
    }
});

module.exports = Landing;
