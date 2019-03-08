import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class Dates extends React.Component {

  render() {
    return (
        <Grid columns= {8} textAlign='center' style= { { margin: '15px 15px' } }>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="WEDNESDAY" m="MAY" n="15" c='rgb(254,228,103)'/>
          </Grid.Column>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="THURSDAY" m="MAY" n="16" c='rgb(228,166,56)'/>
          </Grid.Column>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="FRIDAY" m="MAY" n="17" c='rgb(232,131,40)'/>
          </Grid.Column>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="SATURDAY" m="MAY" n="18" c='rgb(243,105,42)'/>
          </Grid.Column>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="SUNDAY" m="MAY" n="19" c='rgb(250,73,44)'/>
          </Grid.Column>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="MONDAY" m="MAY" n="20" c='rgb(253,46,46)'/>
          </Grid.Column>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="TUESDAY" m="MAY" n="21" c='rgb(251,41,57)'/>
          </Grid.Column>
          <Grid.Column style= { { backgroundColor: 'rgb(36,36,36)' } }>
            <Day d="WEDNESDAY" m="MAY" n="22" c='rgb(248,41,82)'/>
          </Grid.Column>
        </Grid>
    );
  }
}

function Day(props) {
  return (
      <div>
        <p style = { { color: 'white', marginBottom: '-5px' } }>{props.d}</p>
        <p style = { { color: 'white', fontWeight: 'bold', fontSize: '24px', marginBottom: '-15px' } }> {props.m}</p>
        <p style = { { color: props.c, fontWeight: 'bold', fontSize: '42px' } }>{props.n}</p>
      </div>
  );
}
