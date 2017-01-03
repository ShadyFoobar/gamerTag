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
  getInitialState: function(){
    return {
    }
  },
  componentDidMount: function(){
    localStorage.removeItem("currentUser");
  },
  componentDidUpdate: function(){
    this.checkCredentials();
  },
  checkCredentials : function() {
    this.props.setCurrentUser(this.props.users[this.props.users.length - 1]);
    localStorage.setItem("currentUser", JSON.stringify(this.props.currentUser));
    this.props.router.push('/profile-page');
  },
  createUser: function(e){
    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var email = document.querySelector("#email").value;
    var location = document.querySelector("#location").value;
    var age = document.querySelector("#age").value;
    var password = document.querySelector("#password").value;
    var league = document.querySelector("#gamertagLeague").value;
    var battlenet = document.querySelector("#gamertagBattle").value;
    var xbox = document.querySelector("#gamertagXbox").value;
    var playstation = document.querySelector("#gamertagPlaystation").value;
    var steam = document.querySelector("#gamertagSteam").value;
    var gamertags = {
      league,
      battlenet,
      xbox,
      playstation,
      steam
    };
    if(firstName === "" || lastName === "" || email === "" || location === "" || age === "" || password === "" ){
      console.log("Fill in all fields")
    } else {
      this.props.addUser(firstName, lastName, email, location, age, password, gamertags);
    }
    e.preventDefault();
  },
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
                <h1>- CREATE ACCOUNT -</h1>
                <form className="account-information">
                    <Row className="show-grid">
                        <Col xs={12} sm={6}>
                            <div className="user-info">
                                <h2>User Info</h2>
                                <TextField
                                  id="firstName"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="First Name"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter First Name"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  id="lastName"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Last Name"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter last name"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  id="age"
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
                                  id="location"
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
                                  id="email"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Email"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter Email"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  id="password"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Password"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Type Password"
                                  hintStyle={styles.hint}
                                />
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="tag-info">
                                <h2>Tag Info</h2>
                                <TextField
                                  id="gamertagBattle"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="BattleNet Tag"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter name"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  id="gamertagLeague"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="LoL Summoner Name"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter name"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  id="gamertagXbox"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Xbox Gamertag"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter name"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  id="gamertagPlaystation"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="PlayStation Profile"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter name"
                                  hintStyle={styles.hint}
                                />
                                <TextField
                                  id="gamertagSteam"
                                  style={styles.blurFix}
                                  inputStyle={styles.input}
                                  underlineFocusStyle={styles.underlineStyle}
                                  floatingLabelText="Steam Profile"
                                  floatingLabelStyle={styles.floatingLabel}
                                  floatingLabelFixed={true}
                                  hintText="Enter name"
                                  hintStyle={styles.hint}
                                />
                            </div>
                        </Col>
                    </Row>
                </form>
                <br/>
                <Link to='/profile-page'>
                  <RaisedButton type="submit" form="form1" value="Submit" label="Submit" primary={true} onClick={this.createUser}/>
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
