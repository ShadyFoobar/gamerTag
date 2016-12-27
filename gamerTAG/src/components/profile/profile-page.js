import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Card} from 'material-ui/Card';
import {orange600} from 'material-ui/styles/colors';
import {CardMedia, CardTitle} from 'material-ui/Card';
import {GridList} from 'material-ui/GridList';
import SingleGameStat from './gameStats/singleGameStat';
import './profile-page.css';

var ProfilePage = React.createClass({
    renderGames: function(){
      return this.props.games.filter((game) => {
        for(var userGames of this.props.currentUser.games){
          if(game.id === userGames.id){
            return true;
          }
        }
      }).map((tile, index) => (<SingleGameStat tile={tile} index={index} key={tile.id}/>));
    },
    render: function() {
        const styles = {
            customWidth: {
                width: 150
            },
            card: {
              color: '#fff',
              margin: '1em auto',
              padding: '1em 2em',
              backgroundColor: '#2f2f2f'
            },
            profileImg: {
              padding: '2px 1em'
            },
            floatingLabel: {
                color: orange600
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto'
            }
        };
        return (
            <Grid>
                <Card style={styles.card}>
                    <Row className="profilePageHeader">
                        <Col xs={12} className="">
                            <h1>- PROFILE -</h1>
                        </Col>
                    </Row>
                    <Row className="profilePageInfo">
                        <Col xs={12} sm={3}>
                            <div className="profilePic">
                                <CardMedia overlay={<CardTitle style={styles.profileImg} title={
                                    this.props.users.firstName
                                }
                                 />}>
                                    <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                                </CardMedia>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Row>
                                <Col sm={12} className="sectionHeader">
                                    <h3>- Personal Info -</h3>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                  <table>
                                    <tbody>
                                      <tr>
                                          <td className="tdh"><strong>Name: </strong></td>
                                          <td>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Location: </strong></td>
                                          <td>{this.props.currentUser.location}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Status: </strong></td>
                                          <td>{this.props.currentUser.status}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Age: </strong></td>
                                          <td>{this.props.currentUser.age}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Play Style: </strong></td>
                                          <td>{this.props.currentUser.style}</td>
                                      </tr>
                                      </tbody>
                                  </table>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={5}>
                            <Row>
                                <Col sm={12} className="sectionHeader">
                                    <h3>- Tag Info -</h3>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                  <table>
                                    <tbody>
                                      <tr>
                                          <td className="tdh"><strong>LoL: </strong></td>
                                          <td>{this.props.currentUser.gamertags.league}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Blizzard: </strong></td>
                                          <td>{this.props.currentUser.gamertags.battlenet}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Xbox: </strong></td>
                                          <td>{this.props.currentUser.gamertags.xbox}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Playstation: </strong></td>
                                          <td>{this.props.currentUser.gamertags.playstation}</td>
                                      </tr>
                                      <tr>
                                          <td className="tdh"><strong>Steam: </strong></td>
                                          <td>{this.props.currentUser.gamertags.steam}</td>
                                      </tr>
                                      </tbody>
                                  </table>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                  </Card>
                  <Card style={styles.card}>
                    <Row className="profilePageGames">
                        <Col xs={12}>
                            <Row>
                                <Col xs={12}>
                                    <div className="profilePageGamesHeader">
                                        <h3>- My Games -</h3>
                                    </div>
                                    <div className="allGameStat" style={styles.root}>
                                        <GridList className="all-games-grid-list" style={styles.gridList} cols={2.2}>
                                            {this.renderGames()}
                                        </GridList>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Grid>
        )
    }
});

module.exports = ProfilePage;
