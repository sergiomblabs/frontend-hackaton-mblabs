import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import News from './pages/News';
import NewsInfo from './pages/NewsInfo';
import NewsCreate from './pages/NewsCreate';
import Channel from './pages/Channel';
import ChannelCreate from './pages/ChannelCreate';
import Handout from './pages/Handout';
import HandoutCreate from './pages/HandoutCreate';
import HandoutInfo from './pages/HandoutInfo';
import Creation from './pages/Creation';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/news" exact component={News} />
      <Route path="/news/info/:idNews" exact component={NewsInfo} />
      <Route path="/news/create" exact component={NewsCreate} />
      <Route path="/channel" exact component={Channel} />
      <Route path="/channel/create" exact component={ChannelCreate} />
      <Route path="/handout" exact component={Handout} />
      <Route path="/handout/create" exact component={HandoutCreate} />
      <Route path="/handout/info/:idHandout" exact component={HandoutInfo} />
      <Route path="/creation" exact component={Creation} />
    </Switch>
  );
}
