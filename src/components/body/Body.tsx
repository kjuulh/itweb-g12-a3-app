import React from 'react';

import { Switch, Route } from 'react-router-dom';

const Body: React.FC = () => (
  <Switch>
    <Route path='/play'>
      <div>Games</div>
    </Route>
    <Route path='/scores'>
      <div>Scores</div>
    </Route>
    <Route path='/*'>
      <div>Home</div>
    </Route>
  </Switch>
);

export default Body;
