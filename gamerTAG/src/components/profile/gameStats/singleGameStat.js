import React from 'react';
import {GridTile} from 'material-ui/GridList';
import './singleGameStat.css'

var SingleGameStat = React.createClass({
    render: function() {
        return (
          <GridTile
            className="singleGameStat"
            key={this.props.tile.id}
            title={this.props.tile.title}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            subtitle={<span>Skill: <b>{this.props.tile.skill}</b></span>}
          >
              <img src={this.props.tile.img} alt={this.props.tile.title}/>
          </GridTile>
        )
    }
});

module.exports = SingleGameStat;
