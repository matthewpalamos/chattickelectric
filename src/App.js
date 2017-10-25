import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Home from './Home';
import About from './About';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <img src='https://i.imgur.com/lTvTCbs.png' style={{margin: 'auto', display: 'block', width: '40%'}}/>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            inkBarStyle={{backgroundColor: 'red', width: '20%', marginLeft: '200px'}}
            tabItemContainerStyle={{width: '80%', margin: 'auto'}}
          >
            <Tab label="Home" value="a" style={{backgroundColor: '#584915'}}>
              <div>
                <Home/>
              </div>
            </Tab>
            <Tab label="About Us" value="b" style={{backgroundColor: '#584915'}}>
              <div>
                <About/>
              </div>
            </Tab>
            <Tab label="Contact" value="c" style={{backgroundColor: '#584915'}}>
              <div>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
