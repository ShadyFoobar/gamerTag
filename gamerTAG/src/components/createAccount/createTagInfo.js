import React from 'react';
import TextField from 'material-ui/TextField';
import {orange600} from 'material-ui/styles/colors';
import './create.css';

var CreateTagInfo = React.createClass({
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
          color: orange600,
        },
      };
        return (
            <div className="createAccount">
                <div className="form-group">
                  <TextField
                    style={styles.blurFix}
                    inputStyle={styles.input}
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelText={this.props.tagName}
                    floatingLabelStyle={styles.floatingLabel}
                    floatingLabelFixed={true}
                    hintText="Enter name"
                    hintStyle={styles.hint}
                  />
                </div>
            </div>
        )
    }
});

module.exports = CreateTagInfo;
