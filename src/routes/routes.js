import React from 'react';
import { IndexRoute, Route } from 'react-router';

import IndexView from '../views/IndexView';


export default (
  <Route path="/">
    <IndexRoute component={IndexView}/>
  </Route>
);
