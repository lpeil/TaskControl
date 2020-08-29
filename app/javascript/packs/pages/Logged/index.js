import React from 'react';

import Page from '../../components/Page'
import Body from '../../components/Body'
import Routes from '../../routes';
import LeftMenu from '../../components/LeftMenu';

const Component = () => {
  return (
    <Page>
      <LeftMenu />
      <Body>
        <Routes />
      </Body>
    </Page>
  )
}

export default Component;
