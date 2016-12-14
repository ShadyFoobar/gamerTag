import React from 'react';
import SingleGameStat from './singleGameStat';
import {Row, Col} from 'react-bootstrap';
import {GridList} from 'material-ui/GridList';
import './allGameStats.css'
import tilesData from '../../../data';

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

var AllGameStats = React.createClass({
    render: function() {
        return (
            <Row>
                <Col xs={12}>
                    <div>
                        <h2>My Games</h2>
                    </div>
                    <div className="allGameStat" style={styles.root}>
                      <GridList className="all-games-grid-list" style={styles.gridList} cols={2.2}>
                        {tilesData.user.myGames.map((tile, index) => (
                          <SingleGameStat tile={tile} index={index} key={tile.id}/>
                        ))}
                      </GridList>
                    </div>
                </Col>
            </Row>
        )
    }
});

module.exports = AllGameStats;
