import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class Mid extends React.Component {
  render() {
    return (
        <div>
          <Image src='http://i68.tinypic.com/2v0lwra.png' fluid/>
          <Container fluid textAlign='center' style={{ backgroundColor: "white", height: "40px" }}>
            <h3 style={{ color: "black", paddingTop: "7px" }}>2019 DATES</h3>
          </Container>
        </div>
    );
  }
}
