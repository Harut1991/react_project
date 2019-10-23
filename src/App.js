import React from 'react';
import Layout from './layout/layout';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Routing from './routing';


function App() {
  return (
    <Router>
      <Layout>
        <div className="jumbotron">
          <Routing />
        </div>
      </Layout>
    </Router> 
  );
}

export default App;
