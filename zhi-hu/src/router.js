import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import ProductList from './routes/ProductList.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/product-list" component={ProductList} />
    </Router>
  );
}

export default RouterConfig;
