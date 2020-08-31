import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from '../components/Page'
import Body from '../components/Body'
import LeftMenu from '../components/LeftMenu';

import Home from '../pages/Home'

const Component = () => {
  return (
    <Page>
      <LeftMenu />
      <Body>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Body>
    </Page>
  )
}

export default Component;
