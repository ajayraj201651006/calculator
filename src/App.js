import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import Result from './components/Result/Result';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </div>
    );
  }
}

export default App;
