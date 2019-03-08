import React from 'react';
import {  Menu, Icon } from 'semantic-ui-react';

export default class SocialMenu() extends React.Component {
  render() {
    return (
        <Menu inverted secondary>
          <Menu.Item fitted>
            <Icon size="big" inverted name="facebook"/>
          </Menu.Item>
          <Menu.Item fitted>
            <Icon size="big" inverted name="twitter"/>
          </Menu.Item>
          <Menu.Item fitted>
            <Icon size="big" inverted name="instagram"/>
          </Menu.Item>
        </Menu>
    );
  }
}
