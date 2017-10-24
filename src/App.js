import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
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
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Homepage" value="a">
              <div>
              </div>
            </Tab>
            <Tab label="About Us" value="b">
              <div>
              </div>
            </Tab>
            <Tab label="Contact" value="c">
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
