import React from 'react';
import './footer.css';
import {Row, Col} from 'react-bootstrap';

var Footer = React.createClass({
    render: function() {
        return (
          <div className="footer">
            <Col xs={12} sm={4}>
              <p>Getting Started</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </Col>
            <Col xs={12} sm={4}>
              <div>
                <img src='/images/gamerTAG.png' alt="logo-pic" />
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <p>©MetaDev Technologies</p>
              <p>Privacy</p>
              <p>Terms and Usage</p>
            </Col>
          </div>
        )
    }
});

module.exports = Footer;
