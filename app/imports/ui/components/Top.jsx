import React from 'react';
import { Image, List } from 'semantic-ui-react';
import SocialMenu from './SocialMenu';
import MainMenu from './MainMenu';

export default class Top extends React.Component {
  render() {
    return (
        <div>
          <Image src='http://i67.tinypic.com/2w4d9ib.png' floated='left'/>;
          <List floated="right">
            <List.Item><List.Content floated="right"><SocialMenu /></List.Content></List.Item>
            <List.Item><List.Content floated="right"><h3
                style={{ fontSize: '16px', marginBottom: '-10px', marginRight: '15px' }}>SIGN UP FOR NEWSLETTERS</h3>
            </List.Content></List.Item>
            <List.Item><List.Content floated="right"><MainMenu/></List.Content></List.Item>
          </List>
        </div>
    );
  }
}
