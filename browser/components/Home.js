import React from 'react';
import { Link, history } from 'react-router';
import Search from './search';

export default class Home extends React.Component {


  render() {
    return (
      <div id= 'home'>
        <div id ='definition'>
        <h2> brunch </h2>
        <p><span>/brən(t)SH/</span></p>
        <i> noun </i>
        <p> a late morning meal eaten instead of breakfast and lunch. </p>
        </div>
        <div id= 'search'>
          <Search />
        </div>
      </div>
    )
  }
}
