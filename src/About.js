import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './App.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
    height: 550,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/14/12/campaign_images/buzzfeed-prod-fastlane03/25-important-life-lessons-michael-scott-from-the--2-354-1481735577-6_dblbig.jpg',
    title: 'Michael Scott',
    author: 'Regional Manager',
  },
  {
    img: 'http://uproxx.files.wordpress.com/2016/11/pam-the-office1.jpg?quality=100&w=650',
    title: 'Pam Beasley',
    author: 'Secretary',
  },
  {
    img: 'https://static.comicvine.com/uploads/original/11131/111318414/5778427-jim+halpert.jpg',
    title: 'Jim Halpert',
    author: 'Sales',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT.jpeg',
    title: 'Dwight Schrute',
    author: 'Assistant Regional Manager',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/19/13/enhanced/webdr09/enhanced-18311-1432055161-1.jpg',
    title: 'Angela Martin',
    author: 'Lead Accountant',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/6/69/Kelly_Kapoor.jpg',
    title: 'Kelly Kapoor',
    author: 'Customer Relations',
  },
  {
    img: 'https://vignette.wikia.nocookie.net/the-office/images/8/8d/0_5169f76e4b579_kevin-500x500.jpg/revision/latest?cb=20150809165055',
    title: 'Kevin Malone',
    author: 'Accountant',
  },
  {
    img: 'https://vignette.wikia.nocookie.net/theoffice/images/d/de/Ryan4.jpg/revision/latest?cb=20140726043955',
    title: 'Ryan Howard',
    author: 'Temporary Associate',
  },
];


class About extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MuiThemeProvider>
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              <Subheader style={{fontSize:'40px', textAlign: 'center', margin:'20px', color: 'black'}}><strong>Meet the Team</strong></Subheader>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  subtitle={<span><b>{tile.author}</b></span>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default About;
