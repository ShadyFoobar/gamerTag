import React from 'react';
import {Grid} from 'react-bootstrap';
import { Link } from 'react-router';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {orange600} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './sign-in.css'

var SignIn = React.createClass({
    render: function() {
      var styles = {
        underlineStyle: {
          borderColor: orange600,
        },
        floatingLabel: {
          color: orange600
        },
        card: {
          maxWidth: '375px',
          margin: '0 auto',
          padding: '10px 0',
          backgroundColor: '#eee'
        }
      };
        return (
            <Grid className="account-sign-in ">
              <Card style={styles.card}>
                <h1>Sign In </h1>
                <form className="account-information">
                    <div className="sign-in-info">
                        <TextField
                          className="sign-in-email"
                          underlineFocusStyle={styles.underlineStyle}
                          floatingLabelText="Email Address"
                          floatingLabelStyle={styles.floatingLabel}
                          floatingLabelFixed={true}
                          hintText="Email Address"
                        />
                        <br/>
                        <TextField
                          className="sign-in-password"
                          underlineFocusStyle={styles.underlineStyle}
                          floatingLabelText="Password"
                          floatingLabelStyle={styles.floatingLabel}
                          floatingLabelFixed={true}
                          hintText="Password"
                          type="password"
                        />
                        <br/>
                        <Link to='/profile-page'>
                          <RaisedButton type="submit" form="form1" value="Submit" label="Submit" primary={true}/>
                        </Link>
                        <br/>
                        <Link to='/profile-page'>
                          <FlatButton label="Forgot Password" />
                        </Link>
                        <br/>
                        <Link to='/create-account'>
                          <FlatButton label="Don't got a Tag" />
                        </Link>

                    </div>
                </form>
              </Card>
            </Grid>
        )
    }
});

module.exports = SignIn;
