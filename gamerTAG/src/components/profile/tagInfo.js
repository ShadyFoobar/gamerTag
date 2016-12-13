import React from 'react';
import {Col} from 'react-bootstrap';

var TagInfo = React.createClass({
    render: function() {
        return (
            <div className="tagSection">
                <Col xs={12}>
                    <h2>GamerTags</h2>
                    <div className="tagInfo">
                        <Col sm={12} md={6}>
                            <div>
                                <p>LoL Summoner Name</p>
                                <input type="text"/>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div>
                                <p>Blizzard BattleTag</p>
                                <input type="text"/>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div>
                                <p>Xbox Gamertag</p>
                                <input type="text"/>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div>
                                <p>Playstation UserName</p>
                                <input type="text"/>
                            </div>
                        </Col>
                    </div>
                </Col>
            </div>
        )
    }
});

module.exports = TagInfo;
