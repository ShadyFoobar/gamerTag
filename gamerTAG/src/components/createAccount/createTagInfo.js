import React from 'react';
import {FormGroup} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import {orange600} from 'material-ui/styles/colors';
import './create.css';

var CreateTagInfo = React.createClass({
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
            <div className="createAccount">
                <FormGroup controlId="tag-name">
                  <TextField
                    className=""
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelText={this.props.tagName}
                    floatingLabelStyle={styles.floatingLabel}
                    floatingLabelFixed={true}
                    hintText="Enter name"
                  />
                </FormGroup>

                    <label>Play Frequencey</label>
                    <input type="checkbox" name="frequencey" value="weekday"/>Weekdays
                    <input type="checkbox" name="frequencey" value="weekend"/>Weekends
                    <br/>
                    <input type="radio" name="frequencey" value="hours"/>0-3 Hours
                    <input type="radio" name="frequencey" value="hours"/>3-5 Hours
                    <input type="radio" name="frequencey" value="hours"/>5+ Hours

                    <p>Skill Level</p>
                    <input type="radio" name="skill" value="skilled"/>
                    Skilled
                    <input type="radio" name="skill" value="average"/>
                    Average
                    <input type="radio" name="skill" value="newbie"/>
                    Newbie
            </div>
        )
    }
});

module.exports = CreateTagInfo;
