import React from 'react';
import SingleGameStat from './singleGameStat';
import {Row, Col} from 'react-bootstrap';
import {GridList, GridTile} from 'material-ui/GridList';
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
                      <GridList style={styles.gridList} cols={2.2}>
                        {tilesData.user.myGames.map((tile, index) => (
                          <GridTile
                            key={tile.id}
                            title={tile.title}
                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            subtitle={<span>Skill: <b>{tile.skill}</b></span>}
                          >
                              <img src={tile.img} />
                          </GridTile>
                        ))}
                      </GridList>
                        {/* <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/>
                        <SingleGameStat/> */}
                    </div>
                </Col>
            </Row>
        )
    }
});

module.exports = AllGameStats;
