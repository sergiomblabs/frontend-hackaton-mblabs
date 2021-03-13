import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import News from './pages/News';
import Channel from './pages/Channel';
import Handout from './pages/Handout';
import Creation from './pages/Creation';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/news" exact component={News} />
      <Route path="/channel" exact component={Channel} />
      <Route path="/handout" exact component={Handout} />
      <Route path="/creation" exact component={Creation} />
    </Switch>
  );
}
