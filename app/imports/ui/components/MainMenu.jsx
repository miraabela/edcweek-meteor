import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class MainMenu extends React.Component {
  render() {
    return (
        <Menu inverted secondary>
          <Menu.Item style={{ fontSize: '16px' }}
          >
            GALLERY
          </Menu.Item>
          <Menu.Item style={{ fontSize: '16px' }}
          >
            ARCHIVE
          </Menu.Item>
          <Menu.Item style={{ fontSize: '16px' }}
          >
            HOTELS
          </Menu.Item>
          <Menu.Item style={{ fontSize: '16px' }}
          >
            EDC LAS VEGAS
          </Menu.Item>
        </Menu>
    );
  }
}
