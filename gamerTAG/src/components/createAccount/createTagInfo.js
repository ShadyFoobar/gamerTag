import React from 'react';
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
          color: orange600,
        },
      };
        return (
            <div className="createAccount">
                <div className="form-group">
                  <TextField
                    className=""
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelText={this.props.tagName}
                    floatingLabelStyle={styles.floatingLabel}
                    floatingLabelFixed={true}
                    hintText="Enter name"
                  />
                </div>
            </div>
        )
    }
});

module.exports = CreateTagInfo;
