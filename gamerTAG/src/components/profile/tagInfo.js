import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

var TagInfo = React.createClass({
    render: function() {
        return (
            <div className="tagSection">
                <Col xs={12}>
                    <div className="tagInfo">
                        <p>Tag1</p>
                        <input type="text"/>
                        <p>Tag2</p>
                        <input type="text"/>
                        <p>Tag3</p>
                        <input type="text"/>
                        <p>Tag4</p>
                        <input type="text"/>
                    </div>
                </Col>
            </div>
        )
    }
});

module.exports = TagInfo;
