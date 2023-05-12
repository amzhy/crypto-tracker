import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/cryptocurrencies" component={Cryptocurrencies} />
            <Route exact path="/crypto/:coinId" component={CryptoDetails} />
            <Route exact path="/news" component={News} />
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}> Copyright © 2021.
          All Rights Reserved.
        </Typography.Title>
      </div>
    </div>
  </div>
);

export default App;
