import React, { Component } from 'react';
import Aux from './hoc/Auxes';
import Layout from './containers/Layout/Layout';
import Result from './components/Result/Result';
import Keypads from './components/Keypads/Keypads';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
         <Result />
         <Keypads />
        </Layout>
      </Aux>
    );
  }
}

export default App;
