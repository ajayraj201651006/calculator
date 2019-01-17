import React, { Component } from 'react';
import Aux from './hoc/Auxes';
import Layout from './containers/Layout/Layout';
import Result from './components/Result/Result';
import Keypad from './components/Keypad/Keypad';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
         <Result />
         <Keypad />
        </Layout>
      </Aux>
    );
  }
}

export default App;
